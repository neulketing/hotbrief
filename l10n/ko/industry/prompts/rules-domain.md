
【AI 분야 번역 규칙 — 이 플랫폼은 100% AI/ML/LLM 업계 콘텐츠다. 반드시 지킨다】

1. 중의어 기본값: 아래 단어는 한국어에서 AI 와 무관한 뜻으로도 읽히므로 **모두 AI 의미로 옮긴다**:
   - LLM = 대규모 언어 모델(절대 "법학 석사"/"Master of Laws"로 옮기지 않는다)
   - Token / tokens = 모델 토큰("토큰"으로 쓰되 암호화폐 토큰이나 인증 토큰으로 옮기지 않는다)
   - Transformer = Transformer 아키텍처(영어 그대로, "변압기"로 옮기지 않는다)
   - Diffusion = 확산 모델(AI 생성 기법이지 물리적 확산이 아니다)
   - Agent / Agentic = AI 에이전트 / 에이전트형("대리인"/"중개인"으로 옮기지 않는다)
   - Alignment = 정렬(AI 안전 맥락)
   - Inference = 추론(모델 생성)
   - Reasoning = 추론(주의: inference 와 똑같이 "추론"으로 옮기므로 필요하면 CoT 는 "연쇄 추론"으로 구분한다. reasoning model 은 o1/o3/R1 같은 사고형 모델을 가리킨다)
   - Embedding = 임베딩(영어를 그대로 써도 된다)
   - Distillation = 지식 증류
   - Hallucination = 모델 환각
   - Fine-tune / Fine-tuning = 파인튜닝(미세 조정)
   - Pretrain / Pretraining = 사전 학습
   - Context window = 컨텍스트 창
   - Prompt = 프롬프트
   - Skill / Skills = 스킬(Claude 같은 에이전트 프레임워크의 기능 묶음이며 "특기"로 옮기지 않는다)

2. 아래 고유명사는 **모두 영어 원문을 그대로 쓰고**, 번역하거나 한국어 괄호 설명을 붙이지 않는다:
   - AI 회사: OpenAI / Anthropic / Google DeepMind / xAI / Meta AI / Mistral / DeepSeek / Cohere / HuggingFace(HF) / Runway / ElevenLabs / Suno / Pika / Midjourney / Perplexity
   - 모델 계열(예시 + 일반 규칙): GPT / Claude / Gemini / Llama / Qwen / Grok / o 시리즈 / DeepSeek / Mistral / Mixtral / Phi / Sora / Veo / Imagen
     **규칙**: 대형 모델 계열 이름과 제품 코드명은 모두 영어 그대로 쓴다
   - 모델 버전(예시 + 일반 규칙): GPT-5 / Claude 4.7 / Claude Sonnet 4.6 / Llama 4 / Gemini 3 / o3 / o4 / DeepSeek-V4 / Qwen3.7
     **규칙**: 버전 표기는 한 글자도 바꾸지 않는다(4o / 4.7 / 405B / V4 / R1 같은 영문·숫자 접미사 포함). 절대 "풀어 쓰지" 않는다("405B"를 "4050억"으로, "V4"를 "4세대"로 바꾸지 않는다)
   - 기술 약어(예시 + 일반 규칙): LLM / RAG / RLHF / DPO / LoRA / QLoRA / PEFT / MoE / CoT / ReAct / KV cache / SOTA / AGI / MCP / ADK / NPU / GPU / TPU
     **규칙**: 2–5글자 대문자 약어는 기본적으로 AI/ML 의미로 보고 영어 그대로 쓴다
   - 평가 벤치마크(예시 + 일반 규칙): MMLU / GPQA / HumanEval / SWE-bench / SWE-bench Verified / AIME / HLE / ARC-AGI / ARC-AGI 2 / MT-Bench / Chatbot Arena / Aider Polyglot / LiveCodeBench
     **규칙**: -bench / -eval 로 끝나거나 모두 대문자인 평가 이름은 영어 그대로 쓴다
   - AI 도구·제품: Cursor / Copilot / Codex / Aider / Devin / Cline / Claude Code / Windsurf / Zed / v0 / Bolt / Lovable / Replit Agent
   - 에이전트 프레임워크: LangChain / LangGraph / LlamaIndex / CrewAI / AutoGen / Pydantic AI / Vercel AI SDK / DSPy
   - 추론·배포: Ollama / vLLM / SGLang / TensorRT / Triton / CUDA / ROCm
   - 일반 기술: API / SDK / CLI / IDE / SaaS / CDN / SSO / OAuth / JWT / WebSocket / SSE / gRPC

3. 한국 회사는 **국내 언론이 쓰는 공식 한국어 이름**을 우선 쓴다(처음 나올 때는 "LG AI연구원 엑사원(EXAONE)"처럼 함께 적어도 되고, 그 뒤로는 한 가지로 통일한다):
   - 네이버 하이퍼클로바X(HyperCLOVA X) / 카카오 카나나(Kanana) / LG AI연구원 엑사원(EXAONE) / 업스테이지 솔라(Solar) / 삼성전자 가우스(Gauss) / SK텔레콤 에이닷(A.X) / KT 믿:음
   중국 회사는 국제적으로 통하는 영어 이름을 쓰고, 필요하면 처음 한 번만 한국어 설명을 붙인다:
   - Qwen(알리바바) / ERNIE(바이두) / GLM(Zhipu) / Kimi(Moonshot AI) / DeepSeek / Step(StepFun) / Yi(01.AI) / Baichuan / Doubao(바이트댄스) / Hunyuan(텐센트) / Kling(콰이쇼우) / Jimeng(바이트댄스) / MiniMax / LongCat(메이퇀) / Skywork(쿤룬완웨이) / MiniCPM(ModelBest) / 화웨이 Ascend / 캠브리콘(Cambricon)

4. 코드 / 명령 / URL / 숫자 단위는 **한 글자도 바꾸지 않고** 그대로 둔다:
   - 백틱 코드 `code` 는 번역하지 않는다
   - /code-review, pip install, npm run 같은 명령은 번역하지 않는다("코드 리뷰"로 옮기지 않는다)
   - URL 은 그대로 둔다
   - 숫자+단위: 8k context / 175B params / 3.5x speedup / $3 per M tokens / 99.9%
   - 금액, 파라미터 수, 비율, 범위는 원문의 아라비아 숫자와 단위를 그대로 쓴다. $10B-$100B 를 "수백억~수천억 달러" 같은 한국어 수량 표현으로 바꾸지 않는다
