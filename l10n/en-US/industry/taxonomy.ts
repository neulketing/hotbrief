// This field's classification: categories, the tag vocabulary, the company (subject) directory, and the identity
// lexicon that keeps the model from crediting news to the wrong company.
// The model tags items from these lists, topic pages (topics.json) group by tag, and the filter bar groups by category.
// When you switch fields: a category key appears in URLs (/all?category=…), so don't change it once you're live.
// Tags and the directory can grow or shrink any time.
// HotBrief US English edition (l10n/en-US). Original: industry/taxonomy.ts (AIHOT, MIT).

/**
 * Categories on the site (filter bar, card badges, per-category RSS). The key is the identity in URLs and the API; don't change it once live.
 * section is the heading in the daily briefing (several categories can share one, in this order). guide tells the structure model what
 * belongs here and where the line with neighboring categories is (the general rules are in prompts/structure.md).
 * commentary marks commentary categories (tutorials, opinion): when a story the briefing already covered gets a commentary follow-up,
 * it takes a one-line brief only (unless enough sources report it).
 * Items without a category go into the section of the first category whose key is industry (or the last section if there is none).
 * tagColor is the color of this category's small tag after the headline on Feishu push cards (a Feishu text_tag color name).
 * feedLabel is the name in per-category RSS titles (label if omitted). To publish one category inside another in the public API,
 * RSS and MCP, use PUBLIC_CATEGORIES in site/site.ts.
 */
export const CATEGORIES = [
  { key: "ai-models", tagColor: "indigo", label: "Models", feedLabel: "AI Models", section: "Model releases and updates", guide: "Releases of models themselves: new versions, open weights, changes in capability or price, and model results on existing leaderboards. Publishing a benchmark score once is not a new benchmark, and it is not a tutorial." },
  { key: "ai-products", tagColor: "turquoise", label: "Products", feedLabel: "AI Products", section: "Product launches and updates", guide: "Launches and updates of AI products people can use: features, apps, tools, APIs, platforms and engineering components. Inference frameworks, kernel libraries and hardware support released by a model company are still products; don't file them under models because of the company's name." },
  { key: "industry", tagColor: "orange", label: "Industry", feedLabel: "Industry News", section: "Industry news", guide: "Things that have happened: company operations, funding and M&A, people moves, partnerships, lawsuits, policy, real security incidents and the progress of investigations. News posted by the party involved, with an attitude, does not become opinion because of that." },
  { key: "paper", tagColor: "violet", label: "Research", feedLabel: "Research", section: "Papers and research", guide: "Papers, technical reports, new benchmarks or research datasets whose core is a new method, experimental design or finding. Systematic red-team experiments are research; results on existing leaderboards go to models, and news investigations of real incidents go to industry." },
  { key: "tip", tagColor: "green", label: "How-to", section: "Tips and opinion", guide: "Methods, prompts, tool usage, engineering retrospectives and technical explainers readers can follow and reuse. The point is a reusable practice; a tool launch alone is a product, and attitude or predictions without a method are opinion.", commentary: true },
  { key: "opinion", tagColor: "purple", label: "Opinion", section: "Tips and opinion", guide: "The core is the author's interpretation, judgment, argument, prediction, commentary or interview views. Discussing the market does not make it industry by default, and a famous author does not make it opinion by default.", commentary: true },
] as const satisfies ReadonlyArray<{ key: string; tagColor: string; label: string; feedLabel?: string; section: string; guide: string; commentary?: true }>;

/**
 * The kind of release this field watches most (for AI: new models): the "N new models" on the daily briefing's masthead, and
 * revising published briefings after a category correction, count by it. category and tag must both match; unit follows the number.
 * Set it to null for a field without one, and the masthead leaves the number out.
 */
export const RELEASE: { category: string; tag: string; unit: string } | null = { category: "ai-models", tag: "Model release", unit: " new models" };

/** Common terms of the field (lowercase) that weekly and monthly overviews may use without a source. The site name is added automatically. */
export const PLAIN_TERMS: readonly string[] = ["ai", "api", "llm", "gpu", "agi", "ceo", "ipo"];

/**
 * The "content type" the content-understanding step gives every item (written in prompts/content-understanding.md; change that prompt with it).
 * The scoring prompt (prompts/selection-score.md) weights its five dimensions differently per type.
 */
export const ITEM_TYPES = ["model_release", "product_launch", "tool_or_prompt", "research_paper", "industry_event", "opinion_analysis", "tutorial_explainer"] as const;

// ── Tag vocabulary ──────────────────────────────────────────────────────────────────────

/** Every item's first tag must be one of these category tags. */
export const CATEGORY_TAGS = [
  "Product update", "Model release", "Paper/Research", "Open source/Repo", "Tutorial/Practice", "Trend", "Expert view", "Eval/Benchmark", "Safety/Alignment", "Industry news", "Policy/Regulation",
  "Non-AI/General tool", "Other",
] as const;

/** Optional topic tags. */
export const TOPIC_TAGS = [
  "Agents", "Coding", "Reasoning", "Multimodal", "Voice", "Video", "Image generation", "RAG", "On-device", "Data/Training", "Search", "Deployment/Engineering", "Open-source ecosystem", "Embodied AI", "MCP/Tool use",
] as const;

/** Optional entity tags (companies, institutions, platforms). */
export const ENTITY_TAGS = ["OpenAI", "Anthropic", "DeepSeek", "DeepMind", "Google", "Meta", "Microsoft", "xAI", "Hugging Face", "GitHub", "arXiv", "NVIDIA", "Amazon", "Apple"] as const;

/** Near-synonyms models often write, mapped to the vocabulary's spelling (matched as written, then lowercased). */
export const TAG_SYNONYMS: Readonly<Record<string, string>> = {
  tutorial: "Tutorial/Practice", tutorials: "Tutorial/Practice", "how-to": "Tutorial/Practice", guide: "Tutorial/Practice", tips: "Tutorial/Practice", "best practices": "Tutorial/Practice", practice: "Tutorial/Practice",
  partnership: "Industry news", partnerships: "Industry news", ecosystem: "Industry news", funding: "Industry news", acquisition: "Industry news", "m&a": "Industry news", investment: "Industry news", "company news": "Industry news", industry: "Industry news", news: "Industry news",
  policy: "Policy/Regulation", regulation: "Policy/Regulation", law: "Policy/Regulation", legislation: "Policy/Regulation", safety: "Safety/Alignment", security: "Safety/Alignment", alignment: "Safety/Alignment",
  paper: "Paper/Research", papers: "Paper/Research", research: "Paper/Research",
  "open-source": "Open source/Repo", "open source": "Open source/Repo", repo: "Open source/Repo", repository: "Open source/Repo",
  product: "Product update", "product launch": "Product update", update: "Product update", release: "Model release", model: "Model release", "model launch": "Model release",
  trends: "Trend", phenomenon: "Trend", opinion: "Expert view", "expert opinion": "Expert view", commentary: "Expert view",
  benchmark: "Eval/Benchmark", benchmarks: "Eval/Benchmark", evaluation: "Eval/Benchmark", eval: "Eval/Benchmark",
  agent: "Agents", "ai agents": "Agents", "video generation": "Video", robotics: "Embodied AI", robots: "Embodied AI", "physical ai": "Embodied AI",
  "non-ai": "Non-AI/General tool", "general tool": "Non-AI/General tool", "dev tools": "Non-AI/General tool", devops: "Non-AI/General tool", "security scanning": "Non-AI/General tool",
  // Accept the original Chinese tags from a model that answers with them.
  产品更新: "Product update", 模型发布: "Model release", "论文/研究": "Paper/Research", "开源/仓库": "Open source/Repo", "教程/实践": "Tutorial/Practice", "现象/趋势": "Trend",
  大佬观点: "Expert view", "评测/基准": "Eval/Benchmark", "安全/对齐": "Safety/Alignment", 行业动态: "Industry news", "政策/监管": "Policy/Regulation", "非AI/通用工具": "Non-AI/General tool", 其他: "Other",
};

// ── Companies and subjects ──────────────────────────────────────────────────────────────

/**
 * Company topics: id → display name, the tag shown on cards (null: grouped by entity:<id> only), aliases.
 * aliases are for the structure model; orgNames are the organization names the company opens its posts with (company, lab, team),
 * which can be left out on its own topic page because readers know who is meant; otherNames are the company's other names
 * (official account names, sub-brands). All of these names are used to recognize which company is meant, e.g. when matching
 * a fact's subject to the publisher.
 */
export const ENTITIES: Record<string, { name: string; displayTag: string | null; aliases: string[]; orgNames?: string[]; otherNames?: string[] }> = {
  "world-labs": { name: "World Labs", displayTag: null, aliases: ["World Labs"] },
  "thinking-machines": { name: "Thinking Machines Lab", displayTag: null, aliases: ["Thinking Machines"] },
  amd: { name: "AMD", displayTag: null, aliases: ["AMD", "Advanced Micro Devices"] },
  openai: { name: "OpenAI", displayTag: "OpenAI", aliases: ["OpenAI", "ChatGPT", "Sora", "Codex", "GPT"], orgNames: ["OpenAI"], otherNames: ["OpenAI Developers"] },
  anthropic: { name: "Anthropic", displayTag: "Anthropic", aliases: ["Anthropic", "Claude"], orgNames: ["Anthropic"], otherNames: ["Claude Code"] },
  google: { name: "Google", displayTag: "Google", aliases: ["Google", "DeepMind", "Gemini"], orgNames: ["Google DeepMind", "Google Research", "Google", "DeepMind"], otherNames: ["Google AI", "Google Labs", "Google Cloud"] },
  deepseek: { name: "DeepSeek", displayTag: "DeepSeek", aliases: ["DeepSeek"], orgNames: ["DeepSeek"] },
  qwen: { name: "Alibaba Qwen", displayTag: null, aliases: ["Qwen", "Tongyi", "Alibaba"], orgNames: ["Qwen Team", "Qwen", "Alibaba"], otherNames: ["Alibaba Cloud"] },
  kimi: { name: "Kimi / Moonshot AI", displayTag: null, aliases: ["Kimi", "Moonshot"], orgNames: ["Moonshot AI", "Kimi"] },
  minimax: { name: "MiniMax", displayTag: null, aliases: ["MiniMax", "Hailuo"], orgNames: ["MiniMax"] },
  zhipu: { name: "Zhipu GLM", displayTag: null, aliases: ["Zhipu", "GLM", "Z.ai"], orgNames: ["Zhipu AI", "Z.ai"], otherNames: ["Zhipu"] },
  xai: { name: "xAI", displayTag: "xAI", aliases: ["xAI", "Grok"], orgNames: ["SpaceX Super Intelligence", "SpaceXAI", "SpaceXSI", "xAI"], otherNames: ["Grok Bot"] },
  meta: { name: "Meta", displayTag: "Meta", aliases: ["Meta", "Llama"], orgNames: ["Meta Superintelligence Labs", "Meta AI", "Meta"], otherNames: ["AI at Meta", "Muse"] },
  microsoft: { name: "Microsoft", displayTag: "Microsoft", aliases: ["Microsoft", "Copilot"], orgNames: ["Microsoft Research", "Microsoft AI", "Microsoft"] },
  nvidia: { name: "NVIDIA", displayTag: "NVIDIA", aliases: ["NVIDIA"], orgNames: ["NVIDIA"] },
  "hugging-face": { name: "Hugging Face", displayTag: "Hugging Face", aliases: ["Hugging Face"], orgNames: ["Hugging Face", "HuggingFace"] },
  cursor: { name: "Cursor", displayTag: null, aliases: ["Cursor", "Anysphere"], orgNames: ["Cursor"] },
  openrouter: { name: "OpenRouter", displayTag: null, aliases: ["OpenRouter"], orgNames: ["OpenRouter"] },
  amazon: { name: "Amazon / AWS", displayTag: "Amazon", aliases: ["Amazon", "AWS", "Bedrock", "Alexa"], otherNames: ["Amazon Web Services", "AWS Machine Learning"] },
  apple: { name: "Apple", displayTag: "Apple", aliases: ["Apple", "Apple Intelligence", "Siri"] },
  mistral: { name: "Mistral AI", displayTag: null, aliases: ["Mistral", "Le Chat"], otherNames: ["Mistral AI"] },
};

/**
 * Identity lexicon: a company that appears in a summary or headline must also appear in the original, or the original headline
 * comes back and the summary is dropped (so the model can't put a company the source never mentioned into a headline).
 * A field without this problem can leave the list empty.
 */
export const IDENTITY_LEXICON: ReadonlyArray<{ id: string; name: string; patterns: RegExp[] }> = [
  { id: "openai", name: "OpenAI", patterns: [/openai|chatgpt|\bgpt-?[o\d]|\bsora\b|\bcodex\b/i] },
  { id: "anthropic", name: "Anthropic", patterns: [/anthropic|\bclaude\b/i, /\b(?:opus|sonnet|haiku)\s*\d+(?:[.\-]\d+)*\b/i, /\bfable\s*\d+(?:[.\-]\d+)*\b|\bmythos\b/i] },
  { id: "google", name: "Google / Gemini", patterns: [/google|deepmind|\bgemini\b|notebooklm|\bveo\s?\d|\bAlphaFold\b|\bAMIE\b/i] },
  { id: "deepseek", name: "DeepSeek", patterns: [/deepseek/i] },
  { id: "xai", name: "xAI / Grok", patterns: [/\bxai\b|\bgrok\b/i] },
  { id: "meta", name: "Meta / Llama", patterns: [/\bMeta\b/, /\bmeta\s?ai\b|\bllama\b/i] },
  { id: "microsoft", name: "Microsoft / Copilot", patterns: [/microsoft|copilot/i] },
  { id: "nvidia", name: "NVIDIA", patterns: [/nvidia|\bnemotron\b|\bnemo\b|\bblackwell\b|\brubin(?:\s+ultra)?\b|\bcuda\b/i] },
  { id: "qwen", name: "Qwen", patterns: [/\bqwen|tongyi/i] },
  { id: "hugging-face", name: "Hugging Face", patterns: [/hugging\s?face/i] },
  { id: "cursor", name: "Cursor", patterns: [/\bCursor\b/] },
  { id: "kimi", name: "Kimi / Moonshot AI", patterns: [/\bkimi\b|\bmoonshot\s?ai\b/i] },
  { id: "openrouter", name: "OpenRouter", patterns: [/openrouter/i] },
  { id: "minimax", name: "MiniMax", patterns: [/minimax/i] },
  { id: "zhipu", name: "Zhipu GLM", patterns: [/zhipu|\bglm-?[4-9]/i] },
  { id: "hunyuan", name: "Tencent Hunyuan", patterns: [/hunyuan/i] },
  { id: "doubao", name: "ByteDance Doubao", patterns: [/doubao|bytedance/i] },
  { id: "mistral", name: "Mistral", patterns: [/mistral/i] },
  { id: "perplexity", name: "Perplexity", patterns: [/\bPerplexity\b/] },
  { id: "runway", name: "Runway", patterns: [/\brunway\b/i] },
  { id: "suno", name: "Suno", patterns: [/\bsuno\b/i] },
  { id: "midjourney", name: "Midjourney", patterns: [/midjourney/i] },
  { id: "stability-ai", name: "Stability AI", patterns: [/stability\s?ai/i] },
  { id: "elevenlabs", name: "ElevenLabs", patterns: [/eleven\s?labs/i] },
  { id: "vllm", name: "vLLM", patterns: [/\bvllm\b/i] },
  { id: "ollama", name: "Ollama", patterns: [/\bollama\b/i] },
  { id: "windsurf", name: "Windsurf", patterns: [/windsurf/i] },
  { id: "devin", name: "Devin", patterns: [/\bdevin\b/i] },
  { id: "manus", name: "Manus", patterns: [/\bmanus\b/i] },
  { id: "apple", name: "Apple AI", patterns: [/\bapple\s?(intelligence|silicon|ai)\b/i] },
  { id: "amazon", name: "Amazon / AWS", patterns: [/amazon|\baws\b/i] },
  { id: "baidu", name: "Baidu ERNIE", patterns: [/baidu|\bernie\s?bot\b/i] },
];

/** Articles on these domains are published by the matching company (hosting platforms such as GitHub and arXiv don't count). */
export const PUBLISHER_DOMAINS: ReadonlyArray<{ entityId: string; domains: readonly string[] }> = [
  { entityId: "openai", domains: ["openai.com"] },
  { entityId: "anthropic", domains: ["anthropic.com", "claude.com"] },
  { entityId: "google", domains: ["deepmind.google", "ai.google", "blog.google", "research.google"] },
  { entityId: "deepseek", domains: ["deepseek.com"] },
  { entityId: "xai", domains: ["x.ai"] },
  { entityId: "meta", domains: ["ai.meta.com"] },
  { entityId: "microsoft", domains: ["microsoft.com"] },
  { entityId: "nvidia", domains: ["nvidia.com"] },
  { entityId: "qwen", domains: ["qwen.ai"] },
  { entityId: "cursor", domains: ["cursor.com"] },
  { entityId: "openrouter", domains: ["openrouter.ai"] },
  { entityId: "amazon", domains: ["aws.amazon.com", "amazon.science"] },
  { entityId: "apple", domains: ["machinelearning.apple.com"] },
  { entityId: "mistral", domains: ["mistral.ai"] },
];

/** These spellings in the original also count as mentioning the company. */
export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{ entityId: string; pattern: RegExp }> = [
  { entityId: "meta", pattern: /@AIatMeta\b/i },
  { entityId: "zhipu", pattern: /\bZhipu(?:\s+AI\b|['’]s\b)/i },
];
