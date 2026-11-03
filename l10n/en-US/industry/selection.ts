// Selection thresholds. The scoring rubric itself is in prompts/selection-score.md; this only decides "how many points
// make the cut". The scoring model scores each item twice, independently (0–100); when the two scores add up to at
// least 2 × the threshold, the item becomes a pick candidate. Once its news identity and added value are confirmed, the
// publishing rules decide what shows (docs/selection.md); the card shows the average of the two scores.
// Thresholds go by source tier: lower for official first-hand sources, higher for media and individuals; a source class
// raises the threshold further for some official sources.
// After changing a threshold or the scoring prompt, rerun scripts/eval-selection.ts on your own labeled sample before
// going live (docs/selection.md).
// HotBrief US English edition (l10n/en-US). Original: industry/selection.ts (AIHOT, MIT).

export const SELECTION = {
  /**
   * Source tier → threshold (the average of the two scores has to reach it).
   * T1 official first-hand, T1_5 official accounts and quasi-official creators, T2 media and individuals.
   * EXCLUDE_MP and any tier not listed here aren't scored for picks (they only go to "All news").
   */
  thresholds: { T1: 60, T1_5: 65, T2: 76 } as Record<string, number>,
  /**
   * Source class → threshold floor. The tier only says whether a source is official and first-hand; some official
   * sources mostly write for developers or the industry, and readers only want the big news from them. Give such a
   * source a class on the admin "Sources" page and its threshold rises to at least this number.
   * It only raises, never lowers: tiers whose threshold is already higher (media) are unaffected. Sources without a class
   * go by tier alone.
   *   ecosystem Ecosystem & infrastructure: chips and hardware, inference and cloud, model hosting, frameworks and
   *             toolchains, security-research vendors, engineering and developer blogs
   *   leaderboard Leaderboards: evaluators that benchmark and rank models from many companies
   */
  classes: {
    ecosystem: { label: "Ecosystem & infrastructure", threshold: 70 },
    leaderboard: { label: "Leaderboards", threshold: 76 },
  } as Record<string, { label: string; threshold: number }>,
  /**
   * Items that weren't picked but average above this are also written the picks' way (content understanding: title,
   * summary, why it matters); the rest get the cheaper "title and summary translation".
   */
  understandFloor: 50,
  /**
   * Browsing "All news" (the web list, and the all mode of the API and RSS) only shows items averaging at least this,
   * plus items not scored yet; search still covers everything. Below 40 is mostly rewrites and news-account floods (over
   * a third of "All news" on the original site); picks have never taken anything under 60.
   */
  browseFloor: 40,
} as const;
