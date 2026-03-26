import type { Flashcard } from "@/types/flashcard";

export const buildTools: Flashcard[] = [
  // 기본 개념
  {
    id: 1,
    category: "빌드도구",
    question: "모듈 번들러란 뭔가요? 왜 필요한가요?",
    answer:
      "모듈 번들러는 여러 개의 자바스크립트 파일과 의존성을 하나 또는 소수의 파일로 합쳐주는 도구입니다. 브라우저는 원래 모듈 시스템을 지원하지 않았고, 수많은 파일을 개별 요청하면 네트워크 비용이 커지기 때문에 번들러가 필요합니다. 번들러는 의존성 그래프를 분석하여 올바른 순서로 모듈을 결합하고, 코드 최적화(압축, 트리 쉐이킹 등)까지 수행하여 배포에 적합한 결과물을 만들어 줍니다.",
  },
  {
    id: 2,
    category: "빌드도구",
    question: "CommonJS의 require와 ES Module의 import는 어떤 차이가 있나요?",
    answer:
      "CommonJS의 require는 동기적으로 모듈을 로드하며, 런타임에 동적으로 경로를 결정할 수 있습니다. 반면 ES Module의 import는 정적 구문으로 컴파일 타임에 모듈 구조가 결정되어 트리 쉐이킹 같은 정적 분석 최적화가 가능합니다. CommonJS는 모듈의 복사본(값)을 내보내지만, ESM은 바인딩(참조)을 내보내 원본 값의 변경이 반영됩니다. 현재 브라우저는 ESM을 네이티브로 지원하며, Node.js도 ESM을 공식 지원합니다.",
  },
  {
    id: 3,
    category: "빌드도구",
    question: "Webpack이란 뭔가요? 어떤 문제를 해결하기 위해 등장했나요?",
    answer:
      "Webpack은 자바스크립트 애플리케이션을 위한 모듈 번들러입니다. 웹 애플리케이션이 복잡해지면서 수많은 자바스크립트 파일, CSS, 이미지 등의 에셋을 효율적으로 관리하고 최적화할 필요가 생겼습니다. Webpack은 엔트리 포인트에서 시작하여 의존성 그래프를 만들고, loader로 다양한 파일 형식을 변환하며, plugin으로 번들 최적화를 수행합니다. 이를 통해 모듈 간 의존성 관리, 코드 분할, 에셋 최적화 등의 문제를 해결합니다.",
  },
  {
    id: 4,
    category: "빌드도구",
    question: "Vite란 뭔가요? 어떤 문제를 해결하기 위해 등장했나요?",
    answer:
      "Vite는 Evan You가 만든 차세대 프론트엔드 빌드 도구입니다. 기존 번들러 기반 개발 서버는 애플리케이션이 커질수록 서버 시작과 HMR이 느려지는 문제가 있었습니다. Vite는 개발 시 브라우저의 Native ES Module을 활용하여 번들링 없이 모듈을 제공하고, esbuild로 의존성을 사전 번들링하여 개발 서버 시작 속도와 HMR 속도를 획기적으로 개선했습니다.",
  },
  {
    id: 5,
    category: "빌드도구",
    question: "Vite가 Webpack보다 개발 서버 시작이 빠른 이유는 뭔가요?",
    answer:
      "Webpack은 개발 서버를 시작할 때 모든 모듈을 번들링한 후에야 서버를 띄울 수 있어, 프로젝트가 커질수록 시작이 느려집니다. 반면 Vite는 브라우저의 Native ESM을 활용하여 요청된 모듈만 그때그때 변환하여 제공하므로 사전 번들링이 필요 없습니다. 또한 의존성(node_modules)은 esbuild로 사전 번들링하는데, esbuild는 Go로 작성되어 JavaScript 기반 번들러보다 10~100배 빠릅니다.",
  },
  // Vite 심화
  {
    id: 6,
    category: "빌드도구",
    question: "Webpack의 HMR이 Vite보다 상대적으로 느린 이유는 뭔가요?",
    answer:
      "Webpack의 HMR은 파일이 변경되면 해당 모듈이 속한 번들 전체를 다시 빌드하고, 변경된 모듈과 관련된 의존성 체인을 따라가며 업데이트를 전파합니다. 프로젝트가 커질수록 이 과정이 느려집니다. 반면 Vite는 Native ESM 기반이라 변경된 모듈만 교체하면 되고, 브라우저가 해당 모듈만 다시 요청하므로 프로젝트 크기와 관계없이 일관되게 빠른 HMR을 제공합니다.",
  },
  {
    id: 7,
    category: "빌드도구",
    question: "Vite는 브라우저 Native ESM을 통해 번들 없이 어떻게 동작하나요?",
    answer:
      'Vite 개발 서버는 소스 코드의 import 문을 브라우저가 이해할 수 있는 경로로 변환하여 그대로 제공합니다. 브라우저가 HTML의 <script type="module">을 만나면 import 문을 따라 필요한 모듈을 개별 HTTP 요청으로 가져옵니다. Vite는 이 요청을 가로채 해당 파일을 실시간으로 변환(TypeScript, JSX 등)하여 응답합니다. 즉, 전체를 하나로 묶지 않고 브라우저의 모듈 로딩 메커니즘에 위임하는 방식입니다.',
  },
  {
    id: 8,
    category: "빌드도구",
    question: "Vite도 production에서는 왜 번들링을 하나요?",
    answer:
      "개발 환경에서는 Native ESM이 편리하지만, 프로덕션에서 수백 개의 모듈을 개별 HTTP 요청으로 로드하면 네트워크 워터폴이 발생하여 로딩 성능이 크게 저하됩니다. HTTP/2 멀티플렉싱으로도 이 문제를 완전히 해결하지 못합니다. 또한 프로덕션에서는 트리 쉐이킹, 코드 압축, 청크 분할 등의 최적화가 필수적인데, 이러한 최적화는 번들링 과정에서 수행됩니다. 그래서 Vite는 프로덕션 빌드 시 Rollup을 사용하여 번들링합니다.",
  },
  {
    id: 9,
    category: "빌드도구",
    question:
      "Vite에서 pre-bundling은 왜 필요한가요? 어떤 문제를 해결하기 위한 과정인가요?",
    answer:
      "Pre-bundling은 두 가지 문제를 해결합니다. 첫째, CommonJS나 UMD로 작성된 의존성을 ESM으로 변환하여 브라우저가 로드할 수 있게 합니다. 둘째, 내부적으로 수많은 모듈로 구성된 패키지(예: lodash-es는 600개 이상의 모듈)를 하나의 모듈로 합쳐 브라우저의 HTTP 요청 수를 줄입니다. 개별 모듈마다 요청하면 네트워크 혼잡과 브라우저 성능 저하가 발생하기 때문입니다.",
  },
  {
    id: 10,
    category: "빌드도구",
    question:
      "Vite는 왜 pre-bundling에 esbuild를 사용하고, production 번들링에는 Rollup을 사용하나요?",
    answer:
      "esbuild는 Go로 작성되어 극도로 빠르기 때문에 개발 시 빠른 의존성 사전 번들링에 적합합니다. 하지만 esbuild는 코드 분할, CSS 처리, 플러그인 생태계 등 프로덕션 최적화 기능이 상대적으로 부족합니다. Rollup은 ESM 기반으로 설계되어 효율적인 트리 쉐이킹, 유연한 코드 분할, 풍부한 플러그인 생태계를 제공하므로 프로덕션 빌드에 더 적합합니다. 각 도구의 강점을 적절히 활용한 설계입니다.",
  },
  {
    id: 11,
    category: "빌드도구",
    question:
      "브라우저의 Native ES Module 기반 구조가 가지는 단점은 뭐가 있고, Vite는 이를 어떻게 보완하나요?",
    answer:
      "Native ESM은 모듈마다 개별 HTTP 요청이 발생하여 깊은 의존성 체인에서 네트워크 워터폴이 생기고, CommonJS 모듈을 직접 로드할 수 없으며, 모듈 수가 많아지면 브라우저 성능이 저하됩니다. Vite는 esbuild를 통한 의존성 사전 번들링으로 요청 수를 줄이고 CommonJS를 ESM으로 변환합니다. 또한 HTTP 헤더를 활용한 강력한 캐싱 전략과 프로덕션에서의 Rollup 번들링으로 이러한 단점들을 보완합니다.",
  },
  // 심화/비교
  {
    id: 12,
    category: "빌드도구",
    question: "Webpack과 Vite의 장단점을 비교하면 어떤 차이가 있나요?",
    answer:
      "Webpack은 성숙한 생태계, 풍부한 loader/plugin, 세밀한 설정이 가능하다는 장점이 있지만, 설정이 복잡하고 프로젝트가 커질수록 빌드와 HMR이 느려집니다. Vite는 빠른 개발 서버 시작과 HMR, 간결한 설정, 최신 웹 표준 활용이 장점이지만, Webpack 대비 플러그인 생태계가 작고 레거시 브라우저 지원에 추가 설정이 필요할 수 있습니다. 신규 프로젝트에서는 Vite가, 복잡한 레거시 프로젝트에서는 Webpack이 더 적합할 수 있습니다.",
  },
  {
    id: 13,
    category: "빌드도구",
    question: "Webpack의 번들링 과정은 어떻게 이루어지나요?",
    answer:
      "Webpack은 entry 설정에 지정된 파일부터 시작하여 import/require 문을 따라가며 의존성 그래프를 구축합니다. 각 모듈을 만나면 설정된 loader를 통해 변환(TypeScript → JS, SCSS → CSS 등)하고, 모든 의존성을 분석한 후 output 설정에 따라 하나 이상의 번들 파일로 합칩니다. 이 과정에서 plugin이 번들 최적화, 에셋 관리, 환경 변수 주입 등의 추가 작업을 수행합니다.",
  },
  {
    id: 14,
    category: "빌드도구",
    question: "Webpack의 loader와 plugin의 차이는 뭔가요?",
    answer:
      "Loader는 모듈 단위로 동작하며, 특정 파일 형식을 Webpack이 이해할 수 있는 JavaScript나 JSON으로 변환하는 역할을 합니다. 예를 들어 babel-loader는 최신 JS를 변환하고, css-loader는 CSS를 JS 모듈로 변환합니다. Plugin은 번들링 과정 전체에 걸쳐 동작하며, 번들 최적화, 에셋 관리, 환경 변수 주입 등 더 넓은 범위의 작업을 수행합니다. 즉, loader는 파일 변환, plugin은 빌드 프로세스 확장에 사용됩니다.",
  },
  {
    id: 15,
    category: "빌드도구",
    question: "Tree shaking이란 뭔가요? 어떤 조건에서 동작하나요?",
    answer:
      "Tree shaking은 사용되지 않는 코드(dead code)를 번들에서 제거하는 최적화 기법입니다. 나무를 흔들면 죽은 잎이 떨어지는 것에 비유한 이름입니다. ES Module의 정적 구조(import/export)를 분석하여 실제로 사용되는 코드만 번들에 포함합니다. 동작 조건으로는 ESM 사용, 사이드 이펙트 없는 모듈(package.json의 sideEffects 설정), 프로덕션 모드 빌드가 필요합니다. CommonJS의 동적 require는 정적 분석이 불가하여 트리 쉐이킹이 어렵습니다.",
  },
  {
    id: 16,
    category: "빌드도구",
    question: "Code splitting이란 뭔가요? 왜 필요한가요?",
    answer:
      "Code splitting은 번들을 여러 개의 작은 청크로 분할하여 필요한 시점에 로드하는 기법입니다. 모든 코드를 하나의 번들로 묶으면 초기 로딩 시 불필요한 코드까지 다운로드해야 하므로 로딩이 느려집니다. 동적 import()를 사용하면 특정 모듈을 별도 청크로 분리하여 해당 기능이 필요할 때 비동기로 로드할 수 있습니다. 이를 통해 초기 번들 크기를 줄이고, 페이지 로딩 성능을 개선할 수 있습니다.",
  },
  {
    id: 17,
    category: "빌드도구",
    question: "Source map이란 뭔가요? 왜 필요한가요?",
    answer:
      "Source map은 번들링, 압축, 트랜스파일된 코드를 원본 소스 코드와 매핑해주는 파일입니다. 프로덕션 코드는 최적화 과정에서 읽기 어렵게 변환되는데, 소스맵이 있으면 브라우저 개발자 도구에서 원본 코드 기준으로 디버깅할 수 있습니다. 에러 발생 시 원본 파일의 정확한 위치를 추적할 수 있어 디버깅 효율이 크게 향상됩니다. 단, 프로덕션에서는 소스맵 노출이 보안 이슈가 될 수 있으므로 설정에 주의가 필요합니다.",
  },
  {
    id: 18,
    category: "빌드도구",
    question: "Webpack의 chunk란 뭔가요? 어떤 종류가 있나요?",
    answer:
      "Chunk는 Webpack이 번들링 과정에서 생성하는 코드 묶음 단위입니다. 크게 세 종류가 있습니다. Entry chunk는 entry point에서 시작하는 메인 번들입니다. Async chunk는 동적 import()로 분리된 비동기 로딩 청크입니다. Vendor chunk(또는 common chunk)는 SplitChunksPlugin을 통해 여러 entry에서 공유하는 공통 의존성을 분리한 청크입니다. 적절한 청크 분할은 캐싱 효율과 로딩 성능을 개선하는 데 핵심적입니다.",
  },
];
