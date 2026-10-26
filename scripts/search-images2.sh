#!/bin/bash
# Round 2: hero team + products, more specific queries
cd /home/z/my-project/scripts

run_search() {
  local file="$1"; local query="$2"
  for attempt in 1 2 3; do
    if z-ai image-search -q "$query" -c 8 --gl us --no-rank > "$file" 2>"$file.err"; then
      if python3 -c "import json;raw=open('$file').read();d=json.loads(raw[raw.index('{'):]);assert d.get('success') and d.get('count',0)>0" 2>/dev/null; then
        echo "$file: OK (attempt $attempt)"
        return 0
      fi
    fi
    echo "$file: attempt $attempt failed: $(tail -1 "$file.err" 2>/dev/null | head -c 100)"
    sleep 15
  done
  echo "$file: FAILED"
  return 1
}

FAIL=0
run_search img-hero2.json       "group of black african business professionals having a meeting in a modern office" || FAIL=1
sleep 8
run_search img-products2.json   "black african man choosing a laptop in a computer electronics store" || FAIL=1

echo "--- summary ---"
for f in img-hero2.json img-products2.json; do
  [ -f "$f" ] && python3 -c "
import json
raw=open('$f').read()
d=json.loads(raw[raw.index('{')])
print('=== $f ===')
for i,r in enumerate(d['results']):
    print(f'  [{i}] {r[\"source\"][:28]:28s} {r[\"original_width\"]:>7s} x {r[\"original_height\"]:<7s} {r[\"original_url\"]}')" 2>/dev/null
done
exit $FAIL
