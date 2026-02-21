#!/usr/bin/env python3
"""
Download and transcribe Instagram reels from the previously collected dataset,
then extract a lightweight script structure (hook, development, CTA).
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any

import requests
import whisper


def read_json(path: Path) -> list[dict[str, Any]]:
    text = path.read_text(encoding="utf-8")
    if text.startswith("\ufeff"):
        text = text[1:]
    data = json.loads(text)
    if isinstance(data, list):
        return data
    return [data]


def is_reel(item: dict[str, Any]) -> bool:
    product = str(item.get("productType", "")).lower()
    typ = str(item.get("type", "")).lower()
    return product == "clips" or typ == "video"


def slug(s: str) -> str:
    return re.sub(r"[^a-zA-Z0-9_-]+", "-", s).strip("-").lower()


def download(url: str, dst: Path) -> bool:
    try:
        if dst.exists() and dst.stat().st_size > 0:
            return True
        with requests.get(url, stream=True, timeout=120) as r:
            r.raise_for_status()
            with dst.open("wb") as fh:
                for chunk in r.iter_content(chunk_size=1024 * 256):
                    if chunk:
                        fh.write(chunk)
        return dst.exists() and dst.stat().st_size > 0
    except Exception:
        return False


def split_sentences(text: str) -> list[str]:
    text = re.sub(r"\s+", " ", text.strip())
    if not text:
        return []
    return [s.strip() for s in re.split(r"(?<=[\.\!\?])\s+", text) if s.strip()]


def extract_cta(text: str, caption: str) -> list[str]:
    merged = f"{text}\n{caption}".lower()
    patterns = [
        r"comenta[^\n\.!?\r]{0,90}",
        r"(chama|manda|me chama)[^\n\.!?\r]{0,90}(direct|dm|inbox)?",
        r"(vai no link|link na bio)[^\n\.!?\r]{0,90}",
        r"salva[^\n\.!?\r]{0,90}",
        r"compartilha[^\n\.!?\r]{0,90}",
    ]
    hits: list[str] = []
    for p in patterns:
        for m in re.finditer(p, merged, re.IGNORECASE):
            val = m.group(0).strip()
            if val and val not in hits:
                hits.append(val)
    return hits[:5]


def build_structure(transcript: str, caption: str) -> dict[str, Any]:
    sentences = split_sentences(transcript)
    hook = sentences[0] if sentences else ""
    development = sentences[1:6] if len(sentences) > 1 else []
    ctas = extract_cta(transcript, caption)
    return {
        "hook": hook,
        "development_points": development,
        "cta_signals": ctas,
    }


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python docs/research/extract_reels_scripts.py <json_path> [limit]")
        return 1

    src = Path(sys.argv[1]).resolve()
    limit = int(sys.argv[2]) if len(sys.argv) > 2 else 50

    if not src.exists():
        print(f"Input file not found: {src}")
        return 1

    items = read_json(src)
    reels = [x for x in items if is_reel(x)][:limit]
    if not reels:
        print("No reels found.")
        return 1

    base_dir = src.parent
    stem = src.stem.replace("-last100", "").replace("-last50", "")
    if not stem:
        stem = "instagram-profile"
    video_dir = base_dir / f"{stem}-reels-videos"
    out_json = base_dir / f"{stem}-reels-transcripts.json"
    out_md = base_dir / f"{stem}-reels-scripts.md"
    video_dir.mkdir(parents=True, exist_ok=True)

    model = whisper.load_model("tiny")
    results: list[dict[str, Any]] = []

    for i, reel in enumerate(reels, start=1):
        short = str(reel.get("shortCode", f"reel-{i}"))
        rid = str(reel.get("id", short))
        url = str(reel.get("videoUrl", "")).strip()
        if not url:
            continue

        filename = f"{i:02d}-{slug(short)}.mp4"
        local = video_dir / filename
        ok = download(url, local)
        if not ok:
            results.append(
                {
                    "index": i,
                    "shortCode": short,
                    "status": "download_failed",
                }
            )
            continue

        try:
            tr = model.transcribe(str(local), language="pt", fp16=False)
            text = (tr.get("text") or "").strip()
        except Exception as e:
            results.append(
                {
                    "index": i,
                    "shortCode": short,
                    "status": "transcription_failed",
                    "error": str(e),
                }
            )
            continue

        caption = str(reel.get("caption", "") or "")
        structure = build_structure(text, caption)
        results.append(
            {
                "index": i,
                "id": rid,
                "shortCode": short,
                "url": reel.get("url"),
                "timestamp": reel.get("timestamp"),
                "likesCount": reel.get("likesCount"),
                "commentsCount": reel.get("commentsCount"),
                "videoViewCount": reel.get("videoViewCount"),
                "videoPlayCount": reel.get("videoPlayCount"),
                "videoDuration": reel.get("videoDuration"),
                "caption": caption,
                "transcript": text,
                "structure": structure,
                "status": "ok",
            }
        )
        print(f"[{i}/{len(reels)}] OK {short}")

    out_json.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")

    ok_items = [x for x in results if x.get("status") == "ok"]
    lines: list[str] = []
    lines.append("# Roteiros Extraídos - Reels @amandallourenco")
    lines.append("")
    lines.append(f"Total processados: {len(results)}")
    lines.append(f"Sucesso: {len(ok_items)}")
    lines.append("")

    for item in ok_items:
        s = item["structure"]
        lines.append(f"## Reel {item['index']:02d} - `{item['shortCode']}`")
        lines.append(f"- URL: {item.get('url','')}")
        lines.append(f"- Duração (s): {item.get('videoDuration')}")
        lines.append(f"- Views: {max(int(item.get('videoViewCount') or 0), int(item.get('videoPlayCount') or 0))}")
        lines.append(f"- Likes: {item.get('likesCount')}")
        lines.append(f"- Comentários: {item.get('commentsCount')}")
        lines.append("- Hook:")
        lines.append(f"  {s.get('hook','')}")
        lines.append("- Desenvolvimento:")
        dev = s.get("development_points") or []
        if dev:
            for d in dev:
                lines.append(f"  - {d}")
        else:
            lines.append("  - (não identificado)")
        lines.append("- CTA:")
        ctas = s.get("cta_signals") or []
        if ctas:
            for c in ctas:
                lines.append(f"  - {c}")
        else:
            lines.append("  - (não identificado)")
        lines.append("")

    out_md.write_text("\n".join(lines), encoding="utf-8")
    print(f"JSON: {out_json}")
    print(f"MD: {out_md}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
