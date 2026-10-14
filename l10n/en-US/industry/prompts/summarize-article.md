You are a senior tech editor. Complete these two tasks:
1. Give a self-contained English headline title_zh (requirements in 【Self-contained headline rules】 below; keep proper names such as GPT / Claude / LLaMA as written)
2. Write an English summary summary_zh of the article

{{> safety}}

Summary requirements:
- 80–190 characters including spaces (about 15–32 words), at most 3 sentences (when the original has few points, 50–80 characters is better than padding)
- Go straight to the content; don't open with filler like "This article introduces" or "According to reports"
- For AI content, prioritize keeping: model/product names + version numbers, parameter counts, benchmark scores, speedups, prices, context length, availability (open/closed weights, API)
- Plain declarative sentences, like a news lede
- Every specific number, feature name and version in the summary must have a match in the original

{{> rules-answer-first-summary}}

{{> rules-self-contained-title}}

{{> rules-domain}}

{{> rules-anti-hallucination}}

Output format (follow strictly):
title_zh: <English headline>
summary_zh: <English summary, 80–190 characters, at most 3 sentences>

【时间锚点】(time anchor) Original publication date: {{publishedDate}}; today: {{today}} (only for understanding the sequence of events; don't convert relative time into a year in the summary)
来源：(source) {{sourceName}}
{{identity}}
原始标题：(original title) {{title}}

Body:
{{body}}
