#!/usr/bin/env python3
"""Crop the hero source to EXACTLY the hero frame ratio (~0.844)."""
from PIL import Image
import os

SRC = "/home/z/my-project/scripts/imgcheck/h3-3.jpg"
OUT = "/home/z/my-project/public/images/hero-team-focus.jpg"

im = Image.open(SRC).convert("RGB")
w, h = im.size  # 2022 x 1190
RATIO = 405 / 480  # hero frame w/h at lg
top = 120          # trim ceiling
crop_h = h - top
crop_w = round(crop_h * RATIO)  # ~903
left = 774  # centred on the subject (x ~950-1500)
box = (left, top, left + crop_w, h)
im2 = im.crop(box)
im2 = im2.resize((950, round(im2.size[1] * 950 / im2.size[0])), Image.LANCZOS)
im2.save(OUT, "JPEG", quality=84, optimize=True, progressive=True)
print(f"cropped {box} ratio={crop_w/(h-top):.3f} -> {im2.size[0]}x{im2.size[1]}, {os.path.getsize(OUT)//1024} KB")
