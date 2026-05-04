import type { Flashcard } from "@/types/flashcard";

export const htmlCss: Flashcard[] = [
  {
    id: 1,
    category: "HTML/CSS",
    question: "DOCTYPE이 뭔가요?",
    answer:
      "DOCTYPE은 문서 유형 선언(Document Type Declaration)으로, 브라우저에 해당 문서가 어떤 HTML 버전으로 작성되었는지 알려주는 역할을 합니다.\n\nHTML5에서는 <!DOCTYPE html>로 간단하게 선언하며, 문서 최상단에 위치해야 합니다. 이 선언이 없으면 브라우저가 쿼크 모드(Quirks Mode)로 전환되어 오래된 브라우저의 비표준 렌더링 방식을 흉내 내기 때문에, 의도하지 않은 레이아웃 깨짐이 발생할 수 있습니다.\n\n웹 표준은 각 브라우저나 기기에 관계없이 동작을 일관되게 만들기 위한 프로토콜의 집합인데, DOCTYPE 선언은 그 진입점입니다. HTML, CSS, JavaScript 모두 표준을 지켜 작성해야 접근성, 호환성, 유지보수성이 보장되고, 쿼크 모드처럼 표준에서 벗어난 환경에서는 이 모든 보장이 흔들립니다.",
  },
  {
    id: 2,
    category: "HTML/CSS",
    question: "meta 태그에 대해서 알고 있나요?",
    answer:
      "meta 태그는 HTML 문서의 <head> 내부에 위치하며, 문서에 대한 메타데이터(정보에 대한 정보)를 정의하는 태그입니다.\n\n문자 인코딩, 뷰포트 설정, 페이지 설명, 키워드 등 브라우저와 검색 엔진에 필요한 정보를 제공합니다. 화면에 직접 표시되지는 않지만 문서를 해석하는 데 필요한 부가 정보를 담당합니다.\n\nSEO와 올바른 페이지 렌더링에 중요한 역할을 하므로 페이지 성격에 맞게 적절히 작성하는 것이 좋습니다.",
  },
  {
    id: 3,
    category: "HTML/CSS",
    question: "meta 태그의 요소에 대해서 아는대로 말해보세요",
    answer:
      "meta 태그는 다양한 속성을 통해 문서 정보를 정의합니다.\n\ncharset은 문자 인코딩을 지정하고(예: UTF-8), viewport는 모바일 반응형을 위한 뷰포트 설정을 합니다.\nname 속성으로 description(페이지 설명), keywords(키워드), author(작성자)를 지정할 수 있습니다.\nhttp-equiv는 HTTP 헤더 정보를 제공하며, og(Open Graph) 태그는 SNS 공유 시 표시되는 제목, 설명, 이미지를 정의합니다.",
  },
  {
    id: 4,
    category: "HTML/CSS",
    question: "웹 표준이란 뭔가요?",
    answer:
      "웹 표준은 W3C(World Wide Web Consortium)가 권고하는, 웹에서 사용되는 기술의 규격과 가이드라인을 말합니다.\n\nHTML, CSS, JavaScript 등의 기술을 표준 규격에 맞게 작성하면 어떤 브라우저나 기기에서든 동일하게 동작하도록 보장할 수 있습니다.\n\n웹 표준을 준수하면 접근성, 호환성, 유지보수성이 향상되어 장기적으로 안정적인 서비스를 제공할 수 있습니다.",
  },
  {
    id: 5,
    category: "HTML/CSS",
    question: "HTML5에서 추가된 내용이 있나요?",
    answer:
      "HTML5는 시멘틱 마크업과 멀티미디어, API를 대폭 강화한 버전입니다.\n\n시멘틱 태그(header, nav, section, article, footer 등), 멀티미디어 태그(audio, video), Canvas와 SVG를 통한 그래픽 처리, 그리고 웹 스토리지(localStorage, sessionStorage)가 추가되었습니다.\n\n또한 Geolocation API, 드래그 앤 드롭 API, Web Worker 등 다양한 API가 도입되어 플러그인 없이도 풍부한 웹 애플리케이션을 구현할 수 있게 되었습니다.",
  },
  {
    id: 6,
    category: "HTML/CSS",
    question: "웹 접근성이란 뭔가요?",
    answer:
      "웹 접근성이란 장애인, 고령자 등 다양한 환경의 사용자가 웹 콘텐츠를 동등하게 이용할 수 있도록 보장하는 것을 말합니다. 시각, 청각, 운동 장애가 있는 사용자도 스크린 리더나 키보드 같은 보조 기술을 통해 불편 없이 서비스를 이용할 수 있어야 한다는 개념입니다.\n\n구체적인 구현 방법으로는 시맨틱 태그로 명확한 HTML 구조를 잡고, ARIA 속성으로 동적 콘텐츠나 복잡한 UI를 스크린 리더가 올바르게 인식하도록 돕고, 포커스를 명확히 지정해 키보드만으로도 페이지 전체를 탐색할 수 있게 하는 것이 핵심입니다.\n\n다만 모든 장애 유형에 완벽히 대응하는 건 현실적으로 어렵습니다. 완벽한 준수를 목표로 하기보다, 실제 사용자가 서비스에서 어떤 경험을 하고 있는지를 파악하고 — 예를 들어 스크린 리더로 직접 테스트해보는 방식으로 — 우선순위를 정해 점진적으로 개선해나가는 접근이 더 현실적입니다.",
  },
  {
    id: 7,
    category: "HTML/CSS",
    question: "웹 접근성에 맞는 마크업에는 어떤 게 있나요?",
    answer:
      "접근성을 높이려면 콘텐츠의 의미와 조작 가능성을 명확히 드러내야 합니다.\n\n이미지에 alt 속성을 부여하여 대체 텍스트를 제공하고, form 요소에 label 태그를 연결하여 입력 필드의 용도를 명시합니다.\n시멘틱 태그를 사용하여 문서 구조를 명확히 하고, aria 속성(aria-label, aria-hidden, role 등)을 활용하여 스크린 리더가 콘텐츠를 올바르게 해석할 수 있도록 합니다.\n또한 키보드만으로도 모든 기능에 접근 가능하도록 tabindex와 focus 관리를 적절히 설정합니다.",
  },
  {
    id: 8,
    category: "HTML/CSS",
    question: "시멘틱 태그란 무엇이고, 왜 사용하나요?",
    answer:
      "시맨틱 태그는 태그 이름 자체가 콘텐츠의 의미와 역할을 전달하는 HTML 태그입니다. div나 span처럼 의미 없는 태그 대신 header, nav, main, article, section, footer 같은 태그를 사용하면, 코드를 보는 것만으로 페이지 구조가 파악됩니다.\n\n가장 직접적인 이점은 접근성입니다. 스크린 리더 같은 보조 기술이 시맨틱 요소를 만나면 콘텐츠 구조를 훨씬 잘 해석해서, 시각 장애가 있는 사용자도 페이지를 제대로 탐색할 수 있습니다.\n\nSEO 측면에서도 유리합니다. 검색 엔진은 시맨틱 HTML 구조를 바탕으로 페이지 내용을 이해하는데, CSR 환경에서도 최신 검색 엔진은 JavaScript 렌더링을 지원하므로 시맨틱 마크업이 여전히 검색 노출에 긍정적인 영향을 줍니다.",
  },
  {
    id: 9,
    category: "HTML/CSS",
    question: "텍스트 관련 태그에는 어떤 것들이 있나요?",
    answer:
      "텍스트 관련 태그는 구조 표현용과 의미·스타일 표현용으로 나뉩니다.\n\n제목을 나타내는 h1~h6, 문단을 나타내는 p, 줄바꿈 br, 수평선 hr이 기본 구조 태그입니다.\n텍스트 강조에는 strong(중요, 굵게)과 em(강조, 기울임)이 있고, 단순 스타일링에는 b(굵게)와 i(기울임)가 있습니다.\n그 외에 인용을 위한 blockquote, 코드 표시를 위한 code, 삭제선 표시를 위한 del, 밑줄을 위한 u 등이 있습니다.",
  },
  {
    id: 10,
    category: "HTML/CSS",
    question: "SEO란 뭔가요?",
    answer:
      "SEO(Search Engine Optimization)는 검색 엔진 최적화로, 웹사이트가 검색 결과 상위에 노출되도록 개선하는 일련의 작업을 의미합니다.\n\n시멘틱 태그 사용, 적절한 meta 태그 설정, 의미 있는 title과 heading 구조, 이미지 alt 속성 제공, 빠른 로딩 속도, 모바일 최적화 등이 주요 기법입니다.\n\n좋은 SEO는 더 많은 유기적 트래픽을 확보하는 데 기여하므로 마케팅과 직결되는 중요한 영역입니다.",
  },
  {
    id: 11,
    category: "HTML/CSS",
    question: "Button 태그의 Default type은 뭔가요?",
    answer:
      'Button 태그의 기본 type은 "submit"입니다. 따라서 form 내부에서 type을 명시하지 않은 button을 클릭하면 폼이 자동으로 제출됩니다.\n\n의도치 않은 폼 제출을 방지하려면 type="button"으로 명시적으로 지정해야 합니다. 그 외에 type="reset"은 폼 입력값을 초기화하는 역할을 합니다.\n\n버튼이 폼 안에 위치할 때는 항상 type을 명시하여 의도한 동작만 수행하도록 하는 것이 안전합니다.',
  },
  {
    id: 12,
    category: "HTML/CSS",
    question: "Section 태그와 Article 태그의 차이점은 뭔가요?",
    answer:
      "section과 article은 모두 콘텐츠를 그룹화하는 시멘틱 태그지만, 독립성과 재사용성에서 차이가 있습니다.\n\nsection 태그는 문서의 주제별 콘텐츠 영역을 그룹화할 때 사용하며, 일반적으로 제목(heading)을 포함합니다.\n\narticle 태그는 독립적으로 배포하거나 재사용 가능한 콘텐츠(블로그 글, 뉴스 기사, 댓글 등)를 나타냅니다. 즉, article은 그 자체로 완결된 콘텐츠이고, section은 관련 콘텐츠를 논리적으로 묶는 영역입니다.",
  },
  {
    id: 13,
    category: "HTML/CSS",
    question: "크로스 브라우징이란 뭔가요?",
    answer:
      "크로스 브라우징(Cross Browsing)이란 Chrome, Safari, Firefox, Edge 등 다양한 브라우저에서 웹사이트가 동일하게 동작하고 일관된 사용자 경험을 제공하도록 하는 기법입니다.\n\n브라우저마다 렌더링 엔진이 다르기 때문에 동일한 코드라도 다르게 표시될 수 있어 호환성 작업이 필요합니다.\n\nCSS 초기화(reset/normalize), 벤더 프리픽스 적용, Polyfill 사용, Can I Use를 통한 호환성 확인 등의 방법으로 대응합니다.",
  },
  {
    id: 14,
    category: "HTML/CSS",
    question: "이미지 크기가 클 경우 렌더링 속도를 개선하는 방법은 뭔가요?",
    answer:
      '이미지 렌더링 속도를 개선하는 방법은 크게 포맷 최적화, 크기 조정, 지연 로딩, CDN 활용으로 나눌 수 있습니다.\n\n포맷은 기존 JPEG/PNG 대신 WebP나 AVIF로 변환하면 품질을 유지하면서 파일 크기를 크게 줄일 수 있습니다. 다만 구형 브라우저 지원이 필요하다면 picture 태그를 써서 AVIF → WebP → JPEG 순서로 폴백을 제공하면 됩니다.\n\n크기 조정은 실제 표시 크기에 맞는 이미지를 제공하는 것입니다. srcset과 sizes 속성을 활용하면 브라우저가 현재 화면 크기에 최적화된 이미지를 골라서 로드합니다.\n\nloading="lazy"를 사용하면 뷰포트에 보이지 않는 이미지는 나중에 불러오기 때문에 초기 로드 속도가 빨라집니다. CDN을 함께 쓰면 지리적으로 가까운 서버에서 이미지를 받아 전송 지연도 줄어듭니다.',
  },
  {
    id: 15,
    category: "HTML/CSS",
    question: "UI란 뭔가요?",
    answer:
      "UI(User Interface)는 사용자와 시스템 간의 상호작용을 위한 접점으로, 사용자가 제품이나 서비스를 이용할 때 접하는 화면, 버튼, 입력창 등 모든 시각적 요소를 의미합니다.\n\n좋은 UI는 직관적이고 일관성 있으며 사용하기 쉬워야 합니다.\n\nUI와 함께 자주 언급되는 UX(User Experience)는 사용자가 제품을 통해 느끼는 전반적인 경험을 뜻하며, UI는 UX를 구성하는 시각적·기능적 요소입니다.",
  },
  {
    id: 16,
    category: "HTML/CSS",
    question: "SVG의 장점과 단점은 뭔가요?",
    answer:
      "SVG(Scalable Vector Graphics)는 벡터 기반 이미지 포맷으로, 텍스트 형태의 XML로 정의됩니다.\n\n장점은 벡터 기반이라 확대/축소해도 화질이 저하되지 않고, 파일 크기가 작으며, CSS와 JavaScript로 스타일링 및 애니메이션이 가능하다는 것입니다. 또한 텍스트 기반이라 검색 엔진이 내용을 읽을 수 있습니다.\n\n단점으로는 복잡한 이미지(사진 등)를 표현하기 어렵고, 도형이 복잡해지면 코드가 길어져 성능이 저하될 수 있습니다.",
  },
  {
    id: 17,
    category: "HTML/CSS",
    question: "SVG 내부 도형에 대해 아는게 있나요?",
    answer:
      "SVG는 기본 도형 요소와 path를 조합해 다양한 그래픽을 그립니다.\n\n기본 도형 요소로는 rect(사각형), circle(원), ellipse(타원), line(직선), polyline(연결된 직선들), polygon(다각형)이 있습니다.\npath 요소는 M(이동), L(직선), C(곡선) 등의 명령어를 사용하여 복잡한 형태를 자유롭게 그릴 수 있는 가장 강력한 도형 요소입니다.\n각 도형은 fill, stroke, opacity 등의 속성으로 스타일을 지정할 수 있습니다.",
  },
  {
    id: 18,
    category: "HTML/CSS",
    question:
      "display 속성의 block, inline, inline-block, none의 차이는 뭔가요?",
    answer:
      "display 속성은 요소가 어떻게 배치되고 크기를 가지는지를 결정합니다.\n\nblock은 한 줄 전체를 차지하며 width/height 설정이 가능합니다(div, p 등).\ninline은 콘텐츠 크기만큼만 차지하고 width/height 설정이 불가능합니다(span, a 등).\ninline-block은 inline처럼 한 줄에 나란히 배치되면서도 width/height 설정이 가능합니다.\nnone은 요소를 화면에서 완전히 제거하여 공간도 차지하지 않습니다(visibility: hidden은 공간은 유지).",
  },
  {
    id: 19,
    category: "HTML/CSS",
    question:
      "position에 대하여 설명해보세요 (static, relative, fixed, absolute)",
    answer:
      "position은 요소의 배치 기준과 문서 흐름 포함 여부를 결정하는 속성입니다.\n\nstatic은 기본값으로 문서의 일반적인 흐름에 따라 배치됩니다.\nrelative는 원래 위치를 기준으로 top/left 등으로 이동하며 원래 공간은 유지됩니다.\nabsolute는 가장 가까운 position이 지정된(static이 아닌) 조상 요소를 기준으로 배치되며 문서 흐름에서 제거됩니다.\nfixed는 뷰포트를 기준으로 고정 배치되어 스크롤해도 위치가 변하지 않습니다.\n추가로 sticky는 스크롤 위치에 따라 relative와 fixed 사이를 전환합니다.",
  },
  {
    id: 20,
    category: "HTML/CSS",
    question: "float는 어떻게 작동하나요?",
    answer:
      "float는 요소를 문서의 일반적인 흐름에서 벗어나게 하여 좌측이나 우측으로 띄워 배치하는 속성입니다.\n\nfloat된 요소 주변으로 텍스트나 인라인 요소가 감싸며 흐릅니다. 부모 요소가 float된 자식의 높이를 인식하지 못하는 문제가 발생하는데, 이를 해결하기 위해 clearfix 기법이나 overflow: hidden을 사용합니다.\n\n현재는 Flexbox와 Grid 레이아웃이 등장하여 float를 레이아웃 용도로 사용하는 경우는 줄어들었습니다.",
  },
  {
    id: 21,
    category: "HTML/CSS",
    question: "flex를 사용하는 이유가 뭔가요?",
    answer:
      "Flexbox는 1차원(행 또는 열) 레이아웃을 효율적으로 구성하기 위한 CSS 레이아웃 모델입니다.\n\n요소들의 크기가 불명확하거나 동적인 상황에서도 정렬, 방향, 순서, 간격을 유연하게 제어할 수 있습니다. justify-content, align-items 등의 속성으로 수평/수직 정렬을 간단히 처리할 수 있습니다.\n\n기존의 float나 position 기반 레이아웃보다 훨씬 직관적이고 반응형 대응이 용이하여 현재 가장 널리 쓰이는 레이아웃 방식입니다.",
  },
  {
    id: 22,
    category: "HTML/CSS",
    question: "Grid를 사용하는 이유가 뭔가요?",
    answer:
      "CSS Grid는 2차원(행과 열) 레이아웃을 동시에 제어할 수 있는 레이아웃 시스템입니다.\n\ngrid-template-rows, grid-template-columns로 행과 열을 정의하고, gap으로 간격을 설정하며, grid-area로 요소를 원하는 영역에 배치할 수 있습니다.\n\n복잡한 페이지 레이아웃이나 대시보드처럼 행과 열을 동시에 관리해야 하는 경우 1차원에 특화된 Flexbox보다 효과적입니다.",
  },
  {
    id: 23,
    category: "HTML/CSS",
    question: "이미지 태그를 스타일로 대체하는 법이 있나요?",
    answer:
      "img 태그 대신 background-image CSS 속성을 사용하여 이미지를 표시할 수 있습니다.\n\nbackground-size(cover, contain), background-position(center), background-repeat(no-repeat) 등의 속성으로 이미지 표시 방식을 세밀하게 제어할 수 있습니다.\n\n단, 배경 이미지는 콘텐츠가 아닌 장식적 요소로 간주되어 스크린 리더가 읽지 못하므로, 의미 있는 이미지는 img 태그와 alt 속성을 사용해야 합니다.",
  },
  {
    id: 24,
    category: "HTML/CSS",
    question: "반응형 웹의 3요소는 뭔가요?",
    answer:
      "반응형 웹의 3요소는 유연한 그리드 레이아웃(Flexible Grid), 유연한 이미지(Flexible Images), 미디어 쿼리(Media Queries)입니다.\n\n유연한 그리드는 고정 px 대신 %, vw 등 상대 단위로 레이아웃을 구성하고, 유연한 이미지는 max-width: 100%로 컨테이너에 맞게 크기가 조절되도록 합니다.\n\n미디어 쿼리는 화면 크기에 따라 다른 CSS 스타일을 적용하여 다양한 디바이스에 대응합니다.",
  },
  {
    id: 25,
    category: "HTML/CSS",
    question: "CSS selector가 어떠한 원리로 동작하나요?",
    answer:
      "CSS 선택자는 브라우저가 오른쪽에서 왼쪽으로 해석합니다.\n\n예를 들어 'div p span'이면 먼저 모든 span을 찾고, 그 중 부모가 p인 것을 필터링한 후, 다시 그 조상에 div가 있는지 확인합니다.\n\n이 방식이 왼쪽에서 오른쪽보다 효율적인 이유는 대부분의 선택자가 일치하지 않으므로, 가장 구체적인 요소부터 검사하여 빠르게 불일치를 판별할 수 있기 때문입니다.",
  },
  {
    id: 26,
    category: "HTML/CSS",
    question: "반응형 웹이란 뭔가요?",
    answer:
      "반응형 웹(Responsive Web)은 하나의 웹사이트가 화면 크기에 따라 레이아웃이 자동으로 변하여 PC, 태블릿, 모바일 등 다양한 디바이스에서 최적의 사용자 경험을 제공하는 웹 디자인 방식입니다.\n\n미디어 쿼리, 유연한 그리드, 상대 단위 등을 활용하여 구현합니다.\n\n하나의 HTML 소스로 모든 기기에 대응하므로 개발 및 유지보수 비용이 절감됩니다.",
  },
  {
    id: 27,
    category: "HTML/CSS",
    question: "적응형 웹이란 뭔가요?",
    answer:
      "적응형 웹(Adaptive Web)은 서버 또는 클라이언트에서 사용자의 기기 유형을 감지하여 미리 준비된 여러 버전의 레이아웃 중 적합한 것을 제공하는 방식입니다.\n\n반응형 웹이 유동적으로 변하는 반면, 적응형은 특정 해상도(예: 320px, 768px, 1024px)에 맞춰 고정된 레이아웃을 전환합니다.\n\n특정 기기에 최적화된 경험을 제공할 수 있지만, 여러 버전을 관리해야 하는 비용이 발생합니다.",
  },
  {
    id: 28,
    category: "HTML/CSS",
    question: "px, em, rem은 어떻게 다른가요?",
    answer:
      "px과 em·rem은 기준점이 다른 단위로, 반응형 대응 능력에 차이가 있습니다.\n\npx은 절대 단위로 화면의 픽셀을 기준으로 하며 고정된 크기를 가집니다.\nem은 상대 단위로 부모 요소의 font-size를 기준으로 계산됩니다(예: 부모가 16px이면 1.5em = 24px).\nrem은 최상위 html 요소의 font-size를 기준으로 하여 em보다 일관된 크기 관리가 가능합니다.\n\n반응형 디자인에서는 상대 단위를 사용하는 것이 다양한 화면 크기에 유연하게 대응할 수 있어 권장됩니다.",
  },
  {
    id: 29,
    category: "HTML/CSS",
    question: "CSS 적용 우선순위가 어떻게 되나요?",
    answer:
      "CSS 우선순위는 명시도(Specificity)에 따라 결정됩니다.\n\n!important가 가장 높고, 그 다음 인라인 스타일(style 속성), ID 선택자(#id), 클래스/속성/가상 클래스 선택자(.class), 태그 선택자(div) 순입니다. 같은 명시도일 경우 나중에 선언된 스타일이 적용됩니다.\n\n명시도 점수는 (인라인, ID, 클래스, 태그) 형태로 계산하며, 예를 들어 #header .nav a는 (0, 1, 1, 1)입니다.",
  },
  {
    id: 30,
    category: "HTML/CSS",
    question: "CSS-in-JS에 대해서 설명해 주세요",
    answer:
      "CSS-in-JS는 JavaScript 파일 안에서 CSS 스타일을 작성하는 방식으로, styled-components와 Emotion이 대표적인 라이브러리입니다.\n\n컴포넌트 단위로 스타일을 캡슐화하여 클래스명 충돌을 방지하고, props에 따라 동적 스타일링이 가능합니다.\n\n단점으로는 런타임에 스타일을 생성하므로 성능 오버헤드가 발생할 수 있고, JavaScript 번들 크기가 증가할 수 있습니다.",
  },
  {
    id: 31,
    category: "HTML/CSS",
    question: "CSS 전처리기를 사용해봤다면 장점과 단점은 뭔가요?",
    answer:
      "CSS 전처리기(Sass, Less, Stylus 등)는 CSS에 프로그래밍 언어의 기능을 더한 도구입니다.\n\n장점은 변수, 중첩, 믹스인, 함수 등의 기능을 사용하여 CSS를 효율적으로 작성하고 관리할 수 있다는 것입니다. 코드 재사용성이 높아지고 유지보수가 편리해집니다.\n\n단점으로는 컴파일 과정이 필요하여 빌드 시간이 추가되고, 팀원 모두가 문법을 학습해야 하며, 과도한 중첩 사용 시 오히려 가독성과 성능이 저하될 수 있습니다.",
  },
  {
    id: 32,
    category: "HTML/CSS",
    question: "padding과 margin의 차이가 뭔가요?",
    answer:
      "padding과 margin은 요소의 여백을 만드는 속성이지만, 위치와 동작 방식이 다릅니다.\n\npadding은 요소의 콘텐츠와 테두리(border) 사이의 내부 여백이고, margin은 요소의 테두리 바깥쪽 외부 여백입니다.\n\npadding은 요소의 배경색이 적용되는 영역에 포함되지만, margin은 투명한 영역입니다. 또한 margin은 인접한 요소 간에 마진 겹침(Margin Collapsing) 현상이 발생할 수 있어, 두 요소의 상하 마진 중 큰 값만 적용됩니다.",
  },
  {
    id: 33,
    category: "HTML/CSS",
    question: "reflow와 repaint의 차이가 뭔가요?",
    answer:
      "reflow는 DOM 구조나 CSS가 변경되었을 때 브라우저가 요소들의 위치와 크기를 다시 계산하는 과정입니다. width, height, margin, padding 같은 레이아웃에 영향을 주는 속성이 바뀌면 발생하는데, 대상 요소뿐 아니라 관련된 부모·자식 요소까지 함께 재계산하기 때문에 비용이 큽니다.\n\nrepaint는 레이아웃은 그대로인데 시각적 표현만 바뀔 때 일어납니다. background-color나 color처럼 배치에 영향 없는 속성을 수정하면 reflow 없이 repaint만 발생하므로 상대적으로 가볍습니다.\n\n성능 최적화 측면에서는 reflow를 최소화하는 게 핵심입니다. 애니메이션에는 transform과 opacity만 사용하면 GPU 가속 덕분에 reflow와 repaint를 모두 건너뛸 수 있습니다. will-change 속성을 전략적으로 쓰면 브라우저가 미리 준비해 영향을 줄일 수 있는데, 남용하면 메모리를 낭비하니 꼭 필요한 곳에만 쓰는 게 좋습니다.",
  },
  {
    id: 34,
    category: "HTML/CSS",
    question: "주소창에 www.google.com을 입력하면 무슨 일이 일어나나요?",
    answer:
      "먼저 DNS 조회가 일어납니다. 브라우저는 캐시된 DNS 기록을 확인하고, 없으면 로컬 DNS 서버에 물어서 www.google.com에 해당하는 IP 주소를 얻습니다.\n\nIP를 알아낸 뒤에는 TCP 연결을 맺습니다. 클라이언트가 SYN 패킷을 보내고, 서버가 SYN-ACK로 응답하고, 다시 클라이언트가 ACK를 보내는 3-way 핸드셰이크입니다. HTTPS라면 이 위에 SSL/TLS 핸드셰이크가 추가로 진행되어 인증서를 교환하고 암호화 키를 협상합니다.\n\n연결이 완료되면 브라우저가 HTTP 요청(예: GET / HTTP/1.1)을 전송하고, 서버는 보통 200 OK와 함께 HTML, CSS, JavaScript, 이미지 등 리소스를 응답합니다.\n\n마지막으로 브라우저가 렌더링 파이프라인을 실행합니다. HTML을 파싱해 DOM을 만들고, CSS를 파싱해 CSSOM을 만든 뒤 둘을 합쳐 렌더 트리를 구성합니다. 그다음 레이아웃(요소 위치·크기 계산)과 페인트(화면에 그리기) 단계를 거쳐 최종적으로 페이지가 표시됩니다.",
  },
  {
    id: 35,
    category: "HTML/CSS",
    question: "localStorage와 sessionStorage의 차이가 뭔가요?",
    answer:
      "둘 다 브라우저에 key-value 형태로 데이터를 저장하는 Web Storage API인데, 데이터의 수명과 공유 범위가 다릅니다.\n\nlocalStorage는 명시적으로 삭제하지 않는 한 브라우저를 닫아도 데이터가 유지됩니다. 같은 출처라면 탭이 달라도 동일한 저장소를 공유합니다. 사용자 설정이나 로그인 상태처럼 영속적으로 보관해야 하는 값에 적합합니다.\n\nsessionStorage는 탭(세션)이 닫히면 데이터가 사라집니다. 탭마다 독립된 저장소를 가지기 때문에 같은 출처라도 다른 탭과 공유되지 않습니다. 폼 임시 저장이나 페이지 간 임시 상태처럼 해당 세션에서만 필요한 데이터에 적합합니다.\n\n둘 다 동기적으로 동작하고 문자열만 저장할 수 있습니다. 객체를 저장하려면 JSON.stringify/parse를 써야 합니다. 용량은 보통 5MB 정도로 쿠키보다 크지만, 서버로 자동 전송되지 않는다는 점에서 쿠키와 다릅니다.",
  },
  {
    id: 36,
    category: "HTML/CSS",
    question: "HTML data- 속성이 뭔가요?",
    answer:
      'data- 속성은 HTML 요소에 커스텀 데이터를 직접 저장할 수 있는 방법입니다. data- 접두사 뒤에 원하는 이름을 붙여서 쓰는데, 예를 들어 <div data-user-id="12345" data-role="admin"> 처럼 사용합니다.\n\nJavaScript에서는 element.dataset 객체로 접근합니다. HTML의 케밥 케이스(kebab-case) 이름이 camelCase로 자동 변환되어 data-user-id는 dataset.userId로 읽힙니다.\n\nCSS에서도 활용이 가능합니다. attr() 함수로 속성 값을 content에 삽입하거나, article[data-columns="3"] { width: 400px; } 처럼 속성 선택자로 조건부 스타일을 적용할 수 있습니다.\n\n버튼 클릭 이벤트에 데이터를 끼워넣거나, JavaScript와 HTML 사이 데이터를 간결하게 전달하는 용도로 유용합니다. 별도의 데이터 구조 없이 DOM 요소 자체에 필요한 정보를 붙일 수 있어 코드가 단순해집니다.',
  },
  {
    id: 37,
    category: "HTML/CSS",
    question: "event.target과 event.currentTarget의 차이가 뭔가요?",
    answer:
      "event.target은 이벤트가 실제로 발생한 요소를 가리키고, event.currentTarget은 이벤트 리스너가 등록된 요소를 가리킵니다.\n\n이벤트 버블링 상황에서 차이가 드러납니다. div 안에 button이 있고 div에 리스너를 달았다면, 버튼을 클릭했을 때 event.target은 button이고 event.currentTarget은 div입니다. 이벤트가 button에서 발생해 div까지 버블링되어 올라오는 동안, 리스너가 붙은 div 입장에서 target은 '실제로 클릭된 곳', currentTarget은 '내가 감시하는 곳'인 셈입니다.\n\n이벤트 위임(event delegation) 패턴에서 이 구분이 중요합니다. 리스트 아이템마다 개별 리스너를 붙이는 대신 부모에 하나만 달고, event.target으로 실제 클릭된 자식 요소를 판별하는 방식입니다. currentTarget을 잘못 쓰면 항상 부모만 잡히므로 원하는 동작을 만들 수 없습니다.",
  },
  {
    id: 38,
    category: "HTML/CSS",
    question: "DOM에서 Node와 Element의 차이가 뭔가요?",
    answer:
      "Node는 DOM 트리를 구성하는 모든 객체의 최상위 인터페이스입니다. 요소(element), 텍스트, 주석, 문서 자체까지 전부 Node의 일종입니다. 반면 Element는 Node의 하위 타입으로, HTML 태그로 표현되는 요소만을 가리킵니다.\n\n예를 들어 <p>Hello</p>가 있으면 p 태그가 Element이고, 그 안의 'Hello' 텍스트는 TextNode입니다. TextNode도 Node지만 Element는 아닙니다.\n\n실무에서는 childNodes(모든 자식 Node 반환)와 children(자식 Element만 반환)의 차이가 대표적입니다. childNodes로 순회하면 텍스트 노드나 주석 노드가 섞여 나올 수 있어 예상치 못한 동작을 만날 수 있습니다. 요소만 다루고 싶다면 children이나 querySelectorAll을 쓰는 게 안전합니다.",
  },
  {
    id: 39,
    category: "HTML/CSS",
    question: "쌓임 맥락(Stacking Context)이 뭔가요?",
    answer:
      "쌓임 맥락은 HTML 요소들이 가상의 z축을 따라 어떤 순서로 쌓이는지를 결정하는 독립적인 3D 공간 단위입니다. 기본적으로는 DOM에 나타나는 순서대로 쌓이지만, 특정 조건을 만족하는 요소는 새로운 쌓임 맥락을 생성하면서 독립적인 레이어를 만듭니다.\n\n새 쌓임 맥락이 생기는 조건으로는 position이 static이 아니면서 z-index 값을 가진 경우, position: fixed/sticky, opacity가 1 미만, transform/filter 속성 적용 등이 있습니다.\n\n중요한 점은 z-index가 크다고 무조건 위에 표시되는 게 아니라는 겁니다. z-index 비교는 같은 쌓임 맥락 내부에서만 유효합니다. 예를 들어 z-index: 1인 부모 A와 z-index: 2인 부모 B가 있을 때, A 안의 자식이 z-index: 999라도 B 전체보다 아래에 렌더링됩니다. z-index가 생각대로 동작하지 않는다면 쌓임 맥락을 새로 만드는 조건이 어딘가에 걸려 있는지 확인해봐야 합니다.",
  },
  {
    id: 40,
    category: "HTML/CSS",
    question:
      "link 태그의 rel 속성 preconnect, preload, prefetch가 각각 뭔가요?",
    answer:
      "세 가지 모두 리소스 로딩을 최적화하기 위한 힌트지만, 타이밍과 목적이 다릅니다.\n\npreconnect는 특정 외부 도메인에 미리 네트워크 연결을 맺어두는 용도입니다. DNS 조회, TLS 핸드셰이크, TCP 연결을 사전에 완료해두기 때문에 나중에 실제 리소스를 요청할 때 지연이 줄어듭니다. 자주 접근하는 외부 도메인(CDN, 폰트 서버 등)에 쓰면 효과적입니다.\n\npreload는 현재 페이지 렌더링에 반드시 필요한 리소스를 높은 우선순위로 미리 내려받는 용도입니다. 웹폰트에 preload를 걸어두면 CSS가 파싱되기 전에 폰트가 준비되어 FOUT(폰트 로딩 전 스타일 없는 텍스트 번쩍임)를 막을 수 있습니다.\n\nprefetch는 곧 필요할 수도 있지만 당장 급하지 않은 리소스를 낮은 우선순위로 미리 가져오는 용도입니다. 다음 페이지에서 쓸 스타일시트나 스크립트를 미리 캐싱해두는 데 적합합니다. preload와 달리 현재 페이지 렌더링에 영향을 주지 않습니다.",
  },
  {
    id: 41,
    category: "HTML/CSS",
    question: "img의 alt 속성은 어떤 목적으로 쓰나요?",
    answer:
      'alt 속성은 이미지를 대체하는 텍스트를 제공하는 속성으로, 단순한 설명 이상의 역할을 합니다.\n\n이미지가 로드에 실패했을 때 alt 텍스트가 대신 표시되어 사용자가 어떤 이미지였는지 파악할 수 있게 합니다. 스크린 리더는 alt 텍스트를 읽어주기 때문에 시각 장애가 있는 사용자의 접근성을 직접적으로 보장합니다. SEO 측면에서도 검색 엔진이 이미지를 직접 인식할 수 없어 alt 텍스트로 내용을 파악하기 때문에 검색 노출에 영향을 줍니다.\n\n모든 이미지에 설명을 달아야 하는 건 아닙니다. 배경 이미지나 단순 장식 요소처럼 콘텐츠 의미가 없는 이미지에는 alt=""로 빈 값을 주는 게 맞습니다. 그래야 스크린 리더가 해당 이미지를 건너뛰어 불필요한 정보를 읽지 않습니다. 의미 있는 이미지에는 맥락에 맞는 설명을 적고, 순수 장식에는 빈 alt를 쓰는 것이 올바른 사용법입니다.',
  },
  {
    id: 42,
    category: "HTML/CSS",
    question: "웹뷰(WebView)가 뭔가요?",
    answer:
      "웹뷰는 네이티브 앱 안에 내장된 웹 브라우저입니다. 앱 화면의 일부 또는 전체를 HTML, CSS, JavaScript로 구성된 웹 페이지로 채울 수 있어, 하나의 코드베이스로 여러 플랫폼에 동일한 화면을 제공할 수 있습니다.\n\n코드 재사용성이 높고 앱스토어 심사 없이도 콘텐츠를 업데이트할 수 있다는 게 큰 장점입니다. 하이브리드 앱이라고 부르는 방식이 이 구조를 사용합니다.\n\n단점도 있습니다. 복잡한 애니메이션이나 연산이 많은 작업은 순수 네이티브 앱보다 성능이 떨어질 수 있고, 외부 URL을 로드할 경우 악성 코드나 피싱 같은 보안 위협에 노출될 수 있습니다. GPS, 카메라, 파일 접근 같은 네이티브 기능 활용에도 제약이 따릅니다.\n\nPWA와 비교하면, 웹뷰는 네이티브 껍데기 안에 웹을 담는 방식이고 PWA는 웹 기술만으로 앱처럼 동작하게 만드는 방식입니다. 앱스토어 배포가 필요한지, 네이티브 기능 접근이 중요한지에 따라 선택이 달라집니다.",
  },
  {
    id: 43,
    category: "HTML/CSS",
    question: "브라우저 메모리 캐시와 디스크 캐시가 뭔가요?",
    answer:
      "브라우저는 이미 내려받은 리소스를 두 가지 방식으로 캐싱합니다. 메모리 캐시는 RAM에 저장하고, 디스크 캐시는 하드디스크에 저장합니다.\n\n메모리 캐시는 읽기 속도가 매우 빠릅니다. 현재 탭에서 방금 로드한 이미지나 스크립트를 다시 사용할 때 주로 여기서 꺼내 씁니다. 탭을 닫거나 브라우저를 종료하면 사라지는 휘발성 저장소입니다.\n\n디스크 캐시는 용량이 크고 브라우저를 닫아도 유지됩니다. 다음 방문 시 서버에 재요청하지 않고 캐시에서 바로 쓸 수 있어 반복 방문 성능을 높여줍니다. Cache-Control, Expires 같은 HTTP 헤더로 캐시 유효 기간을 제어합니다.\n\n개발 중에 DevTools 네트워크 탭을 보면 Status에 'from memory cache', 'from disk cache'라고 표시되는 항목들이 보입니다. 강력 새로고침(Ctrl+Shift+R)을 하면 둘 다 무시하고 서버에서 새로 받아옵니다.",
  },
  {
    id: 44,
    category: "HTML/CSS",
    question: "User-Agent가 뭔가요?",
    answer:
      "User-Agent는 HTTP 요청 헤더에 포함되는 문자열로, 서버에 클라이언트가 어떤 환경인지 알려줍니다. 브라우저 종류, 버전, 운영체제, 렌더링 엔진 정보 등이 담겨 있습니다.\n\nJavaScript에서는 navigator.userAgent로, 서버에서는 HTTP 요청 헤더로 읽을 수 있습니다. 실무에서는 주로 분석 데이터 수집(사용자 기기 분포 파악), 특정 브라우저 버그 대응, 특정 환경에 맞는 폴백 UI 제공 등에 활용합니다.\n\n다만 User-Agent 문자열에 과도하게 의존하는 건 피하는 게 좋습니다. 문자열 형식이 브라우저마다 제각각이고 쉽게 위조되기도 합니다. 브라우저 기능 지원 여부를 판단할 때는 User-Agent 파싱 대신 feature detection(기능이 존재하는지 직접 확인)이나 반응형 디자인 방식이 더 안정적입니다.",
  },
  {
    id: 45,
    category: "HTML/CSS",
    question: "웹 애플리케이션 성능 최적화 방법에는 어떤 게 있나요?",
    answer:
      "성능 최적화는 초기 로딩 속도, 런타임 성능, 네트워크 효율 세 방향에서 접근할 수 있습니다.\n\n코드 스플리팅은 JavaScript 번들을 필요한 부분으로 나눠서 처음 화면에 필요한 코드만 먼저 로드하는 기법입니다. 전체 번들을 한 번에 받지 않아 초기 로딩이 빨라집니다. 이미지나 동영상 같은 무거운 리소스에는 Lazy Loading을 적용해 사용자가 실제로 해당 영역에 도달할 때만 불러오게 합니다.\n\n이미지 최적화도 중요합니다. WebP 같은 경량 포맷으로 변환하거나 파일 크기를 줄이면 네트워크 전송량이 줄어듭니다.\n\n캐싱 전략을 잘 세우면 브라우저가 이미 받아둔 리소스를 재사용해 불필요한 재요청을 막습니다. JavaScript 로딩에는 async나 defer를 쓰면 DOM 파싱을 막지 않고 스크립트를 비동기로 받거나 지연 실행할 수 있어 첫 화면 렌더링 속도가 개선됩니다.",
  },
  {
    id: 46,
    category: "HTML/CSS",
    question: "제로 런타임 CSS가 뭔가요?",
    answer:
      "제로 런타임 CSS는 기존 CSS-in-JS의 한계를 극복하기 위해 스타일 생성 시점을 런타임에서 빌드 타임으로 옮긴 방식입니다.\n\nstyled-components나 Emotion 같은 전통적인 CSS-in-JS는 사용자가 앱을 실행할 때 JavaScript가 스타일을 동적으로 생성합니다. 이 과정이 런타임 성능 오버헤드를 만들고 JavaScript 번들 크기를 늘립니다.\n\n제로 런타임 CSS는 빌드 시점에 모든 스타일을 정적 CSS 파일로 변환해둡니다. 그래서 사용자가 페이지에 접근할 때는 이미 완성된 CSS를 받기만 하면 되고, 브라우저에서 스타일을 계산하는 비용이 없습니다. 정적 파일은 브라우저 캐싱도 잘 되고, 빌드 과정에서 사용하지 않는 CSS를 제거(tree-shaking)해 최종 번들도 작아집니다.\n\n단점도 있습니다. 사용자 입력이나 런타임 조건에 따라 동적으로 스타일을 바꿔야 하는 경우가 까다롭습니다. 조건부 스타일링을 위해 추가 로직이 필요하고, 빌드 시간이 늘어날 수 있습니다. vanilla-extract가 대표적인 구현 예시입니다.",
  },
  {
    id: 47,
    category: "HTML/CSS",
    question: "알고 있는 이미지 포맷과 각 포맷의 특징은 뭔가요?",
    answer:
      "주요 이미지 포맷으로는 JPEG, PNG, WebP, SVG가 있고 각각 쓰임새가 다릅니다.\n\nJPEG는 손실 압축 방식으로 파일 크기를 효율적으로 줄일 수 있습니다. 반복 저장할수록 품질이 떨어지고, 투명도를 지원하지 않습니다. 복잡한 색상과 그라데이션이 있는 사진에 적합합니다.\n\nPNG는 무손실 압축 방식으로 품질 손실 없이 저장됩니다. 투명도를 지원해 로고나 아이콘에 자주 쓰이지만, 같은 이미지를 JPEG로 저장하면 파일이 훨씬 작습니다.\n\nWebP는 Google이 만든 포맷으로 손실·무손실 압축을 모두 지원하고 투명도도 됩니다. JPEG와 PNG 대비 압축률이 좋아 웹 성능 최적화에 유리합니다. 구형 브라우저 지원이 안 되는 경우가 있어 picture 태그로 폴백을 제공하기도 합니다.\n\nSVG는 XML 기반 벡터 포맷으로, 아무리 확대해도 화질이 깨지지 않습니다. 로고, 아이콘, 간단한 일러스트에 적합하지만, 이미지가 복잡해질수록 코드가 길어져 파일 크기가 커질 수 있습니다.",
  },
  {
    id: 48,
    category: "HTML/CSS",
    question: "CSS box-sizing이 뭔가요?",
    answer:
      "box-sizing은 요소의 width와 height를 어떻게 계산할지 결정하는 CSS 속성입니다.\n\n기본값은 content-box로, width와 height가 콘텐츠 영역에만 적용됩니다. padding과 border를 추가하면 그만큼 실제 크기가 늘어납니다. 예를 들어 width: 200px에 padding: 20px, border: 2px를 주면 실제 렌더링 크기는 244px이 됩니다. 의도한 크기와 달라지는 문제가 자주 발생하는 이유가 여기 있습니다.\n\nborder-box로 설정하면 width와 height 안에 padding과 border가 포함됩니다. 같은 조건이라면 콘텐츠 영역이 156px로 줄어들지만, 겉에서 보이는 박스 크기는 정확히 200px입니다. 레이아웃을 머릿속으로 계획한 대로 구현할 수 있어 훨씬 직관적입니다.\n\n그래서 많은 프로젝트에서 *, *::before, *::after { box-sizing: border-box; }를 전역으로 적용합니다. Tailwind CSS도 기본적으로 border-box를 사용합니다.",
  },
  {
    id: 49,
    category: "HTML/CSS",
    question:
      "요소 위치를 동적으로 변경할 때 transform과 position 중 어떤 걸 선호하나요?",
    answer:
      "동적으로 위치를 바꾸는 상황, 특히 애니메이션에서는 transform을 씁니다.\n\ntransform은 브라우저의 컴포지트(composite) 단계에서 처리되어 reflow와 repaint를 유발하지 않습니다. GPU 가속을 활용해 성능이 좋고, 주변 요소의 레이아웃에 영향을 주지 않습니다. 반면 position의 top/left 같은 속성을 변경하면 레이아웃을 다시 계산하는 reflow가 일어나 성능 부담이 생깁니다.\n\n예를 들어 호버 시 요소를 5px 올리는 효과라면 transform: translateY(-5px)가 top: -5px + position: relative보다 훨씬 빠릅니다.\n\n그렇다고 position이 쓸모없는 건 아닙니다. 레이아웃 구조를 잡거나 부모 기준으로 요소를 배치해야 할 때, 또는 문서 흐름에서 요소를 실제로 분리해야 할 때는 position이 필요합니다. transform은 시각적 표현만 바꾸고 문서 흐름은 그대로 두기 때문에, 레이아웃 자체를 바꿔야 하는 상황에는 맞지 않습니다.",
  },
  {
    id: 50,
    category: "HTML/CSS",
    question: "Reset CSS와 Normalize CSS가 뭔가요?",
    answer:
      "브라우저마다 기본 스타일이 조금씩 달라서, 같은 HTML을 Chrome에서 보는 것과 Firefox에서 보는 것이 다를 수 있습니다. Reset CSS와 Normalize CSS는 이 불일치를 해결하기 위한 접근 방식인데, 전략이 반대입니다.\n\nReset CSS는 모든 브라우저 기본 스타일을 제거해 margin, padding, font-size 등을 0이나 중립값으로 초기화합니다. 완전히 백지 상태에서 시작하기 때문에 스타일 충돌이 없지만, 기본 요소 스타일도 직접 다 짜야 합니다.\n\nNormalize CSS는 기본 스타일을 지우는 대신, 브라우저 간 차이를 표준에 맞게 통일합니다. 유용한 기본값은 살려두고 불일치하는 부분만 수정합니다. heading, link 같은 요소의 기본 스타일이 자연스럽게 유지되어 작업량이 줄어듭니다.\n\n빠르게 시작해야 하거나 기본 스타일을 활용하고 싶다면 Normalize CSS가 낫고, 디자인 시스템처럼 완전한 제어가 필요하다면 Reset CSS가 더 적합합니다.",
  },
  {
    id: 51,
    category: "HTML/CSS",
    question: "CSS 의사 요소(Pseudo-elements)가 뭔가요?",
    answer:
      "의사 요소는 HTML에 실제 태그를 추가하지 않고도 CSS만으로 특정 부분을 선택하거나 가상의 요소를 만들 수 있는 기능입니다. 선택자 뒤에 콜론 두 개(::)를 붙여 표기합니다.\n\n가장 자주 쓰이는 건 ::before와 ::after입니다. 선택한 요소의 앞이나 뒤에 가상의 요소를 삽입하는데, content 속성에 텍스트나 빈 문자열을 주면 실제 HTML을 건드리지 않고 장식을 추가할 수 있습니다. 툴팁, 뱃지, 구분선 같은 UI를 만들 때 HTML을 오염시키지 않는 방법으로 많이 씁니다.\n\n그 외에 ::first-line(단락의 첫 줄), ::first-letter(첫 글자), ::placeholder(input placeholder 스타일), ::selection(드래그 선택한 텍스트 스타일) 등도 있습니다.\n\n의사 클래스(:hover, :focus 등)가 요소의 상태를 선택하는 것과 달리, 의사 요소는 요소의 특정 부분이나 새 가상 요소를 선택한다는 점에서 다릅니다.",
  },
  {
    id: 52,
    category: "HTML/CSS",
    question: "dvh, svh, lvh가 뭔가요?",
    answer:
      "세 단위 모두 뷰포트 높이를 기반으로 하는 CSS 단위인데, 모바일 브라우저에서 주소창이 나타나고 사라짐에 따라 뷰포트 크기가 달라지는 문제를 해결하기 위해 등장했습니다. 기존 vh는 이 변화를 제대로 반영하지 못해 레이아웃이 의도대로 안 나오는 경우가 많았습니다.\n\ndvh(Dynamic Viewport Height)는 주소창 표시 여부에 따라 실시간으로 계산된 값을 씁니다. 뷰포트가 바뀔 때마다 재계산하므로 가장 정확하지만, 스크롤 중에 주소창이 자주 나타났다 사라지면 레이아웃이 계속 재계산되어 버벅임이 생길 수 있습니다.\n\nsvh(Small Viewport Height)는 주소창이 보일 때의 최솟값을 고정으로 씁니다. 레이아웃이 안정적이고 재계산 비용이 없어 성능에 유리합니다.\n\nlvh(Large Viewport Height)는 주소창이 사라진 상태의 최댓값을 씁니다. 전체 화면을 활용하는 디자인에 적합합니다.\n\n빠른 스크롤이나 주소창 토글이 잦은 환경에서는 dvh보다 svh가 더 안정적인 선택입니다.",
  },
  {
    id: 53,
    category: "HTML/CSS",
    question: "Core Web Vitals가 뭔가요?",
    answer:
      "Core Web Vitals는 Google이 사용자 경험을 측정하기 위해 정의한 세 가지 핵심 지표입니다. SEO 순위에도 직접 영향을 주기 때문에 프론트엔드 개발자라면 잘 알아둬야 합니다.\n\nLCP(Largest Contentful Paint)는 페이지에서 가장 큰 콘텐츠 요소가 화면에 나타나는 시간을 측정합니다. 주로 히어로 이미지나 큰 텍스트 블록이 대상이 됩니다. 2.5초 이하가 좋은 기준입니다. 이미지 최적화, preload, 서버 응답 속도 개선이 주요 대응 방법입니다.\n\nINP(Interaction to Next Paint)는 클릭, 키보드 입력 등 사용자 상호작용에 얼마나 빠르게 반응하는지를 나타냅니다. 관찰된 상호작용 중 가장 긴 응답 시간을 기준으로 하며, 200ms 이하가 목표입니다. 무거운 JavaScript 작업을 줄이고 메인 스레드를 가볍게 유지하는 게 핵심입니다.\n\nCLS(Cumulative Layout Shift)는 페이지 로딩 중 예고 없이 레이아웃이 얼마나 이동하는지를 측정합니다. 이미지에 명시적인 width/height를 지정하거나 폰트 로딩 전략을 잘 세우면 줄일 수 있습니다. 0.1 이하가 좋은 점수입니다.",
  },
];
