# Frontend Kit

프론트엔드 개발자 면접 준비를 위한 플래시카드 웹앱입니다. 출퇴근 시간에 스와이프하며 핵심 개념을 빠르게 복습할 수 있습니다.

**→ [kr-frontend-kit.vercel.app](https://kr-frontend-kit.vercel.app)**

## 주요 기능

- 스와이프 / 버튼으로 카드 넘기기
- 답변 슬라이드 애니메이션으로 공개
- 6개 카테고리 필터 (CS, HTML/CSS, JavaScript, React, 자료구조, 알고리즘)
- 랜덤 셔플 모드
- 다크모드 / 라이트모드
- 글자 크기 조절 (소 / 중 / 대)
- 키보드 단축키 (← →, Space / Enter)
- PWA 지원 (홈 화면 추가, 오프라인 접속)

## 기술 스택

| 항목       | 기술                       |
| ---------- | -------------------------- |
| 프레임워크 | Next.js 16 (App Router)    |
| 스타일링   | Tailwind CSS v4            |
| 애니메이션 | motion                     |
| 스와이프   | react-swipeable            |
| 테마       | next-themes                |
| PWA        | @serwist/next              |
| 아이콘     | lucide-react               |
| 상태관리   | React Context + useReducer |

## 시작하기

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 빌드

```bash
pnpm build
pnpm start
```

## 질문 출처

질문 목록은 [prepare_frontend_interview](https://github.com/junh0328/prepare_frontend_interview) 저장소를 기반으로 작성되었습니다.
