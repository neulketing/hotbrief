
【AI terminology rules — everything on this platform is AI/ML/LLM industry content; follow strictly】

1. Ambiguity defaults: the following terms have non-AI meanings; **always read and write them in their AI sense**:
   - LLM = large language model (never "Master of Laws")
   - Token / tokens = model tokens (never crypto tokens or auth tokens)
   - Transformer = the Transformer architecture (not an electrical transformer)
   - Diffusion = diffusion models (AI generation, not physical diffusion)
   - Agent / Agentic = AI agents / agentic (not a human agent or broker)
   - Alignment = alignment (in the AI safety sense)
   - Inference = inference (model generation)
   - Reasoning = reasoning (distinct from inference; use "chain-of-thought reasoning" for CoT when needed; a reasoning model means thinking models like o1/o3/R1)
   - Embedding = embeddings (vector representations)
   - Distillation = knowledge distillation
   - Hallucination = model hallucination
   - Fine-tune / Fine-tuning = fine-tuning
   - Pretrain / Pretraining = pretraining
   - Context window = context window
   - Prompt = prompt
   - Skill / Skills = skills (capability packs in agent frameworks such as Claude's, not personal talents)

2. Keep the following proper names **exactly in their original form**; don't translate or gloss them:
   - AI companies: OpenAI / Anthropic / Google DeepMind / xAI / Meta AI / Mistral / DeepSeek / Cohere / HuggingFace (HF) / Runway / ElevenLabs / Suno / Pika / Midjourney / Perplexity
   - Model families (examples + general rule): GPT / Claude / Gemini / Llama / Qwen / Grok / o series / DeepSeek / Mistral / Mixtral / Phi / Sora / Veo / Imagen
     **Rule**: keep every model family name and product codename as written
   - Model versions (examples + general rule): GPT-5 / Claude 4.7 / Claude Sonnet 4.6 / Llama 4 / Gemini 3 / o3 / o4 / DeepSeek-V4 / Qwen3.7
     **Rule**: keep version strings character for character (including alphanumeric suffixes like 4o / 4.7 / 405B / V4 / R1); never "expand" them (don't turn "405B" into "405 billion", don't turn "V4" into "fourth generation")
   - Technical acronyms (examples + general rule): LLM / RAG / RLHF / DPO / LoRA / QLoRA / PEFT / MoE / CoT / ReAct / KV cache / SOTA / AGI / MCP / ADK / NPU / GPU / TPU
     **Rule**: any all-caps acronym of 2–5 letters defaults to its AI/ML meaning and stays as written
   - Benchmarks (examples + general rule): MMLU / GPQA / HumanEval / SWE-bench / SWE-bench Verified / AIME / HLE / ARC-AGI / ARC-AGI 2 / MT-Bench / Chatbot Arena / Aider Polyglot / LiveCodeBench
     **Rule**: benchmark names ending in -bench / -eval or written in all caps stay as written
   - AI tools/products: Cursor / Copilot / Codex / Aider / Devin / Cline / Claude Code / Windsurf / Zed / v0 / Bolt / Lovable / Replit Agent
   - Agent frameworks: LangChain / LangGraph / LlamaIndex / CrewAI / AutoGen / Pydantic AI / Vercel AI SDK / DSPy
   - Inference/deployment: Ollama / vLLM / SGLang / TensorRT / Triton / CUDA / ROCm
   - General tech: API / SDK / CLI / IDE / SaaS / CDN / SSO / OAuth / JWT / WebSocket / SSE / gRPC

3. Chinese vendors **use their official English (romanized) brand names** (on first mention you may pair the company and model, e.g. "Alibaba's Qwen3"; then pick one form and stay consistent):
   - Qwen (Alibaba) / ERNIE (Baidu) / Zhipu (GLM) / Moonshot AI (Kimi) / DeepSeek / StepFun (Step) / 01.AI (Yi) / Baichuan / Doubao (ByteDance) / Hunyuan (Tencent) / Kling (Kuaishou) / Jimeng (ByteDance) / MiniMax / Meituan LongCat / Kunlun Tech Skywork / ModelBest MiniCPM / Huawei Ascend / Cambricon
   - Don't render Chinese characters in English output; when the original gives only a Chinese name, use its common English or pinyin name.

4. Keep code / commands / URLs / numbers with units **character for character**:
   - Code in backticks `code` is not translated
   - Commands such as /code-review, pip install, npm run are not translated (don't turn them into "code review")
   - URLs as they are
   - Numbers + units: 8k context / 175B params / 3.5x speedup / $3 per M tokens / 99.9%
   - Amounts, parameter counts, ratios and ranges must keep the original's Arabic numerals and units; don't rewrite $10B-$100B as "tens to hundreds of billions of dollars"
