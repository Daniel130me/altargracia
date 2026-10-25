#!/bin/bash
# Image search via stdout capture (the -o flag proved unreliable)
cd /home/z/my-project/scripts

run_search() {
  local file="$1"; local query="$2"
  for attempt in 1 2 3; do
    if z-ai image-search -q "$query" -c 6 --gl us --no-rank > "$file" 2>"$file.err"; then
      if python3 -c "import json;d=json.load(open('$file'));assert d.get('success')" 2>/dev/null; then
        echo "$file: OK (attempt $attempt)"
        return 0
      fi
    fi
    echo "$file: attempt $attempt failed: $(tail -1 "$file.err" 2>/dev/null | head -c 120)"
    sleep 15
  done
  echo "$file: FAILED after 3 attempts"
  return 1
}

FAIL=0
run_search img-hero.json     "african business team collaborating with laptops in a modern office" || FAIL=1
sleep 8
run_search img-intro.json    "confident african businesswoman working on laptop in bright office" || FAIL=1
sleep 8
run_search img-process.json  "african it consultant advising a client in front of a computer" || FAIL=1
sleep 8
run_search img-products.json "african man using a desktop computer in a technology store" || FAIL=1

echo "--- summary ---"
for f in img-hero.json img-intro.json img-process.json img-products.json; do
  [ -f "$f" ] && python3 -c "import json;d=json.load(open('$f'));print('$f success:', d.get('success'), 'count:', d.get('count'))" 2>/dev/null
done
exit $FAIL
