#!/usr/bin/env bash
# src/data/*.ts 파일 수정 시 AI 문체 안티패턴 점검

FILE=$(jq -r '.tool_input.file_path // ""')

# src/data/ 하위 .ts 파일만 검사
if ! echo "$FILE" | grep -qE 'src/data/.+\.ts$'; then
  exit 0
fi

[ -f "$FILE" ] || exit 0

ISSUES=()

grep -qE '첫째|둘째|셋째' "$FILE" 2>/dev/null \
  && ISSUES+=("첫째/둘째/셋째 나열 구조 (→ 산문으로 변환)")

grep -q '"이란?"' "$FILE" 2>/dev/null \
  && ISSUES+=("질문에 ~이란? 형식 (→ ~뭔가요? 권장)")

grep -qE '라고 볼 수 있습니다|라고 할 수 있습니다' "$FILE" 2>/dev/null \
  && ISSUES+=("~라고 볼/할 수 있습니다 패턴 (→ ~입니다 권장)")

grep -qE '결론적으로|요약하자면' "$FILE" 2>/dev/null \
  && ISSUES+=("결론적으로/요약하자면 클리셰")

if [ ${#ISSUES[@]} -gt 0 ]; then
  JOINED=$(printf " / %s" "${ISSUES[@]}")
  JOINED="${JOINED:3}"
  jq -n \
    --arg f "$FILE" \
    --arg issues "$JOINED" \
    '{"hookSpecificOutput":{"hookEventName":"PostToolUse","additionalContext":("[문체 점검] " + $f + "\n발견된 패턴: " + $issues)}}'
fi
