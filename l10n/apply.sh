#!/usr/bin/env bash
# HotBrief localization: put the Korean (ko) or US English (en-US) edition in place.
#   l10n/apply.sh ko|en-US              overlay + app and tests patches (+ Korean fonts for share images, ko only)
#   l10n/apply.sh ko|en-US --overlay    overlay only (site/, industry/, .env.example), engine code untouched
#   l10n/apply.sh revert                back to the original AIHOT files
# The overlay copies l10n/<lang>/site/** and l10n/<lang>/industry/** over the files the original author meant to be
# edited (README.en.md "Make it your field"), and l10n/<lang>/env.example over .env.example.
# The patch (l10n/patches/<lang>.patch) translates the Chinese UI left in apps/ and packages/ and moves the site clock
# (ko: Asia/Seoul, en-US: UTC). l10n/patches/<lang>-tests.patch changes the expected values in tests/ to the edition's
# (vocabulary, UI text, clock), so npm test passes on the edition as it does on the original.
# A patch that no longer applies after an upstream update is retried as a 3-way merge against the files it was made from.
# Nothing is committed: run it on a fresh checkout, before building.
set -euo pipefail

root=$(git rev-parse --show-toplevel)
cd "$root"
lang=${1:-}
mode=${2:-}

revert() {
  git checkout HEAD -- site industry .env.example apps packages tests
  rm -f assets/og-fonts/noto-sans-kr-*.otf
  echo "Reverted to the original files."
}

case "$lang" in
  revert) revert; exit 0 ;;
  ko|en-US) ;;
  *) echo "usage: l10n/apply.sh ko|en-US [--overlay] | revert" >&2; exit 2 ;;
esac

if ! git diff --quiet HEAD -- site industry apps packages tests .env.example; then
  echo "site/, industry/, apps/, packages/, tests/ or .env.example has local changes; commit them or run l10n/apply.sh revert first." >&2
  exit 1
fi

src="l10n/$lang"
count=0
while IFS= read -r -d '' f; do
  rel=${f#"$src/"}
  mkdir -p "$(dirname "$rel")"
  cp "$f" "$rel"
  count=$((count + 1))
done < <(find "$src/site" "$src/industry" -type f -print0)
cp "$src/env.example" .env.example
echo "Overlay: $count files from $src, plus .env.example."

if [ "$mode" = "--overlay" ]; then
  exit 0
fi

apply_patch() {
  git apply --whitespace=nowarn "$1" 2>/dev/null || { git apply --3way --whitespace=nowarn "$1" && git reset -q -- apps packages tests; }
  echo "Patch: $1 applied."
}
apply_patch "l10n/patches/$lang.patch"
apply_patch "l10n/patches/$lang-tests.patch"

if [ "$lang" = ko ]; then
  # Share images (satori) need Hangul glyphs; the bundled Noto Sans SC has none. Noto Sans KR, SIL OFL 1.1,
  # pinned to the noto-cjk Sans2.004 release and checked by hash.
  base=https://github.com/notofonts/noto-cjk/raw/Sans2.004/Sans/SubsetOTF/KR
  fetch() {
    local name=$1 out=$2 sum=$3
    if [ ! -f "$out" ]; then curl -fsSL --retry 3 -o "$out.tmp" "$base/$name" && mv "$out.tmp" "$out"; fi
    local got
    got=$( (command -v sha256sum >/dev/null && sha256sum "$out" || shasum -a 256 "$out") | cut -d' ' -f1)
    [ "$got" = "$sum" ] || { rm -f "$out"; echo "hash mismatch: $out" >&2; exit 1; }
  }
  fetch NotoSansKR-Regular.otf assets/og-fonts/noto-sans-kr-400.otf 69975a0ac8472717870aefeab0a4d52739308d90856b9955313b2ad5e0148d68
  fetch NotoSansKR-Bold.otf assets/og-fonts/noto-sans-kr-700.otf 5a6ceb287ed2fc6cfc6213144ebea68cbd94b20fc9eb873d8486493bf02d9bda
  echo "Fonts: Noto Sans KR 400/700 in assets/og-fonts/."
fi

echo "Done. Next: node scripts/init-env.ts --llm-key <key>, then docker compose up -d --build. Undo: l10n/apply.sh revert"
