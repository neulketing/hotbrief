# NOTICE: HotBrief localization layer

HotBrief is a Korean (ko) and US English (en-US) edition of **AIHOT**.

- **Based on AIHOT by 数字生命卡兹克 (Khazix)**: <https://github.com/KKKKhazix/AIHOT>
- AIHOT code: Copyright (c) 2026 数字生命卡兹克, MIT License. The original [`LICENSE`](LICENSE) and [`NOTICE`](NOTICE) are kept unchanged in this repository.
- The name "AIHOT" and the AIHOT logo are not covered by the MIT License (see the original `NOTICE`). This edition does not use them as its name or logo. "AIHOT" appears here only to credit and link the original project.
- The localization layer (`l10n/`, `.github/README.md`, `README.ko.md`, this file) is released under the same MIT License, Copyright (c) 2026 neulketing.

## What this layer changes

No file of the original is modified in this repository's history beyond the upstream commits. Everything below is added next to it and applied on demand with `l10n/apply.sh`:

| Added | What it does |
|---|---|
| `l10n/ko/`, `l10n/en-US/` | Korean and US English versions of the files the original author marks as the place to customize (`site/site.ts`, `site/models.ts`, `site/pages/*.md`, `site/changelog.json`, `site/brand/nameplates/`, `industry/taxonomy.ts`, `industry/topics.json`, `industry/sources.json`, `industry/wording.ts`, all 29 `industry/prompts/*.md`), plus `env.example` |
| `l10n/patches/ko.patch`, `l10n/patches/en-US.patch` | Translate the Chinese UI strings left in `apps/` and `packages/`, run the site clock on Korea time (Asia/Seoul) or UTC instead of Beijing time, count sentences in Korean/English summaries, and load Korean fonts for share images |
| `l10n/apply.sh` | Copies an edition into place and applies its patch; `l10n/apply.sh revert` restores the original files |
| `l10n/tools/` | `nameplates.ts` (report mastheads from Noto Sans KR), `zh-inventory.ts` (lists Chinese text left in the engine code) |
| `l10n/demo/` | Screenshots of the Korean edition running locally |

## China-only dependencies and their replacements

| Original | Replacement in HotBrief |
|---|---|
| WeChat Official Account sources (Dajiala, paid) | Not used. Korean and US sources are public RSS feeds, each fetched successfully on 2026-10-14 |
| Alibaba Cloud DashScope (Bailian) embeddings as the fallback | Any OpenAI-compatible `/embeddings` service: Google Gemini `gemini-embedding-001` (tested) or OpenAI `text-embedding-3-small` |
| Chinese LLM presets (Qwen, GLM, MiMo) as the examples | DeepSeek stays the default; a Google Gemini preset (OpenAI-compatible, tested) is added; OpenAI documented |
| Mainland China deployment notes (npm mirror, ICP filing, egress proxy) | Not needed in Korea or the US; `icp` stays `null` |
| Feishu (Lark) push, alerts and login | Left off; alerts are read from the worker logs |
| Noto Sans SC for share images and report nameplates | Noto Sans KR (SIL OFL 1.1, downloaded by `l10n/apply.sh ko` and checked by hash); nameplates regenerated as SVG paths |
| Beijing time (UTC+8) for publishing times and calendar days | Korea time (UTC+9) in the ko patch, UTC in the en-US patch |
| Tencent COS as the default backup host | Documented: set `DB_BACKUP_STORE_DOMAIN` for AWS S3, Cloudflare R2 and others |

## Third-party material added

- Noto Sans KR (`assets/og-fonts/noto-sans-kr-*.otf`, fetched at apply time; not committed): SIL Open Font License 1.1, from <https://github.com/notofonts/noto-cjk> release Sans2.004.
- The nameplate SVGs in `l10n/*/site/brand/nameplates/` are glyph outlines from Noto Sans KR Black, SIL Open Font License 1.1.
- The demo sources in `l10n/*/industry/sources.json` are public feeds of their publishers. Their content belongs to them; by default the site shows only a summary and a link to the original.
