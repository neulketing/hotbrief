// The site's identity and the copy readers see. When you switch fields, start with this file.
// Both the web app and the backend read it; rebuild (docker compose up --build) after editing.
// The domain is not here: set it with the SITE_URL environment variable when you deploy.
// HotBrief US English edition (l10n/en-US). Original: site/site.ts (AIHOT, MIT).

import type { Founder } from "@aihot/contracts/site-config";

/**
 * When the daily, weekly and monthly briefings come out (HH:mm). The daily covers the 24 hours before this time, the weekly comes
 * out on the Monday after each week, the monthly on the 1st. With l10n/patches/en-US.patch applied the site clock is UTC, so
 * 12:00 is 8 AM Eastern in summer and 7 AM in winter; without the patch the clock is the original Beijing time (UTC+8), where
 * the same moment is "20:00". The scheduler checks every half hour, so use :00 or :30.
 * Files in public/ use the placeholders {{dailyTime}}, {{weeklyTime}} and {{monthlyTime}}.
 */
export const EDITION_TIMES = { daily: "12:00", weekly: "14:00", monthly: "14:30" };

/** "daily at 12:00", "Mondays at 14:00", "on the 1st at 14:30": publishing times inside sentences (the UI adds "UTC" where it matters). */
export const EDITION_WHEN = {
  daily: `daily at ${EDITION_TIMES.daily}`,
  weekly: `Mondays at ${EDITION_TIMES.weekly}`,
  monthly: `on the 1st of each month at ${EDITION_TIMES.monthly}`,
};

export const SITE = {
  /** Site name: navigation, page titles, share images, RSS, MCP and the admin all use it. */
  name: "HotBrief",
  /**
   * The field's name, used inside default phrases such as "AI briefing" and "AI news".
   * Change it to "Legal", "HR" or "Gold" and the pages say "Legal briefing", "Legal news".
   */
  subject: "AI",
  /** The home page's full title (browser tab, search results). */
  homeTitle: "HotBrief — AI industry news, daily top picks and briefing",
  /** Title of the topic directory (/topics). */
  topicsTitle: "AI topics: the latest on companies and models, research areas and formats",
  /** Example text in the feedback box. */
  feedbackExample: "For example: when I searched for a keyword I got… I expected…",
  /** One line under the feedback page title. */
  feedbackLead: "Bugs, features you want, anything that bugs you: tell us.",
  /** Hint in the feedback form's email field. */
  feedbackEmailHint: "Leave an email if you'd like a reply",
  /** One-line description: search engines, share cards, RSS and llms.txt use it. */
  description: `Picks the AI news worth reading from a set of sources, groups reports of the same story, and publishes a briefing ${EDITION_WHEN.daily} UTC.`,
  /** A longer introduction under the one-liner in llms.txt (optional). */
  llmsIntro: null as string | null,
  /** A short line under share images and posters. */
  tagline: "The AI news worth your time",
  /** Keywords for search engines (structured data on the home page). */
  keywords: ["AI news", "artificial intelligence news", "AI briefing", "AI industry news"] as string[],
  /** The year the site started collecting (structured data, optional). */
  since: null as string | null,
  /** Interface language (HTML lang, og:locale). */
  locale: "en-US",
  /** Default address, used only when SITE_URL is not set. */
  defaultUrl: "http://localhost:3000",
  /** Icons served from the site root besides the standard ones (file names in site/brand/, optional). */
  rootIcons: [] as string[],
  /**
   * Prefix of MCP tool names (lowercase letters, digits, underscores): hotbrief_get_latest, hotbrief_search…
   * Don't change it once people have connected.
   */
  mcpPrefix: "hotbrief",
  /**
   * Version of the public interfaces (MCP, OpenAPI, llms.txt); only goes up.
   * Bump the major version when an existing field or its meaning changes, and say so in the deployment notes.
   */
  interfaceVersion: "4.0.0",
  /** Public contact email (optional), written into llms.txt and the instructions for agents. */
  contactEmail: null as string | null,
  /** A small line at the bottom of the about page (optional). */
  footerNote: "HotBrief US edition · Based on AIHOT by 数字生命卡兹克 (Khazix)",
  /** ICP filing number for sites in mainland China. Leave null for US sites. */
  icp: null as string | null,
  /** Public-security filing for sites in mainland China. Leave null for US sites. */
  psb: null as string | null,
  /** The source code's GitHub address (optional); shows "Open source on GitHub" in the sidebar and on the "Me" page. */
  github: "https://github.com/neulketing/hotbrief" as string | null,
  /** The site operator in structured data (for search engines). */
  organization: {
    name: "HotBrief",
    /** Founder (optional). */
    founder: null as Founder | null,
  },
  /** Name and version announced when fetching sources (User-Agent). Don't use another site's name. */
  crawlerName: "HotBriefBot/1.0",
} as const;

/** The terms of use and privacy notice pages (text in pages/). */
export const POLICY = {
  terms: {
    /** Page name: navigation, footer, page title. */
    name: "Terms of use",
    description: "Terms for using this site's pages, RSS, public API and MCP.",
    /** One line about this page in llms.txt (optional). */
    covers: null as string | null,
    /** Terms reminders shown in the RSS and API columns of the agent page (optional). */
    notes: null as null | { rss: string; api: string },
    /** Which uses need permission first (optional): llms goes after the copyright note in llms.txt, agent opens the terms section of the agent instructions. */
    license: null as null | { llms: string; agent: string },
    /** Response headers that the public API, RSS and OpenAPI file attach to declare the terms (optional). */
    headers: null as null | Record<string, string>,
  },
  privacy: {
    description: "How this site handles data stored in your browser, feedback you send, and access logs.",
    /** One line about this page in llms.txt (optional). */
    covers: null as string | null,
  },
  /**
   * Whether an X post's own text and images count as full text: if so, they show only where this post may be shown in full
   * (the source allows full text and the body was fetched); if not, they always show, like headlines and summaries.
   */
  xPostIsFullText: true,
} as const;

/** Navigation (desktop sidebar, mobile tab bar, the "Me" page). */
export const NAV = {
  /** Engine pages to leave out of navigation; only Trending ("/hot") and Topics ("/topics") for now. The pages still open. */
  hidden: [] as Array<"/hot" | "/topics">,
};

/** Wording and display on item cards and detail pages. */
export const ITEM_COPY = {
  /** The name of the model's one-line reason: cards, detail pages, Markdown export, agent answers and group pushes use it. */
  reasonLabel: "Why it matters",
  /** Whether readers see the AI score on pages and share images. Display only: the public API and MCP still carry score. */
  showScore: true,
};

/** A QR code card on the about page. */
interface ContactCard {
  kind: string;
  title: string;
  note: string;
  /** A root file name linked from elsewhere (optional). */
  alias?: string;
}

/** About page copy. The numbers (sources, items collected, top picks, briefings) come from live site statistics. */
export const ABOUT = {
  kicker: `About ${SITE.name}`,
  /** Page description (search results, share cards). */
  description: `About ${SITE.name}: ${SITE.description}`,
  /** Headline: first line in the normal color, second line in the accent color. */
  headline: ["Something new happens in AI every day.", "Only a few things are worth reading."] as [string, string],
  /** The paragraph under the headline. {sources} becomes the live source count (spaces added automatically); sourcesFallback when stats are missing. */
  lead: `${SITE.name} watches{sources}sources for you: it fetches, groups, scores and picks, and publishes a briefing ${EDITION_WHEN.daily} UTC. Free, no sign-up.`,
  sourcesFallback: "a dozen-plus",
  /** The four steps under the source river animation. */
  steps: {
    collect: "Official blogs, newsrooms and personal feeds. The more often a source posts, the more often it's checked, as often as every 15 minutes.",
    store: "Everything fetched is kept, and reports of the same story are grouped. The Trending list is computed from these groups.",
    select: `A model first checks that an item is about this field and carries real information, then writes an English headline, summary and "${ITEM_COPY.reasonLabel}". Marketing copy and reposts don't get in.`,
    publish: `The daily briefing comes out ${EDITION_WHEN.daily}, the weekly ${EDITION_WHEN.weekly}, the monthly ${EDITION_WHEN.monthly} (UTC).`,
  },
  /** The maker block (optional); null hides it. */
  maker: null as null | {
    name: string;
    avatarSourceId?: string | null;
    greeting: string[];
    wechat?: ContactCard;
    feishu?: ContactCard;
  },
  /** Copyright and takedown note at the bottom; the feedback page link goes in the middle. */
  copyright: [`${SITE.name} is a digest of summaries and a reading index; the original articles belong to their publishers. If you are a publisher and want a correction, a takedown or a change in how your content is shown, reach us through the `, "."] as [string, string],
  /** Anchor id of the "Terms" link at the bottom (optional). */
  termsAnchor: null as string | null,
} as const;

/** Notes for administrators on admin pages (optional). */
export const ADMIN = {
  feedbackNote: null as string | null,
  banNote: null as string | null,
  budgetNote: null as string | null,
};

/** Examples on the agent page. */
export const AGENT = {
  /** The "search" row in the MCP tool table: what it searches and how to ask. */
  search: { scope: "Search the last 7 days by company, product, person or topic", ask: "What has this company shipped lately?" },
};

/** Wording on the daily, weekly and monthly briefing pages. */
export const REPORTS = {
  /** The publisher line under the masthead. */
  imprint: SITE.name.toUpperCase(),
  /** One word next to the masthead. */
  motto: SITE.subject as string,
  /** Description of each kind of briefing (search results, share cards), without a final period. */
  descriptions: {
    daily: `The ${withSubject("industry daily briefing")} ${SITE.name} publishes ${EDITION_WHEN.daily} UTC`,
    weekly: `A weekly review of the ${withSubject("industry")}`,
    monthly: `A monthly roundup of the ${withSubject("industry")}`,
  },
  /** How one entry of an issue is counted ("4 top stories"). */
  entry: { measure: "", noun: "top stories" },
  /** Units after the other masthead numbers. */
  metricUnits: { sourcesCount: "sources", firstPartyEvents: "first-party announcements", selectedCount: "top picks", reportsCovered: "daily briefings" },
  /** "N top stories" on briefing share images. */
  shareUnit: "top stories",
  /** Title and lead when the day's material was reviewed but nothing new made the cut. */
  quiet: { title: "A quiet day: no major news", paragraph: `Nothing new among the ${withSubject("top stories")} between {start} and {end} UTC.` },
};

/** Wording in operations alerts (sent only to the site owner) that varies by deployment. */
export const ALERTS = {
  /** Minutes without a new article before the "the site stopped collecting" alert (at most a day); ALERT_QUIET_MINUTES wins. */
  quietMinutes: 360,
  usualFlow: null as string | null,
  /** How to read the worker's logs, in the "worker stopped" alert. */
  workerLogs: "check the worker logs (docker compose logs worker)",
};

/** Defaults for a new source created in the admin. */
export const SOURCE_DEFAULTS = {
  /** Show full text on the site; false shows the summary and a link to the original only. */
  siteFulltext: false,
};

/**
 * Community sites (source ids): for heat, each posting account counts as an independent source instead of the whole feed counting once.
 * dev is the dev.to article stream, hn the Hacker News stream.
 */
export const COMMUNITY_FEEDS: { dev: string[]; hn: string[] } = {
  dev: [],
  hn: [],
};

/** Text on each page's share image (/og/pages/*.png). */
export const CARDS: Record<string, { kicker: string; title: string; subtitle: string; accent?: "hot" | "amber" }> = {
  site: { kicker: `Daily ${SITE.subject} top picks`, title: SITE.tagline, subtitle: SITE.description },
  all: { kicker: `All ${SITE.subject} news`, title: "The latest from every source, in one place", subtitle: "Every source's latest news in time order, filterable by category and tag." },
  hot: { kicker: "Trending", title: "What people are talking about, last 48 hours", subtitle: "Heat index, trend and the public sources behind the heat.", accent: "hot" },
  daily: { kicker: `${SITE.subject} Daily`, title: `A ${withSubject("briefing")} you can finish, every morning`, subtitle: "Yesterday's news worth your attention." },
  weekly: { kicker: `${SITE.subject} Weekly`, title: "The week's top stories, at a glance", subtitle: "This week's threads, key launches and discussions worth revisiting." },
  monthly: { kicker: `${SITE.subject} Monthly`, title: "What changed this month", subtitle: "The month's main threads and key events." },
  about: { kicker: "About", title: `About ${SITE.name}`, subtitle: SITE.description },
  terms: { kicker: "Terms of use", title: `${SITE.name} terms of use`, subtitle: "What the pages, API, RSS and MCP may be used for." },
  privacy: { kicker: "Privacy", title: `${SITE.name} privacy notice`, subtitle: "How access logs, browser data and feedback are handled." },
  changelog: { kicker: "Changelog", title: `${SITE.name} changelog`, subtitle: "New features, improvements, announcements and retirements." },
  feedback: { kicker: "Feedback", title: "Tell us what could be better", subtitle: "Content, features, integrations, or a publisher's correction or takedown request." },
  agent: { kicker: "For agents", title: `Connect ${SITE.name} to your agent`, subtitle: "MCP, RSS or API. Anonymous, read-only, no API key." },
};

/** Parts of the public interface conventions that vary by deployment (agent instructions, llms.txt). */
export const ACCESS = {
  ratePerMinute: null as number | null,
  userAgent: null as string | null,
};

/** This deployment's own arrangements (optional). Same meaning as the comments in the original site/site.ts. */
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

/** Wording in RSS feed descriptions that varies by site. */
export const FEED_COPY = {
  allLeavesOut: [] as string[],
};

/** Categories that differ between the public interfaces and the pages (optional). Don't change once live. */
export const PUBLIC_CATEGORIES = {
  merge: {},
  feedLabels: {},
} as const;

/** Phrases like "AI briefing": the field name, a space, then the noun. */
export function withSubject(noun: string): string {
  return `${SITE.subject} ${noun}`;
}

/** "Browse AI by topic"-style phrases the original UI code builds: text, a space, then the field name (and the noun via withSubject). */
export function subjectAfter(text: string, noun?: string): string {
  return `${text} ${noun ? withSubject(noun) : SITE.subject}`;
}
