#!/usr/bin/env python3
"""Process sourced photos into web-ready assets for public/images/."""
from PIL import Image
import os

SRC = "/home/z/my-project/scripts/imgcheck"
OUT = "/home/z/my-project/public/images"
os.makedirs(OUT, exist_ok=True)

# (source file, output name, target max width, quality)
JOBS = [
    ("h3-3.jpg",    "hero-team.jpg",          1600, 82),  # hero (replaces old)
    ("intro-a.jpg", "intro-professional.jpg", 1100, 82),  # intro portrait
    ("proc-a.jpg",  "process-consultation.jpg", 1400, 82),  # process section
    ("p3-2.jpg",    "products-service.jpg",    1100, 84),  # products section
]

for src, out, max_w, q in JOBS:
    im = Image.open(os.path.join(SRC, src)).convert("RGB")
    w, h = im.size
    if w > max_w:
        im = im.resize((max_w, round(h * max_w / w)), Image.LANCZOS)
    path = os.path.join(OUT, out)
    im.save(path, "JPEG", quality=q, optimize=True, progressive=True)
    print(f"{src} {w}x{h} -> {out} {im.size[0]}x{im.size[1]} ({os.path.getsize(path)//1024} KB)")
