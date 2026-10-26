#!/bin/bash
# Round 3: alternative phrasings for hero + products
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
    echo "$file: attempt $attempt failed"
    sleep 15
  done
  return 1
}

FAIL=0
run_search img-hero3.json       "nigerian tech startup team working together with laptops in their office" || FAIL=1
sleep 8
run_search img-products3.json   "black african technician fixing a laptop computer at a repair workshop" || FAIL=1

echo "--- summary ---"
python3 << 'EOF'
import json
for name in ['img-hero3', 'img-products3']:
    try:
        raw = open(f'/home/z/my-project/scripts/{name}.json').read()
        d = json.loads(raw[raw.index('{')])
        print(f'=== {name} ({d["count"]}) ===')
        for i, r in enumerate(d['results']):
            print(f'  [{i}] {r["source"][:30]:30s} {r["original_width"]:>7s} x {r["original_height"]:<7s} {r["original_url"]}')
    except Exception as e:
        print(f'=== {name} ERROR: {e} ===')
EOF
exit $FAIL
