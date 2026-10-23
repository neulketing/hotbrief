# 이슈 묶기와 관계 평가
> 원본 [docs/grouping.md](../../../docs/grouping.md)(AIHOT, 중국어, 커밋 b868d38)의 한국어 번역입니다. 한국어판에서 바뀌는 부분은 [README.ko.md](../../../README.ko.md)를 보세요.

사이트는 먼저 제목과 요약으로 최근 2주 동안의 후보 사실을 불러옵니다(벡터 서비스가 설정돼 있으면 벡터를 비교하고, 없으면 글자 겹침 정도를 비교합니다). 그다음 모델이 보도 사이의 관계를 판단하고, 동시에 그 보도가 엄선에 이미 있는 내용에 비해 새 정보가 있는지도 판단합니다(점수가 충분한 보도는 이 판단을 통과해야 엄선에 들어갑니다. [엄선과 보정](selection.md)을 보세요). 관계 정의와 사이트가 실제로 쓰는 프롬프트는 `industry/prompts/group-*.md` 에, 코드 진입점은 `packages/backend/src/events/relate.ts` 와 `group.ts` 에 있습니다.

관계는 네 가지입니다.

- `SAME_OCCURRENCE`: 같은 한 번의 실제 일입니다. 예를 들어 같은 발표의 공식 원문과 언론 보도입니다.
- `SAME_STORY`: 같은 한 번의 일은 아니지만, 같은 구체적 이슈의 직접적인 진전입니다. 예를 들어 발표 뒤의 출시, 평가, 대응입니다.
- `UNRELATED`: 서로 다른 일입니다. 주체, 제품, 화제가 같더라도 그렇습니다.
- `ROUNDUP`: 한쪽이 여러 화제를 담은 모음 기사입니다.

## 내 라벨링 표본으로 두 보도 사이 관계 판단 평가하기

`scripts/eval-relations.ts` 는 두 보도 사이의 관계를 모델이 어떻게 판단하는지만 평가합니다. 사이트가 묶을 때 쓰는 `PAIR_SYSTEM`, `pairUser()`, `PairSchema` 와 프롬프트 버전을 그대로 다시 쓰므로, 프롬프트가 바뀌면 평가도 따라 바뀝니다. 후보 불러오기를 다시 돌리지 않고, 결과를 이슈 묶기에 다시 써 넣지도 않습니다.

내 라벨링 데이터는 `.data/` 아래에 둡니다(이 폴더는 Git 에 커밋되지 않습니다). `industry/relation-gold.example.jsonl` 에 지어낸 예시 네 건이 있습니다. 한 줄에 한 건입니다.

```json
{"caseId":"release-001","a":{"title":"...","source":"...","firstParty":true,"publishedAt":"2026-09-01T09:00:00+08:00","summary":"..."},"b":{"title":"...","source":"...","firstParty":false,"publishedAt":"2026-09-01T09:20:00+08:00","summary":"..."},"samplingContext":{"benchmarkSplit":"development","samplingStratum":"same-release"},"gold":{"relation":"SAME_OCCURRENCE"}}
```

`a`, `b` 에는 사이트 내부 `ReportView` 와 같은 선택 항목 `frame` 도 넣을 수 있습니다.

```json
{"subject":"Acme","action":"发布","object":"Acme-2","occurredAt":"2026-09-01"}
```

헷갈리기 쉬운 경계 표본은 개발 세트에 넣고, 일부는 `benchmarkSplit: "holdout"` 으로 남겨 마지막에 확인하기를 권합니다. `samplingStratum` 은 선택 항목인 묶음 이름입니다. 어떤 종류에서 틀렸는지 보는 데 쓰고, 모델 입력에는 영향을 주지 않습니다.

### 실행

먼저 평소 배포하듯 데이터베이스와 모델을 설정한 뒤 실행합니다.

```bash
node --env-file=.env scripts/eval-relations.ts \
  --gold .data/relation-gold.jsonl \
  --split development
```

기본으로 "묶기 재검토" 단계의 현재 모델을 씁니다. 관리자 화면 "모델과 평가" 페이지에서 바꾼 모델이 먼저이고, 다음은 환경변수 `GROUP_REVIEW_MODEL`, 그다음은 `site/models.ts` 의 `DEFAULTS.groupReview` 이며, 모두 없으면 기본 모델을 씁니다. 설정해 둔 여러 모델을 직접 지정해 비교할 수도 있습니다.

```bash
node --env-file=.env scripts/eval-relations.ts \
  --gold .data/relation-gold.jsonl \
  --models default,deepseek-flash \
  --split development \
  --n 200 \
  --seed 7 \
  --thresholds 0.75,0.8
```

쓸 수 있는 인자:

| 인자 | 기본값 | 설명 |
|---|---:|---|
| `--gold` | `.data/relation-gold.jsonl` | 라벨링 표본 파일(JSONL) |
| `--models` | "묶기 재검토"의 현재 모델 | 쉼표로 구분한 모델 이름 |
| `--split` | `all` | `development`, `holdout` 또는 직접 정한 묶음 |
| `--n` | `200` | 최대 평가 건수 |
| `--seed` | `7` | 표본 추출용 난수 시드. 시드가 같으면 매번 같은 표본을 뽑습니다 |
| `--concurrency` | `6` | 동시에 보내는 모델 요청 수 |
| `--thresholds` | production 의 `STORY_REVIEW_MIN_CONFIDENCE,TIE_MIN_CONFIDENCE` | 두 보도를 "같은 이슈로 연결"할지 판단할 때 쓰는 확신도 문턱. 직접 넘기면 기본값을 덮어씁니다 |

전체 보고서는 `.data/eval/relations-*.json` 에 씁니다. 모델마다 다음을 얻습니다.

- 4 × 4 대조표: 라벨링된 관계마다 모델이 어떤 관계로 판단했는지;
- 관계별 정밀도, 재현율, F1, 표본 수(구조화된 판단을 제대로 받은 표본만 셉니다);
- `coverage`: 전체 정답 표본 가운데 구조화된 판단을 제대로 받은 표본의 비율;
- `accuracy` 와 네 분류 macro-F1: 구조화된 판단을 제대로 받은 뒤의 판단 품질만 잽니다. `completeAccuracy` 는 전체 정답 표본을 분모로 삼아, 호출 실패나 형식에 맞지 않는 답도 제대로 끝내지 못한 것으로 칩니다;
- `SAME_OCCURRENCE`, `SAME_STORY` 를 모두 "같은 이슈로 연결"로 칠 때 확신도 문턱별 정밀도, 재현율, F1, 그리고 같은 표본의 `coverage` 와 `completeAccuracy`;
- 호출 오류 건수, token 사용량, 요청당 평균 소요 시간, 평가 전체 소요 시간;
- 표본마다 판단, 확신도, 모델이 쓴 차이 설명(`difference`), 영수증 번호.

모델 호출은 평소처럼 영수증과 예산 차단 장치를 거칩니다. 모델, 프롬프트, 입력이 같은 평가를 다시 하면 이미 있는 영수증을 다시 씁니다. 한 번 실행하는 동안 입력이 같은 표본은 요청 결과 하나를 함께 쓰고, 점수는 각자의 라벨로 매깁니다. 실패도 함께 쓰며, 그 실행 안에서 다시 요청하지 않습니다. 보고서의 `reused` 에는 함께 쓴 성공·실패 결과와 다시 쓴 기존 성공 영수증이 들어갑니다. 평가 영수증은 별도 용도 `eval_relation_pair` 를 쓰므로, 관리자 화면의 사이트 묶기 단계 통계에 들어가지 않습니다.

token 사용량과 평균 소요 시간은 보고서가 가리키는 영수증에 딸린 모든 요청 시도를 합한 값이고, 예전에 해석에 실패한 응답도 들어갑니다. 같은 영수증을 여러 표본이 가리켜도 두 번 세지 않습니다. 기존 결과로 다시 돌리면 이 과거 사용량이 그대로 보이며, 이번에 새로 든 비용을 뜻하지 않습니다.

CI 는 JSONL 해석, 고정 시드 표본 추출, 각 지표, 로컬 가짜 모델 서비스에서의 동시 요청 재사용과 재시도 사용량 집계를 확인하며, 외부 모델 서비스에는 접속하지 않습니다.
