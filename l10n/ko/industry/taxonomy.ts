// 이 분야의 분류 체계: 분류, 태그 어휘, 회사(주체) 목록, 회사를 잘못 갖다 붙이지 않게 막는 신원 사전.
// 모델은 여기 어휘로 태그를 달고, 주제 페이지(topics.json)는 태그로 묶고, 필터 막대는 분류로 나눈다.
// 분야를 바꿀 때: 분류의 key 는 주소(/all?category=…)에 들어가므로 공개한 뒤에는 바꾸지 않는다. 태그와 목록은 언제든 늘리고 줄여도 된다.
// HotBrief 한국어판(l10n/ko). 원본: industry/taxonomy.ts (AIHOT, MIT).

/**
 * 웹의 분류(필터 막대, 카드 배지, 분류별 RSS). key 는 주소와 API 의 식별자라 공개 뒤에는 바꾸지 않는다.
 * section 은 일간 브리핑의 절 제목(여러 분류가 한 절을 같이 쓸 수 있고, 여기 순서대로 놓인다). guide 는 구조 추출 모델에게
 * 이 분류에 무엇이 들어가고 이웃 분류와 경계가 어디인지 알려 준다(전체 원칙은 prompts/structure.md).
 * commentary 는 해설류(튜토리얼, 의견)를 표시한다: 브리핑이 이미 다룬 일에 해설류 후속 보도가 오면 한 줄 단신만 차지한다(보도한 출처가 충분히 많을 때는 예외).
 * 분류가 안 된 자료는 key 가 industry 인 첫 분류가 속한 절에 넣는다(없으면 마지막 절).
 * tagColor 는 Feishu 푸시 카드에서 제목 뒤에 붙는 이 분류의 작은 태그 색이다(Feishu text_tag 의 색 이름).
 * feedLabel 은 분류별 RSS 제목에 쓰는 이름(없으면 label). 공개 API·RSS·MCP 에서 한 분류를 다른 분류에 합쳐 내보내려면 site/site.ts 의 PUBLIC_CATEGORIES 에 쓴다.
 */
export const CATEGORIES = [
  { key: "ai-models", tagColor: "indigo", label: "모델", feedLabel: "AI 모델", section: "모델 출시·업데이트", guide: "모델 자체의 출시, 새 버전, 가중치 공개, 성능이나 가격 변화, 그리고 기존 리더보드에 오른 모델 성적. 벤치마크 점수를 한 번 공개한 것은 새 벤치마크 출시도 튜토리얼도 아니다." },
  { key: "ai-products", tagColor: "turquoise", label: "제품", feedLabel: "AI 제품", section: "제품 출시·업데이트", guide: "쓸 수 있는 AI 제품, 기능, 앱, 도구, API, 플랫폼, 엔지니어링 구성 요소의 출시와 업데이트. 모델 회사가 낸 추론 프레임워크, 연산 라이브러리, 하드웨어 지원 구성 요소도 제품이다. 회사 이름만 보고 모델로 분류하지 않는다." },
  { key: "industry", tagColor: "orange", label: "업계", feedLabel: "업계 동향", section: "업계 동향", guide: "이미 일어난 회사 경영, 투자 유치와 인수합병, 인사, 제휴, 소송, 정책, 실제 보안 사고와 조사 진행. 당사자가 직접 글을 올리고 입장을 밝혔다고 해서 의견이 되지는 않는다." },
  { key: "paper", tagColor: "violet", label: "논문", feedLabel: "논문", section: "논문·연구", guide: "새 연구 방법, 실험 설계, 발견이 핵심인 논문, 기술 보고서, 새 벤치마크, 연구용 데이터셋. 체계적인 레드팀 실험은 연구다. 기존 리더보드 성적은 모델, 실제 사고에 대한 취재 보도는 업계로 분류한다." },
  { key: "tip", tagColor: "green", label: "튜토리얼", section: "팁과 의견", guide: "독자가 그대로 따라 쓸 수 있는 방법, 프롬프트, 도구 사용법, 엔지니어링 실무 회고, 기술 해설. 핵심은 다시 쓸 수 있는 방법이다. 도구 출시만 다루면 제품, 방법 없이 입장과 예측만 있으면 의견이다.", commentary: true },
  { key: "opinion", tagColor: "purple", label: "의견", section: "팁과 의견", guide: "핵심이 글쓴이의 해석, 판단, 주장, 예측, 논평, 인터뷰 속 견해인 것. 시장을 다룬다고 자동으로 업계가 되지 않고, 글쓴이가 유명하다고 자동으로 의견이 되지 않는다.", commentary: true },
] as const satisfies ReadonlyArray<{ key: string; tagColor: string; label: string; feedLabel?: string; section: string; guide: string; commentary?: true }>;

/**
 * 이 분야에서 가장 주목받는 출시 유형(AI 분야는 새 모델): 일간 브리핑 머리의 "새 모델 N개", 분류를 고친 뒤 이미 나간 브리핑을 다시 셀 때 쓴다.
 * category 는 분류, tag 는 태그이고 둘 다 맞아야 센다. unit 은 숫자 뒤에 붙는다.
 * 이런 유형이 없는 분야는 null 로 두면 머리에 이 숫자가 나오지 않는다.
 */
export const RELEASE: { category: string; tag: string; unit: string } | null = { category: "ai-models", tag: "모델 출시", unit: "개 새 모델" };

/** 주간·월간 브리핑의 총평에 출처 없이 바로 써도 되는 분야 공통어(소문자). 사이트 이름은 자동으로 포함된다. */
export const PLAIN_TERMS: readonly string[] = ["ai", "api", "llm", "gpu", "agi", "ceo", "ipo"];

/**
 * 내용 이해 단계가 자료마다 판정하는 "내용 유형"(prompts/content-understanding.md 에 적혀 있으니, 유형을 바꾸면 그 프롬프트도 같이 고친다).
 * 평가 프롬프트(prompts/selection-score.md)는 유형별로 다섯 항목에 다른 가중치를 준다.
 */
export const ITEM_TYPES = ["model_release", "product_launch", "tool_or_prompt", "research_paper", "industry_event", "opinion_analysis", "tutorial_explainer"] as const;

// ── 태그 어휘 ─────────────────────────────────────────────────────────────────────────

/** 자료마다 첫 태그는 반드시 이 "분류 태그" 가운데 하나다. */
export const CATEGORY_TAGS = [
  "제품 업데이트", "모델 출시", "논문/연구", "오픈소스/저장소", "튜토리얼/실전", "현상/트렌드", "주요 인물 의견", "평가/벤치마크", "안전/정렬", "업계 동향", "정책/규제",
  "비AI/범용 도구", "기타",
] as const;

/** 고를 수 있는 주제 태그. */
export const TOPIC_TAGS = [
  "에이전트", "코딩", "추론", "멀티모달", "음성", "영상", "이미지 생성", "RAG", "온디바이스", "데이터/학습", "검색", "배포/엔지니어링", "오픈소스 생태계", "로봇/피지컬 AI", "MCP/도구 호출",
] as const;

/** 고를 수 있는 개체 태그(회사, 기관, 플랫폼). */
export const ENTITY_TAGS = ["OpenAI", "Anthropic", "DeepSeek", "DeepMind", "Google", "Meta", "Microsoft", "xAI", "Hugging Face", "GitHub", "arXiv", "네이버", "카카오", "LG AI연구원", "업스테이지", "삼성"] as const;

/** 모델이 자주 쓰는 비슷한 말을 어휘의 표기로 맞춘다. */
export const TAG_SYNONYMS: Readonly<Record<string, string>> = {
  "튜토리얼/활용": "튜토리얼/실전", "팁/모범 사례": "튜토리얼/실전", "제휴/생태계": "업계 동향", "투자/인수": "업계 동향", "회사 소식": "업계 동향",
  제휴: "업계 동향", 협력: "업계 동향", 생태계: "업계 동향", 투자: "업계 동향", "투자 유치": "업계 동향", 인수: "업계 동향", 인수합병: "업계 동향", "M&A": "업계 동향",
  정책: "정책/규제", 규제: "정책/규제", 법안: "정책/규제", 법규: "정책/규제", 안전: "안전/정렬", 보안: "안전/정렬", 정렬: "안전/정렬",
  논문: "논문/연구", 연구: "논문/연구", paper: "논문/연구", papers: "논문/연구",
  "open-source": "오픈소스/저장소", 오픈소스: "오픈소스/저장소", 저장소: "오픈소스/저장소", repo: "오픈소스/저장소",
  튜토리얼: "튜토리얼/실전", 활용법: "튜토리얼/실전", 가이드: "튜토리얼/실전", 팁: "튜토리얼/실전", "모범 사례": "튜토리얼/실전", 실전: "튜토리얼/실전",
  제품: "제품 업데이트", 업데이트: "제품 업데이트", 출시: "모델 출시", 모델: "모델 출시", 트렌드: "현상/트렌드", 현상: "현상/트렌드", 의견: "주요 인물 의견", 관점: "주요 인물 의견",
  "영상 생성": "영상", 비디오: "영상", 비ai: "비AI/범용 도구", "non-ai": "비AI/범용 도구", "범용 도구": "비AI/범용 도구", "개발 도구": "비AI/범용 도구",
  "보안 스캔": "비AI/범용 도구", devops: "비AI/범용 도구", 업계: "업계 동향", 동향: "업계 동향",
  agent: "에이전트", agents: "에이전트", "AI 에이전트": "에이전트", 멀티모달AI: "멀티모달", "피지컬 AI": "로봇/피지컬 AI", 로봇: "로봇/피지컬 AI", 로보틱스: "로봇/피지컬 AI", "체화 AI": "로봇/피지컬 AI",
  // 원본 중국어 태그로 답하는 모델도 받는다.
  产品更新: "제품 업데이트", 模型发布: "모델 출시", "论文/研究": "논문/연구", "开源/仓库": "오픈소스/저장소", "教程/实践": "튜토리얼/실전", "现象/趋势": "현상/트렌드",
  大佬观点: "주요 인물 의견", "评测/基准": "평가/벤치마크", "安全/对齐": "안전/정렬", 行业动态: "업계 동향", "政策/监管": "정책/규제", "非AI/通用工具": "비AI/범용 도구", 其他: "기타",
};

// ── 회사와 주체 ─────────────────────────────────────────────────────────────────────────

/**
 * 회사 주제: id → 표시 이름, 카드에 보일 태그(null 이면 entity:<id> 로만 묶는다), 별칭.
 * aliases 는 구조 추출 모델이 본다. orgNames 는 회사가 소식을 낼 때 맨 앞에 쓰는 조직 이름(회사, 연구소, 팀)으로,
 * 그 회사의 주제 페이지에서는 독자가 누구 얘기인지 알므로 생략할 수 있다. otherNames 는 회사의 다른 이름(공식 계정명, 하위 브랜드)이다.
 * 이 이름들은 모두 어느 회사 얘기인지 알아보는 데 쓴다. 예를 들어 사실의 주체를 발행처와 맞출 때.
 */
export const ENTITIES: Record<string, { name: string; displayTag: string | null; aliases: string[]; orgNames?: string[]; otherNames?: string[] }> = {
  "world-labs": { name: "World Labs", displayTag: null, aliases: ["World Labs", "월드랩스"] },
  "thinking-machines": { name: "Thinking Machines Lab", displayTag: null, aliases: ["Thinking Machines", "씽킹머신즈"] },
  amd: { name: "AMD", displayTag: null, aliases: ["AMD", "Advanced Micro Devices"] },
  openai: { name: "OpenAI", displayTag: "OpenAI", aliases: ["OpenAI", "오픈AI", "ChatGPT", "챗GPT", "Sora", "Codex", "GPT"], orgNames: ["OpenAI"], otherNames: ["OpenAI Developers"] },
  anthropic: { name: "Anthropic", displayTag: "Anthropic", aliases: ["Anthropic", "앤트로픽", "Claude", "클로드"], orgNames: ["Anthropic"], otherNames: ["Claude Code"] },
  google: { name: "Google", displayTag: "Google", aliases: ["Google", "구글", "DeepMind", "딥마인드", "Gemini", "제미나이"], orgNames: ["Google DeepMind", "Google Research", "Google", "DeepMind", "구글"], otherNames: ["Google AI", "Google Labs", "Google Cloud"] },
  deepseek: { name: "DeepSeek", displayTag: "DeepSeek", aliases: ["DeepSeek", "딥시크"], orgNames: ["DeepSeek", "딥시크"] },
  qwen: { name: "알리바바 Qwen", displayTag: null, aliases: ["Qwen", "큐웬", "알리바바"], orgNames: ["알리바바", "알리바바클라우드", "Qwen Team", "Qwen", "Alibaba"], otherNames: ["Alibaba Cloud"] },
  kimi: { name: "Kimi / Moonshot AI", displayTag: null, aliases: ["Kimi", "키미", "Moonshot", "문샷"], orgNames: ["Moonshot AI", "문샷", "Kimi"] },
  minimax: { name: "MiniMax", displayTag: null, aliases: ["MiniMax", "미니맥스"], orgNames: ["MiniMax"] },
  zhipu: { name: "Zhipu GLM", displayTag: null, aliases: ["Zhipu", "즈푸", "GLM", "Z.ai"], orgNames: ["즈푸", "Zhipu AI", "Z.ai"], otherNames: ["Zhipu"] },
  xai: { name: "xAI", displayTag: "xAI", aliases: ["xAI", "Grok", "그록"], orgNames: ["SpaceX Super Intelligence", "SpaceXAI", "SpaceXSI", "xAI"], otherNames: ["Grok Bot"] },
  meta: { name: "Meta", displayTag: "Meta", aliases: ["Meta", "메타", "Llama", "라마"], orgNames: ["Meta Superintelligence Labs", "Meta AI", "Meta"], otherNames: ["AI at Meta", "Muse"] },
  microsoft: { name: "Microsoft", displayTag: "Microsoft", aliases: ["Microsoft", "마이크로소프트", "MS", "Copilot", "코파일럿"], orgNames: ["Microsoft Research", "Microsoft AI", "Microsoft", "마이크로소프트"] },
  nvidia: { name: "NVIDIA", displayTag: null, aliases: ["NVIDIA", "엔비디아"], orgNames: ["NVIDIA", "엔비디아"] },
  "hugging-face": { name: "Hugging Face", displayTag: "Hugging Face", aliases: ["Hugging Face", "허깅페이스"], orgNames: ["Hugging Face", "HuggingFace"] },
  cursor: { name: "Cursor", displayTag: null, aliases: ["Cursor", "커서", "Anysphere"], orgNames: ["Cursor"] },
  openrouter: { name: "OpenRouter", displayTag: null, aliases: ["OpenRouter", "오픈라우터"], orgNames: ["OpenRouter"] },
  naver: { name: "네이버 HyperCLOVA X", displayTag: "네이버", aliases: ["네이버", "NAVER", "하이퍼클로바X", "HyperCLOVA X", "클로바"], otherNames: ["네이버클라우드", "NAVER Cloud", "NAVER D2"] },
  kakao: { name: "카카오", displayTag: "카카오", aliases: ["카카오", "Kakao", "카나나", "Kanana"], otherNames: ["카카오브레인", "카카오 테크"] },
  "lg-ai": { name: "LG AI연구원 EXAONE", displayTag: "LG AI연구원", aliases: ["LG AI연구원", "LG AI Research", "엑사원", "EXAONE"] },
  upstage: { name: "업스테이지 Solar", displayTag: "업스테이지", aliases: ["업스테이지", "Upstage", "솔라", "Solar"] },
  samsung: { name: "삼성", displayTag: "삼성", aliases: ["삼성", "삼성전자", "Samsung", "가우스", "Gauss"], otherNames: ["삼성리서치", "Samsung Research"] },
  "sk-telecom": { name: "SK텔레콤", displayTag: null, aliases: ["SK텔레콤", "SKT", "에이닷", "A.X"] },
  kt: { name: "KT", displayTag: null, aliases: ["KT", "믿:음"] },
};

/**
 * 신원 사전: 요약과 제목에 나오는 회사는 원문에도 나와야 한다. 아니면 원래 제목으로 되돌리고 요약을 버린다(모델이 회사를 잘못 갖다 붙이는 것을 막는다).
 * 패턴은 한국어 표기와 원문 표기를 함께 담는다. 한국어 제목에 "구글"이 나오면 원문에 Google 또는 구글이 있어야 한다.
 * 분야에 이런 문제가 없으면 빈 배열로 둬도 된다.
 */
export const IDENTITY_LEXICON: ReadonlyArray<{ id: string; name: string; patterns: RegExp[] }> = [
  { id: "openai", name: "OpenAI", patterns: [/openai|오픈\s?ai|chatgpt|챗\s?gpt|\bgpt-?[o\d]|\bsora\b|소라|\bcodex\b/i] },
  { id: "anthropic", name: "Anthropic", patterns: [/anthropic|앤트로픽|\bclaude\b|클로드/i, /\b(?:opus|sonnet|haiku)\s*\d+(?:[.\-]\d+)*\b/i, /\bfable\s*\d+(?:[.\-]\d+)*\b|\bmythos\b/i] },
  { id: "google", name: "Google / Gemini", patterns: [/google|구글|deepmind|딥마인드|\bgemini\b|제미나이|notebooklm|\bveo\s?\d|\bAlphaFold\b|\bAMIE\b/i] },
  { id: "deepseek", name: "DeepSeek", patterns: [/deepseek|딥시크/i] },
  { id: "xai", name: "xAI / Grok", patterns: [/\bxai\b|\bgrok\b|그록/i] },
  { id: "meta", name: "Meta / Llama", patterns: [/\bMeta\b|메타/, /\bmeta\s?ai\b|\bllama\b/i] },
  { id: "microsoft", name: "Microsoft / Copilot", patterns: [/microsoft|마이크로소프트|copilot|코파일럿/i] },
  { id: "nvidia", name: "NVIDIA", patterns: [/nvidia|엔비디아|\bnemotron\b|\bnemo\b|\bblackwell\b|블랙웰|\brubin(?:\s+ultra)?\b|\bcuda\b/i] },
  { id: "qwen", name: "Qwen", patterns: [/\bqwen|큐웬|알리바바|alibaba/i] },
  { id: "hugging-face", name: "Hugging Face", patterns: [/hugging\s?face|허깅\s?페이스/i] },
  { id: "cursor", name: "Cursor", patterns: [/\bCursor\b/] },
  { id: "kimi", name: "Kimi / Moonshot AI", patterns: [/\bkimi\b|키미|\bmoonshot\s?ai\b|문샷/i] },
  { id: "openrouter", name: "OpenRouter", patterns: [/openrouter|오픈라우터/i] },
  { id: "minimax", name: "MiniMax", patterns: [/minimax|미니맥스/i] },
  { id: "zhipu", name: "Zhipu GLM", patterns: [/zhipu|즈푸|\bglm-?[4-9]/i] },
  { id: "hunyuan", name: "Tencent Hunyuan", patterns: [/hunyuan|훈위안|텐센트|tencent/i] },
  { id: "doubao", name: "ByteDance Doubao", patterns: [/doubao|bytedance|바이트댄스/i] },
  { id: "mistral", name: "Mistral", patterns: [/mistral|미스트랄/i] },
  { id: "perplexity", name: "Perplexity", patterns: [/\bPerplexity\b|퍼플렉시티/] },
  { id: "runway", name: "Runway", patterns: [/\brunway\b|런웨이/i] },
  { id: "suno", name: "Suno", patterns: [/\bsuno\b|수노/i] },
  { id: "midjourney", name: "Midjourney", patterns: [/midjourney|미드저니/i] },
  { id: "stability-ai", name: "Stability AI", patterns: [/stability\s?ai|스태빌리티/i] },
  { id: "elevenlabs", name: "ElevenLabs", patterns: [/eleven\s?labs|일레븐랩스/i] },
  { id: "vllm", name: "vLLM", patterns: [/\bvllm\b/i] },
  { id: "ollama", name: "Ollama", patterns: [/\bollama\b|올라마/i] },
  { id: "windsurf", name: "Windsurf", patterns: [/windsurf|윈드서프/i] },
  { id: "devin", name: "Devin", patterns: [/\bdevin\b/i] },
  { id: "manus", name: "Manus", patterns: [/\bmanus\b|마누스/i] },
  { id: "apple", name: "Apple AI", patterns: [/\bapple\s?(intelligence|silicon|ai)\b|애플\s?(인텔리전스|AI)/i] },
  { id: "amazon", name: "Amazon / AWS", patterns: [/amazon|아마존|\baws\b/i] },
  { id: "baidu", name: "Baidu ERNIE", patterns: [/baidu|바이두|\bernie\s?bot\b/i] },
  { id: "naver", name: "네이버 / HyperCLOVA X", patterns: [/네이버|\bnaver\b|하이퍼\s?클로바|hyperclova/i] },
  { id: "kakao", name: "카카오", patterns: [/카카오|\bkakao\b|카나나|\bkanana\b/i] },
  { id: "lg-ai", name: "LG AI연구원 / EXAONE", patterns: [/lg\s?ai|엑사원|\bexaone\b/i] },
  { id: "upstage", name: "업스테이지 / Solar", patterns: [/업스테이지|\bupstage\b/i] },
  { id: "samsung", name: "삼성", patterns: [/삼성|\bsamsung\b/i] },
];

/** 이 도메인의 글은 발행처가 해당 회사다(GitHub, arXiv 같은 호스팅 플랫폼은 제외). */
export const PUBLISHER_DOMAINS: ReadonlyArray<{ entityId: string; domains: readonly string[] }> = [
  { entityId: "openai", domains: ["openai.com"] },
  { entityId: "anthropic", domains: ["anthropic.com", "claude.com"] },
  { entityId: "google", domains: ["deepmind.google", "ai.google", "blog.google"] },
  { entityId: "deepseek", domains: ["deepseek.com"] },
  { entityId: "xai", domains: ["x.ai"] },
  { entityId: "meta", domains: ["ai.meta.com"] },
  { entityId: "microsoft", domains: ["microsoft.com"] },
  { entityId: "nvidia", domains: ["nvidia.com"] },
  { entityId: "qwen", domains: ["qwen.ai"] },
  { entityId: "cursor", domains: ["cursor.com"] },
  { entityId: "openrouter", domains: ["openrouter.ai"] },
  { entityId: "naver", domains: ["d2.naver.com", "clova.ai", "navercloudcorp.com"] },
  { entityId: "kakao", domains: ["tech.kakao.com", "kakaocorp.com"] },
  { entityId: "lg-ai", domains: ["lgresearch.ai"] },
  { entityId: "upstage", domains: ["upstage.ai"] },
];

/** 원문의 이런 표기도 해당 회사를 언급한 것으로 친다. */
export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{ entityId: string; pattern: RegExp }> = [
  { entityId: "meta", pattern: /@AIatMeta\b/i },
  { entityId: "zhipu", pattern: /\bZhipu(?:\s+AI\b|['’]s\b)/i },
];
