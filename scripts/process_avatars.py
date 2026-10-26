#!/usr/bin/env python3
"""Crop + resize the three vetted portraits into square testimonial avatars.

Sources (visually vetted, watermark-free):
  wc6.jpg  - man in navy suit at office desk   (corporate, Lagos logistics)
  ed2.webp - woman teacher in classroom        (school administrator, Kaduna)
  wc3.jpg  - two women with laptops            (right woman = startup founder)

Output: /home/z/my-project/public/images/testimonial-*.jpg (400x400, q86)
Boxes are in ratios of the ORIGINAL image; tweak and re-run as needed.
"""
from PIL import Image
import os

SRC = "/home/z/my-project/scripts/imgsearch/cand"
OUT = "/home/z/my-project/public/images"
os.makedirs(OUT, exist_ok=True)

# (file, out-name, center_x_ratio, center_y_ratio, side_ratio)
JOBS = [
    ("wc6.jpg",  "testimonial-emeka.jpg",    0.462, 0.325, 0.37),
    ("ed2.webp", "testimonial-aisha.jpg",    0.677, 0.310, 0.50),
    ("wc3.jpg",  "testimonial-tomilola.jpg", 0.717, 0.437, 0.33),
]

for fname, outname, cx, cy, side_r in JOBS:
    im = Image.open(os.path.join(SRC, fname)).convert("RGB")
    W, H = im.size
    side = int(min(W, H) * side_r)
    # ensure side is not wider than limits
    side = min(side, W, H)
    left = int(cx * W - side / 2)
    top = int(cy * H - side / 2)
    # clamp into bounds
    left = max(0, min(left, W - side))
    top = max(0, min(top, H - side))
    box = (left, top, left + side, top + side)
    crop = im.crop(box).resize((400, 400), Image.LANCZOS)
    out = os.path.join(OUT, outname)
    crop.save(out, "JPEG", quality=86, progressive=True, optimize=True)
    print(f"{outname}: src={W}x{H} box={box} -> 400x400, {os.path.getsize(out)//1024}KB")
