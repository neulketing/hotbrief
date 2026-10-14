# Chinese text left in the engine code

Generated with `node l10n/tools/zh-inventory.ts <original> <ko> <en-US>` on 2026-10-14. Columns: `AIHOT` = the original checkout, `ui-ko` = with `l10n/patches/ko.patch` applied, `ui-en-US` = with `l10n/patches/en-US.patch` applied. Comments are not counted; tests are excluded.

What is left on purpose:

- **model input**: labels such as `【来源】`, `【正文】` that the code puts into the model's input. The prompts were tuned on them, and the translated prompts refer to them by these exact literals, so they stay.
- **owner alerts (Feishu)**: operations alerts and the Feishu bot (`packages/backend/src/operations`, `notify`). They only reach the site owner through Feishu, which a Korean or US deployment leaves off; the worker log shows them.
- **data keys**: values stored in the database or compared in code (changelog kinds `更新/优化/公告/下线`, report roles `官方/媒体`, policy-page markers). Their display goes through a translated label.
- **other backend**: admin sign-in errors for Feishu login, source-config error messages, model step names in `editorial/`.

| Area | AIHOT | ui-ko | ui-en-US |
|---|---:|---:|---:|
| admin UI | 547 | 27 | 27 |
| other backend | 43 | 18 | 18 |
| reader UI | 726 | 15 | 13 |
| model input (kept: prompts are tuned on it) | 104 | 100 | 103 |
| owner alerts (Feishu) | 128 | 128 | 128 |
| public output (RSS, llms.txt, agent, reports) | 197 | 5 | 6 |
| **total** | 1745 | 293 | 295 |

| File | Area | AIHOT | ui-ko | ui-en-US |
|---|---|---:|---:|---:|
| `apps/api/src/routes/admin-auth.ts` | admin UI | 3 | 0 | 0 |
| `apps/api/src/routes/agent.ts` | other backend | 7 | 0 | 0 |
| `apps/api/src/routes/feedback.ts` | other backend | 4 | 0 | 0 |
| `apps/api/src/routes/mcp.ts` | other backend | 10 | 0 | 0 |
| `apps/api/src/routes/og.ts` | reader UI | 7 | 0 | 0 |
| `apps/web/app/components/shell/Chrome.tsx` | reader UI | 1 | 0 | 0 |
| `apps/web/app/components/shell/PhoneBar.tsx` | reader UI | 1 | 0 | 0 |
| `apps/web/app/components/shell/Sidebar.tsx` | reader UI | 4 | 0 | 0 |
| `apps/web/app/components/shell/TabBar.tsx` | reader UI | 2 | 0 | 0 |
| `apps/web/app/components/shell/ThemeSwitch.tsx` | reader UI | 4 | 0 | 0 |
| `apps/web/app/components/shell/nav.ts` | reader UI | 16 | 0 | 0 |
| `apps/web/app/components/ui/Badge.tsx` | reader UI | 2 | 0 | 0 |
| `apps/web/app/components/ui/Lightbox.tsx` | reader UI | 4 | 0 | 0 |
| `apps/web/app/components/ui/OutlineSheet.tsx` | reader UI | 2 | 0 | 0 |
| `apps/web/app/components/ui/Score.tsx` | reader UI | 3 | 0 | 0 |
| `apps/web/app/components/ui/Sheet.tsx` | reader UI | 2 | 0 | 0 |
| `apps/web/app/features/about/SignalRiver.tsx` | reader UI | 7 | 0 | 0 |
| `apps/web/app/features/admin/action.ts` | admin UI | 2 | 0 | 0 |
| `apps/web/app/features/admin/format.ts` | admin UI | 6 | 0 | 0 |
| `apps/web/app/features/admin/labels.ts` | admin UI | 6 | 0 | 0 |
| `apps/web/app/features/admin/ui.tsx` | admin UI | 9 | 0 | 0 |
| `apps/web/app/features/agent/CodeBlock.tsx` | reader UI | 3 | 0 | 0 |
| `apps/web/app/features/agent/panels.tsx` | reader UI | 92 | 0 | 0 |
| `apps/web/app/features/agent/parts.tsx` | reader UI | 1 | 0 | 0 |
| `apps/web/app/features/changelog/text.tsx` | reader UI | 1 | 0 | 0 |
| `apps/web/app/features/copy/CopyPage.tsx` | reader UI | 5 | 2 | 1 |
| `apps/web/app/features/feed/DayList.tsx` | reader UI | 3 | 0 | 0 |
| `apps/web/app/features/feed/FeedItem.tsx` | reader UI | 2 | 0 | 0 |
| `apps/web/app/features/feed/Filters.tsx` | reader UI | 15 | 0 | 0 |
| `apps/web/app/features/feed/HotTopics.tsx` | reader UI | 8 | 0 | 0 |
| `apps/web/app/features/feed/ReadingGroup.tsx` | reader UI | 5 | 0 | 0 |
| `apps/web/app/features/feed/Timeline.tsx` | reader UI | 13 | 0 | 0 |
| `apps/web/app/features/feed/parts.tsx` | reader UI | 3 | 0 | 0 |
| `apps/web/app/features/hot/Delta.tsx` | reader UI | 4 | 0 | 0 |
| `apps/web/app/features/hot/Faces.tsx` | reader UI | 5 | 0 | 0 |
| `apps/web/app/features/hot/Sparkline.tsx` | reader UI | 1 | 0 | 0 |
| `apps/web/app/features/item/ArticleBody.tsx` | reader UI | 6 | 0 | 0 |
| `apps/web/app/features/item/MediaGallery.tsx` | reader UI | 2 | 0 | 0 |
| `apps/web/app/features/item/PosterSheet.tsx` | reader UI | 6 | 0 | 0 |
| `apps/web/app/features/item/QuotedPost.tsx` | reader UI | 3 | 0 | 0 |
| `apps/web/app/features/item/ReaderTools.tsx` | reader UI | 5 | 0 | 0 |
| `apps/web/app/features/item/StoryFollowups.tsx` | reader UI | 4 | 0 | 0 |
| `apps/web/app/features/item/highlight.ts` | reader UI | 1 | 0 | 0 |
| `apps/web/app/features/report/ReportLayout.tsx` | reader UI | 2 | 0 | 0 |
| `apps/web/app/features/report/ReportNav.tsx` | reader UI | 7 | 0 | 0 |
| `apps/web/app/features/report/ReportPaper.tsx` | reader UI | 31 | 0 | 0 |
| `apps/web/app/features/report/format.ts` | reader UI | 29 | 0 | 0 |
| `apps/web/app/features/search/SearchOverlay.tsx` | reader UI | 10 | 0 | 0 |
| `apps/web/app/features/story/HeatChart.tsx` | reader UI | 12 | 0 | 0 |
| `apps/web/app/lib/format.ts` | reader UI | 6 | 0 | 0 |
| `apps/web/app/lib/local-state.ts` | reader UI | 5 | 0 | 0 |
| `apps/web/app/lib/markdown.ts` | reader UI | 3 | 4 | 3 |
| `apps/web/app/lib/seo.ts` | reader UI | 10 | 0 | 0 |
| `apps/web/app/lib/site-copy.ts` | reader UI | 2 | 2 | 2 |
| `apps/web/app/root.tsx` | reader UI | 8 | 0 | 0 |
| `apps/web/app/routes/about.tsx` | reader UI | 34 | 0 | 0 |
| `apps/web/app/routes/admin-login.tsx` | admin UI | 9 | 0 | 0 |
| `apps/web/app/routes/admin/audit.tsx` | admin UI | 11 | 0 | 0 |
| `apps/web/app/routes/admin/content-item.tsx` | admin UI | 116 | 0 | 0 |
| `apps/web/app/routes/admin/content.tsx` | admin UI | 13 | 0 | 0 |
| `apps/web/app/routes/admin/feedback.tsx` | admin UI | 29 | 0 | 0 |
| `apps/web/app/routes/admin/layout.tsx` | admin UI | 15 | 0 | 0 |
| `apps/web/app/routes/admin/models.tsx` | admin UI | 38 | 0 | 0 |
| `apps/web/app/routes/admin/runs.tsx` | admin UI | 95 | 0 | 0 |
| `apps/web/app/routes/admin/selectbench-run.tsx` | admin UI | 26 | 0 | 0 |
| `apps/web/app/routes/admin/selectbench.tsx` | admin UI | 11 | 0 | 0 |
| `apps/web/app/routes/admin/settings.tsx` | admin UI | 29 | 0 | 0 |
| `apps/web/app/routes/admin/source-new.tsx` | admin UI | 22 | 0 | 0 |
| `apps/web/app/routes/admin/source.tsx` | admin UI | 58 | 0 | 0 |
| `apps/web/app/routes/admin/sources.tsx` | admin UI | 22 | 0 | 0 |
| `apps/web/app/routes/agent.tsx` | reader UI | 25 | 0 | 0 |
| `apps/web/app/routes/all.tsx` | reader UI | 13 | 0 | 0 |
| `apps/web/app/routes/changelog.tsx` | reader UI | 18 | 5 | 5 |
| `apps/web/app/routes/daily-archive.tsx` | reader UI | 8 | 0 | 0 |
| `apps/web/app/routes/feedback.tsx` | reader UI | 27 | 0 | 0 |
| `apps/web/app/routes/home.tsx` | reader UI | 3 | 0 | 0 |
| `apps/web/app/routes/hot.tsx` | reader UI | 38 | 0 | 0 |
| `apps/web/app/routes/item.tsx` | reader UI | 48 | 0 | 0 |
| `apps/web/app/routes/more.tsx` | reader UI | 20 | 0 | 0 |
| `apps/web/app/routes/privacy.tsx` | reader UI | 2 | 1 | 1 |
| `apps/web/app/routes/report-detail.tsx` | reader UI | 3 | 0 | 0 |
| `apps/web/app/routes/report-latest.tsx` | reader UI | 2 | 0 | 0 |
| `apps/web/app/routes/search-busy.tsx` | reader UI | 8 | 0 | 0 |
| `apps/web/app/routes/starred.tsx` | reader UI | 22 | 0 | 0 |
| `apps/web/app/routes/story.tsx` | reader UI | 58 | 0 | 0 |
| `apps/web/app/routes/terms.tsx` | reader UI | 3 | 1 | 1 |
| `apps/web/app/routes/topic.tsx` | reader UI | 16 | 0 | 0 |
| `apps/web/app/routes/topics.tsx` | reader UI | 10 | 0 | 0 |
| `packages/backend/src/admin/auth.ts` | admin UI | 5 | 5 | 5 |
| `packages/backend/src/admin/content.ts` | admin UI | 9 | 9 | 9 |
| `packages/backend/src/admin/feedback.ts` | admin UI | 2 | 2 | 2 |
| `packages/backend/src/admin/settings.ts` | admin UI | 3 | 3 | 3 |
| `packages/backend/src/admin/sources.ts` | admin UI | 8 | 8 | 8 |
| `packages/backend/src/content/provenance.ts` | other backend | 1 | 1 | 1 |
| `packages/backend/src/content/sanitize.ts` | other backend | 1 | 1 | 1 |
| `packages/backend/src/editorial/analyze.ts` | model input (kept: prompts are tuned on it) | 9 | 9 | 9 |
| `packages/backend/src/editorial/input.ts` | model input (kept: prompts are tuned on it) | 15 | 15 | 15 |
| `packages/backend/src/editorial/models.ts` | model input (kept: prompts are tuned on it) | 11 | 11 | 11 |
| `packages/backend/src/editorial/translate.ts` | model input (kept: prompts are tuned on it) | 2 | 0 | 2 |
| `packages/backend/src/editorial/wording.ts` | model input (kept: prompts are tuned on it) | 2 | 2 | 2 |
| `packages/backend/src/editorial/writing.ts` | model input (kept: prompts are tuned on it) | 30 | 28 | 29 |
| `packages/backend/src/events/consolidate.ts` | model input (kept: prompts are tuned on it) | 1 | 1 | 1 |
| `packages/backend/src/events/corrections.ts` | model input (kept: prompts are tuned on it) | 3 | 3 | 3 |
| `packages/backend/src/events/digest.ts` | model input (kept: prompts are tuned on it) | 3 | 3 | 3 |
| `packages/backend/src/events/group.ts` | model input (kept: prompts are tuned on it) | 12 | 12 | 12 |
| `packages/backend/src/events/relate.ts` | model input (kept: prompts are tuned on it) | 16 | 16 | 16 |
| `packages/backend/src/lib/text.ts` | other backend | 1 | 1 | 1 |
| `packages/backend/src/media/poster.ts` | other backend | 4 | 4 | 4 |
| `packages/backend/src/media/upstream.ts` | other backend | 2 | 2 | 2 |
| `packages/backend/src/notify/deliver.ts` | owner alerts (Feishu) | 13 | 13 | 13 |
| `packages/backend/src/notify/feishu.ts` | owner alerts (Feishu) | 15 | 15 | 15 |
| `packages/backend/src/notify/selected-content.ts` | owner alerts (Feishu) | 3 | 3 | 3 |
| `packages/backend/src/operations/alerts.ts` | owner alerts (Feishu) | 70 | 70 | 70 |
| `packages/backend/src/operations/feedback.ts` | owner alerts (Feishu) | 8 | 8 | 8 |
| `packages/backend/src/operations/recover.ts` | owner alerts (Feishu) | 4 | 4 | 4 |
| `packages/backend/src/operations/reports.ts` | owner alerts (Feishu) | 10 | 10 | 10 |
| `packages/backend/src/operations/watch.ts` | owner alerts (Feishu) | 5 | 5 | 5 |
| `packages/backend/src/publication/agent.ts` | public output (RSS, llms.txt, agent, reports) | 103 | 0 | 0 |
| `packages/backend/src/publication/detail.ts` | public output (RSS, llms.txt, agent, reports) | 12 | 0 | 0 |
| `packages/backend/src/publication/feeds.ts` | public output (RSS, llms.txt, agent, reports) | 15 | 0 | 0 |
| `packages/backend/src/publication/items.ts` | public output (RSS, llms.txt, agent, reports) | 1 | 0 | 1 |
| `packages/backend/src/publication/llms.ts` | public output (RSS, llms.txt, agent, reports) | 50 | 0 | 0 |
| `packages/backend/src/publication/og.ts` | public output (RSS, llms.txt, agent, reports) | 2 | 0 | 0 |
| `packages/backend/src/publication/publish.ts` | public output (RSS, llms.txt, agent, reports) | 1 | 0 | 1 |
| `packages/backend/src/publication/reports.ts` | public output (RSS, llms.txt, agent, reports) | 4 | 1 | 0 |
| `packages/backend/src/reports/compose.ts` | public output (RSS, llms.txt, agent, reports) | 5 | 0 | 0 |
| `packages/backend/src/reports/correct.ts` | public output (RSS, llms.txt, agent, reports) | 1 | 1 | 1 |
| `packages/backend/src/reports/edition.ts` | public output (RSS, llms.txt, agent, reports) | 3 | 3 | 3 |
| `packages/backend/src/sources/config-keys.ts` | other backend | 1 | 1 | 1 |
| `packages/backend/src/sources/dates.ts` | other backend | 1 | 1 | 1 |
| `packages/backend/src/sources/health.ts` | other backend | 2 | 2 | 2 |
| `packages/backend/src/sources/rss.ts` | other backend | 1 | 1 | 1 |
| `packages/backend/src/sources/web-list.ts` | other backend | 2 | 2 | 2 |
| `packages/backend/src/sources/x.ts` | other backend | 1 | 1 | 1 |
| `packages/contracts/src/site.ts` | other backend | 1 | 1 | 1 |
| `packages/contracts/src/taxonomy.ts` | other backend | 3 | 0 | 0 |
| `packages/contracts/src/time.ts` | other backend | 1 | 0 | 0 |

## Lines still in Chinese with the ko patch
- `apps/web/app/features/copy/CopyPage.tsx:12` const facts = (["版本", "生效日期", "运营主体", "联系方式", "备案号"] as const).filter((k) => doc.meta[k]);
- `apps/web/app/features/copy/CopyPage.tsx:14` const FACT_LABEL: Record<(typeof facts)[number], string> = { 版本: "버전", 生效日期: "시행일", 运营主体: "운영 주체", 联系方式: "연락처", 备案号: "신고 번호" };
- `apps/web/app/lib/markdown.ts:101` const META_KEYS: Record<string, string> = { 버전: "版本", 시행일: "生效日期", "운영 주체": "运营主体", 연락처: "联系方式", "신고 번호": "备案号" };
- `apps/web/app/lib/markdown.ts:104` const title = (/^#\s+(.+)$/m.exec(md)?.[1] ?? "").replace(/（现行版）\|（现网）/g, "").trim();
- `apps/web/app/lib/markdown.ts:107` if (m[1] !== "项" && m[1] !== "항목" && !/^-+$/.test(m[1]!)) meta[META_KEYS[m[1]!] ?? m[1]!] = m[2]!;
- `apps/web/app/lib/markdown.ts:109` const introMatch = /(?:页首说明\|머리말)[：:]\s*\n+((?:>.*\n?)+)/.exec(md);
- `apps/web/app/lib/site-copy.ts:6` return body.replace(/^(?:页脚\|바닥글)[^\n]*$/gm, "").trim();
- `apps/web/app/lib/site-copy.ts:11` const footerLine = /^(?:页脚\|바닥글)[：:](.+)$/m.exec(doc.body)?.[1]?.trim() ?? null;
- `apps/web/app/routes/changelog.tsx:31` 更新: "bg-accent",
- `apps/web/app/routes/changelog.tsx:32` 优化: "bg-ok",
- `apps/web/app/routes/changelog.tsx:33` 公告: "bg-amber",
- `apps/web/app/routes/changelog.tsx:34` 下线: "bg-ink-4",
- `apps/web/app/routes/changelog.tsx:37` const KIND_NAME: Record<string, string> = { 更新: "업데이트", 优化: "개선", 公告: "공지", 下线: "종료" };
- `apps/web/app/routes/privacy.tsx:27` footer={<LegalFooterLinks links={[{ to: "/terms", label: POLICY.terms.name }, { to: "/feedback", label: "피드백 페이지" }]} note={`개인정보 처리 안내 ${PRIVACY.doc.meta["版本"]
- `apps/web/app/routes/terms.tsx:35` note={`${POLICY.terms.name} ${TERMS.doc.meta["版本"] ?? ""} · ${TERMS.doc.meta["生效日期"] ?? ""}`}
- `packages/backend/src/admin/auth.ts:180` if (!expected \|\| !given \|\| expected !== given) throw new LoginRejected("登录状态已失效，请重新登录");
- `packages/backend/src/admin/auth.ts:189` if (!allowed) throw new LoginRejected("这个飞书账号没有后台权限");
- `packages/backend/src/admin/auth.ts:207` if (!expected \|\| expected.length < 12) throw new LoginRejected("还没有设置管理员密码（环境变量 ADMIN_PASSWORD，至少 12 位）");
- `packages/backend/src/admin/auth.ts:210` if (!timingSafeEqual(given, wanted)) throw new LoginRejected("密码不对");
- `packages/backend/src/admin/auth.ts:213` INSERT INTO admin_users (email, display_name, last_login_at) VALUES (${PASSWORD_ADMIN}, '管理员', now())
- `packages/backend/src/admin/content.ts:39` if (!Number.isFinite(date.getTime()) \|\| date.toISOString() !== publishedAt) throw new Error("发布时间必须是完整、有效的 UTC ISO 日期");
- `packages/backend/src/admin/content.ts:40` if (date.getTime() > now) throw new Error("发布时间不能是未来日期");
- `packages/backend/src/admin/content.ts:42` if (!article.published_at \|\| article.published_at.getTime() >= recent \|\| date.getTime() >= recent) throw new Error("这里只校正新旧日期均早于七天窗口的历史内容");
- `packages/backend/src/admin/content.ts:73` if (!article) throw new Conflict("内容不存在");
- `packages/backend/src/admin/content.ts:78` if (prior.after.publishedAt !== input.publishedAt) throw new Conflict("同一个请求不能批准不同的发布时间");
- `packages/backend/src/admin/content.ts:82` if (article.revision !== input.version \|\| plan.hash !== input.hash) throw new Conflict("材料或日期已被修改，请重新核对日期校正预览");
- `packages/backend/src/admin/content.ts:95` throw new Conflict(`公开决定已变化，日期校正不能改变选稿、范围、内容或归组：${changed.join("、")}`);
- `packages/backend/src/admin/content.ts:164` const STALE = "这条内容的人工设置已被修改，请刷新后再操作";
- `packages/backend/src/admin/content.ts:169` if (!article) throw Object.assign(new Error("内容不存在"), { statusCode: 400 });
- `packages/backend/src/admin/feedback.ts:37` if (new Date(before.updated_at as Date).toISOString() !== input.version) throw new Conflict("这条反馈已被修改，请刷新后再操作");
- `packages/backend/src/admin/feedback.ts:76` await sql`UPDATE feedback SET content = '（已按要求删除）', email = NULL, page_url = NULL, screenshot_key = NULL, updated_at = now() WHERE id = ${id}`;
- `packages/backend/src/admin/settings.ts:18` if (input.data.length > MAX_QR_BYTES) throw new Error("二维码图片最大 2MB");
- `packages/backend/src/admin/settings.ts:20` if (!meta \|\| !["png", "jpeg", "webp"].includes(meta.format ?? "")) throw new Error("需要 PNG、JPG 或 WebP 图片");
- `packages/backend/src/admin/settings.ts:21` if ((meta.width ?? 0) < 120 \|\| (meta.height ?? 0) < 120) throw new Error("图片太小，二维码可能扫不出来");
- `packages/backend/src/admin/sources.ts:147` if (new Date(before.updated_at as Date).toISOString() !== input.version) throw new Conflict("信源已被其他操作修改，请刷新后再改");
- `packages/backend/src/admin/sources.ts:149` if (patch.kind !== undefined && !patch.config) throw new UnsupportedConfig("调整采集方式须同时提供完整采集配置");
- `packages/backend/src/admin/sources.ts:151` if (!(REPLACEABLE_SOURCE_KINDS as readonly string[]).includes(String(before.kind))) throw new UnsupportedConfig("仅 RSS、网页列表和 JSON 列表之间可调整采集方式");
- `packages/backend/src/admin/sources.ts:155` if (patch.config!.publishedAfter !== undefined && Date.parse(String(patch.config!.publishedAfter)) < Date.parse(String(boundary))) throw new UnsupportedConfig("
- `packages/backend/src/admin/sources.ts:168` if (dup) throw new Conflict(`与已有信源重复：${dup.name}（${dup.id}）`);
- `packages/backend/src/admin/sources.ts:217` } catch { throw new UnsupportedConfig("完整采集配置须包含有效的 HTTP(S) 地址"); }
- `packages/backend/src/admin/sources.ts:218` if (kind === "json_list" && (!Array.isArray(config.titlePaths) \|\| !config.titlePaths.length \|\| !config.titlePaths.every(p => typeof p === "string" && p.trim()) 
- `packages/backend/src/admin/sources.ts:273` if (!row) throw new Conflict(`信源 ID ${s.id} 已存在`);
- `packages/backend/src/content/provenance.ts:87` await audit("system", "article.attribution", `article:${articleId}`, "唯一 T1 原发信源与已验证 URL 范围一致（显式配置或已观察官网列表）",
- `packages/backend/src/content/sanitize.ts:189` const BARE_URL = /https?:\/\/[^\s<>"^`{\|}　-〿㐀-䶿一-鿿＀-￯぀-ヿ가-힯☀-➿️‍\u{1f300}-\u{1faff}]+/gu;
- `packages/backend/src/editorial/analyze.ts:96` const quoted = a.xPost.quoted?.text ? `\n\n[引用 ${a.xPost.quoted.handle ? `@${a.xPost.quoted.handle}` : "原推文"}]：${a.xPost.quoted.text}` : "";
- `packages/backend/src/editorial/analyze.ts:104` "请按系统规则评估以下单篇材料所代表的事件。只输出 attentionScore。",
- `packages/backend/src/editorial/analyze.ts:105` `【发布时间（北京时间）】\n${at ? scoreInputTime(at) : "未知（收录时间不代表发布时间）"}`,
- `packages/backend/src/editorial/analyze.ts:106` `【标题】\n${a.title.trim()}`,
- `packages/backend/src/editorial/analyze.ts:107` `【完整正文】\n${body.length > MAX_BODY_CHARS ? body.slice(0, MAX_BODY_CHARS) : body}`,
- `packages/backend/src/editorial/analyze.ts:155` const ZH_COUNT = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
- `packages/backend/src/editorial/analyze.ts:399` `来源：${t.sourceName ?? "（未注明）"}`, `原题：${t.title}`,
- `packages/backend/src/editorial/analyze.ts:400` `中文稿：\n${JSON.stringify({ titleZh: w.titleZh, summaryZh: w.summaryZh, reasonZh: w.reasonZh })}`,
- `packages/backend/src/editorial/analyze.ts:401` `问题：\n${problems.map((p) => `- ${p}`).join("\n")}`,
- `packages/backend/src/editorial/input.ts:44` const parts = [String(xPost.text ?? "").trim(), article.title ? `【X 长文】${article.title}` : "【X 长文】", article.text];
- `packages/backend/src/editorial/input.ts:74` rss: "RSS", web_list: "网页", json_list: "网页接口", x_search: "X 帖子", mp_account: "微信公众号", external: "外部上报",
- `packages/backend/src/editorial/input.ts:81` const body = (text: string) => text.length <= MAX_BODY_CHARS ? text : `${text.slice(0, MAX_BODY_CHARS)}\n【原文超过 ${MAX_BODY_CHARS} 字符，后文未提供】`;
- `packages/backend/src/editorial/input.ts:84` lines.push(`名称：${a.source.name}`);
- `packages/backend/src/editorial/input.ts:85` lines.push(`类型：${KIND_LABEL[a.source.kind] ?? a.source.kind}；分级：${a.source.tier}；一手来源：${a.source.firstParty ? "是" : "否"}`);
- `packages/backend/src/editorial/input.ts:88` if (a.publishedAt) lines.push(`发布时间：${beijingDate(a.publishedAt)} ${beijingTime(a.publishedAt)}（北京时间）`);
- `packages/backend/src/editorial/input.ts:89` if (a.author) lines.push(`作者：${a.author}`);
- `packages/backend/src/editorial/input.ts:91` lines.push(`作者：${a.xPost.authorName ?? ""} (@${a.xPost.handle ?? ""})`);
- `packages/backend/src/editorial/input.ts:92` lines.push(`帖子：\n${body(String(a.xPost.text ?? a.title))}`);
- `packages/backend/src/editorial/input.ts:93` if (a.xPost.quoted?.text) lines.push(`引用的帖子（@${a.xPost.quoted.handle ?? ""}）：\n${body(String(a.xPost.quoted.text))}`);
- `packages/backend/src/editorial/input.ts:94` if (a.translationZh) lines.push(`帖子中文译文：\n${truncate(a.translationZh, 4000)}`);
- `packages/backend/src/editorial/input.ts:96` lines.push(`标题：${collapseWhitespace(a.title)}`);
- `packages/backend/src/editorial/input.ts:98` lines.push(original ? `正文：\n${body(original)}` : "正文：（无）");
- `packages/backend/src/editorial/input.ts:99` if (a.translationZh && !a.bodyText) lines.push(`正文中文译文：\n${truncate(a.translationZh, 5000)}`);
- `packages/backend/src/editorial/input.ts:101` lines.push(`原文链接：${a.url}`);
- `packages/backend/src/editorial/models.ts:25` prefilter: { label: "精选预筛（是否属于这个行业，宽召回）", env: "PREFILTER_MODEL", default: DEFAULTS.prefilter ?? "default", purposes: ["prefilter_article"] },
- `packages/backend/src/editorial/models.ts:26` score: { label: "精选评分（两次独立评分，按信源分级门槛）", env: "SCORE_MODEL", default: DEFAULTS.score ?? "default", purposes: ["score_article"] },
- `packages/backend/src/editorial/models.ts:27` understand: { label: "内容理解（入选和接近入选的标题、摘要、推荐理由，能看图时看首图）", env: "UNDERSTAND_MODEL", default: DEFAULTS.understand ?? "default", purposes: ["understand_article"] },
- `packages/backend/src/editorial/models.ts:28` summarize: { label: "标题摘要（其余文章的中文标题与摘要）", env: "SUMMARIZE_MODEL", default: DEFAULTS.summarize ?? "default", purposes: ["summarize_article"] },
- `packages/backend/src/editorial/models.ts:29` wording: { label: "改用词（标题、摘要、理由用了本站不用的词时，只改这些词）", env: "WORDING_MODEL", default: DEFAULTS.wording ?? "default", purposes: ["mend_wording"], idle: () => !READER_
- `packages/backend/src/editorial/models.ts:30` structure: { label: "结构抽取（分类、标签、主体公司、事件事实，不写读者文字）", env: "STRUCTURE_MODEL", default: DEFAULTS.structure ?? "default", purposes: ["structure_article"] },
- `packages/backend/src/editorial/models.ts:31` group: { label: "事件归组（新报道与候选事实的关系：同一次发生、同一事件的进展、无关；被同一篇报道连起来的两个事件是否同一事件）", env: "GROUP_MODEL", default: DEFAULTS.group ?? "default", purposes: ["group_article",
- `packages/backend/src/editorial/models.ts:32` groupReview: { label: "归组复核（相似度不高的合并、两个事件的合并，写入前再读一遍；最好换一家模型）", env: "GROUP_REVIEW_MODEL", default: DEFAULTS.groupReview ?? "default", purposes: ["group_review"
- `packages/backend/src/editorial/models.ts:33` digest: { label: "事件综述", env: "DIGEST_MODEL", default: DEFAULTS.digest ?? "default", purposes: ["story_digest"] },
- `packages/backend/src/editorial/models.ts:35` report: { label: "周报月报的总述与主题（日报由规则算出，不用模型）", env: "REPORT_MODEL", default: DEFAULTS.report ?? "default", purposes: ["report_weekly", "report_monthly", "report_l
- `packages/backend/src/editorial/models.ts:36` translate: { label: "精选全文翻译（含引用帖）", env: "TRANSLATE_MODEL", default: DEFAULTS.translate ?? "default", purposes: ["translate_body", "translate_quoted"] },
- `packages/backend/src/editorial/wording.ts:12` const FIELDS: Array<[keyof ReaderCopy, string]> = [["titleZh", "标题"], ["summaryZh", "摘要"], ["reasonZh", ITEM_COPY.reasonLabel]];
- `packages/backend/src/editorial/wording.ts:25` problems.push(`${name}用了“${hit[0]}”（“${text.slice(Math.max(0, hit.index - 8), hit.index + hit[0].length + 8)}”）：${fix}`);
- `packages/backend/src/editorial/writing.ts:32` const cjk = (text.match(/[一-鿿]/g) \|\| []).length;
- `packages/backend/src/editorial/writing.ts:76` if (a.xPost) return "完整正文（来自 RSS / API 自带的 content 字段）";
- `packages/backend/src/editorial/writing.ts:77` if (a.bodyText) return a.source.fetchesBody ? "完整正文（抓自原始网页）" : "完整正文（来自 RSS / API 自带的 content 字段）";
- `packages/backend/src/editorial/writing.ts:78` if (a.excerpt) return "仅摘要（feed 未提供完整正文）";
- `packages/backend/src/editorial/writing.ts:79` if (a.bodyStatus === "unconfirmed") return "抓取失败，仅标题可用";
- `packages/backend/src/editorial/writing.ts:80` return "无有效文本";
- `packages/backend/src/editorial/writing.ts:86` lines.push(`【来源】${a.source.name}（${a.source.kind}，tier=${a.source.tier \|\| "未分级"}）`);
- `packages/backend/src/editorial/writing.ts:87` if (a.source.tags?.length) lines.push(`【来源标签】${a.source.tags.join(", ")}`);
- `packages/backend/src/editorial/writing.ts:90` if (name \|\| handle) lines.push(`【作者】${[name, handle ? `@${handle}` : null].filter(Boolean).join(" · ")}`);
- `packages/backend/src/editorial/writing.ts:91` if (a.publishedAt) lines.push(`【发布时间】${a.publishedAt.toISOString()}`);
- `packages/backend/src/editorial/writing.ts:95` const mediaParts = [images ? `${images} 张图` : null, videos ? `${videos} 个视频` : null, unfetchedXArticle(a) ? "含 X 长文链接（正文未抓到）" : null].filter(Boolean);
- `packages/backend/src/editorial/writing.ts:96` if (mediaParts.length) lines.push(`【媒体】${mediaParts.join(" · ")}`);
- `packages/backend/src/editorial/writing.ts:97` lines.push(`【原文链接】${a.url}`);
- `packages/backend/src/editorial/writing.ts:98` lines.push(`【标题】${a.title}`);
- `packages/backend/src/editorial/writing.ts:101` const label = quoted.handle ? `@${quoted.handle}` : "原推";
- `packages/backend/src/editorial/writing.ts:103` lines.push(`【引用 ${label}】（以下是作者转发/引用的**他人**内容，不是作者本人的产出）`);
- `packages/backend/src/editorial/writing.ts:106` lines.push(`【引用 ${label}】${quoted.text}`);
- `packages/backend/src/editorial/writing.ts:110` lines.push(opts.annotateQuoted && quoted ? "【正文（作者自己的内容）】" : "【正文】");
- `packages/backend/src/editorial/writing.ts:111` lines.push(capBody(a.xPost ? String(a.xPost.text ?? a.title) : (a.bodyText ?? a.excerpt ?? "(无正文)")));
- `packages/backend/src/editorial/writing.ts:113` lines.push(`【材料质量】${materialQuality(a)}`);
- `packages/backend/src/editorial/writing.ts:126` ["请按系统规则理解以下单篇材料，一次返回全部六个字段。", renderContext(a, { annotateQuoted: true })].join("\n\n");
- `packages/backend/src/editorial/writing.ts:200` if (ctx.publisher) facts.push(`文档发布域主体=${lexiconName(ctx.publisher) ?? ctx.publisher}`);
- `packages/backend/src/editorial/writing.ts:201` if (ctx.owner) facts.push(`来源账号主体=${lexiconName(ctx.owner) ?? ctx.owner}`);
- `packages/backend/src/editorial/writing.ts:202` return promptText("identity-context", { facts: facts.length > 0 ? facts.join("；") : "未识别到明确发布主体" });
- `packages/backend/src/editorial/writing.ts:273` const sourceName = (name?: string) => name?.trim() \|\| "（未注明）";
- `packages/backend/src/editorial/writing.ts:276` if (!d \|\| Number.isNaN(d.getTime())) return "未注明";
- `packages/backend/src/editorial/writing.ts:294` return `\n\n${promptText(name, { quotedLabel: input.quotedAuthor ? `@${input.quotedAuthor}` : "引用推文", quotedText: clampText(input.quotedText, 1500) })}`;
- `packages/backend/src/editorial/writing.ts:308` const ECHO_LINE = /^(来源[:：]\|【已核验身份上下文】\|这些事实只用于防止\|原始标题[:：]\|【时间锚点】)/;
- `packages/backend/src/events/consolidate.ts:117` && !!await mergeStoryInto(other.storyId, anchor.storyId, `同一事件（${first.relation}，复核 ${second.relation}）：${other.report.title}｜${anchor.report.title}`, "grouping
- `packages/backend/src/events/corrections.ts:58` if (!target) throw new Conflict("目标事实不存在，或它所在的事件已被合并");
- `packages/backend/src/events/corrections.ts:83` if (!left && (await mergeStoryInto(storyId, moved.story, `报道已全部移走，旧地址跳到报道所在事件（最后一篇 ${id}）`, actor))) continue;
- `packages/backend/src/events/corrections.ts:98` throw new Conflict("两个事件都必须是未合并的事件");
- `packages/backend/src/events/digest.ts:33` const lines = reports.slice(-40).map((r) => `${opts.corrected \|\| known.has(r.id) ? "" : "【新】"}报道 ${r.id}｜事实 ${r.fact_id}｜${beijingDate(r.at)} ${beijingTime(r.at
- `packages/backend/src/events/digest.ts:35` ? `事件当前标题：${story.title}\n\n报道内容或事实证据经过更正。请只依据下面这些报道的当前内容重写综述，不要沿用以前版本的说法。\n报道（按时间）：\n${lines.join("\n")}`
- `packages/backend/src/events/digest.ts:36` : `事件当前标题：${story.title}\n${story.digest ? `上一版综述：${story.digest}\n` : ""}\n报道（按时间，标【新】的是上一版之后的新报道）：\n${lines.join("\n")}`;
- `packages/backend/src/events/group.ts:75` const NO_SELECTED_COVERAGE: SelectionValue = { addsValue: true, reason: "没有已公开精选的相关报道" };
- `packages/backend/src/events/group.ts:80` system: BATCH_SYSTEM, user: batchUser(query, cands, "新报道", reading), schema: BatchSchema.refine(value => completeDecisions(value.decisions, cands.length), "Ever
- `packages/backend/src/events/group.ts:97` system: SIGNAL_SYSTEM, user: batchUser(query, cands, "帖子"), schema: SignalSchema.refine(value => completeDecisions(value.decisions, cands.length), "Every candid
- `packages/backend/src/events/group.ts:186` if (await mergeStoryInto(Number(id), storyId, `报道已全部移走，旧地址跳到报道所在事件（最后一篇 ${articleId}）`, "grouping")) redirected.push(Number(id));
- `packages/backend/src/events/group.ts:276` await markGrouped(articleId, a.revision, { addsValue: true, reason: "人工确认的归属" });
- `packages/backend/src/events/group.ts:294` await markGrouped(articleId, a.revision, { addsValue: true, reason: "历史资料按原文时间归档" });
- `packages/backend/src/events/group.ts:302` await markGrouped(articleId, a.revision, { addsValue: false, reason: "材料不足以确认当前消息" });
- `packages/backend/src/events/group.ts:317` await markGrouped(articleId, a.revision, { addsValue: false, reason: "未通过内容分析" });
- `packages/backend/src/events/group.ts:375` if (cands.some(c => c.factId === kept.factId && c.selected)) selection = { addsValue: true, reason: "同一新闻的代表报道候选" };
- `packages/backend/src/events/group.ts:379` await markGrouped(articleId, a.revision, manual ? { addsValue: true, reason: "人工确认的归属" } : selection, tx);
- `packages/backend/src/events/group.ts:435` selection = { addsValue: true, reason: "同一新闻的代表报道候选" };
- `packages/backend/src/events/group.ts:444` await markGrouped(articleId, a.revision, { addsValue: true, reason: "人工确认的归属" }, tx);
- `packages/backend/src/events/relate.ts:93` return at ? `${beijingDate(at)} ${beijingTime(at)}` : "未知";
- `packages/backend/src/events/relate.ts:100` `标题：${r.title}`,
- `packages/backend/src/events/relate.ts:101` `来源：${r.source}${r.firstParty ? "（当事方/官方）" : ""}｜发布时间：${when(r.at)}`,
- `packages/backend/src/events/relate.ts:102` `摘要：${(r.summary ?? "").slice(0, summaryLimit) \|\| "（无）"}`,
- `packages/backend/src/events/relate.ts:103` r.scope && r.scope !== "unknown" ? `资料范围：${r.scope === "composite" ? "多个独立发生的综合稿" : "单一具体发生或议题"}` : null,
- `packages/backend/src/events/relate.ts:105` ? `事实要素：主体=${f.subject \|\| "?"}；动作=${f.action \|\| "?"}；对象=${f.object \|\| "?"}；日期=${f.occurredAt \|\| "未知"}`
- `packages/backend/src/events/relate.ts:107` r.sourceText ? `【原文证据】\n${r.sourceText.slice(0, GROUP_BODY_CHARS)}\n【原文证据结束】` : null,
- `packages/backend/src/events/relate.ts:115` export function batchUser(query: ReportView, cands: CandidateView[], queryLabel = "新报道", reading: ReadingContext[] = []): string {
- `packages/backend/src/events/relate.ts:118` describeReport(c.report, `候选 ${candidateKey(i)}`, `（该事实已有 ${c.members} 篇报道；事实标题：${c.factTitle}）`),
- `packages/backend/src/events/relate.ts:119` queryLabel === "新报道" ? c.selected && c.selectedReport
- `packages/backend/src/events/relate.ts:120` ? describeReport(c.selectedReport, "已公开精选", "（增量只与这篇已展示的内容比较）")
- `packages/backend/src/events/relate.ts:121` : "【尚无公开精选】该候选只用于身份判断。" : null,
- `packages/backend/src/events/relate.ts:125` describeReport(report, `已公开精选阅读背景 R${i + 1}`, "（只比较信息覆盖，不是事实候选）", 2000),
- `packages/backend/src/events/relate.ts:126` sourceText ? `【该已选报道的原文证据】\n${sourceText.slice(0, GROUP_BODY_CHARS)}\n【原文证据结束】` : null,
- `packages/backend/src/events/relate.ts:128` return `${describeReport(query, queryLabel)}\n\n${list}${background ? `\n\n${background}` : ""}\n\n${queryLabel}与每个候选的关系是什么？${background ? "同时比较所有已公开精选内容，判断新增价值
- `packages/backend/src/events/relate.ts:132` return `${describeReport(a, "报道 A")}\n\n${describeReport(b, "报道 B")}\n\n这两篇报道是什么关系？`;
- `packages/backend/src/lib/text.ts:111` const cjk = s.match(/[㐀-鿿豈-﫿]/g) ?? [];
- `packages/backend/src/media/poster.ts:54` ? h("div", { display: "flex", marginLeft: 20, padding: "4px 16px", borderRadius: 999, backgroundColor: "rgba(23,107,117,0.09)", fontSize: 26, color: "#0f5a63" }
- `packages/backend/src/media/poster.ts:59` h("div", { display: "flex", marginTop: 36, fontSize: 28, color: "#66757a" }, clamp(`来源：${p.source}`, 34)),
- `packages/backend/src/media/poster.ts:67` h("div", { display: "flex", fontSize: 36, fontWeight: 700, color: INK }, "长按识别二维码"),
- `packages/backend/src/media/poster.ts:68` h("div", { display: "flex", marginTop: 14, fontSize: 28, lineHeight: 1.5, color: "#66757a" }, "阅读全文、中文译文与原文链接"),
- `packages/backend/src/media/upstream.ts:35` const reason = window === "minute" ? `图片代理上游流量超过每分钟 ${MINUTE_BUDGET / 1e6} MB` : `图片代理上游流量超过当日 ${DAY_BUDGET / 1e9} GB`;
- `packages/backend/src/media/upstream.ts:55` return [{ key: "egress.imgproxy", level: "later", title: "图片代理今天的流量额度用完了，未缓存的图片到零点前显示不出来", detail: String(img.value.reason) }];
- `packages/backend/src/notify/deliver.ts:41` ('feishu-content-main', 'content', 'feishu_webhook', false, 'FEISHU_PUSH_WEBHOOK_URL', '飞书内容主群'),
- `packages/backend/src/notify/deliver.ts:42` ('feishu-content-mirror', 'content', 'feishu_webhook', false, 'FEISHU_PUSH_MIRROR_WEBHOOK_URL', '飞书内容镜像群')
- `packages/backend/src/notify/deliver.ts:118` if (d.status !== "unknown" && d.status !== "failed") throw new Conflict("这条投递不需要处理");
- `packages/backend/src/notify/deliver.ts:120` if (!d.enabled) throw new Conflict("这个推送群已停用");
- `packages/backend/src/notify/deliver.ts:123` throw new Conflict("这条内容已不再符合推送条件");
- `packages/backend/src/notify/deliver.ts:132` if (!claimed.count) throw new Conflict("这条投递已被其他操作处理，请刷新后重试");
- `packages/backend/src/notify/deliver.ts:143` const unknown = await sql`UPDATE deliveries SET status = 'unknown', response = coalesce(response, '发送中进程中断，是否送达未知'), updated_at = now()
- `packages/backend/src/notify/deliver.ts:145` const failed = await sql`UPDATE deliveries SET status = 'failed', response = coalesce(response, '发送前进程中断，没有发出'), updated_at = now()
- `packages/backend/src/notify/deliver.ts:155` if (before.status !== "unknown" && before.status !== "failed") throw new Conflict("这条投递不需要处理");
- `packages/backend/src/notify/deliver.ts:158` const changed = await sql`UPDATE deliveries SET status = 'sent', sent_at = coalesce(sent_at, now()), response = ${`人工确认已送达：${input.note}`}, updated_at = now()
- `packages/backend/src/notify/deliver.ts:160` if (!changed.count) throw new Conflict("这条投递已被其他操作处理，请刷新后重试");
- `packages/backend/src/notify/deliver.ts:163` const changed = await sql`UPDATE deliveries SET status = 'failed', response = ${`人工放弃：${input.note}`}, updated_at = now()
- `packages/backend/src/notify/deliver.ts:165` if (!changed.count) throw new Conflict("这条投递已被其他操作处理，请刷新后重试");
- `packages/backend/src/notify/feishu.ts:97` return `${m}月${d}日`;
- `packages/backend/src/notify/feishu.ts:105` if (min < 60) return `${min} 分钟`;
- `packages/backend/src/notify/feishu.ts:106` if (min < 48 * 60) return `${Math.floor(min / 60)} 小时${min % 60 ? ` ${min % 60} 分钟` : ""}`;
- `packages/backend/src/notify/feishu.ts:107` return `${Math.floor(min / 1440)} 天`;
- `packages/backend/src/notify/feishu.ts:113` const lasting = now - since.getTime() >= 60_000 ? `（已持续 ${duration(now - since.getTime())}）` : "";
- `packages/backend/src/notify/feishu.ts:114` const lines = [f.impact && `影响：${f.impact}`, f.heals && `会自己好吗：${f.heals}`, f.action && `你需要：${f.action}`];
- `packages/backend/src/notify/feishu.ts:115` return { title: `${MARK[level]} ${repeat ? "仍未恢复：" : ""}${f.title}${lasting}`, lines: lines.filter((l): l is string => !!l) };
- `packages/backend/src/notify/feishu.ts:119` return { title: `✅ 已恢复：${title}`, lines: [`持续 ${duration(now - since.getTime())}（${beijingStamp(since)} 起）`] };
- `packages/backend/src/notify/feishu.ts:146` if (key === "gone:upload") return { imageKey: null, note: "（截图未能上传，已删除）" };
- `packages/backend/src/notify/feishu.ts:147` if (key === "gone:missing") return { imageKey: null, note: "（截图文件已不存在）" };
- `packages/backend/src/notify/feishu.ts:153` return { imageKey: null, note: "（截图文件已不存在）" };
- `packages/backend/src/notify/feishu.ts:166` return { imageKey: null, note: "（截图未能上传，已删除）" };
- `packages/backend/src/notify/feishu.ts:185` [{ tag: "text", text: `页面：${fb.page_url ?? "—"}` }],
- `packages/backend/src/notify/feishu.ts:186` [{ tag: "text", text: `邮箱：${fb.email ?? "（未留）"}` }],
- `packages/backend/src/notify/feishu.ts:191` await sendToChat(chat, "post", { zh_cn: { title: `反馈 #${fb.id}`, content: paragraphs } });
- `packages/backend/src/notify/selected-content.ts:33` const lines = [r.summary, r.reason ? `**${ITEM_COPY.reasonLabel}**：${r.reason}` : null, `来源：${publicSourceName(r.source_name)}`].filter(Boolean);
- `packages/backend/src/notify/selected-content.ts:42` { tag: "button", text: { tag: "plain_text", content: `${SITE.name} 查看` }, url: itemUrl(r.article_id), type: "primary" },
- `packages/backend/src/notify/selected-content.ts:43` { tag: "button", text: { tag: "plain_text", content: "原文" }, url: r.url, type: "default" },
- `packages/backend/src/operations/alerts.ts:50` title: "网站停止收录新文章",
- `packages/backend/src/operations/alerts.ts:51` impact: last?.at ? `读者看不到新文章：最后一篇收录于 ${beijingStamp(last.at)}` : "读者看不到新文章：一天内没有收录任何文章",
- `packages/backend/src/operations/alerts.ts:52` heals: ALERTS.usualFlow ? `没有，${ALERTS.usualFlow}` : "没有",
- `packages/backend/src/operations/alerts.ts:53` action: "尽快发起一次维护处理",
- `packages/backend/src/operations/alerts.ts:54` detail: `editorial articles.discovered_at 超过 ${QUIET_MINUTES} 分钟没有新值（热度信号单独评估）；查 sources.schedule、出网代理与采集失败`,
- `packages/backend/src/operations/alerts.ts:68` title: "有精选新闻卡在去重确认，暂未发布",
- `packages/backend/src/operations/alerts.ts:69` impact: `${waiting.length} 条已达到精选条件的新闻等待确认超过 10 分钟，还没进入精选，读者可能晚看到这些更新`,
- `packages/backend/src/operations/alerts.ts:70` heals: manual ? `${manual} 条需要人工处理后才能恢复${manual < waiting.length ? "；其余仍在自动恢复" : ""}`
- `packages/backend/src/operations/alerts.ts:71` : receipt ? "仍在等待自动恢复；付费结果未知的请求会在 30 分钟后自动放行一次" : "还会自动重试，但等待已经超过正常范围",
- `packages/backend/src/operations/alerts.ts:72` action: manual ? "转给 AI 处理；结果未知的付费请求需先核对计费与结果，再决定是否放行" : "转给 AI 检查等待原因，避免继续积压",
- `packages/backend/src/operations/alerts.ts:73` detail: waiting.slice(0, 8).map((item) => `${item.articleId}（${duration(now - item.since.getTime())}）${item.receiptId ? ` 回执 #${item.receiptId}` : ""}${item.err
- `packages/backend/src/operations/alerts.ts:84` SELECT left(coalesce(processing_error, '（无）'), 120) AS error, count(*)::int AS n FROM articles
- `packages/backend/src/operations/alerts.ts:90` title: "新内容卡住了，进不了网站",
- `packages/backend/src/operations/alerts.ts:91` impact: [p!.waiting >= 10 && `${p!.waiting} 篇新文章等了 2 小时以上还没处理完`, p!.failed >= 20 && `最近 3 小时 ${p!.failed} 篇新文章处理失败`]
- `packages/backend/src/operations/alerts.ts:93` .join("；") + "，精选和热点会缺内容",
- `packages/backend/src/operations/alerts.ts:94` heals: p!.waiting >= 10 ? "服务恢复后会自动补处理" : "不会，需要修好后重新处理这些文章",
- `packages/backend/src/operations/alerts.ts:95` action: "转给 AI 处理",
- `packages/backend/src/operations/alerts.ts:96` detail: errors.map((e) => `${e.error}（${e.n}）`).join("；") \|\| "没有记录错误",
- `packages/backend/src/operations/alerts.ts:114` title: "飞书内容群有推送没发出去",
- `packages/backend/src/operations/alerts.ts:115` impact: `过去 24 小时 ${refused!.n} 条通知没进${refused!.target ?? "内容群"}`,
- `packages/backend/src/operations/alerts.ts:116` heals: "不会自动重发",
- `packages/backend/src/operations/alerts.ts:117` action: "转给 AI 处理；如果推送机器人被移出了群，需要你把它加回去",
- `packages/backend/src/operations/alerts.ts:132` const state = b?.value.filesError ? `数据库已上传，附件打包失败：${b.value.filesError}` : b?.value.uploaded === false ? "未上传" : "";
- `packages/backend/src/operations/alerts.ts:137` title: "数据库备份连续两天没成功",
- `packages/backend/src/operations/alerts.ts:138` impact: lastOk ? `万一服务器出事，最近 ${duration(age)} 的数据可能无法完整恢复` : "还没有成功的完整备份，服务器出事时可能无法恢复数据",
- `packages/backend/src/operations/alerts.ts:139` heals: "不会",
- `packages/backend/src/operations/alerts.ts:140` action: "转给 AI 处理",
- `packages/backend/src/operations/alerts.ts:141` detail: `${lastOk ? "最近一次成功" : "首次备份尝试"} ${beijingStamp(since)}${state ? `；${state}` : ""}；看 ops.backup 的运行记录`,
- `packages/backend/src/operations/alerts.ts:145` out.push({ key: "backup.stale", level: "later", title: "数据库备份超过一天没成功", detail: b ? `最近一次 ${beijingStamp(b.value.at)}${state ? `（${state}）` : ""}；看 ops.backup` :
- `packages/backend/src/operations/alerts.ts:158` key: `sources.failing.${group.mode}`, level: "later", title: `${group.name}有 ${group.failing.length} 个信源连续抓取失败`,
- `packages/backend/src/operations/alerts.ts:159` detail: sourceHealthList(group.failing, s => `连续失败 ${s.fail_count} 次${s.last_error ? `，${s.last_error}` : ""}`) + "；转给 AI 检查抓取错误",
- `packages/backend/src/operations/alerts.ts:162` key: `sources.unstable.${group.mode}`, level: "later", title: `${group.name}有 ${group.unstable.length} 个信源反复抓取失败`,
- `packages/backend/src/operations/alerts.ts:163` detail: sourceHealthList(group.unstable, s => `近 7 天失败 ${s.failed}/${s.runs} 次`) + "；即使最近成功也需检查，避免继续漏收",
- `packages/backend/src/operations/alerts.ts:166` key: `sources.silent.${group.mode}`, level: "later", title: `${group.name}有 ${group.silent.length} 个信源 7 天未发现新内容`,
- `packages/backend/src/operations/alerts.ts:167` detail: sourceHealthList(group.silent, s => `近 7 天 ${s.runs} 次抓取、0 条新发现`) + "；需对照原站，区分低频更新与采集失效",
- `packages/backend/src/operations/alerts.ts:170` key: `sources.quality.${group.mode}`, level: "later", title: `${group.name}有 ${group.quality.length} 个信源需要核实文章质量`,
- `packages/backend/src/operations/alerts.ts:171` detail: sourceHealthList(group.quality, s => `近 7 天缺发布时间 ${s.undated} 篇、反复修订 ${s.repeated} 篇`) + "；缺时间可能让新闻按历史文章处理，反复修订需核对正文是否混入变化内容",
- `packages/backend/src/operations/alerts.ts:174` key: `sources.details.${group.mode}`, level: "later", title: `${group.name}有 ${group.detailFailures.length} 个信源详情补全失败`,
- `packages/backend/src/operations/alerts.ts:175` detail: sourceHealthList(group.detailFailures, s => `近 7 天 ${s.detail_failures} 次`) + "；查看抓取记录中的详情地址与错误",
- `packages/backend/src/operations/alerts.ts:184` out.push({ key: "receipts.unknown", level: "later", title: `${r!.receipts} 个付费请求的结果尚未确认`, detail: `${r!.services}；可能影响内容处理，后台“运行”页查看影响；自动恢复后仍未知的请求需核对后放行` });
- `packages/backend/src/operations/alerts.ts:186` if (r!.deliveries > 0) out.push({ key: "deliveries.unknown", level: "later", title: `${r!.deliveries} 条飞书内容群推送不确定是否送达`, detail: "后台“运行”页核对群里有没有，再标记或重发" });
- `packages/backend/src/operations/alerts.ts:194` out.push({ key: `queue.${q.name}`, level: "later", title: `后台任务排队超过 2 小时：${q.name}`, detail: `${q.n} 个等待，最早的等了 ${duration(now - q.oldest.getTime())}` });
- `packages/backend/src/operations/alerts.ts:206` return steps.length ? `${steps.join("、")}可能受影响` : "当前没有处理步骤使用这家模型服务";
- `packages/backend/src/operations/alerts.ts:210` llm: { name: "默认模型服务", where: "模型服务商的控制台" },
- `packages/backend/src/operations/alerts.ts:211` zhipu: { name: "智谱", where: "智谱开放平台" },
- `packages/backend/src/operations/alerts.ts:212` dashscope: { name: "阿里云百炼", where: "阿里云百炼控制台" },
- `packages/backend/src/operations/alerts.ts:213` deepseek: { name: "DeepSeek", where: "DeepSeek 开放平台" },
- `packages/backend/src/operations/alerts.ts:214` mimo: { name: "小米 MiMo", where: "小米 MiMo 开放平台" },
- `packages/backend/src/operations/alerts.ts:216` socialdata: { name: "SocialData", stops: "X（推特）上的新内容收不到", where: "SocialData 后台" },
- `packages/backend/src/operations/alerts.ts:217` jina: { name: "Jina", stops: "部分文章取不到正文", where: "Jina 后台" },
- `packages/backend/src/operations/alerts.ts:218` dajiala: { name: "极致了（Dajiala）", stops: "公众号新文章收不到", where: "极致了后台" },
- `packages/backend/src/operations/alerts.ts:223` return p ? (p.stops ?? modelStops(service)) : "相关功能停了";
- `packages/backend/src/operations/alerts.ts:225` export const providerConsole = (service: string) => PROVIDERS[service]?.where ?? `${service} 后台`;
- `packages/backend/src/operations/alerts.ts:233` AND error ~* '(HTTP 40[123]\\M\|insufficient\|balance\|arrear\|good standing\|欠费\|余额)'
- `packages/backend/src/operations/alerts.ts:240` title: `${providerName(p.service)} 拒绝服务，可能欠费或账号失效`,
- `packages/backend/src/operations/alerts.ts:242` heals: "不会",
- `packages/backend/src/operations/alerts.ts:243` action: `去${providerConsole(p.service)}看余额和账号状态，充值或恢复后系统会自动继续；两样都正常的话，发起一次维护查原因`,
- `packages/backend/src/operations/alerts.ts:244` detail: `最近 1 小时被拒 ${p.n} 次：${p.last}`,
- `packages/backend/src/operations/alerts.ts:255` title: `${providerName(c.service)} 过去 24 小时的调用额度用完了`,
- `packages/backend/src/operations/alerts.ts:256` impact: `${await providerStops(c.service)}，直到额度随时间腾出来`,
- `packages/backend/src/operations/alerts.ts:257` heals: "会，额度按 24 小时滚动恢复",
- `packages/backend/src/operations/alerts.ts:258` action: "这次不用处理；如果经常出现，再决定要不要调高额度",
- `packages/backend/src/operations/alerts.ts:259` detail: `24 小时内 ${c.used} 次，上限 ${c.per_day}（budgets 表）`,
- `packages/backend/src/operations/alerts.ts:282` state[`${DAILY_PREFIX}${date}`] ??= { ...legacy, title: `${date} 的日报还没生成` };
- `packages/backend/src/operations/alerts.ts:308` title: `${date} 的日报还没生成`, impact: `读者看不到 ${date} 的日报`,
- `packages/backend/src/operations/alerts.ts:309` heals: "尚未补齐；需查看运行记录确认是否需要人工补做",
- `packages/backend/src/operations/alerts.ts:310` action: "尽快发起一次维护处理",
- `packages/backend/src/operations/alerts.ts:311` detail: `reports daily ${date} 不存在；看 reports.compose 的运行记录`,
- `packages/backend/src/operations/alerts.ts:344` await sendAlert(`${date} 的日报没能补出，停止提醒`, [`读者看不到 ${date} 的日报；缺期从 ${beijingStamp(new Date(open.since))} 起，已超出七天的检查范围`]);
- `packages/backend/src/operations/alerts.ts:365` await sendAlert(`📋 系统日报 · ${beijingDay(now)}`, ["以下事项需要跟进，具体影响见各条说明；可把整条转给 AI 处理。", ...lines]);
- `packages/backend/src/operations/feedback.ts:45` if (list.length >= perMinute) throw new FeedbackRejected(429, "rate_limited", "提交太频繁，请稍后再试。", 60);
- `packages/backend/src/operations/feedback.ts:62` if (content.length < 2) throw new FeedbackRejected(400, "invalid_request", "请写下反馈内容。");
- `packages/backend/src/operations/feedback.ts:63` if (content.length > 5000) throw new FeedbackRejected(400, "invalid_request", "反馈内容最多 5000 字。");
- `packages/backend/src/operations/feedback.ts:65` if (email && (email.length > 200 \|\| !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) throw new FeedbackRejected(400, "invalid_request", "邮箱格式不正确。");
- `packages/backend/src/operations/feedback.ts:71` if (banned) throw new FeedbackRejected(403, "forbidden", "暂时无法提交反馈。");
- `packages/backend/src/operations/feedback.ts:78` if (!mime) throw new FeedbackRejected(400, "invalid_request", "截图需要是 PNG、JPG、WebP 或 GIF。");
- `packages/backend/src/operations/feedback.ts:79` if (input.screenshot.data.length > 8 * 1024 * 1024) throw new FeedbackRejected(400, "invalid_request", "截图最大 8MB。");
- `packages/backend/src/operations/feedback.ts:83` if (!decodes) throw new FeedbackRejected(400, "invalid_request", "截图无法识别，请换一张图片。");
- `packages/backend/src/operations/recover.ts:15` export const AUTO_RELEASE_NOTE = "自动放行：结果未知超过 30 分钟，未核对是否计费";
- `packages/backend/src/operations/recover.ts:32` if (row.status !== "unknown") throw new Conflict("只有结果未知的回执需要人工核对");
- `packages/backend/src/operations/recover.ts:33` const error = `人工核对：${input.billed ? "供应商已计费但结果未取回" : "供应商未计费"}。${input.note}`;
- `packages/backend/src/operations/recover.ts:50` const done = await release(r.id, AUTO_RELEASE_NOTE, "ops.recover", "结果未知，自动放行一次", null);
- `packages/backend/src/operations/reports.ts:32` `本周收录 ${n(items!.week)} 条（上周 ${n(items!.prev)}，${pct(items!.week, items!.prev)}），其中精选 ${n(items!.selected)} 条`,
- `packages/backend/src/operations/reports.ts:33` `在用信源 ${counts!.enabled} 个，本周新增 ${counts!.added} 个；抓取失败 ${counts!.failing} 个，不太稳定 ${counts!.degraded} 个`,
- `packages/backend/src/operations/reports.ts:38` lines.push("", `${group.name}：${group.sources.length} 个在用信源；本周归属条目 ${n(group.sources.reduce((sum, s) => sum + s.items, 0))} 条；连续失败 ${group.failing.length} 个、反复失
- `packages/backend/src/operations/reports.ts:39` if (group.failing.length) lines.push(`抓取失败：${sourceHealthList(group.failing, s => `连续失败 ${s.fail_count} 次${s.last_error ? `（${s.last_error}）` : ""}`, Infinity)}
- `packages/backend/src/operations/reports.ts:40` if (group.unstable.length) lines.push(`不稳定：${sourceHealthList(group.unstable, s => `失败 ${s.failed}/${s.runs} 次`, Infinity)}`);
- `packages/backend/src/operations/reports.ts:41` if (group.silent.length) lines.push(`7 天无新发现（需对照原站，可能只是低频更新）：${sourceHealthList(group.silent, s => `${s.runs} 次抓取`, Infinity)}`);
- `packages/backend/src/operations/reports.ts:42` if (group.quality.length) lines.push(`文章质量待核实：${sourceHealthList(group.quality, s => `缺发布时间 ${s.undated} 篇、反复修订 ${s.repeated} 篇`, Infinity)}`);
- `packages/backend/src/operations/reports.ts:43` if (group.detailFailures.length) lines.push(`详情补全失败：${sourceHealthList(group.detailFailures, s => `${s.detail_failures} 次`, Infinity)}`);
- `packages/backend/src/operations/reports.ts:48` lines.push("", followUp ? "需要处理的话，把这条转给 AI；详情在后台“信源”与“运行”页。" : "没有需要处理的信源。");
- `packages/backend/src/operations/reports.ts:49` await sendAlert("📊 信源周报", lines);
- `packages/backend/src/operations/watch.ts:16` title: "后台处理服务停了，网站不会出现新内容",
- `packages/backend/src/operations/watch.ts:17` impact: "新内容的采集、处理、推送和日报全部暂停，网站停在旧内容上",
- `packages/backend/src/operations/watch.ts:18` heals: "系统自动重启没有成功",
- `packages/backend/src/operations/watch.ts:19` action: "尽快发起一次维护处理",
- `packages/backend/src/operations/watch.ts:42` const down: Finding = { ...WORKER_DOWN, detail: `worker 心跳停在 ${beijingStamp(hb.updated_at)}；${ALERTS.workerLogs}`, since: hb.updated_at };
- `packages/backend/src/publication/reports.ts:178` const issueName = text.startsWith(`${SITE.name} `) && /^(?:[周月]报\|주간 브리핑\|월간 브리핑) · /.test(text.slice(SITE.name.length + 1));
- `packages/backend/src/reports/correct.ts:52` return p && isRelease(p.category, p.tags) && !e.followUp && (e.firstParty \|\| e.role === "官方" \|\| e.role === "X·官方");
- `packages/backend/src/reports/edition.ts:124` if (official) return kind === "x_search" ? "X·官方" : "官方";
- `packages/backend/src/reports/edition.ts:126` if (kind === "mp_account") return "公众号";
- `packages/backend/src/reports/edition.ts:127` return "媒体";
- `packages/backend/src/sources/config-keys.ts:80` if (bad.length) throw new UnsupportedConfig(`不支持的配置项：${bad.join("、")}`);
- `packages/backend/src/sources/dates.ts:38` const numeric = /(\d{4})[-/.年](\d{1,2})[-/.月](\d{1,2})日?(?:(?:T\|\s*)(\d{1,2}):(\d{2})(?::(\d{2}))?)?/.exec(v);
- `packages/backend/src/sources/health.ts:24` export const SOURCE_USE_NAMES: Record<string, string> = { editorial: "编辑内容", hot_signal: "热度信号" };
- `packages/backend/src/sources/health.ts:81` return list + (rows.length > limit ? `；另有 ${rows.length - limit} 个，见后台信源列表` : "");
- `packages/backend/src/sources/rss.ts:70` const cleaned = v.replace(/星期[一二三四五六日天]/, "").replace(/\s+/g, " ").trim();
- `packages/backend/src/sources/web-list.ts:116` export const isCallToActionTitle = (title: string) => /^(read more\|read the blog\|learn more\|continue reading\|more\|阅读全文\|阅读更多\|查看详情\|了解更多)$/i.test(title.trim());
- `packages/backend/src/sources/web-list.ts:188` const DATE_HEADING = /^(?:[^\d:：]{1,12}[:：])?\s*(\d{4})[-/.年](\d{1,2})[-/.月](\d{1,2})日?$/;
- `packages/backend/src/sources/x.ts:66` bodyText: [post.text, post.quoted ? `\n\n【引用 @${post.quoted.handle}】${post.quoted.text}` : ""].join("").trim(),
- `packages/contracts/src/site.ts:350` kind: "更新" \| "优化" \| "公告" \| "下线";

## Lines still in Chinese with the en-US patch
- `apps/web/app/features/copy/CopyPage.tsx:13` const facts = (["Version", "Effective date", "Operator", "Contact", "版本", "生效日期", "运营主体", "联系方式", "备案号"] as const).filter((k) => doc.meta[k]);
- `apps/web/app/lib/markdown.ts:101` const title = (/^#\s+(.+)$/m.exec(md)?.[1] ?? "").replace(/（现行版）\|（现网）/g, "").trim();
- `apps/web/app/lib/markdown.ts:104` if (m[1] !== "项" && m[1] !== "Item" && !/^-+$/.test(m[1]!)) meta[m[1]!] = m[2]!;
- `apps/web/app/lib/markdown.ts:106` const introMatch = /(?:页首说明：\|Page intro:)\s*\n+((?:>.*\n?)+)/.exec(md);
- `apps/web/app/lib/site-copy.ts:6` return body.replace(/^(?:页脚\|Footer:)[^\n]*$/gm, "").trim();
- `apps/web/app/lib/site-copy.ts:11` const footerLine = /^(?:页脚[：:]\|Footer:)(.+)$/m.exec(doc.body)?.[1]?.trim() ?? null;
- `apps/web/app/routes/changelog.tsx:32` 更新: "bg-accent",
- `apps/web/app/routes/changelog.tsx:33` 优化: "bg-ok",
- `apps/web/app/routes/changelog.tsx:34` 公告: "bg-amber",
- `apps/web/app/routes/changelog.tsx:35` 下线: "bg-ink-4",
- `apps/web/app/routes/changelog.tsx:41` const KIND_NAME: Record<Release["kind"], string> = { 更新: "Update", 优化: "Improvement", 公告: "Announcement", 下线: "Retired" };
- `apps/web/app/routes/privacy.tsx:27` footer={<LegalFooterLinks links={[{ to: "/terms", label: POLICY.terms.name }, { to: "/feedback", label: "Feedback" }]} note={`Privacy notice ${PRIVACY.doc.meta[
- `apps/web/app/routes/terms.tsx:35` note={`${POLICY.terms.name} ${TERMS.doc.meta["Version"] ?? TERMS.doc.meta["版本"] ?? ""} · ${TERMS.doc.meta["Effective date"] ?? TERMS.doc.meta["生效日期"] ?? ""}`}
- `packages/backend/src/admin/auth.ts:180` if (!expected \|\| !given \|\| expected !== given) throw new LoginRejected("登录状态已失效，请重新登录");
- `packages/backend/src/admin/auth.ts:189` if (!allowed) throw new LoginRejected("这个飞书账号没有后台权限");
- `packages/backend/src/admin/auth.ts:207` if (!expected \|\| expected.length < 12) throw new LoginRejected("还没有设置管理员密码（环境变量 ADMIN_PASSWORD，至少 12 位）");
- `packages/backend/src/admin/auth.ts:210` if (!timingSafeEqual(given, wanted)) throw new LoginRejected("密码不对");
- `packages/backend/src/admin/auth.ts:213` INSERT INTO admin_users (email, display_name, last_login_at) VALUES (${PASSWORD_ADMIN}, '管理员', now())
- `packages/backend/src/admin/content.ts:39` if (!Number.isFinite(date.getTime()) \|\| date.toISOString() !== publishedAt) throw new Error("发布时间必须是完整、有效的 UTC ISO 日期");
- `packages/backend/src/admin/content.ts:40` if (date.getTime() > now) throw new Error("发布时间不能是未来日期");
- `packages/backend/src/admin/content.ts:42` if (!article.published_at \|\| article.published_at.getTime() >= recent \|\| date.getTime() >= recent) throw new Error("这里只校正新旧日期均早于七天窗口的历史内容");
- `packages/backend/src/admin/content.ts:73` if (!article) throw new Conflict("内容不存在");
- `packages/backend/src/admin/content.ts:78` if (prior.after.publishedAt !== input.publishedAt) throw new Conflict("同一个请求不能批准不同的发布时间");
- `packages/backend/src/admin/content.ts:82` if (article.revision !== input.version \|\| plan.hash !== input.hash) throw new Conflict("材料或日期已被修改，请重新核对日期校正预览");
- `packages/backend/src/admin/content.ts:95` throw new Conflict(`公开决定已变化，日期校正不能改变选稿、范围、内容或归组：${changed.join("、")}`);
- `packages/backend/src/admin/content.ts:164` const STALE = "这条内容的人工设置已被修改，请刷新后再操作";
- `packages/backend/src/admin/content.ts:169` if (!article) throw Object.assign(new Error("内容不存在"), { statusCode: 400 });
- `packages/backend/src/admin/feedback.ts:37` if (new Date(before.updated_at as Date).toISOString() !== input.version) throw new Conflict("这条反馈已被修改，请刷新后再操作");
- `packages/backend/src/admin/feedback.ts:76` await sql`UPDATE feedback SET content = '（已按要求删除）', email = NULL, page_url = NULL, screenshot_key = NULL, updated_at = now() WHERE id = ${id}`;
- `packages/backend/src/admin/settings.ts:18` if (input.data.length > MAX_QR_BYTES) throw new Error("二维码图片最大 2MB");
- `packages/backend/src/admin/settings.ts:20` if (!meta \|\| !["png", "jpeg", "webp"].includes(meta.format ?? "")) throw new Error("需要 PNG、JPG 或 WebP 图片");
- `packages/backend/src/admin/settings.ts:21` if ((meta.width ?? 0) < 120 \|\| (meta.height ?? 0) < 120) throw new Error("图片太小，二维码可能扫不出来");
- `packages/backend/src/admin/sources.ts:147` if (new Date(before.updated_at as Date).toISOString() !== input.version) throw new Conflict("信源已被其他操作修改，请刷新后再改");
- `packages/backend/src/admin/sources.ts:149` if (patch.kind !== undefined && !patch.config) throw new UnsupportedConfig("调整采集方式须同时提供完整采集配置");
- `packages/backend/src/admin/sources.ts:151` if (!(REPLACEABLE_SOURCE_KINDS as readonly string[]).includes(String(before.kind))) throw new UnsupportedConfig("仅 RSS、网页列表和 JSON 列表之间可调整采集方式");
- `packages/backend/src/admin/sources.ts:155` if (patch.config!.publishedAfter !== undefined && Date.parse(String(patch.config!.publishedAfter)) < Date.parse(String(boundary))) throw new UnsupportedConfig("
- `packages/backend/src/admin/sources.ts:168` if (dup) throw new Conflict(`与已有信源重复：${dup.name}（${dup.id}）`);
- `packages/backend/src/admin/sources.ts:217` } catch { throw new UnsupportedConfig("完整采集配置须包含有效的 HTTP(S) 地址"); }
- `packages/backend/src/admin/sources.ts:218` if (kind === "json_list" && (!Array.isArray(config.titlePaths) \|\| !config.titlePaths.length \|\| !config.titlePaths.every(p => typeof p === "string" && p.trim()) 
- `packages/backend/src/admin/sources.ts:273` if (!row) throw new Conflict(`信源 ID ${s.id} 已存在`);
- `packages/backend/src/content/provenance.ts:87` await audit("system", "article.attribution", `article:${articleId}`, "唯一 T1 原发信源与已验证 URL 范围一致（显式配置或已观察官网列表）",
- `packages/backend/src/content/sanitize.ts:189` const BARE_URL = /https?:\/\/[^\s<>"^`{\|}　-〿㐀-䶿一-鿿＀-￯぀-ヿ가-힯☀-➿️‍\u{1f300}-\u{1faff}]+/gu;
- `packages/backend/src/editorial/analyze.ts:96` const quoted = a.xPost.quoted?.text ? `\n\n[引用 ${a.xPost.quoted.handle ? `@${a.xPost.quoted.handle}` : "原推文"}]：${a.xPost.quoted.text}` : "";
- `packages/backend/src/editorial/analyze.ts:104` "请按系统规则评估以下单篇材料所代表的事件。只输出 attentionScore。",
- `packages/backend/src/editorial/analyze.ts:105` `【发布时间（北京时间）】\n${at ? scoreInputTime(at) : "未知（收录时间不代表发布时间）"}`,
- `packages/backend/src/editorial/analyze.ts:106` `【标题】\n${a.title.trim()}`,
- `packages/backend/src/editorial/analyze.ts:107` `【完整正文】\n${body.length > MAX_BODY_CHARS ? body.slice(0, MAX_BODY_CHARS) : body}`,
- `packages/backend/src/editorial/analyze.ts:155` const ZH_COUNT = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
- `packages/backend/src/editorial/analyze.ts:399` `来源：${t.sourceName ?? "（未注明）"}`, `原题：${t.title}`,
- `packages/backend/src/editorial/analyze.ts:400` `中文稿：\n${JSON.stringify({ titleZh: w.titleZh, summaryZh: w.summaryZh, reasonZh: w.reasonZh })}`,
- `packages/backend/src/editorial/analyze.ts:401` `问题：\n${problems.map((p) => `- ${p}`).join("\n")}`,
- `packages/backend/src/editorial/input.ts:44` const parts = [String(xPost.text ?? "").trim(), article.title ? `【X 长文】${article.title}` : "【X 长文】", article.text];
- `packages/backend/src/editorial/input.ts:74` rss: "RSS", web_list: "网页", json_list: "网页接口", x_search: "X 帖子", mp_account: "微信公众号", external: "外部上报",
- `packages/backend/src/editorial/input.ts:81` const body = (text: string) => text.length <= MAX_BODY_CHARS ? text : `${text.slice(0, MAX_BODY_CHARS)}\n【原文超过 ${MAX_BODY_CHARS} 字符，后文未提供】`;
- `packages/backend/src/editorial/input.ts:84` lines.push(`名称：${a.source.name}`);
- `packages/backend/src/editorial/input.ts:85` lines.push(`类型：${KIND_LABEL[a.source.kind] ?? a.source.kind}；分级：${a.source.tier}；一手来源：${a.source.firstParty ? "是" : "否"}`);
- `packages/backend/src/editorial/input.ts:88` if (a.publishedAt) lines.push(`发布时间：${beijingDate(a.publishedAt)} ${beijingTime(a.publishedAt)}（北京时间）`);
- `packages/backend/src/editorial/input.ts:89` if (a.author) lines.push(`作者：${a.author}`);
- `packages/backend/src/editorial/input.ts:91` lines.push(`作者：${a.xPost.authorName ?? ""} (@${a.xPost.handle ?? ""})`);
- `packages/backend/src/editorial/input.ts:92` lines.push(`帖子：\n${body(String(a.xPost.text ?? a.title))}`);
- `packages/backend/src/editorial/input.ts:93` if (a.xPost.quoted?.text) lines.push(`引用的帖子（@${a.xPost.quoted.handle ?? ""}）：\n${body(String(a.xPost.quoted.text))}`);
- `packages/backend/src/editorial/input.ts:94` if (a.translationZh) lines.push(`帖子中文译文：\n${truncate(a.translationZh, 4000)}`);
- `packages/backend/src/editorial/input.ts:96` lines.push(`标题：${collapseWhitespace(a.title)}`);
- `packages/backend/src/editorial/input.ts:98` lines.push(original ? `正文：\n${body(original)}` : "正文：（无）");
- `packages/backend/src/editorial/input.ts:99` if (a.translationZh && !a.bodyText) lines.push(`正文中文译文：\n${truncate(a.translationZh, 5000)}`);
- `packages/backend/src/editorial/input.ts:101` lines.push(`原文链接：${a.url}`);
- `packages/backend/src/editorial/models.ts:25` prefilter: { label: "精选预筛（是否属于这个行业，宽召回）", env: "PREFILTER_MODEL", default: DEFAULTS.prefilter ?? "default", purposes: ["prefilter_article"] },
- `packages/backend/src/editorial/models.ts:26` score: { label: "精选评分（两次独立评分，按信源分级门槛）", env: "SCORE_MODEL", default: DEFAULTS.score ?? "default", purposes: ["score_article"] },
- `packages/backend/src/editorial/models.ts:27` understand: { label: "内容理解（入选和接近入选的标题、摘要、推荐理由，能看图时看首图）", env: "UNDERSTAND_MODEL", default: DEFAULTS.understand ?? "default", purposes: ["understand_article"] },
- `packages/backend/src/editorial/models.ts:28` summarize: { label: "标题摘要（其余文章的中文标题与摘要）", env: "SUMMARIZE_MODEL", default: DEFAULTS.summarize ?? "default", purposes: ["summarize_article"] },
- `packages/backend/src/editorial/models.ts:29` wording: { label: "改用词（标题、摘要、理由用了本站不用的词时，只改这些词）", env: "WORDING_MODEL", default: DEFAULTS.wording ?? "default", purposes: ["mend_wording"], idle: () => !READER_
- `packages/backend/src/editorial/models.ts:30` structure: { label: "结构抽取（分类、标签、主体公司、事件事实，不写读者文字）", env: "STRUCTURE_MODEL", default: DEFAULTS.structure ?? "default", purposes: ["structure_article"] },
- `packages/backend/src/editorial/models.ts:31` group: { label: "事件归组（新报道与候选事实的关系：同一次发生、同一事件的进展、无关；被同一篇报道连起来的两个事件是否同一事件）", env: "GROUP_MODEL", default: DEFAULTS.group ?? "default", purposes: ["group_article",
- `packages/backend/src/editorial/models.ts:32` groupReview: { label: "归组复核（相似度不高的合并、两个事件的合并，写入前再读一遍；最好换一家模型）", env: "GROUP_REVIEW_MODEL", default: DEFAULTS.groupReview ?? "default", purposes: ["group_review"
- `packages/backend/src/editorial/models.ts:33` digest: { label: "事件综述", env: "DIGEST_MODEL", default: DEFAULTS.digest ?? "default", purposes: ["story_digest"] },
- `packages/backend/src/editorial/models.ts:35` report: { label: "周报月报的总述与主题（日报由规则算出，不用模型）", env: "REPORT_MODEL", default: DEFAULTS.report ?? "default", purposes: ["report_weekly", "report_monthly", "report_l
- `packages/backend/src/editorial/models.ts:36` translate: { label: "精选全文翻译（含引用帖）", env: "TRANSLATE_MODEL", default: DEFAULTS.translate ?? "default", purposes: ["translate_body", "translate_quoted"] },
- `packages/backend/src/editorial/translate.ts:52` const isChinese = (language: string \| null, sample: string) => language === "en" \|\| (!language && /[A-Za-z]/.test(sample.slice(0, 400)) && !/[぀-ヿ㐀-鿿가-힯]/.test(s
- `packages/backend/src/editorial/translate.ts:253` return words.length >= 10 && (words.match(/\p{L}/gu) ?? []).length >= 2 && /[぀-ヿ㐀-鿿가-힯]/.test(words);
- `packages/backend/src/editorial/wording.ts:12` const FIELDS: Array<[keyof ReaderCopy, string]> = [["titleZh", "标题"], ["summaryZh", "摘要"], ["reasonZh", ITEM_COPY.reasonLabel]];
- `packages/backend/src/editorial/wording.ts:25` problems.push(`${name}用了“${hit[0]}”（“${text.slice(Math.max(0, hit.index - 8), hit.index + hit[0].length + 8)}”）：${fix}`);
- `packages/backend/src/editorial/writing.ts:26` return /[A-Za-z]/.test(s) && !/[぀-ヿ㐀-鿿가-힯]/.test(s);
- `packages/backend/src/editorial/writing.ts:32` const cjk = (text.match(/[一-鿿]/g) \|\| []).length;
- `packages/backend/src/editorial/writing.ts:75` if (a.xPost) return "完整正文（来自 RSS / API 自带的 content 字段）";
- `packages/backend/src/editorial/writing.ts:76` if (a.bodyText) return a.source.fetchesBody ? "完整正文（抓自原始网页）" : "完整正文（来自 RSS / API 自带的 content 字段）";
- `packages/backend/src/editorial/writing.ts:77` if (a.excerpt) return "仅摘要（feed 未提供完整正文）";
- `packages/backend/src/editorial/writing.ts:78` if (a.bodyStatus === "unconfirmed") return "抓取失败，仅标题可用";
- `packages/backend/src/editorial/writing.ts:79` return "无有效文本";
- `packages/backend/src/editorial/writing.ts:85` lines.push(`【来源】${a.source.name}（${a.source.kind}，tier=${a.source.tier \|\| "未分级"}）`);
- `packages/backend/src/editorial/writing.ts:86` if (a.source.tags?.length) lines.push(`【来源标签】${a.source.tags.join(", ")}`);
- `packages/backend/src/editorial/writing.ts:89` if (name \|\| handle) lines.push(`【作者】${[name, handle ? `@${handle}` : null].filter(Boolean).join(" · ")}`);
- `packages/backend/src/editorial/writing.ts:90` if (a.publishedAt) lines.push(`【发布时间】${a.publishedAt.toISOString()}`);
- `packages/backend/src/editorial/writing.ts:94` const mediaParts = [images ? `${images} 张图` : null, videos ? `${videos} 个视频` : null, unfetchedXArticle(a) ? "含 X 长文链接（正文未抓到）" : null].filter(Boolean);
- `packages/backend/src/editorial/writing.ts:95` if (mediaParts.length) lines.push(`【媒体】${mediaParts.join(" · ")}`);
- `packages/backend/src/editorial/writing.ts:96` lines.push(`【原文链接】${a.url}`);
- `packages/backend/src/editorial/writing.ts:97` lines.push(`【标题】${a.title}`);
- `packages/backend/src/editorial/writing.ts:100` const label = quoted.handle ? `@${quoted.handle}` : "原推";
- `packages/backend/src/editorial/writing.ts:102` lines.push(`【引用 ${label}】（以下是作者转发/引用的**他人**内容，不是作者本人的产出）`);
- `packages/backend/src/editorial/writing.ts:105` lines.push(`【引用 ${label}】${quoted.text}`);
- `packages/backend/src/editorial/writing.ts:109` lines.push(opts.annotateQuoted && quoted ? "【正文（作者自己的内容）】" : "【正文】");
- `packages/backend/src/editorial/writing.ts:110` lines.push(capBody(a.xPost ? String(a.xPost.text ?? a.title) : (a.bodyText ?? a.excerpt ?? "(无正文)")));
- `packages/backend/src/editorial/writing.ts:112` lines.push(`【材料质量】${materialQuality(a)}`);
- `packages/backend/src/editorial/writing.ts:125` ["请按系统规则理解以下单篇材料，一次返回全部六个字段。", renderContext(a, { annotateQuoted: true })].join("\n\n");
- `packages/backend/src/editorial/writing.ts:199` if (ctx.publisher) facts.push(`文档发布域主体=${lexiconName(ctx.publisher) ?? ctx.publisher}`);
- `packages/backend/src/editorial/writing.ts:200` if (ctx.owner) facts.push(`来源账号主体=${lexiconName(ctx.owner) ?? ctx.owner}`);
- `packages/backend/src/editorial/writing.ts:201` return promptText("identity-context", { facts: facts.length > 0 ? facts.join("；") : "未识别到明确发布主体" });
- `packages/backend/src/editorial/writing.ts:272` const sourceName = (name?: string) => name?.trim() \|\| "（未注明）";
- `packages/backend/src/editorial/writing.ts:275` if (!d \|\| Number.isNaN(d.getTime())) return "未注明";
- `packages/backend/src/editorial/writing.ts:293` return `\n\n${promptText(name, { quotedLabel: input.quotedAuthor ? `@${input.quotedAuthor}` : "引用推文", quotedText: clampText(input.quotedText, 1500) })}`;
- `packages/backend/src/editorial/writing.ts:307` const ECHO_LINE = /^(来源[:：]\|【已核验身份上下文】\|这些事实只用于防止\|原始标题[:：]\|【时间锚点】)/;
- `packages/backend/src/events/consolidate.ts:117` && !!await mergeStoryInto(other.storyId, anchor.storyId, `同一事件（${first.relation}，复核 ${second.relation}）：${other.report.title}｜${anchor.report.title}`, "grouping
- `packages/backend/src/events/corrections.ts:58` if (!target) throw new Conflict("目标事实不存在，或它所在的事件已被合并");
- `packages/backend/src/events/corrections.ts:83` if (!left && (await mergeStoryInto(storyId, moved.story, `报道已全部移走，旧地址跳到报道所在事件（最后一篇 ${id}）`, actor))) continue;
- `packages/backend/src/events/corrections.ts:98` throw new Conflict("两个事件都必须是未合并的事件");
- `packages/backend/src/events/digest.ts:33` const lines = reports.slice(-40).map((r) => `${opts.corrected \|\| known.has(r.id) ? "" : "【新】"}报道 ${r.id}｜事实 ${r.fact_id}｜${beijingDate(r.at)} ${beijingTime(r.at
- `packages/backend/src/events/digest.ts:35` ? `事件当前标题：${story.title}\n\n报道内容或事实证据经过更正。请只依据下面这些报道的当前内容重写综述，不要沿用以前版本的说法。\n报道（按时间）：\n${lines.join("\n")}`
- `packages/backend/src/events/digest.ts:36` : `事件当前标题：${story.title}\n${story.digest ? `上一版综述：${story.digest}\n` : ""}\n报道（按时间，标【新】的是上一版之后的新报道）：\n${lines.join("\n")}`;
- `packages/backend/src/events/group.ts:75` const NO_SELECTED_COVERAGE: SelectionValue = { addsValue: true, reason: "没有已公开精选的相关报道" };
- `packages/backend/src/events/group.ts:80` system: BATCH_SYSTEM, user: batchUser(query, cands, "新报道", reading), schema: BatchSchema.refine(value => completeDecisions(value.decisions, cands.length), "Ever
- `packages/backend/src/events/group.ts:97` system: SIGNAL_SYSTEM, user: batchUser(query, cands, "帖子"), schema: SignalSchema.refine(value => completeDecisions(value.decisions, cands.length), "Every candid
- `packages/backend/src/events/group.ts:186` if (await mergeStoryInto(Number(id), storyId, `报道已全部移走，旧地址跳到报道所在事件（最后一篇 ${articleId}）`, "grouping")) redirected.push(Number(id));
- `packages/backend/src/events/group.ts:276` await markGrouped(articleId, a.revision, { addsValue: true, reason: "人工确认的归属" });
- `packages/backend/src/events/group.ts:294` await markGrouped(articleId, a.revision, { addsValue: true, reason: "历史资料按原文时间归档" });
- `packages/backend/src/events/group.ts:302` await markGrouped(articleId, a.revision, { addsValue: false, reason: "材料不足以确认当前消息" });
- `packages/backend/src/events/group.ts:317` await markGrouped(articleId, a.revision, { addsValue: false, reason: "未通过内容分析" });
- `packages/backend/src/events/group.ts:375` if (cands.some(c => c.factId === kept.factId && c.selected)) selection = { addsValue: true, reason: "同一新闻的代表报道候选" };
- `packages/backend/src/events/group.ts:379` await markGrouped(articleId, a.revision, manual ? { addsValue: true, reason: "人工确认的归属" } : selection, tx);
- `packages/backend/src/events/group.ts:435` selection = { addsValue: true, reason: "同一新闻的代表报道候选" };
- `packages/backend/src/events/group.ts:444` await markGrouped(articleId, a.revision, { addsValue: true, reason: "人工确认的归属" }, tx);
- `packages/backend/src/events/relate.ts:93` return at ? `${beijingDate(at)} ${beijingTime(at)}` : "未知";
- `packages/backend/src/events/relate.ts:100` `标题：${r.title}`,
- `packages/backend/src/events/relate.ts:101` `来源：${r.source}${r.firstParty ? "（当事方/官方）" : ""}｜发布时间：${when(r.at)}`,
- `packages/backend/src/events/relate.ts:102` `摘要：${(r.summary ?? "").slice(0, summaryLimit) \|\| "（无）"}`,
- `packages/backend/src/events/relate.ts:103` r.scope && r.scope !== "unknown" ? `资料范围：${r.scope === "composite" ? "多个独立发生的综合稿" : "单一具体发生或议题"}` : null,
- `packages/backend/src/events/relate.ts:105` ? `事实要素：主体=${f.subject \|\| "?"}；动作=${f.action \|\| "?"}；对象=${f.object \|\| "?"}；日期=${f.occurredAt \|\| "未知"}`
- `packages/backend/src/events/relate.ts:107` r.sourceText ? `【原文证据】\n${r.sourceText.slice(0, GROUP_BODY_CHARS)}\n【原文证据结束】` : null,
- `packages/backend/src/events/relate.ts:115` export function batchUser(query: ReportView, cands: CandidateView[], queryLabel = "新报道", reading: ReadingContext[] = []): string {
- `packages/backend/src/events/relate.ts:118` describeReport(c.report, `候选 ${candidateKey(i)}`, `（该事实已有 ${c.members} 篇报道；事实标题：${c.factTitle}）`),
- `packages/backend/src/events/relate.ts:119` queryLabel === "新报道" ? c.selected && c.selectedReport
- `packages/backend/src/events/relate.ts:120` ? describeReport(c.selectedReport, "已公开精选", "（增量只与这篇已展示的内容比较）")
- `packages/backend/src/events/relate.ts:121` : "【尚无公开精选】该候选只用于身份判断。" : null,
- `packages/backend/src/events/relate.ts:125` describeReport(report, `已公开精选阅读背景 R${i + 1}`, "（只比较信息覆盖，不是事实候选）", 2000),
- `packages/backend/src/events/relate.ts:126` sourceText ? `【该已选报道的原文证据】\n${sourceText.slice(0, GROUP_BODY_CHARS)}\n【原文证据结束】` : null,
- `packages/backend/src/events/relate.ts:128` return `${describeReport(query, queryLabel)}\n\n${list}${background ? `\n\n${background}` : ""}\n\n${queryLabel}与每个候选的关系是什么？${background ? "同时比较所有已公开精选内容，判断新增价值
- `packages/backend/src/events/relate.ts:132` return `${describeReport(a, "报道 A")}\n\n${describeReport(b, "报道 B")}\n\n这两篇报道是什么关系？`;
- `packages/backend/src/lib/text.ts:111` const cjk = s.match(/[㐀-鿿豈-﫿]/g) ?? [];
- `packages/backend/src/media/poster.ts:54` ? h("div", { display: "flex", marginLeft: 20, padding: "4px 16px", borderRadius: 999, backgroundColor: "rgba(23,107,117,0.09)", fontSize: 26, color: "#0f5a63" }
- `packages/backend/src/media/poster.ts:59` h("div", { display: "flex", marginTop: 36, fontSize: 28, color: "#66757a" }, clamp(`来源：${p.source}`, 34)),
- `packages/backend/src/media/poster.ts:67` h("div", { display: "flex", fontSize: 36, fontWeight: 700, color: INK }, "长按识别二维码"),
- `packages/backend/src/media/poster.ts:68` h("div", { display: "flex", marginTop: 14, fontSize: 28, lineHeight: 1.5, color: "#66757a" }, "阅读全文、中文译文与原文链接"),
- `packages/backend/src/media/upstream.ts:35` const reason = window === "minute" ? `图片代理上游流量超过每分钟 ${MINUTE_BUDGET / 1e6} MB` : `图片代理上游流量超过当日 ${DAY_BUDGET / 1e9} GB`;
- `packages/backend/src/media/upstream.ts:55` return [{ key: "egress.imgproxy", level: "later", title: "图片代理今天的流量额度用完了，未缓存的图片到零点前显示不出来", detail: String(img.value.reason) }];
- `packages/backend/src/notify/deliver.ts:41` ('feishu-content-main', 'content', 'feishu_webhook', false, 'FEISHU_PUSH_WEBHOOK_URL', '飞书内容主群'),
- `packages/backend/src/notify/deliver.ts:42` ('feishu-content-mirror', 'content', 'feishu_webhook', false, 'FEISHU_PUSH_MIRROR_WEBHOOK_URL', '飞书内容镜像群')
- `packages/backend/src/notify/deliver.ts:118` if (d.status !== "unknown" && d.status !== "failed") throw new Conflict("这条投递不需要处理");
- `packages/backend/src/notify/deliver.ts:120` if (!d.enabled) throw new Conflict("这个推送群已停用");
- `packages/backend/src/notify/deliver.ts:123` throw new Conflict("这条内容已不再符合推送条件");
- `packages/backend/src/notify/deliver.ts:132` if (!claimed.count) throw new Conflict("这条投递已被其他操作处理，请刷新后重试");
- `packages/backend/src/notify/deliver.ts:143` const unknown = await sql`UPDATE deliveries SET status = 'unknown', response = coalesce(response, '发送中进程中断，是否送达未知'), updated_at = now()
- `packages/backend/src/notify/deliver.ts:145` const failed = await sql`UPDATE deliveries SET status = 'failed', response = coalesce(response, '发送前进程中断，没有发出'), updated_at = now()
- `packages/backend/src/notify/deliver.ts:155` if (before.status !== "unknown" && before.status !== "failed") throw new Conflict("这条投递不需要处理");
- `packages/backend/src/notify/deliver.ts:158` const changed = await sql`UPDATE deliveries SET status = 'sent', sent_at = coalesce(sent_at, now()), response = ${`人工确认已送达：${input.note}`}, updated_at = now()
- `packages/backend/src/notify/deliver.ts:160` if (!changed.count) throw new Conflict("这条投递已被其他操作处理，请刷新后重试");
- `packages/backend/src/notify/deliver.ts:163` const changed = await sql`UPDATE deliveries SET status = 'failed', response = ${`人工放弃：${input.note}`}, updated_at = now()
- `packages/backend/src/notify/deliver.ts:165` if (!changed.count) throw new Conflict("这条投递已被其他操作处理，请刷新后重试");
- `packages/backend/src/notify/feishu.ts:97` return `${m}月${d}日`;
- `packages/backend/src/notify/feishu.ts:105` if (min < 60) return `${min} 分钟`;
- `packages/backend/src/notify/feishu.ts:106` if (min < 48 * 60) return `${Math.floor(min / 60)} 小时${min % 60 ? ` ${min % 60} 分钟` : ""}`;
- `packages/backend/src/notify/feishu.ts:107` return `${Math.floor(min / 1440)} 天`;
- `packages/backend/src/notify/feishu.ts:113` const lasting = now - since.getTime() >= 60_000 ? `（已持续 ${duration(now - since.getTime())}）` : "";
- `packages/backend/src/notify/feishu.ts:114` const lines = [f.impact && `影响：${f.impact}`, f.heals && `会自己好吗：${f.heals}`, f.action && `你需要：${f.action}`];
- `packages/backend/src/notify/feishu.ts:115` return { title: `${MARK[level]} ${repeat ? "仍未恢复：" : ""}${f.title}${lasting}`, lines: lines.filter((l): l is string => !!l) };
- `packages/backend/src/notify/feishu.ts:119` return { title: `✅ 已恢复：${title}`, lines: [`持续 ${duration(now - since.getTime())}（${beijingStamp(since)} 起）`] };
- `packages/backend/src/notify/feishu.ts:146` if (key === "gone:upload") return { imageKey: null, note: "（截图未能上传，已删除）" };
- `packages/backend/src/notify/feishu.ts:147` if (key === "gone:missing") return { imageKey: null, note: "（截图文件已不存在）" };
- `packages/backend/src/notify/feishu.ts:153` return { imageKey: null, note: "（截图文件已不存在）" };
- `packages/backend/src/notify/feishu.ts:166` return { imageKey: null, note: "（截图未能上传，已删除）" };
- `packages/backend/src/notify/feishu.ts:185` [{ tag: "text", text: `页面：${fb.page_url ?? "—"}` }],
- `packages/backend/src/notify/feishu.ts:186` [{ tag: "text", text: `邮箱：${fb.email ?? "（未留）"}` }],
- `packages/backend/src/notify/feishu.ts:191` await sendToChat(chat, "post", { zh_cn: { title: `反馈 #${fb.id}`, content: paragraphs } });
- `packages/backend/src/notify/selected-content.ts:33` const lines = [r.summary, r.reason ? `**${ITEM_COPY.reasonLabel}**：${r.reason}` : null, `来源：${publicSourceName(r.source_name)}`].filter(Boolean);
- `packages/backend/src/notify/selected-content.ts:42` { tag: "button", text: { tag: "plain_text", content: `${SITE.name} 查看` }, url: itemUrl(r.article_id), type: "primary" },
- `packages/backend/src/notify/selected-content.ts:43` { tag: "button", text: { tag: "plain_text", content: "原文" }, url: r.url, type: "default" },
- `packages/backend/src/operations/alerts.ts:50` title: "网站停止收录新文章",
- `packages/backend/src/operations/alerts.ts:51` impact: last?.at ? `读者看不到新文章：最后一篇收录于 ${beijingStamp(last.at)}` : "读者看不到新文章：一天内没有收录任何文章",
- `packages/backend/src/operations/alerts.ts:52` heals: ALERTS.usualFlow ? `没有，${ALERTS.usualFlow}` : "没有",
- `packages/backend/src/operations/alerts.ts:53` action: "尽快发起一次维护处理",
- `packages/backend/src/operations/alerts.ts:54` detail: `editorial articles.discovered_at 超过 ${QUIET_MINUTES} 分钟没有新值（热度信号单独评估）；查 sources.schedule、出网代理与采集失败`,
- `packages/backend/src/operations/alerts.ts:68` title: "有精选新闻卡在去重确认，暂未发布",
- `packages/backend/src/operations/alerts.ts:69` impact: `${waiting.length} 条已达到精选条件的新闻等待确认超过 10 分钟，还没进入精选，读者可能晚看到这些更新`,
- `packages/backend/src/operations/alerts.ts:70` heals: manual ? `${manual} 条需要人工处理后才能恢复${manual < waiting.length ? "；其余仍在自动恢复" : ""}`
- `packages/backend/src/operations/alerts.ts:71` : receipt ? "仍在等待自动恢复；付费结果未知的请求会在 30 分钟后自动放行一次" : "还会自动重试，但等待已经超过正常范围",
- `packages/backend/src/operations/alerts.ts:72` action: manual ? "转给 AI 处理；结果未知的付费请求需先核对计费与结果，再决定是否放行" : "转给 AI 检查等待原因，避免继续积压",
- `packages/backend/src/operations/alerts.ts:73` detail: waiting.slice(0, 8).map((item) => `${item.articleId}（${duration(now - item.since.getTime())}）${item.receiptId ? ` 回执 #${item.receiptId}` : ""}${item.err
- `packages/backend/src/operations/alerts.ts:84` SELECT left(coalesce(processing_error, '（无）'), 120) AS error, count(*)::int AS n FROM articles
- `packages/backend/src/operations/alerts.ts:90` title: "新内容卡住了，进不了网站",
- `packages/backend/src/operations/alerts.ts:91` impact: [p!.waiting >= 10 && `${p!.waiting} 篇新文章等了 2 小时以上还没处理完`, p!.failed >= 20 && `最近 3 小时 ${p!.failed} 篇新文章处理失败`]
- `packages/backend/src/operations/alerts.ts:93` .join("；") + "，精选和热点会缺内容",
- `packages/backend/src/operations/alerts.ts:94` heals: p!.waiting >= 10 ? "服务恢复后会自动补处理" : "不会，需要修好后重新处理这些文章",
- `packages/backend/src/operations/alerts.ts:95` action: "转给 AI 处理",
- `packages/backend/src/operations/alerts.ts:96` detail: errors.map((e) => `${e.error}（${e.n}）`).join("；") \|\| "没有记录错误",
- `packages/backend/src/operations/alerts.ts:114` title: "飞书内容群有推送没发出去",
- `packages/backend/src/operations/alerts.ts:115` impact: `过去 24 小时 ${refused!.n} 条通知没进${refused!.target ?? "内容群"}`,
- `packages/backend/src/operations/alerts.ts:116` heals: "不会自动重发",
- `packages/backend/src/operations/alerts.ts:117` action: "转给 AI 处理；如果推送机器人被移出了群，需要你把它加回去",
- `packages/backend/src/operations/alerts.ts:132` const state = b?.value.filesError ? `数据库已上传，附件打包失败：${b.value.filesError}` : b?.value.uploaded === false ? "未上传" : "";
- `packages/backend/src/operations/alerts.ts:137` title: "数据库备份连续两天没成功",
- `packages/backend/src/operations/alerts.ts:138` impact: lastOk ? `万一服务器出事，最近 ${duration(age)} 的数据可能无法完整恢复` : "还没有成功的完整备份，服务器出事时可能无法恢复数据",
- `packages/backend/src/operations/alerts.ts:139` heals: "不会",
- `packages/backend/src/operations/alerts.ts:140` action: "转给 AI 处理",
- `packages/backend/src/operations/alerts.ts:141` detail: `${lastOk ? "最近一次成功" : "首次备份尝试"} ${beijingStamp(since)}${state ? `；${state}` : ""}；看 ops.backup 的运行记录`,
- `packages/backend/src/operations/alerts.ts:145` out.push({ key: "backup.stale", level: "later", title: "数据库备份超过一天没成功", detail: b ? `最近一次 ${beijingStamp(b.value.at)}${state ? `（${state}）` : ""}；看 ops.backup` :
- `packages/backend/src/operations/alerts.ts:158` key: `sources.failing.${group.mode}`, level: "later", title: `${group.name}有 ${group.failing.length} 个信源连续抓取失败`,
- `packages/backend/src/operations/alerts.ts:159` detail: sourceHealthList(group.failing, s => `连续失败 ${s.fail_count} 次${s.last_error ? `，${s.last_error}` : ""}`) + "；转给 AI 检查抓取错误",
- `packages/backend/src/operations/alerts.ts:162` key: `sources.unstable.${group.mode}`, level: "later", title: `${group.name}有 ${group.unstable.length} 个信源反复抓取失败`,
- `packages/backend/src/operations/alerts.ts:163` detail: sourceHealthList(group.unstable, s => `近 7 天失败 ${s.failed}/${s.runs} 次`) + "；即使最近成功也需检查，避免继续漏收",
- `packages/backend/src/operations/alerts.ts:166` key: `sources.silent.${group.mode}`, level: "later", title: `${group.name}有 ${group.silent.length} 个信源 7 天未发现新内容`,
- `packages/backend/src/operations/alerts.ts:167` detail: sourceHealthList(group.silent, s => `近 7 天 ${s.runs} 次抓取、0 条新发现`) + "；需对照原站，区分低频更新与采集失效",
- `packages/backend/src/operations/alerts.ts:170` key: `sources.quality.${group.mode}`, level: "later", title: `${group.name}有 ${group.quality.length} 个信源需要核实文章质量`,
- `packages/backend/src/operations/alerts.ts:171` detail: sourceHealthList(group.quality, s => `近 7 天缺发布时间 ${s.undated} 篇、反复修订 ${s.repeated} 篇`) + "；缺时间可能让新闻按历史文章处理，反复修订需核对正文是否混入变化内容",
- `packages/backend/src/operations/alerts.ts:174` key: `sources.details.${group.mode}`, level: "later", title: `${group.name}有 ${group.detailFailures.length} 个信源详情补全失败`,
- `packages/backend/src/operations/alerts.ts:175` detail: sourceHealthList(group.detailFailures, s => `近 7 天 ${s.detail_failures} 次`) + "；查看抓取记录中的详情地址与错误",
- `packages/backend/src/operations/alerts.ts:184` out.push({ key: "receipts.unknown", level: "later", title: `${r!.receipts} 个付费请求的结果尚未确认`, detail: `${r!.services}；可能影响内容处理，后台“运行”页查看影响；自动恢复后仍未知的请求需核对后放行` });
- `packages/backend/src/operations/alerts.ts:186` if (r!.deliveries > 0) out.push({ key: "deliveries.unknown", level: "later", title: `${r!.deliveries} 条飞书内容群推送不确定是否送达`, detail: "后台“运行”页核对群里有没有，再标记或重发" });
- `packages/backend/src/operations/alerts.ts:194` out.push({ key: `queue.${q.name}`, level: "later", title: `后台任务排队超过 2 小时：${q.name}`, detail: `${q.n} 个等待，最早的等了 ${duration(now - q.oldest.getTime())}` });
- `packages/backend/src/operations/alerts.ts:206` return steps.length ? `${steps.join("、")}可能受影响` : "当前没有处理步骤使用这家模型服务";
- `packages/backend/src/operations/alerts.ts:210` llm: { name: "默认模型服务", where: "模型服务商的控制台" },
- `packages/backend/src/operations/alerts.ts:211` zhipu: { name: "智谱", where: "智谱开放平台" },
- `packages/backend/src/operations/alerts.ts:212` dashscope: { name: "阿里云百炼", where: "阿里云百炼控制台" },
- `packages/backend/src/operations/alerts.ts:213` deepseek: { name: "DeepSeek", where: "DeepSeek 开放平台" },
- `packages/backend/src/operations/alerts.ts:214` mimo: { name: "小米 MiMo", where: "小米 MiMo 开放平台" },
- `packages/backend/src/operations/alerts.ts:216` socialdata: { name: "SocialData", stops: "X（推特）上的新内容收不到", where: "SocialData 后台" },
- `packages/backend/src/operations/alerts.ts:217` jina: { name: "Jina", stops: "部分文章取不到正文", where: "Jina 后台" },
- `packages/backend/src/operations/alerts.ts:218` dajiala: { name: "极致了（Dajiala）", stops: "公众号新文章收不到", where: "极致了后台" },
- `packages/backend/src/operations/alerts.ts:223` return p ? (p.stops ?? modelStops(service)) : "相关功能停了";
- `packages/backend/src/operations/alerts.ts:225` export const providerConsole = (service: string) => PROVIDERS[service]?.where ?? `${service} 后台`;
- `packages/backend/src/operations/alerts.ts:233` AND error ~* '(HTTP 40[123]\\M\|insufficient\|balance\|arrear\|good standing\|欠费\|余额)'
- `packages/backend/src/operations/alerts.ts:240` title: `${providerName(p.service)} 拒绝服务，可能欠费或账号失效`,
- `packages/backend/src/operations/alerts.ts:242` heals: "不会",
- `packages/backend/src/operations/alerts.ts:243` action: `去${providerConsole(p.service)}看余额和账号状态，充值或恢复后系统会自动继续；两样都正常的话，发起一次维护查原因`,
- `packages/backend/src/operations/alerts.ts:244` detail: `最近 1 小时被拒 ${p.n} 次：${p.last}`,
- `packages/backend/src/operations/alerts.ts:255` title: `${providerName(c.service)} 过去 24 小时的调用额度用完了`,
- `packages/backend/src/operations/alerts.ts:256` impact: `${await providerStops(c.service)}，直到额度随时间腾出来`,
- `packages/backend/src/operations/alerts.ts:257` heals: "会，额度按 24 小时滚动恢复",
- `packages/backend/src/operations/alerts.ts:258` action: "这次不用处理；如果经常出现，再决定要不要调高额度",
- `packages/backend/src/operations/alerts.ts:259` detail: `24 小时内 ${c.used} 次，上限 ${c.per_day}（budgets 表）`,
- `packages/backend/src/operations/alerts.ts:282` state[`${DAILY_PREFIX}${date}`] ??= { ...legacy, title: `${date} 的日报还没生成` };
- `packages/backend/src/operations/alerts.ts:308` title: `${date} 的日报还没生成`, impact: `读者看不到 ${date} 的日报`,
- `packages/backend/src/operations/alerts.ts:309` heals: "尚未补齐；需查看运行记录确认是否需要人工补做",
- `packages/backend/src/operations/alerts.ts:310` action: "尽快发起一次维护处理",
- `packages/backend/src/operations/alerts.ts:311` detail: `reports daily ${date} 不存在；看 reports.compose 的运行记录`,
- `packages/backend/src/operations/alerts.ts:344` await sendAlert(`${date} 的日报没能补出，停止提醒`, [`读者看不到 ${date} 的日报；缺期从 ${beijingStamp(new Date(open.since))} 起，已超出七天的检查范围`]);
- `packages/backend/src/operations/alerts.ts:365` await sendAlert(`📋 系统日报 · ${beijingDay(now)}`, ["以下事项需要跟进，具体影响见各条说明；可把整条转给 AI 处理。", ...lines]);
- `packages/backend/src/operations/feedback.ts:45` if (list.length >= perMinute) throw new FeedbackRejected(429, "rate_limited", "提交太频繁，请稍后再试。", 60);
- `packages/backend/src/operations/feedback.ts:62` if (content.length < 2) throw new FeedbackRejected(400, "invalid_request", "请写下反馈内容。");
- `packages/backend/src/operations/feedback.ts:63` if (content.length > 5000) throw new FeedbackRejected(400, "invalid_request", "反馈内容最多 5000 字。");
- `packages/backend/src/operations/feedback.ts:65` if (email && (email.length > 200 \|\| !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) throw new FeedbackRejected(400, "invalid_request", "邮箱格式不正确。");
- `packages/backend/src/operations/feedback.ts:71` if (banned) throw new FeedbackRejected(403, "forbidden", "暂时无法提交反馈。");
- `packages/backend/src/operations/feedback.ts:78` if (!mime) throw new FeedbackRejected(400, "invalid_request", "截图需要是 PNG、JPG、WebP 或 GIF。");
- `packages/backend/src/operations/feedback.ts:79` if (input.screenshot.data.length > 8 * 1024 * 1024) throw new FeedbackRejected(400, "invalid_request", "截图最大 8MB。");
- `packages/backend/src/operations/feedback.ts:83` if (!decodes) throw new FeedbackRejected(400, "invalid_request", "截图无法识别，请换一张图片。");
- `packages/backend/src/operations/recover.ts:15` export const AUTO_RELEASE_NOTE = "自动放行：结果未知超过 30 分钟，未核对是否计费";
- `packages/backend/src/operations/recover.ts:32` if (row.status !== "unknown") throw new Conflict("只有结果未知的回执需要人工核对");
- `packages/backend/src/operations/recover.ts:33` const error = `人工核对：${input.billed ? "供应商已计费但结果未取回" : "供应商未计费"}。${input.note}`;
- `packages/backend/src/operations/recover.ts:50` const done = await release(r.id, AUTO_RELEASE_NOTE, "ops.recover", "结果未知，自动放行一次", null);
- `packages/backend/src/operations/reports.ts:32` `本周收录 ${n(items!.week)} 条（上周 ${n(items!.prev)}，${pct(items!.week, items!.prev)}），其中精选 ${n(items!.selected)} 条`,
- `packages/backend/src/operations/reports.ts:33` `在用信源 ${counts!.enabled} 个，本周新增 ${counts!.added} 个；抓取失败 ${counts!.failing} 个，不太稳定 ${counts!.degraded} 个`,
- `packages/backend/src/operations/reports.ts:38` lines.push("", `${group.name}：${group.sources.length} 个在用信源；本周归属条目 ${n(group.sources.reduce((sum, s) => sum + s.items, 0))} 条；连续失败 ${group.failing.length} 个、反复失
- `packages/backend/src/operations/reports.ts:39` if (group.failing.length) lines.push(`抓取失败：${sourceHealthList(group.failing, s => `连续失败 ${s.fail_count} 次${s.last_error ? `（${s.last_error}）` : ""}`, Infinity)}
- `packages/backend/src/operations/reports.ts:40` if (group.unstable.length) lines.push(`不稳定：${sourceHealthList(group.unstable, s => `失败 ${s.failed}/${s.runs} 次`, Infinity)}`);
- `packages/backend/src/operations/reports.ts:41` if (group.silent.length) lines.push(`7 天无新发现（需对照原站，可能只是低频更新）：${sourceHealthList(group.silent, s => `${s.runs} 次抓取`, Infinity)}`);
- `packages/backend/src/operations/reports.ts:42` if (group.quality.length) lines.push(`文章质量待核实：${sourceHealthList(group.quality, s => `缺发布时间 ${s.undated} 篇、反复修订 ${s.repeated} 篇`, Infinity)}`);
- `packages/backend/src/operations/reports.ts:43` if (group.detailFailures.length) lines.push(`详情补全失败：${sourceHealthList(group.detailFailures, s => `${s.detail_failures} 次`, Infinity)}`);
- `packages/backend/src/operations/reports.ts:48` lines.push("", followUp ? "需要处理的话，把这条转给 AI；详情在后台“信源”与“运行”页。" : "没有需要处理的信源。");
- `packages/backend/src/operations/reports.ts:49` await sendAlert("📊 信源周报", lines);
- `packages/backend/src/operations/watch.ts:16` title: "后台处理服务停了，网站不会出现新内容",
- `packages/backend/src/operations/watch.ts:17` impact: "新内容的采集、处理、推送和日报全部暂停，网站停在旧内容上",
- `packages/backend/src/operations/watch.ts:18` heals: "系统自动重启没有成功",
- `packages/backend/src/operations/watch.ts:19` action: "尽快发起一次维护处理",
- `packages/backend/src/operations/watch.ts:42` const down: Finding = { ...WORKER_DOWN, detail: `worker 心跳停在 ${beijingStamp(hb.updated_at)}；${ALERTS.workerLogs}`, since: hb.updated_at };
- `packages/backend/src/publication/items.ts:194` return a.language === "en" \|\| (!a.language && /[A-Za-z]/.test(a.body_text?.slice(0, 400) ?? "") && !/[぀-ヿ㐀-鿿가-힯]/.test(a.body_text?.slice(0, 400) ?? "")); // Ho
- `packages/backend/src/publication/publish.ts:284` const isChineseTitle = article.language === "en" \|\| (!article.language && /[A-Za-z]/.test(article.title) && !/[぀-ヿ㐀-鿿가-힯]/.test(article.title)); // HotBrief en-
- `packages/backend/src/reports/correct.ts:52` return p && isRelease(p.category, p.tags) && !e.followUp && (e.firstParty \|\| e.role === "官方" \|\| e.role === "X·官方");
- `packages/backend/src/reports/edition.ts:124` if (official) return kind === "x_search" ? "X·官方" : "官方";
- `packages/backend/src/reports/edition.ts:126` if (kind === "mp_account") return "公众号";
- `packages/backend/src/reports/edition.ts:127` return "媒体";
- `packages/backend/src/sources/config-keys.ts:80` if (bad.length) throw new UnsupportedConfig(`不支持的配置项：${bad.join("、")}`);
- `packages/backend/src/sources/dates.ts:38` const numeric = /(\d{4})[-/.年](\d{1,2})[-/.月](\d{1,2})日?(?:(?:T\|\s*)(\d{1,2}):(\d{2})(?::(\d{2}))?)?/.exec(v);
- `packages/backend/src/sources/health.ts:24` export const SOURCE_USE_NAMES: Record<string, string> = { editorial: "编辑内容", hot_signal: "热度信号" };
- `packages/backend/src/sources/health.ts:81` return list + (rows.length > limit ? `；另有 ${rows.length - limit} 个，见后台信源列表` : "");
- `packages/backend/src/sources/rss.ts:70` const cleaned = v.replace(/星期[一二三四五六日天]/, "").replace(/\s+/g, " ").trim();
- `packages/backend/src/sources/web-list.ts:116` export const isCallToActionTitle = (title: string) => /^(read more\|read the blog\|learn more\|continue reading\|more\|阅读全文\|阅读更多\|查看详情\|了解更多)$/i.test(title.trim());
- `packages/backend/src/sources/web-list.ts:188` const DATE_HEADING = /^(?:[^\d:：]{1,12}[:：])?\s*(\d{4})[-/.年](\d{1,2})[-/.月](\d{1,2})日?$/;
- `packages/backend/src/sources/x.ts:66` bodyText: [post.text, post.quoted ? `\n\n【引用 @${post.quoted.handle}】${post.quoted.text}` : ""].join("").trim(),
- `packages/contracts/src/site.ts:350` kind: "更新" \| "优化" \| "公告" \| "下线";
