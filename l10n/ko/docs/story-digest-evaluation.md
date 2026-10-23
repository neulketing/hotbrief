# 이슈 종합 요약 프롬프트 평가
> 원본 [docs/story-digest-evaluation.md](../../../docs/story-digest-evaluation.md)(AIHOT, 중국어, 커밋 b868d38)의 한국어 번역입니다. 한국어판에서 바뀌는 부분은 [README.ko.md](../../../README.ko.md)를 보세요.

이슈 페이지의 종합 요약은 `industry/prompts/story-digest.md` 가 만듭니다. 이 프롬프트를 고치기 전에, 먼저 같은 이슈 묶음에서 지금 프롬프트와 후보 프롬프트를 나란히 돌려 보고 사람이 비교하세요. 페이지를 보고 받은 인상으로 판단하지 않습니다.

## 1. 사례 준비

```bash
node --env-file=.env scripts/eval-story-digests.ts --stories <사건 id>,<사건 id> --out .data/story-digest-cases.jsonl
```

이슈 id 는 이슈 페이지 주소 `/story/<id>` 에 있는 그 부분입니다. 내보내기는 데이터베이스를 읽기만 하고, 모델을 부르지 않으며, 어떤 이슈도 바꾸지 않습니다. 보도는 사이트가 종합 요약을 만들 때와 같은 규칙으로 고릅니다. 다만 지나가듯 언급만 한 보도, 종합 기사, 내려간 보도, 아직 공개하지 않은 보도는 치지 않습니다. 이미 종합 요약이 있는 이슈는 "고친 뒤 다시 쓰기"로 꾸리고(이전 판 종합 요약은 넣지 않음), 아직 종합 요약이 없는 이슈는 처음 쓰기로 꾸립니다. 찾을 수 없거나, 이미 합쳐졌거나, 쓸 수 있는 보도가 없는 이슈는 바로 오류를 냅니다.

내보낸 파일은 한 줄에 이슈 하나이고, 먼저 검토해 볼 수 있습니다. 새 보도가 들어왔을 때의 증분 업데이트를 시험하려면 `inputMode` 를 `incremental` 로 바꾸고, `story.previousDigest` 와 `knownArticleIds`(이전 판에 이미 들어간 보도 id)를 채웁니다. 사례를 직접 써도 됩니다. 형식은 `industry/story-digest-eval.example.jsonl`(가상의 예시)을 보세요.

## 2. 나란히 비교

```bash
node --env-file=.env scripts/eval-story-digests.ts --cases .data/story-digest-cases.jsonl --system my-candidate.md
```

- 사례마다 지금 프롬프트와 후보 프롬프트로 한 번씩 돌립니다. 같은 모델(기본은 "이슈 종합 요약" 단계가 지금 쓰는 모델이고, `--models` 로 지정할 수 있음)에 같은 입력을 씁니다. 모델에 보내는 시스템 프롬프트, 입력, 샘플링 인자는 사이트가 종합 요약을 만들 때와 완전히 같습니다.
- 후보 파일은 `industry/prompts/` 와 같은 방식으로 씁니다. `{{siteName}}` 은 사이트 이름으로 바뀌고, `{{> 파일이름}}` 은 공통 규칙을 끼워 넣으며, 값이 빠지면 오류를 냅니다. 후보와 지금 프롬프트가 렌더링 뒤 완전히 같으면 실행을 거부합니다. `--system` 을 주지 않으면 지금 프롬프트만 돌립니다.
- 시작하기 전에 호출 횟수(사례 수 × 모델 수 × 프롬프트 수)를 출력하고, `--max-calls`(기본 18)를 넘으면 하나도 보내지 않습니다. 호출마다 사이트의 다른 모델 요청처럼 기록하고 예산에 넣습니다. 그대로 다시 돌리면 이미 받은 결과를 다시 쓰고 돈을 더 내지 않습니다. 그래서 후보를 한 판 고쳐 다시 돌려도 지금 프롬프트 쪽 절반에는 돈이 들지 않습니다.

결과는 `.data/eval/`(`--out-dir` 로 바꿀 수 있음)에 JSON 하나, Markdown 하나로 씁니다. 양쪽의 제목과 종합 요약을 나란히 놓고, 호출마다 token 사용량과 기록 번호를 붙이며, 실패한 호출은 이유를 적습니다.

## 3. 사람이 볼 것

믿을 만한 자동 점수가 없고, 이 도구는 모델이 모델에게 점수를 매기게 하지도 않습니다. 하나씩 보세요.

- 핵심 변화와 현재 결론을 먼저 분명히 말하는지, 아래 타임라인을 날짜순으로 되풀이하지 않는지
- 공허한 홍보 말투와 상투어가 있는지
- 조건, 적용 대상, 요금과 한도, 지역 같은 제한이 여전히 해당 대상에 묶여 있는지
- 보도와 사실 증거에 없는 내용이 있는지, 보도 자체를 평가하거나("보도는 …을 밝히지 않았다") 쓰기 지시를 본문에 적지 않았는지
- 고친 뒤 다시 쓸 때, 효력을 잃은 옛 설명이 지워졌는지

## 4. 프롬프트를 고친 뒤

프롬프트 버전이 바뀌는 것만으로는 기존 이슈의 종합 요약을 다시 쓰지 않습니다. 이슈는 그 보도가 바뀔 때만 다시 만들어지고, 새 보도가 들어오면 옛 종합 요약을 이전 판으로 삼아 증분으로 고쳐 씁니다. 그래서 새 프롬프트는 새 보도가 들어오는 대로 조금씩 적용되고, 모델 호출이 한꺼번에 많이 생기지 않습니다.

몇몇 이슈를 새 프롬프트로 바로 다시 쓰고 싶다면, 저장소 루트에서 `rewriteStoryDigest` 를 부르세요(이슈마다 모델 호출 한 번이고, 관리자 화면 감사 기록에 남습니다).

```bash
node --env-file=.env --input-type=module -e '
const { rewriteStoryDigest } = await import("@aihot/backend/events/corrections");
const { sql } = await import("@aihot/backend/db");
const [s] = await sql`SELECT id FROM stories WHERE public_id = ${"<사건 id>"}`;
if (!s) throw new Error("이 사건 id가 없습니다");
console.log(await rewriteStoryDigest(s.id, "종합 요약 프롬프트를 고쳤습니다", "ops-script"));
await sql.end();'
```
