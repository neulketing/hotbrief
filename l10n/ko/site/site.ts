// 사이트 정체성과 독자가 보는 문구. 분야를 바꿀 때 이 파일부터 고친다.
// 웹과 백엔드가 모두 읽는다. 고친 뒤 다시 빌드하면(docker compose up --build) 반영된다.
// 도메인은 여기 없다. 배포할 때 환경변수 SITE_URL 로 정한다.
// HotBrief 한국어판(l10n/ko). 원본: site/site.ts (AIHOT, MIT).

import type { Founder } from "@aihot/contracts/site-config";

/**
 * 일간·주간·월간 브리핑이 나가는 시각(HH:mm). 일간은 이 시각 직전 24시간을 모으고, 주간은 매주 월요일, 월간은 매월 1일에 나간다.
 * 시계는 l10n/patches/ko.patch 를 적용하면 한국 시간(Asia/Seoul, UTC+9)이고, 적용하지 않으면 원본대로 베이징 시간(UTC+8)이다.
 * 패치 없이 쓰면서 한국 시간 08:00 에 내려면 daily 를 "07:00" 으로 둔다. 일정은 30분마다 확인하므로 정각이나 30분으로 쓴다.
 * public/ 의 파일에는 {{dailyTime}}, {{weeklyTime}}, {{monthlyTime}} 자리표시자로 들어간다.
 */
export const EDITION_TIMES = { daily: "08:00", weekly: "10:00", monthly: "10:30" };

/** "매일 08:00", "매주 월요일 10:00", "매월 1일 10:30": 문장에 들어가는 발행 시각. */
export const EDITION_WHEN = {
  daily: `매일 ${EDITION_TIMES.daily}`,
  weekly: `매주 월요일 ${EDITION_TIMES.weekly}`,
  monthly: `매월 1일 ${EDITION_TIMES.monthly}`,
};

export const SITE = {
  /** 사이트 이름: 내비게이션, 페이지 제목, 공유 이미지, RSS, MCP, 관리자 화면이 모두 쓴다. */
  name: "HotBrief",
  /**
   * 분야 이름: 기본 문구에 끼워 넣는다("AI 브리핑", "AI 소식").
   * "법률", "HR", "금융"으로 바꾸면 화면이 "법률 브리핑", "법률 소식"이 된다.
   */
  subject: "AI",
  /** 홈 전체 제목(브라우저 탭, 검색 결과). */
  homeTitle: "HotBrief — AI 업계 소식 · 매일 추천과 브리핑",
  /** 주제 목록 페이지(/topics) 제목. */
  topicsTitle: "AI 주제: 회사와 모델, 기술 분야, 콘텐츠 유형별 최신 소식",
  /** 의견 보내기 입력란의 예시. */
  feedbackExample: "예: 어떤 키워드로 검색했더니…… 원래는……하고 싶었어요",
  /** 의견 페이지 제목 아래 한 줄. */
  feedbackLead: "버그, 있었으면 하는 기능, 거슬리는 부분 무엇이든 알려 주세요.",
  /** 의견 양식의 이메일 칸 안내. */
  feedbackEmailHint: "이메일을 남기면 답장을 드릴 수 있어요",
  /** 한 줄 소개: 검색엔진, 공유 카드, RSS, llms.txt 가 쓴다. */
  description: `여러 AI 출처에서 읽을 만한 소식을 골라 같은 일을 다룬 기사끼리 묶고, ${EDITION_WHEN.daily}에 브리핑을 냅니다.`,
  /** llms.txt 의 한 줄 소개 아래 붙는 자세한 소개(선택). */
  llmsIntro: null as string | null,
  /** 한 줄 문구: 공유 이미지, 포스터 아래. */
  tagline: "꼭 봐야 할 AI 소식",
  /** 검색엔진이 읽는 키워드(홈의 구조화 데이터). */
  keywords: ["AI 뉴스", "인공지능 뉴스", "AI 브리핑", "AI 업계 동향"] as string[],
  /** 수집을 시작한 해(구조화 데이터의 기간, 선택). */
  since: null as string | null,
  /** 화면 언어(HTML lang, og:locale). */
  locale: "ko-KR",
  /** SITE_URL 이 없을 때만 쓰는 기본 주소. */
  defaultUrl: "http://localhost:3000",
  /** 표준 아이콘(favicon.ico, icon.png, icon-192.png, apple-icon.png, logo.svg) 말고 사이트 루트에 둘 아이콘 파일 이름(site/brand/ 안, 선택). */
  rootIcons: [] as string[],
  /**
   * MCP 도구 이름 앞부분(소문자, 숫자, 밑줄). 도구는 hotbrief_get_latest, hotbrief_search…가 된다.
   * 누군가 연결한 뒤에는 바꾸지 않는다.
   */
  mcpPrefix: "hotbrief",
  /**
   * 공개 인터페이스(MCP, OpenAPI, llms.txt)의 버전. 올리기만 한다.
   * 기존 필드나 뜻을 바꾸면 주 버전을 올리고 배포 안내에 적는다.
   */
  interfaceVersion: "4.0.0",
  /** 대외 연락 이메일(선택): llms.txt 와 에이전트용 안내에 적힌다. */
  contactEmail: null as string | null,
  /** 소개 페이지 맨 아래 한 줄(선택). */
  footerNote: "HotBrief 한국어판 · Based on AIHOT by 数字生命卡兹克 (Khazix)",
  /** 중국 본토 사이트용 ICP 등록번호. 한국·미국 사이트는 null 로 둔다. */
  icp: null as string | null,
  /** 중국 본토 사이트용 공안 등록 정보. 한국·미국 사이트는 null 로 둔다. */
  psb: null as string | null,
  /** 소스 코드 GitHub 주소(선택). 넣으면 사이드바와 "내 정보" 맨 아래에 "GitHub 오픈소스"가 나온다. */
  github: "https://github.com/neulketing/hotbrief" as string | null,
  /** 구조화 데이터의 사이트 운영자(검색엔진용). */
  organization: {
    name: "HotBrief",
    /** 창립자(선택). */
    founder: null as Founder | null,
  },
  /** 출처를 가져올 때 밝히는 이름과 버전(User-Agent). 다른 사이트 이름을 쓰지 않는다. */
  crawlerName: "HotBriefBot/1.0",
} as const;

/** 이용 규칙과 개인정보 안내 두 페이지(본문은 pages/). */
export const POLICY = {
  terms: {
    /** 페이지 이름: 내비게이션, 바닥글, 페이지 제목. */
    name: "이용 규칙",
    description: "이 사이트의 웹 페이지, RSS, 공개 API, MCP 이용 규칙.",
    /** llms.txt 에서 이 페이지를 설명하는 한 줄(선택). */
    covers: null as string | null,
    /** 에이전트 연결 페이지의 RSS·API 칸에 각각 붙는 이용 규칙 안내(선택). */
    notes: null as null | { rss: string; api: string },
    /** 어떤 용도에 먼저 허락이 필요한지 밝히는 문장(선택). llms 는 llms.txt "이용 안내"의 저작권 문단 뒤에, agent 는 에이전트용 안내 "이용 규칙" 절 맨 앞에 붙는다. */
    license: null as null | { llms: string; agent: string },
    /** 공개 API, RSS, OpenAPI 파일이 이용 규칙을 밝히는 응답 헤더(선택). */
    headers: null as null | Record<string, string>,
  },
  privacy: {
    description: "이 사이트가 브라우저에 저장되는 데이터, 보내 주신 피드백, 접속 기록을 다루는 방식.",
    /** llms.txt 에서 이 페이지를 설명하는 한 줄(선택). */
    covers: null as string | null,
  },
  /**
   * X 게시물의 글과 이미지를 전문으로 볼지: true 면 이 글이 사이트 전문 표시가 허용될 때만(출처가 전문을 허용하고 본문도 받아 왔을 때) 보이고,
   * false 면 제목·요약처럼 언제나 보인다.
   */
  xPostIsFullText: true,
} as const;

/** 내비게이션(PC 사이드바, 모바일 하단 바, "내 정보" 페이지). */
export const NAV = {
  /** 내비게이션에서 뺄 엔진 페이지. 지금은 핫이슈("/hot")와 주제("/topics")만 된다. 페이지는 그대로 열린다. */
  hidden: [] as Array<"/hot" | "/topics">,
};

/** 기사 카드와 상세 페이지의 문구와 표시. */
export const ITEM_COPY = {
  /** 모델이 쓴 한 줄 이유의 이름: 카드, 상세, Markdown 내보내기, 에이전트 답변, 그룹 알림에 쓴다. */
  reasonLabel: "추천 이유",
  /** 독자가 웹과 공유 이미지에서 AI 점수를 볼지. 표시만 정한다. 공개 API·MCP 는 그대로 score 를 준다. */
  showScore: true,
};

/** 소개 페이지의 QR 코드 카드 하나. */
interface ContactCard {
  kind: string;
  title: string;
  note: string;
  /** 외부에서 링크한 적 있는 루트 파일 이름(선택). */
  alias?: string;
}

/** 소개 페이지 문구. 숫자(출처 수, 수집 수, 엄선 수, 브리핑 회차)는 사이트 실시간 통계에서 온다. */
export const ABOUT = {
  kicker: `${SITE.name} 소개`,
  /** 페이지 설명(검색 결과, 공유 카드). */
  description: `${SITE.name} 소개: ${SITE.description}`,
  /** 큰 제목: 첫 줄은 기본색, 둘째 줄은 강조색. */
  headline: ["AI 업계는 매일 시끄럽지만,", "꼭 볼 소식은 몇 개뿐입니다."] as [string, string],
  /** 제목 아래 한 단락. {sources} 는 실시간 출처 수로 바뀐다(양옆 공백은 자동). 통계가 없으면 sourcesFallback. */
  lead: `${SITE.name}가 {sources}개 출처를 대신 지켜봅니다. 가져오고, 묶고, 점수 매기고, 골라서 ${EDITION_WHEN.daily}에 브리핑을 냅니다. 무료이고 가입도 필요 없습니다.`,
  sourcesFallback: "십여",
  /** 출처 흐름 애니메이션 아래 네 단계. */
  steps: {
    collect: "공식 블로그, 언론, 개인 피드를 모두 봅니다. 자주 올라오는 곳일수록 자주 확인하고, 가장 짧게는 15분마다 봅니다.",
    store: "가져온 글은 모두 저장하고 같은 일을 다룬 기사끼리 묶습니다. 핫이슈 순위는 여기서 계산합니다.",
    select: `모델이 먼저 이 분야 소식인지, 실제 정보가 있는지 본 뒤 한국어 제목, 요약, ${ITEM_COPY.reasonLabel}를 씁니다. 홍보 글과 중복 전재는 들어오지 못합니다.`,
    publish: `${EDITION_WHEN.daily}에 일간 브리핑, ${EDITION_WHEN.weekly}에 주간 브리핑, ${EDITION_WHEN.monthly}에 월간 브리핑을 냅니다.`,
  },
  /** 운영자 블록(선택). null 이면 보이지 않는다. */
  maker: null as null | {
    name: string;
    avatarSourceId?: string | null;
    greeting: string[];
    wechat?: ContactCard;
    feishu?: ContactCard;
  },
  /** 페이지 아래 저작권·게시 중단 안내. 가운데에 의견 페이지 링크가 들어간다. */
  copyright: [`${SITE.name}는 요약과 읽기 색인을 모아 보여 줄 뿐이며, 원문의 저작권은 각 출처에 있습니다. 출처 측에서 정정, 게시 중단, 표시 방식 조정을 원하시면 `, "로 알려 주세요."] as [string, string],
  /** 페이지 아래 "이용 규칙" 링크의 앵커 id(선택). */
  termsAnchor: null as string | null,
} as const;

/** 관리자 화면의 안내(선택). */
export const ADMIN = {
  feedbackNote: null as string | null,
  banNote: null as string | null,
  budgetNote: null as string | null,
};

/** 에이전트 연결 페이지의 예시. */
export const AGENT = {
  /** MCP 도구 표의 "검색" 줄: 무엇을 찾을 수 있고 어떻게 물으면 되는지. */
  search: { scope: "회사, 제품, 인물, 주제로 최근 7일 검색", ask: "이 회사가 최근에 뭘 발표했어?" },
};

/** 일간·주간·월간 브리핑 지면의 문구. */
export const REPORTS = {
  /** 제호 아래 발행처 줄. */
  imprint: SITE.name.toUpperCase(),
  /** 제호 옆 한 단어. */
  motto: SITE.subject as string,
  /** 브리핑 종류별 설명(검색 결과, 공유 카드). 마침표 없이 쓴다. */
  descriptions: {
    daily: `${SITE.name}가 ${EDITION_WHEN.daily}(한국 시간)에 내는 ${withSubject("업계 일간 브리핑")}`,
    weekly: `매주 정리하는 ${withSubject("업계 주간 리뷰")}`,
    monthly: `매월 정리하는 ${withSubject("업계 월간 결산")}`,
  },
  /** 한 회에 담긴 항목을 세는 말("주요 소식 4건"). */
  entry: { measure: "건", noun: "주요 소식" },
  /** 제호의 나머지 숫자 뒤에 붙는 말. */
  metricUnits: { sourcesCount: "개 출처", firstPartyEvents: "건 1차 발표", selectedCount: "건 추천", reportsCovered: "회 브리핑" },
  /** 브리핑 공유 이미지의 "몇 건" 표기. */
  shareUnit: "건 주요 소식",
  /** 그날 검토한 자료는 있지만 새 주요 소식이 없을 때의 제목과 첫 문장. */
  quiet: { title: "오늘은 조용합니다. 큰 소식이 없었어요", paragraph: `한국 시간 {start}부터 {end}까지 새 ${withSubject("주요 소식")}이 없었습니다.` },
};

/** 운영 경보(사이트 운영자에게만 간다)에서 배포마다 달라지는 문구. */
export const ALERTS = {
  /** 몇 분 동안 새 글이 안 들어오면 "새 글 수집이 멈췄다"고 경보할지(최대 하루). 환경변수 ALERT_QUIET_MINUTES 가 우선. */
  quietMinutes: 360,
  usualFlow: null as string | null,
  /** worker 가 멈췄다는 경보에서 로그 보는 법. */
  workerLogs: "worker 로그를 확인하세요(docker compose logs worker)",
};

/** 관리자 화면에서 출처를 새로 만들 때 기본값. */
export const SOURCE_DEFAULTS = {
  /** 사이트에서 전문 표시. false 면 요약과 원문 링크만 보인다. */
  siteFulltext: false,
};

/**
 * 커뮤니티 사이트 출처(출처 id): 열기를 셀 때 출처 전체를 하나로 치지 않고 글쓴 계정마다 독립 출처로 센다.
 * dev 는 dev.to 글 흐름, hn 은 Hacker News 글 흐름.
 */
export const COMMUNITY_FEEDS: { dev: string[]; hn: string[] } = {
  dev: [],
  hn: [],
};

/** 페이지별 공유 이미지(/og/pages/*.png)의 글자. */
export const CARDS: Record<string, { kicker: string; title: string; subtitle: string; accent?: "hot" | "amber" }> = {
  site: { kicker: `매일 추천 ${SITE.subject}`, title: SITE.tagline, subtitle: SITE.description },
  all: { kicker: `${SITE.subject} 전체 소식`, title: "모든 출처의 최신 소식을 한곳에서", subtitle: "출처별 최신 소식을 시간순으로 모으고 분류와 태그로 거를 수 있습니다." },
  hot: { kicker: "핫이슈", title: "지난 48시간, 다들 무엇을 이야기했나", subtitle: "열기 지수, 흐름, 열기를 만든 공개 출처.", accent: "hot" },
  daily: { kicker: withSubject("일간 브리핑"), title: `매일 ${spokenTime(EDITION_TIMES.daily)}, 다 읽을 수 있는 ${withSubject("브리핑")}`, subtitle: "전날 눈여겨볼 소식." },
  weekly: { kicker: withSubject("주간 브리핑"), title: `한 주의 ${REPORTS.entry.noun}, 한 번에 정리`, subtitle: "이번 주의 큰 흐름, 중요한 발표, 다시 볼 만한 논의." },
  monthly: { kicker: withSubject("월간 브리핑"), title: "한 달 동안 달라진 것", subtitle: "이달의 큰 흐름과 핵심 사건." },
  about: { kicker: "소개", title: `${SITE.name} 소개`, subtitle: SITE.description },
  terms: { kicker: "이용 규칙", title: `${SITE.name} 이용 규칙`, subtitle: "웹, API, RSS, MCP의 이용 범위." },
  privacy: { kicker: "개인정보 안내", title: `${SITE.name} 개인정보 안내`, subtitle: "접속 기록, 브라우저 저장 데이터, 보내 주신 피드백을 다루는 방식." },
  changelog: { kicker: "업데이트 기록", title: `${SITE.name} 업데이트 기록`, subtitle: "기능 추가, 개선, 공지, 종료 기록." },
  feedback: { kicker: "피드백", title: "더 나아질 곳을 알려 주세요", subtitle: "내용, 기능, 연결, 또는 출처 측의 정정·게시 중단 요청." },
  agent: { kicker: "에이전트 연결", title: `${SITE.name}를 내 에이전트에 연결하기`, subtitle: "MCP, RSS, API 세 가지 방법. 익명 읽기 전용이라 API 키가 필요 없습니다." },
};

/** 공개 인터페이스 이용 약속 가운데 배포마다 달라지는 곳: 에이전트용 안내와 llms.txt 에 적힌다. */
export const ACCESS = {
  ratePerMinute: null as number | null,
  userAgent: null as string | null,
};

/** 이 배포만의 설정(선택). 항목 뜻은 원본 site/site.ts 주석과 같다. */
export const DEPLOYMENT = {
  credentialsDir: null as string | null,
  credentialFiles: {} as Partial<Record<string, string>>,
  requiredSecrets: [] as const,
  originHost: null as string | null,
  loginReturnHeader: null as string | null,
  imageUpstreamBudget: null as null | { mbPerMinute: number; gbPerDay: number },
  directFetchHosts: [] as string[],
  selectionGold: null as null | { file: string; sample: number; split: string; sweep: [number, number] },
};

/** RSS 설명 가운데 사이트마다 달라지는 문구. */
export const FEED_COPY = {
  allLeavesOut: [] as string[],
};

/** 공개 인터페이스(API, RSS, MCP)에서 웹과 다른 분류(선택). 공개 뒤에는 바꾸지 않는다. */
export const PUBLIC_CATEGORIES = {
  merge: {},
  feedLabels: {},
} as const;

/** "AI 브리핑" 같은 말: 분야 이름과 명사 사이를 띄운다(한국어는 붙여 써도 되지만 영문 분야 이름은 띄운다). */
export function withSubject(noun: string): string {
  return /[A-Za-z0-9]$/.test(SITE.subject) ? `${SITE.subject} ${noun}` : `${SITE.subject} ${noun}`;
}

/** 원본 화면 코드가 부르는 "문장 + 분야 이름" 조립. 한국어에서는 띄어 쓴다. noun 은 withSubject 로 붙인다. */
export function subjectAfter(text: string, noun?: string): string {
  return `${text} ${noun ? withSubject(noun) : SITE.subject}`;
}

/** "오전 8시", "오전 10시 30분", "오후 8시": 말로 읽는 HH:mm. */
function spokenTime(time: string): string {
  const [hour, minute] = time.split(":").map(Number) as [number, number];
  return `${hour < 12 ? "오전" : "오후"} ${hour % 12 || 12}시${minute ? ` ${minute}분` : ""}`;
}
