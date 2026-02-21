#!/usr/bin/env python3
"""
Rank reels for a profile and extract commonalities among top performers.
Usage:
  python docs/research/scripts/rank_reels_profile.py <transcripts_json> <output_md> [top_n]
"""

from __future__ import annotations

import json
import re
import statistics
import sys
from pathlib import Path
from typing import Any


def load_json(path: Path) -> list[dict[str, Any]]:
    text = path.read_text(encoding="utf-8")
    if text.startswith("\ufeff"):
        text = text[1:]
    data = json.loads(text)
    return data if isinstance(data, list) else [data]


def views(item: dict[str, Any]) -> int:
    return max(int(item.get("videoViewCount") or 0), int(item.get("videoPlayCount") or 0))


def hook(item: dict[str, Any]) -> str:
    s = item.get("structure") or {}
    return str(s.get("hook") or "").strip()


def theme_flags(text: str) -> dict[str, bool]:
    t = text.lower()
    return {
        "dor_estresse": any(k in t for k in ["dor", "ansiedad", "estress", "cansad", "sobrecarreg", "exaust"]),
        "respiracao_presenca": any(k in t for k in ["respira", "respiração", "respiracao", "presença", "presenca"]),
        "corpo_postura": any(k in t for k in ["coluna", "lombar", "ombro", "pescoço", "pescoco", "postura", "mobilidade"]),
        "rotina_consistencia": any(k in t for k in ["rotina", "hábito", "habito", "consist"]),
        "oferta_convite": any(k in t for k in ["comenta", "direct", " dm ", "link", "bio", "inscrição", "inscricao", "vaga"]),
    }


def pct(n: int, d: int) -> float:
    return round((n / d) * 100, 1) if d else 0.0


def main() -> int:
    if len(sys.argv) < 3:
        print("Usage: python rank_reels_profile.py <transcripts_json> <output_md> [top_n]")
        return 1

    src = Path(sys.argv[1]).resolve()
    out_md = Path(sys.argv[2]).resolve()
    top_n = int(sys.argv[3]) if len(sys.argv) > 3 else 20

    data = load_json(src)
    ok = [x for x in data if x.get("status") == "ok"]
    if not ok:
        print("No successful reels found.")
        return 1

    for x in ok:
        x["_views"] = views(x)
        x["_likes"] = int(x.get("likesCount") or 0)
        x["_comments"] = int(x.get("commentsCount") or 0)
        x["_dur"] = float(x.get("videoDuration") or 0.0)
        h = hook(x)
        x["_hook"] = h
        x["_hook_words"] = len(re.findall(r"\w+", h.lower()))
        x["_hook_q"] = "?" in h
        x["_hook_num"] = bool(re.search(r"\b\d+\b", h))
        merged = f"{x.get('caption','')}\n{x.get('transcript','')}"
        x["_themes"] = theme_flags(merged)

    ranked = sorted(ok, key=lambda i: (i["_views"], i["_comments"], i["_likes"]), reverse=True)
    top = ranked[: min(top_n, len(ranked))]

    all_hooks = [x["_hook_words"] for x in ok if x["_hook_words"] > 0]
    top_hooks = [x["_hook_words"] for x in top if x["_hook_words"] > 0]
    all_dur = [x["_dur"] for x in ok if x["_dur"] > 0]
    top_dur = [x["_dur"] for x in top if x["_dur"] > 0]

    theme_keys = list(ok[0]["_themes"].keys())
    all_theme = {k: pct(sum(1 for x in ok if x["_themes"].get(k)), len(ok)) for k in theme_keys}
    top_theme = {k: pct(sum(1 for x in top if x["_themes"].get(k)), len(top)) for k in theme_keys}

    lines: list[str] = []
    lines.append(f"# Ranking Estratégico de Reels - {src.stem}")
    lines.append("")
    lines.append("## Resumo")
    lines.append(f"- Reels válidos analisados: {len(ok)}")
    lines.append(f"- Top analisado: {len(top)}")
    lines.append(f"- Views medianas (geral): {int(statistics.median([x['_views'] for x in ok]))}")
    lines.append(f"- Views medianas (top): {int(statistics.median([x['_views'] for x in top]))}")
    lines.append("")
    lines.append("## O que os melhores vídeos têm em comum")
    lines.append(f"- Hook mais curto no top: média {round(statistics.mean(top_hooks),1) if top_hooks else 0} palavras vs {round(statistics.mean(all_hooks),1) if all_hooks else 0} no geral.")
    lines.append(f"- Duração média top: {round(statistics.mean(top_dur),1) if top_dur else 0}s vs {round(statistics.mean(all_dur),1) if all_dur else 0}s no geral.")
    lines.append(f"- Hook com número no top: {pct(sum(1 for x in top if x['_hook_num']), len(top))}%")
    lines.append(f"- Hook em pergunta no top: {pct(sum(1 for x in top if x['_hook_q']), len(top))}%")
    lines.append("- Temas (top vs geral):")
    for k in theme_keys:
        lines.append(f"  - {k}: {top_theme[k]}% vs {all_theme[k]}%")
    lines.append("")
    lines.append("## Top vídeos (ranking)")
    for i, x in enumerate(top, start=1):
        lines.append(f"{i}. `{x.get('shortCode','')}` | views={x['_views']} | likes={x['_likes']} | comments={x['_comments']} | dur={round(x['_dur'],1)}s")
        lines.append(f"   hook: {x['_hook']}")
        lines.append(f"   url: {x.get('url','')}")
    lines.append("")
    lines.append("## Implicações estratégicas")
    lines.append("1. Priorizar hooks curtos e com tensão real nos primeiros 3s.")
    lines.append("2. Manter narrativa prática (dor -> reframe -> ação -> convite).")
    lines.append("3. Usar CTA conversacional quando houver entrega clara.")
    lines.append("4. Reforçar temas de maior tração do perfil.")

    out_md.parent.mkdir(parents=True, exist_ok=True)
    out_md.write_text("\n".join(lines), encoding="utf-8")

    out_json = out_md.with_suffix(".json")
    out_json.write_text(
        json.dumps(
            {
                "total_ok": len(ok),
                "top_n": len(top),
                "all_theme_pct": all_theme,
                "top_theme_pct": top_theme,
                "top_items": [
                    {
                        "rank": i + 1,
                        "shortCode": x.get("shortCode"),
                        "url": x.get("url"),
                        "views": x["_views"],
                        "likes": x["_likes"],
                        "comments": x["_comments"],
                        "duration_sec": round(x["_dur"], 1),
                        "hook": x["_hook"],
                    }
                    for i, x in enumerate(top)
                ],
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )

    print(f"SAVED_MD:{out_md}")
    print(f"SAVED_JSON:{out_json}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
