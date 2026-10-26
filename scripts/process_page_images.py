#!/usr/bin/env python3
"""Process the three new inner-page photos into public/images.

training     - tr7.jpg (real photo, 2560x1706) crop 16/11 avoiding right-side ICDL banners
procurement  - gen-procurement.png (1344x768) center-crop to 16/11
marketing    - gen-marketing.png   (1344x768) center-crop to 16/11
Output: ~1400px wide progressive JPEGs (hero frame shows ~576px wide @2x).
"""
from PIL import Image
import os

SRC = "/home/z/my-project/scripts/imgsearch"
OUT = "/home/z/my-project/public/images"

def crop_16_11(im, box=None):
    W, H = im.size
    if box is None:
        # center crop to 16/11
        w = min(W, int(H * 16 / 11))
        left = (W - w) // 2
        box = (left, 0, left + w, min(H, int(w * 11 / 16)))
    else:
        # snap box to 16/11: adjust height from given width
        x0, y0, x1, y1 = box
        w = x1 - x0
        h = int(w * 11 / 16)
        y1 = min(H, y0 + h)
        y0 = max(0, y1 - h)
        box = (x0, y0, x1, y1)
    return im.crop(box)

JOBS = [
    ("cand/tr7.jpg",             "training-session.jpg",   (0, 80, 1540, 1141)),
    ("gen-procurement.png", "procurement-supply.jpg", None),
    ("gen-marketing.png",   "marketing-team.jpg",     None),
]

for fname, outname, box in JOBS:
    im = Image.open(os.path.join(SRC, fname)).convert("RGB")
    cropped = crop_16_11(im, box)
    w, h = cropped.size
    target_w = 1400
    if w > target_w:
        cropped = cropped.resize((target_w, int(target_w * h / w)), Image.LANCZOS)
    out = os.path.join(OUT, outname)
    cropped.save(out, "JPEG", quality=84, progressive=True, optimize=True)
    print(f"{outname}: {im.size} -> {cropped.size}, {os.path.getsize(out)//1024}KB")
