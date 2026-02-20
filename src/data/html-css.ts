import type { Flashcard } from "@/types/flashcard";

export const htmlCss: Flashcard[] = [
  {
    id: 101,
    category: "HTML/CSS",
    question: "DOCTYPE에 대하여 설명하시오",
    answer:
      "DOCTYPE은 문서 유형 선언(Document Type Declaration)으로, 브라우저에게 해당 문서가 어떤 HTML 버전으로 작성되었는지 알려주는 역할을 합니다. HTML5에서는 <!DOCTYPE html>로 간단하게 선언하며, 이를 생략하면 브라우저가 쿼크 모드(Quirks Mode)로 렌더링하여 예기치 않은 레이아웃 문제가 발생할 수 있습니다.",
  },
  {
    id: 102,
    category: "HTML/CSS",
    question: "meta 태그에 대해서 알고 있나요?",
    answer:
      "meta 태그는 HTML 문서의 <head> 내부에 위치하며, 문서에 대한 메타데이터(정보에 대한 정보)를 정의하는 태그입니다. 문자 인코딩, 뷰포트 설정, 페이지 설명, 키워드 등 브라우저와 검색 엔진에 필요한 정보를 제공합니다. 화면에 직접 표시되지는 않지만 SEO와 올바른 페이지 렌더링에 중요한 역할을 합니다.",
  },
  {
    id: 103,
    category: "HTML/CSS",
    question: "meta 태그의 요소에 대해서 아는대로 말해보세요",
    answer:
      "charset은 문자 인코딩을 지정하고(예: UTF-8), viewport는 모바일 반응형을 위한 뷰포트 설정을 합니다. name 속성으로 description(페이지 설명), keywords(키워드), author(작성자)를 지정할 수 있습니다. http-equiv는 HTTP 헤더 정보를 제공하며, og(Open Graph) 태그는 SNS 공유 시 표시되는 제목, 설명, 이미지를 정의합니다.",
  },
  {
    id: 104,
    category: "HTML/CSS",
    question: "웹 표준이란?",
    answer:
      "웹 표준은 W3C(World Wide Web Consortium)가 권고하는, 웹에서 사용되는 기술의 규격과 가이드라인을 말합니다. HTML, CSS, JavaScript 등의 기술을 표준 규격에 맞게 작성하면 어떤 브라우저나 기기에서든 동일하게 동작하도록 보장할 수 있습니다. 웹 표준을 준수하면 접근성, 호환성, 유지보수성이 향상됩니다.",
  },
  {
    id: 105,
    category: "HTML/CSS",
    question: "HTML5에서 추가된 내용이 있나요?",
    answer:
      "HTML5에서는 시멘틱 태그(header, nav, section, article, footer 등), 멀티미디어 태그(audio, video), Canvas와 SVG를 통한 그래픽 처리, 그리고 웹 스토리지(localStorage, sessionStorage)가 추가되었습니다. 또한 Geolocation API, 드래그 앤 드롭 API, Web Worker 등 다양한 API가 도입되어 플러그인 없이도 풍부한 웹 애플리케이션을 구현할 수 있게 되었습니다.",
  },
  {
    id: 106,
    category: "HTML/CSS",
    question: "웹 접근성이란?",
    answer:
      "웹 접근성(Web Accessibility)이란 장애인, 고령자 등 누구나 웹 콘텐츠에 동등하게 접근하고 이용할 수 있도록 보장하는 것을 말합니다. 시각, 청각, 운동 장애 등 다양한 환경의 사용자가 보조 기술(스크린 리더 등)을 통해 웹을 불편 없이 이용할 수 있어야 합니다. 한국에서는 WCAG(웹 콘텐츠 접근성 가이드라인)와 KWCAG(한국형 웹 콘텐츠 접근성 지침)를 기준으로 삼습니다.",
  },
  {
    id: 107,
    category: "HTML/CSS",
    question: "웹 접근성에 맞는 마크업 예시 몇가지 말해보시오",
    answer:
      "이미지에 alt 속성을 부여하여 대체 텍스트를 제공하고, form 요소에 label 태그를 연결하여 입력 필드의 용도를 명시합니다. 시멘틱 태그를 사용하여 문서 구조를 명확히 하고, aria 속성(aria-label, aria-hidden, role 등)을 활용하여 스크린 리더가 콘텐츠를 올바르게 해석할 수 있도록 합니다. 또한 키보드만으로도 모든 기능에 접근 가능하도록 tabindex와 focus 관리를 적절히 설정합니다.",
  },
  {
    id: 108,
    category: "HTML/CSS",
    question: "시멘틱 태그란 무엇인가 왜 사용하는가",
    answer:
      "시멘틱 태그는 태그 이름만으로 콘텐츠의 의미와 구조를 전달하는 HTML 태그입니다. header, nav, main, article, section, aside, footer 등이 대표적입니다. 검색 엔진이 페이지 구조를 더 잘 이해하여 SEO가 향상되고, 스크린 리더 등 보조 기술이 문서를 정확히 해석할 수 있어 접근성이 개선되며, 개발자 간 코드 가독성과 유지보수성도 높아집니다.",
  },
  {
    id: 109,
    category: "HTML/CSS",
    question: "텍스트 관련 태그",
    answer:
      "제목을 나타내는 h1~h6, 문단을 나타내는 p, 줄바꿈 br, 수평선 hr이 기본 구조 태그입니다. 텍스트 강조에는 strong(중요, 굵게)과 em(강조, 기울임)이 있고, 단순 스타일링에는 b(굵게)와 i(기울임)가 있습니다. 그 외에 인용을 위한 blockquote, 코드 표시를 위한 code, 삭제선 표시를 위한 del, 밑줄을 위한 u 등이 있습니다.",
  },
  {
    id: 110,
    category: "HTML/CSS",
    question: "SEO란 무엇인가?",
    answer:
      "SEO(Search Engine Optimization)는 검색 엔진 최적화로, 웹사이트가 검색 결과 상위에 노출되도록 개선하는 일련의 작업을 의미합니다. 시멘틱 태그 사용, 적절한 meta 태그 설정, 의미 있는 title과 heading 구조, 이미지 alt 속성 제공, 빠른 로딩 속도, 모바일 최적화 등이 주요 기법입니다. 좋은 SEO는 더 많은 유기적 트래픽을 확보하는 데 기여합니다.",
  },
  {
    id: 111,
    category: "HTML/CSS",
    question: "Button 태그의 Default type은 무엇인가?",
    answer:
      'Button 태그의 기본 type은 "submit"입니다. 따라서 form 내부에서 type을 명시하지 않은 button을 클릭하면 폼이 자동으로 제출됩니다. 의도치 않은 폼 제출을 방지하려면 type="button"으로 명시적으로 지정해야 합니다. 그 외에 type="reset"은 폼 입력값을 초기화하는 역할을 합니다.',
  },
  {
    id: 112,
    category: "HTML/CSS",
    question: "Section 태그와 Article 태그의 차이점",
    answer:
      "section 태그는 문서의 주제별 콘텐츠 영역을 그룹화할 때 사용하며, 일반적으로 제목(heading)을 포함합니다. article 태그는 독립적으로 배포하거나 재사용 가능한 콘텐츠(블로그 글, 뉴스 기사, 댓글 등)를 나타냅니다. 즉, article은 그 자체로 완결된 콘텐츠이고, section은 관련 콘텐츠를 논리적으로 묶는 영역입니다.",
  },
  {
    id: 113,
    category: "HTML/CSS",
    question: "크로스 브라우징이란 무엇인가요?",
    answer:
      "크로스 브라우징(Cross Browsing)이란 Chrome, Safari, Firefox, Edge 등 다양한 브라우저에서 웹사이트가 동일하게 동작하고 일관된 사용자 경험을 제공하도록 하는 기법입니다. 브라우저마다 렌더링 엔진이 다르기 때문에 CSS 초기화(reset/normalize), 벤더 프리픽스 적용, Polyfill 사용, Can I Use를 통한 호환성 확인 등의 방법으로 대응합니다.",
  },
  {
    id: 114,
    category: "HTML/CSS",
    question:
      "이미지 크기가 클 경우 렌더링 속도가 느려질텐데 이를 개선하기 위한 방법",
    answer:
      "이미지 압축과 최적화를 통해 파일 크기를 줄이고, WebP 등 차세대 포맷을 사용합니다. 반응형 이미지를 위해 srcset과 sizes 속성을 활용하여 디바이스에 맞는 크기의 이미지를 제공합니다. Lazy Loading(loading='lazy')으로 뷰포트에 보이는 이미지만 먼저 로드하고, CDN을 활용하여 이미지 전송 속도를 높이는 것도 효과적입니다.",
  },
  {
    id: 115,
    category: "HTML/CSS",
    question: "UI란 무엇인지 설명하시오",
    answer:
      "UI(User Interface)는 사용자와 시스템 간의 상호작용을 위한 접점으로, 사용자가 제품이나 서비스를 이용할 때 접하는 화면, 버튼, 입력창 등 모든 시각적 요소를 의미합니다. 좋은 UI는 직관적이고 일관성 있으며 사용하기 쉬워야 합니다. UI와 함께 자주 언급되는 UX(User Experience)는 사용자가 제품을 통해 느끼는 전반적인 경험을 뜻합니다.",
  },
  {
    id: 116,
    category: "HTML/CSS",
    question: "SVG 장점과 단점",
    answer:
      "SVG(Scalable Vector Graphics)의 장점은 벡터 기반이라 확대/축소해도 화질이 저하되지 않고, 파일 크기가 작으며, CSS와 JavaScript로 스타일링 및 애니메이션이 가능하다는 것입니다. 또한 텍스트 기반이라 검색 엔진이 내용을 읽을 수 있습니다. 단점으로는 복잡한 이미지(사진 등)를 표현하기 어렵고, 도형이 복잡해지면 코드가 길어져 성능이 저하될 수 있습니다.",
  },
  {
    id: 117,
    category: "HTML/CSS",
    question: "SVG 내부 도형에 대해 아는게 있나요?",
    answer:
      "SVG에서 사용하는 기본 도형 요소로는 rect(사각형), circle(원), ellipse(타원), line(직선), polyline(연결된 직선들), polygon(다각형)이 있습니다. path 요소는 M(이동), L(직선), C(곡선) 등의 명령어를 사용하여 복잡한 형태를 자유롭게 그릴 수 있는 가장 강력한 도형 요소입니다. 각 도형은 fill, stroke, opacity 등의 속성으로 스타일을 지정할 수 있습니다.",
  },
  {
    id: 118,
    category: "HTML/CSS",
    question: "display 속성의 block, inline, inline-block, none 차이",
    answer:
      "block은 한 줄 전체를 차지하며 width/height 설정이 가능합니다(div, p 등). inline은 콘텐츠 크기만큼만 차지하고 width/height 설정이 불가능합니다(span, a 등). inline-block은 inline처럼 한 줄에 나란히 배치되면서도 width/height 설정이 가능합니다. none은 요소를 화면에서 완전히 제거하여 공간도 차지하지 않습니다(visibility: hidden은 공간은 유지).",
  },
  {
    id: 119,
    category: "HTML/CSS",
    question:
      "position에 대하여 설명해보세요 (static, relative, fixed, absolute)",
    answer:
      "static은 기본값으로 문서의 일반적인 흐름에 따라 배치됩니다. relative는 원래 위치를 기준으로 top/left 등으로 이동하며 원래 공간은 유지됩니다. absolute는 가장 가까운 position이 지정된(static이 아닌) 조상 요소를 기준으로 배치되며 문서 흐름에서 제거됩니다. fixed는 뷰포트를 기준으로 고정 배치되어 스크롤해도 위치가 변하지 않습니다. 추가로 sticky는 스크롤 위치에 따라 relative와 fixed 사이를 전환합니다.",
  },
  {
    id: 120,
    category: "HTML/CSS",
    question: "float가 어떻게 작동하는가",
    answer:
      "float는 요소를 문서의 일반적인 흐름에서 벗어나게 하여 좌측이나 우측으로 띄워 배치하는 속성입니다. float된 요소 주변으로 텍스트나 인라인 요소가 감싸며 흐릅니다. 부모 요소가 float된 자식의 높이를 인식하지 못하는 문제가 발생하는데, 이를 해결하기 위해 clearfix 기법이나 overflow: hidden을 사용합니다. 현재는 Flexbox와 Grid 레이아웃이 등장하여 float를 레이아웃 용도로 사용하는 경우는 줄어들었습니다.",
  },
  {
    id: 121,
    category: "HTML/CSS",
    question: "flex를 사용하는 이유가 무엇인가요?",
    answer:
      "Flexbox는 1차원(행 또는 열) 레이아웃을 효율적으로 구성하기 위한 CSS 레이아웃 모델입니다. 요소들의 크기가 불명확하거나 동적인 상황에서도 정렬, 방향, 순서, 간격을 유연하게 제어할 수 있습니다. justify-content, align-items 등의 속성으로 수평/수직 정렬을 간단히 처리할 수 있어, 기존의 float나 position 기반 레이아웃보다 훨씬 직관적이고 반응형 대응이 용이합니다.",
  },
  {
    id: 122,
    category: "HTML/CSS",
    question: "Grid를 사용하는 이유가 무엇인가요?",
    answer:
      "CSS Grid는 2차원(행과 열) 레이아웃을 동시에 제어할 수 있는 레이아웃 시스템입니다. grid-template-rows, grid-template-columns로 행과 열을 정의하고, gap으로 간격을 설정하며, grid-area로 요소를 원하는 영역에 배치할 수 있습니다. 복잡한 페이지 레이아웃이나 대시보드처럼 행과 열을 동시에 관리해야 하는 경우 Flexbox보다 효과적입니다.",
  },
  {
    id: 123,
    category: "HTML/CSS",
    question: "이미지 태그를 스타일로 대체하는 법",
    answer:
      "img 태그 대신 background-image CSS 속성을 사용하여 이미지를 표시할 수 있습니다. background-size(cover, contain), background-position(center), background-repeat(no-repeat) 등의 속성으로 이미지 표시 방식을 세밀하게 제어할 수 있습니다. 단, 배경 이미지는 콘텐츠가 아닌 장식적 요소로 간주되어 스크린 리더가 읽지 못하므로, 의미 있는 이미지는 img 태그와 alt 속성을 사용해야 합니다.",
  },
  {
    id: 124,
    category: "HTML/CSS",
    question: "반응형 웹의 3요소",
    answer:
      "반응형 웹의 3요소는 유연한 그리드 레이아웃(Flexible Grid), 유연한 이미지(Flexible Images), 미디어 쿼리(Media Queries)입니다. 유연한 그리드는 고정 px 대신 %, vw 등 상대 단위로 레이아웃을 구성하고, 유연한 이미지는 max-width: 100%로 컨테이너에 맞게 크기가 조절되도록 합니다. 미디어 쿼리는 화면 크기에 따라 다른 CSS 스타일을 적용하여 다양한 디바이스에 대응합니다.",
  },
  {
    id: 125,
    category: "HTML/CSS",
    question: "CSS selector가 어떠한 원리로 동작하나요?",
    answer:
      "CSS 선택자는 브라우저가 오른쪽에서 왼쪽으로 해석합니다. 예를 들어 'div p span'이면 먼저 모든 span을 찾고, 그 중 부모가 p인 것을 필터링한 후, 다시 그 조상에 div가 있는지 확인합니다. 이 방식이 왼쪽에서 오른쪽보다 효율적인 이유는 대부분의 선택자가 일치하지 않으므로, 가장 구체적인 요소부터 검사하여 빠르게 불일치를 판별할 수 있기 때문입니다.",
  },
  {
    id: 126,
    category: "HTML/CSS",
    question: "반응형 웹이란?",
    answer:
      "반응형 웹(Responsive Web)은 하나의 웹사이트가 화면 크기에 따라 레이아웃이 자동으로 변하여 PC, 태블릿, 모바일 등 다양한 디바이스에서 최적의 사용자 경험을 제공하는 웹 디자인 방식입니다. 미디어 쿼리, 유연한 그리드, 상대 단위 등을 활용하여 구현합니다. 하나의 HTML 소스로 모든 기기에 대응하므로 개발 및 유지보수 비용이 절감됩니다.",
  },
  {
    id: 127,
    category: "HTML/CSS",
    question: "적응형 웹이란?",
    answer:
      "적응형 웹(Adaptive Web)은 서버 또는 클라이언트에서 사용자의 기기 유형을 감지하여 미리 준비된 여러 버전의 레이아웃 중 적합한 것을 제공하는 방식입니다. 반응형 웹이 유동적으로 변하는 반면, 적응형은 특정 해상도(예: 320px, 768px, 1024px)에 맞춰 고정된 레이아웃을 전환합니다. 특정 기기에 최적화된 경험을 제공할 수 있지만, 여러 버전을 관리해야 하는 비용이 발생합니다.",
  },
  {
    id: 128,
    category: "HTML/CSS",
    question: "PX, EM에 대해 설명하시오 (절대단위, 상대단위)",
    answer:
      "px은 절대 단위로 화면의 픽셀을 기준으로 하며 고정된 크기를 가집니다. em은 상대 단위로 부모 요소의 font-size를 기준으로 계산됩니다(예: 부모가 16px이면 1.5em = 24px). rem은 최상위 html 요소의 font-size를 기준으로 하여 em보다 일관된 크기 관리가 가능합니다. 반응형 디자인에서는 상대 단위를 사용하는 것이 다양한 화면 크기에 유연하게 대응할 수 있어 권장됩니다.",
  },
  {
    id: 129,
    category: "HTML/CSS",
    question: "CSS 적용 우선순위",
    answer:
      "CSS 우선순위는 명시도(Specificity)에 따라 결정됩니다. !important가 가장 높고, 그 다음 인라인 스타일(style 속성), ID 선택자(#id), 클래스/속성/가상 클래스 선택자(.class), 태그 선택자(div) 순입니다. 같은 명시도일 경우 나중에 선언된 스타일이 적용됩니다. 명시도 점수는 (인라인, ID, 클래스, 태그) 형태로 계산하며, 예를 들어 #header .nav a는 (0, 1, 1, 1)입니다.",
  },
  {
    id: 130,
    category: "HTML/CSS",
    question: "CSS-in-JS에 대해서 설명해 주세요",
    answer:
      "CSS-in-JS는 JavaScript 파일 안에서 CSS 스타일을 작성하는 방식으로, styled-components와 Emotion이 대표적인 라이브러리입니다. 컴포넌트 단위로 스타일을 캡슐화하여 클래스명 충돌을 방지하고, props에 따라 동적 스타일링이 가능합니다. 단점으로는 런타임에 스타일을 생성하므로 성능 오버헤드가 발생할 수 있고, JavaScript 번들 크기가 증가할 수 있습니다.",
  },
  {
    id: 131,
    category: "HTML/CSS",
    question: "CSS 전처리기를 사용해봤다면 장점과 단점",
    answer:
      "CSS 전처리기(Sass, Less, Stylus 등)의 장점은 변수, 중첩, 믹스인, 함수 등의 프로그래밍적 기능을 사용하여 CSS를 효율적으로 작성하고 관리할 수 있다는 것입니다. 코드 재사용성이 높아지고 유지보수가 편리해집니다. 단점으로는 컴파일 과정이 필요하여 빌드 시간이 추가되고, 팀원 모두가 문법을 학습해야 하며, 과도한 중첩 사용 시 오히려 가독성과 성능이 저하될 수 있습니다.",
  },
  {
    id: 132,
    category: "HTML/CSS",
    question: "padding과 margin의 차이가 무엇인가요?",
    answer:
      "padding은 요소의 콘텐츠와 테두리(border) 사이의 내부 여백이고, margin은 요소의 테두리 바깥쪽 외부 여백입니다. padding은 요소의 배경색이 적용되는 영역에 포함되지만, margin은 투명한 영역입니다. 또한 margin은 인접한 요소 간에 마진 겹침(Margin Collapsing) 현상이 발생할 수 있어, 두 요소의 상하 마진 중 큰 값만 적용됩니다.",
  },
];
