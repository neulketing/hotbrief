// 독자가 보는 글에서 이 사이트가 쓰지 않는 말. 항목마다 찾을 표현과 고칠 방향을 적는다.
// 쓰기 단계가 한국어 제목, 요약, 추천 이유를 쓴 뒤 하나씩 확인하고, 걸리면 모델에게 그 부분만 한 번 고치게 한다
// (packages/backend/src/editorial/analyze.ts 의 mendWording). 한눈에 판단되는 표현만 넣는다. 애매한 것을 넣으면 멀쩡한 말까지 고친다.
// 비워 두면 확인하지 않는다. HotBrief 한국어판(l10n/ko).

export const READER_WORDING: ReadonlyArray<readonly [RegExp, string]> = [
  [/충격|경악|역대급|대박|미쳤다/u, "과장하지 말고 무슨 일이 있었는지 바로 쓴다"],
];
