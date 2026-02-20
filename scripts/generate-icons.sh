#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$SCRIPT_DIR/.."
SVG="$ROOT/public/favicon.svg"
TMP="/tmp/fk-icon-gen"
mkdir -p "$TMP"

echo "Generating icons from $SVG ..."

# 512px base → sips로 각 사이즈 리사이즈
qlmanage -t -s 512 -o "$TMP" "$SVG" > /dev/null 2>&1
BASE="$TMP/favicon.svg.png"

if [ ! -f "$BASE" ]; then
  echo "ERROR: qlmanage failed"
  exit 1
fi

# favicon.png (32x32)
sips -z 32 32 "$BASE" --out "$ROOT/public/favicon.png" > /dev/null
echo "✓ public/favicon.png (32x32)"

# apple-touch-icon.png (180x180)
sips -z 180 180 "$BASE" --out "$ROOT/public/apple-touch-icon.png" > /dev/null
echo "✓ public/apple-touch-icon.png (180x180)"

mkdir -p "$ROOT/public/icons"

# icon-192x192.png
sips -z 192 192 "$BASE" --out "$ROOT/public/icons/icon-192x192.png" > /dev/null
echo "✓ public/icons/icon-192x192.png (192x192)"

# icon-512x512.png
cp "$BASE" "$ROOT/public/icons/icon-512x512.png"
echo "✓ public/icons/icon-512x512.png (512x512)"

# icon-maskable-512x512.png (same as 512 — background already full-bleed)
cp "$BASE" "$ROOT/public/icons/icon-maskable-512x512.png"
echo "✓ public/icons/icon-maskable-512x512.png (512x512)"

echo ""
echo "All icons generated!"
