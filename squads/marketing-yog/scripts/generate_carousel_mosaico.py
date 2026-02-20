#!/usr/bin/env python3
"""
Generate 1080x1350 carousel slides in a collage/editorial style inspired by the
reference visuals (paper background, subtle grid, bold condensed typography,
red accents, monochrome cutout elements).
"""

from __future__ import annotations

import argparse
import json
import os
import random
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps

WIDTH = 1080
HEIGHT = 1350

COLORS = {
    "paper": (244, 237, 226),
    "paper_top": (250, 246, 238),
    "grid": (216, 206, 190),
    "ink": (32, 28, 24),
    "accent": (189, 90, 62),
    "accent_dark": (149, 67, 46),
    "blue": (66, 88, 112),
    "white": (250, 250, 250),
}


@dataclass
class Fonts:
    title: ImageFont.FreeTypeFont | ImageFont.ImageFont
    accent: ImageFont.FreeTypeFont | ImageFont.ImageFont
    body: ImageFont.FreeTypeFont | ImageFont.ImageFont
    brand: ImageFont.FreeTypeFont | ImageFont.ImageFont


def load_font(paths: list[str], size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for font_path in paths:
        try:
            return ImageFont.truetype(font_path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def get_fonts(custom: dict[str, str] | None = None) -> Fonts:
    custom = custom or {}
    condensed_candidates = [
        custom.get("title", ""),
        custom.get("accent", ""),
        custom.get("brand", ""),
        "C:/Windows/Fonts/GILLUBCD.TTF",
        "C:/Windows/Fonts/bahnschrift.ttf",
        "C:/Windows/Fonts/ARIALNB.TTF",
    ]
    sans_candidates = [
        custom.get("body", ""),
        "C:/Windows/Fonts/BOOKOS.TTF",
        "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/segoeui.ttf",
    ]
    return Fonts(
        title=load_font(condensed_candidates, 98),
        accent=load_font(condensed_candidates, 66),
        body=load_font(sans_candidates, 52),
        brand=load_font(condensed_candidates, 58),
    )


def read_json(path: str) -> dict[str, Any]:
    with open(path, "r", encoding="utf-8") as fh:
        return json.load(fh)


def paper_background() -> Image.Image:
    base = Image.new("RGB", (WIDTH, HEIGHT), COLORS["paper"])
    overlay = Image.new("RGB", (WIDTH, HEIGHT), COLORS["paper_top"])
    grad = Image.new("L", (1, HEIGHT))
    for y in range(HEIGHT):
        grad.putpixel((0, y), int(255 * (1.0 - 0.35 * (y / HEIGHT))))
    grad = grad.resize((WIDTH, HEIGHT))
    base = Image.composite(overlay, base, grad)

    noise = Image.effect_noise((WIDTH, HEIGHT), 7).convert("L")
    noise = ImageEnhance.Contrast(noise).enhance(0.55)
    noise_rgb = Image.merge("RGB", (noise, noise, noise))
    textured = ImageChops.overlay(base, noise_rgb)
    out = Image.blend(base, textured, 0.12).convert("RGBA")

    # Bright retro finish (no dark mood).
    warm_glow = Image.new("RGBA", (WIDTH, HEIGHT), (255, 250, 240, 36))
    out = Image.alpha_composite(out, warm_glow)
    return out


def draw_grid(draw: ImageDraw.ImageDraw) -> None:
    x0, y0, x1, y1 = 95, 245, WIDTH - 95, HEIGHT - 120
    step = 68
    for x in range(x0, x1 + 1, step):
        draw.line((x, y0, x, y1), fill=COLORS["grid"], width=2)
    for y in range(y0, y1 + 1, step):
        draw.line((x0, y, x1, y), fill=COLORS["grid"], width=2)


def draw_brand(draw: ImageDraw.ImageDraw, brand: str, fonts: Fonts) -> None:
    font = fonts.brand
    text = brand.upper()
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    draw.text((WIDTH - 95 - tw, 80), text, fill=COLORS["ink"], font=font)


def draw_wrapped(
    draw: ImageDraw.ImageDraw,
    text: str,
    x: int,
    y: int,
    max_width: int,
    font: ImageFont.FreeTypeFont | ImageFont.ImageFont,
    fill: tuple[int, int, int],
    line_spacing: float = 1.03,
) -> int:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        bbox = draw.textbbox((0, 0), trial, font=font)
        if bbox[2] - bbox[0] <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)

    top = y
    for line in lines:
        draw.text((x, y), line, font=font, fill=fill)
        bbox = draw.textbbox((0, 0), line, font=font)
        h = bbox[3] - bbox[1]
        y += int(h * line_spacing)
    return y - top


def halftone_cutout(image_path: str, size: tuple[int, int]) -> Image.Image:
    img = Image.open(image_path).convert("L")
    img = ImageOps.fit(img, size, method=Image.Resampling.LANCZOS)
    img = ImageEnhance.Contrast(img).enhance(1.45)
    img = ImageOps.posterize(img.convert("RGB"), 3).convert("L")

    pattern = Image.new("L", size, 255)
    dot = ImageDraw.Draw(pattern)
    spacing = 6
    r = 2
    for y in range(0, size[1], spacing):
        for x in range(0, size[0], spacing):
            tone = img.getpixel((x, y))
            if tone < 190:
                dot.ellipse((x - r, y - r, x + r, y + r), fill=0)

    halftone = Image.merge("RGB", (pattern, pattern, pattern))
    alpha = img.point(lambda v: 0 if v > 248 else 255)
    halftone.putalpha(alpha)

    # White stroke around cutout.
    stroke = alpha.filter(ImageFilter.MaxFilter(9))
    stroke_img = Image.new("RGBA", size, COLORS["white"] + (0,))
    stroke_img.putalpha(stroke)
    stroke_img.alpha_composite(halftone)
    return stroke_img


def draw_arrow_doodle(draw: ImageDraw.ImageDraw, x: int, y: int) -> None:
    color = COLORS["accent_dark"]
    draw.arc((x, y, x + 34, y + 18), start=10, end=170, fill=color, width=4)
    draw.line((x + 30, y + 10, x + 48, y + 6), fill=color, width=4)
    draw.line((x + 31, y + 10, x + 43, y + 20), fill=color, width=4)


def render_slide(
    spec: dict[str, Any],
    brand: str,
    idx: int,
    total: int,
    output_path: Path,
    fonts: Fonts,
) -> None:
    img = paper_background()
    draw = ImageDraw.Draw(img)

    draw_grid(draw)
    draw_brand(draw, brand, fonts)

    title = str(spec.get("title", "")).strip()
    accent = str(spec.get("accent", "")).strip()
    body = str(spec.get("body", "")).strip()

    title_x = int(spec.get("title_x", 95))
    title_y = int(spec.get("title_y", 315))
    title_w = int(spec.get("title_w", WIDTH - 190))
    accent_x = int(spec.get("accent_x", 95))
    accent_y = int(spec.get("accent_y", 800))
    body_x = int(spec.get("body_x", 95))
    body_y = int(spec.get("body_y", 935))

    if title:
        draw_wrapped(draw, title, title_x, title_y, title_w, fonts.title, COLORS["ink"])
    if accent:
        draw_wrapped(draw, accent, accent_x, accent_y, title_w, fonts.accent, COLORS["accent"])
    if body:
        draw_wrapped(draw, body, body_x, body_y, title_w, fonts.body, COLORS["ink"])

    elements = spec.get("elements", [])
    for elem in elements:
        kind = elem.get("type", "cutout")
        if kind == "cutout":
            path = elem.get("path")
            if not path or not os.path.exists(path):
                continue
            w = int(elem.get("w", 320))
            h = int(elem.get("h", 220))
            x = int(elem.get("x", 100))
            y = int(elem.get("y", 1000))
            cutout = halftone_cutout(path, (w, h))
            img.alpha_composite(cutout, (x, y))
        elif kind == "blob":
            x = int(elem.get("x", 150))
            y = int(elem.get("y", 170))
            w = int(elem.get("w", 230))
            h = int(elem.get("h", 180))
            draw.ellipse((x, y, x + w, y + h), fill=COLORS["accent"])
        elif kind == "drop":
            x = int(elem.get("x", 250))
            y = int(elem.get("y", 200))
            w = int(elem.get("w", 45))
            h = int(elem.get("h", 64))
            poly = [(x + w // 2, y), (x + w, y + h // 2), (x + w // 2, y + h), (x, y + h // 2)]
            draw.polygon(poly, fill=COLORS["blue"])
        elif kind == "arrow":
            x = int(elem.get("x", WIDTH - 165))
            y = int(elem.get("y", HEIGHT - 130))
            draw_arrow_doodle(draw, x, y)

    # Tiny pagination dots
    dots = total
    start = WIDTH // 2 - (dots * 12) // 2
    for i in range(dots):
        c = COLORS["white"] if i + 1 == idx else (220, 220, 220)
        draw.ellipse((start + i * 12, HEIGHT - 32, start + i * 12 + 6, HEIGHT - 26), fill=c)

    img.save(output_path, "PNG")


def default_spec() -> dict[str, Any]:
    return {
        "brand": "YOGA GABY",
        "fonts": {},
        "slides": [
            {
                "title": "respira. observa. sente.",
                "accent": "na prática, o mais importante é presença",
                "body": "hoje você não precisa fazer perfeito. só precisa estar aqui.",
                "elements": [],
            },
            {
                "title": "olhar para dentro é difícil.",
                "accent": "mas é assim que a prática começa.",
                "elements": [],
            },
            {
                "title": "sem apego ao certo ou errado.",
                "accent": "movimenta dentro da possibilidade de hoje.",
                "elements": [],
            },
            {
                "title": "mais interno do que externo.",
                "body": "a gente trabalha isso através do corpo.",
            },
            {
                "title": "vai ser desconfortável mesmo, e tudo bem.",
                "elements": [],
            },
            {
                "title": "devagar vai voltando.",
                "accent": "no seu tempo.",
                "body": "se isso te ajudou, salva para praticar de novo depois.",
            },
        ],
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate carousel slides in Mosaico style.")
    parser.add_argument(
        "--spec",
        help="Path to JSON spec file. If omitted, uses internal demo spec.",
    )
    parser.add_argument(
        "--output",
        default="squads/marketing-yog/assets/carousels/mosaico-output",
        help="Output directory for generated PNG files.",
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=42,
        help="Random seed used for subtle texture effects.",
    )
    args = parser.parse_args()

    random.seed(args.seed)
    spec = read_json(args.spec) if args.spec else default_spec()
    brand = str(spec.get("brand", "MOSAICO"))
    fonts = get_fonts(spec.get("fonts", {}))
    slides = spec.get("slides", [])
    if not isinstance(slides, list) or not slides:
        raise ValueError("Spec must include a non-empty 'slides' list.")

    out = Path(args.output)
    out.mkdir(parents=True, exist_ok=True)

    total = len(slides)
    for i, slide in enumerate(slides, start=1):
        output_path = out / f"{i:02d}.png"
        render_slide(slide, brand, i, total, output_path, fonts)
        print(f"OK {output_path}")

    print(f"\nDone. {total} slides generated at: {out}")


if __name__ == "__main__":
    main()
