// 이 사이트가 쓰는 모델. 엔진에는 `default` 하나가 들어 있다: 환경변수 LLM_BASE_URL / LLM_API_KEY / LLM_MODEL 의 모델.
// 여기에는 이름 붙인 모델(각자 주소와 키 환경변수를 쓴다)과 단계별 기본 모델을 적는다. 안 적은 단계는 default 를 쓴다.
// 배포 때 환경변수(PREFILTER_MODEL, SCORE_MODEL……)나 관리자 화면 "모델과 평가"에서 단계별로 바꿀 수 있다.
// HotBrief 한국어판(l10n/ko): 원본 site/models.ts 에 Gemini(OpenAI 호환) 예시를 더했다.

export interface ModelPreset {
  service: string;
  model: string;
  baseUrlEnv: string;
  apiKeyEnv: string;
  /** 추가 요청 필드. 예: 짧은 구조화 작업에서 추론 끄기. */
  extra?: Record<string, unknown>;
  /** 추론 모델이 답 전에 생각하는 데 더 주는 출력 한도(token). 단계별 한도에 더해진다. default 는 환경변수 LLM_REASONING_TOKENS. */
  reasoningTokens?: number;
  /** JSON 모드를 지원한다. */
  jsonMode: boolean;
  /** 이미지를 볼 수 있다. */
  vision?: boolean;
}

/** 이름 붙인 모델 예시(각자 자기 키가 필요하다). 안 쓰면 지워도 된다. */
export const PRESETS: Record<string, ModelPreset> = {
  // GLM 5.3 Flash always reasons; the lowest effort keeps short structured tasks fast.
  "glm-5.3-flash": {
    service: "zhipu", model: "glm-5.3-flash", baseUrlEnv: "ZHIPU_BASE_URL", apiKeyEnv: "ZHIPU_API_KEY",
    extra: { thinking: { type: "enabled" }, reasoning_effort: "low" }, jsonMode: true, vision: true,
  },
  // The scorer's parameters for glm-5.3-flash (score calls; temperature 1 is set per call).
  "glm-5.3-flash-selection": {
    service: "zhipu", model: "glm-5.3-flash", baseUrlEnv: "ZHIPU_BASE_URL", apiKeyEnv: "ZHIPU_API_KEY",
    extra: { thinking: { type: "enabled", clear_thinking: false }, reasoning_effort: "high", top_p: 0.95 }, jsonMode: true, vision: true,
  },
  // DeepSeek Flash reasons by default; structured tasks switch it off. deepseek-flash-think keeps it on,
  // with room in the output for the reasoning.
  "deepseek-flash": {
    service: "deepseek", model: "deepseek-flash", baseUrlEnv: "DEEPSEEK_BASE_URL", apiKeyEnv: "DEEPSEEK_API_KEY",
    extra: { thinking: { type: "disabled" } }, jsonMode: true,
  },
  "deepseek-flash-think": {
    service: "deepseek", model: "deepseek-flash", baseUrlEnv: "DEEPSEEK_BASE_URL", apiKeyEnv: "DEEPSEEK_API_KEY", reasoningTokens: 4000, jsonMode: true,
  },
  "qwen3.7-flash": {
    service: "dashscope", model: "qwen3.7-flash", baseUrlEnv: "DASHSCOPE_BASE_URL", apiKeyEnv: "DASHSCOPE_API_KEY",
    extra: { enable_thinking: false }, jsonMode: true,
  },
  "qwen3.8-flash": {
    service: "dashscope", model: "qwen3.8-flash", baseUrlEnv: "DASHSCOPE_BASE_URL", apiKeyEnv: "DASHSCOPE_API_KEY",
    extra: { enable_thinking: false }, jsonMode: true,
  },
  "mimo-v2.6-flash": {
    service: "mimo", model: "mimo-v2.6-flash", baseUrlEnv: "XIAOMI_MIMO_BASE_URL", apiKeyEnv: "XIAOMI_MIMO_API_KEY",
    extra: { thinking: { type: "disabled" } }, jsonMode: true,
  },
  "qwen3-vl-flash": {
    service: "dashscope", model: "qwen3-vl-flash", baseUrlEnv: "DASHSCOPE_BASE_URL", apiKeyEnv: "DASHSCOPE_API_KEY",
    extra: { enable_thinking: false }, jsonMode: false, vision: true,
  },
  // Google Gemini through its OpenAI-compatible endpoint (GEMINI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai).
  // Checked on 2026-10-14: JSON mode works and reasoning_effort "low" keeps short structured tasks fast.
  "gemini-3.5-flash-lite": {
    service: "gemini", model: "gemini-3.5-flash-lite", baseUrlEnv: "GEMINI_BASE_URL", apiKeyEnv: "GEMINI_API_KEY",
    extra: { reasoning_effort: "low" }, jsonMode: true, vision: true,
  },
};

/**
 * 단계별 기본 모델(단계 목록은 관리자 화면 "모델과 평가"). 값은 위 이름이나 default. 안 적은 단계는 default.
 * 예: { score: "glm-5.3-flash-selection", groupReview: "mimo-v2.6-flash" }
 */
export const DEFAULTS: Record<string, string> = {};
