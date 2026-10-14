// Words this site doesn't use in reader-facing text: each entry is a pattern to find and how to fix it.
// After the writing step produces the English headline, summary and reason, each pattern is checked; on a hit the model
// rewrites just those spots once (mendWording in packages/backend/src/editorial/analyze.ts). List only wording you can
// judge at a glance; anything borderline would "fix" normal words. Leave it empty to skip the check.
// HotBrief US English edition (l10n/en-US).

export const READER_WORDING: ReadonlyArray<readonly [RegExp, string]> = [
  [/\b(?:game[- ]?changer|mind[- ]?blowing|jaw[- ]?dropping|insane)\b/i, "No hype: say plainly what happened"],
];
