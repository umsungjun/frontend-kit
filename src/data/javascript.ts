import type { Flashcard } from "@/types/flashcard";

export const javascript: Flashcard[] = [
  {
    id: 1,
    category: "JavaScript",
    question: "프로그래밍이 뭔가요?",
    answer:
      "프로그래밍은 컴퓨터에게 특정 작업을 수행하도록 명령어를 작성하는 과정입니다.\n\n사람의 의도를 프로그래밍 언어로 컴퓨터가 이해할 수 있는 형태로 바꾸는 행위죠. 단순히 코드를 타이핑하는 게 아니라, 문제를 정의하고 그걸 코드로 풀어내는 사고 과정 자체입니다.",
  },
  {
    id: 2,
    category: "JavaScript",
    question: "컴파일러는 뭐고 인터프리터는 뭔가요?",
    answer:
      "컴파일러는 소스 코드 전체를 실행 전에 기계어로 번역해두고, 인터프리터는 코드를 한 줄씩 읽으면서 바로 실행합니다.\n\n컴파일러는 번역에 시간이 걸리는 대신 실행 속도가 빠르고, 실행 전에 문법 오류를 잡아냅니다.\n인터프리터는 번역 단계가 없어 곧바로 시작하지만 실행 중에 해석까지 하므로 속도가 느립니다.\n\n자바스크립트는 인터프리터 방식으로 실행되지만, V8 같은 현대 엔진은 소스를 바이트코드로 바꾼 뒤 자주 실행되는 코드만 기계어로 컴파일하는 JIT(Just-In-Time) 컴파일을 써서 빠른 시작과 실행 속도를 동시에 챙깁니다.",
  },
  {
    id: 3,
    category: "JavaScript",
    question: "자바스크립트의 특징은 뭐가 있나요?",
    answer:
      "자바스크립트는 동적 타입 언어로 변수의 타입을 실행 시점에 결정합니다.\n싱글 스레드 기반으로 동작하지만 이벤트 루프를 통해 비동기 처리를 지원합니다.\n객체지향, 함수형 등 다양한 프로그래밍 패러다임으로 쓸 수 있고, 함수를 값처럼 다루는 일급 함수의 특징을 가집니다.\n프로토타입 기반 객체지향을 사용하며, 브라우저뿐만 아니라 Node.js 등 다양한 환경에서 실행됩니다.",
  },
  {
    id: 4,
    category: "JavaScript",
    question: "변수란 무엇인가요?",
    answer:
      "변수(Variable)란 하나의 값을 저장하기 위해 확보한 메모리 공간, 또는 그 공간을 식별하려고 붙인 이름을 말합니다.\n\n메모리 주소로 직접 접근하는 대신 변수 이름으로 값을 다룹니다.\n변수에 값을 저장하는 것을 할당, 저장된 값을 읽어오는 것을 참조라고 합니다.",
  },
  {
    id: 5,
    category: "JavaScript",
    question: "식별자란 무엇인가요?",
    answer:
      "식별자(Identifier)란 변수, 함수, 클래스처럼 어떤 값을 구별해서 부르기 위해 붙인 이름을 말합니다.\n\n식별자는 값 자체가 아니라 값이 저장된 메모리 주소를 기억하고, 우리는 이 이름으로 메모리의 값에 접근합니다.\n같은 스코프 안에서는 중복될 수 없고, 스코프가 다르면 같은 이름을 다시 쓸 수 있습니다.\n\n이름은 문자와 숫자, 밑줄(_), 달러 기호($)로 만들며 숫자로 시작할 수 없습니다. 예약어도 식별자로 쓸 수 없습니다.",
  },
  {
    id: 6,
    category: "JavaScript",
    question: "변수를 선언한다는 것은 어떤 것을 의미하나요?",
    answer:
      "변수를 선언한다는 것은 변수 이름을 자바스크립트 엔진에 등록하고 값을 저장할 메모리 공간을 확보하는 것을 말합니다.\n\n선언은 두 단계로 나뉩니다. 선언 단계에서 변수 이름을 스코프에 등록하고, 초기화 단계에서 메모리 공간을 확보한 뒤 undefined를 할당합니다.\n\nvar는 두 단계가 한 번에 진행되지만 let과 const는 분리되어 있습니다. 이 차이가 호이스팅 동작 차이와 TDZ의 원인입니다.",
  },
  {
    id: 7,
    category: "JavaScript",
    question: "var 키워드는 뭔가요?",
    answer:
      "var는 ES6 이전에 변수를 선언하던 유일한 키워드입니다.\n\nvar 선언은 런타임 이전 평가 단계에서 함수 스코프에 등록되고 undefined로 초기화됩니다. 여기서 문제 대부분이 나옵니다.\n\n선언 전에 참조해도 에러 대신 undefined가 나오고, 등록 단위가 함수라서 if나 for 블록 안에서 선언해도 블록 밖에서 접근됩니다. 여기에 재선언을 허용하는 규칙까지 붙어서 같은 이름으로 다시 선언해도 에러 없이 값이 덮어써집니다.",
  },
  {
    id: 8,
    category: "JavaScript",
    question: "호이스팅이 뭔가요?",
    answer:
      "호이스팅은 엔진이 실행 전 평가 단계에서 선언을 미리 처리해, 선언이 스코프 최상단으로 끌어올려진 것처럼 동작하는 특성입니다. 코드가 실제로 이동하는 것은 아닙니다.\n\nvar, let, const, function, class로 선언한 모든 식별자가 호이스팅됩니다. 갈리는 건 초기화 시점입니다.\n\nvar는 등록과 동시에 undefined로 초기화되니 선언 전에 참조해도 undefined가 나옵니다. let과 const는 등록만 되고 초기화는 실제 코드 위치에서 이뤄지므로, 그 사이 구간인 TDZ에서 접근하면 ReferenceError가 발생합니다. 함수 선언문은 함수 전체가 등록되어 선언 전에도 호출됩니다.\n\n```js\nconsole.log(a); // undefined\nvar a = 1;\n\nconsole.log(b); // ReferenceError\nlet b = 1;\n```",
  },
  {
    id: 10,
    category: "JavaScript",
    question: "let 키워드는 var 키워드와 어떤 점이 다른가요?",
    answer:
      "let과 var의 차이는 스코프, 중복 선언, 호이스팅 동작 세 가지입니다.\n\nvar는 함수 레벨 스코프에 중복 선언이 허용되고, 선언 전에 참조하면 undefined가 나옵니다.\nlet은 블록 레벨 스코프라 if나 for 블록 밖에서 접근할 수 없고, 같은 스코프에서 중복 선언하면 SyntaxError, TDZ 때문에 선언 전에 접근하면 ReferenceError가 발생합니다.",
  },
  {
    id: 11,
    category: "JavaScript",
    question: "TDZ가 뭔가요?",
    answer:
      "TDZ(Temporal Dead Zone, 일시적 사각지대)는 let이나 const로 선언한 변수가 스코프 시작 지점부터 초기화가 실행되기 전까지 참조할 수 없는 구간을 말합니다. 이 구간에서 접근하면 ReferenceError가 발생합니다.\n\nTDZ가 있는 이유는 초기화 전 접근을 에러로 드러내기 위해서입니다. var는 등록과 동시에 undefined로 초기화되니 선언 전에 참조해도 조용히 undefined가 나와 버그를 놓치게 됩니다.\n\n```js\n{\n  console.log(x); // ReferenceError\n  let x = 1;\n  console.log(x); // 1\n}\n```",
  },
  {
    id: 12,
    category: "JavaScript",
    question: "const 키워드는 어떤 특징이 있나요?",
    answer:
      "const는 한 번 할당한 값을 다시 할당할 수 없는 키워드입니다. 선언할 때 반드시 값을 넣어야 합니다.\n\n블록 레벨 스코프와 중복 선언 금지는 let과 같습니다.\n\n막는 것은 재할당뿐입니다. 객체를 담으면 내부 프로퍼티는 바꿀 수 있습니다.\n\n```js\nconst a; // SyntaxError\n\nconst obj = { a: 1 };\nobj.a = 2; // 정상\nobj = { a: 2 }; // TypeError\n```",
  },
  {
    id: 13,
    category: "JavaScript",
    question: "리터럴이 뭔가요?",
    answer:
      '리터럴은 사람이 이해할 수 있는 문자나 약속된 기호로 값을 생성하는 표기법입니다.\n\n엔진은 런타임에 리터럴을 평가해 값을 만듭니다. 코드에 적은 100은 아라비아 숫자가 아니라 숫자 값 100을 생성하라는 표기입니다.\n\n```js\n100 // 숫자 리터럴\n"hello" // 문자열 리터럴\ntrue // 불리언 리터럴\n{ a: 1 } // 객체 리터럴\n[1, 2] // 배열 리터럴\n/ab+/ // 정규 표현식 리터럴\n```',
  },
  {
    id: 14,
    category: "JavaScript",
    question: "데이터 타입의 종류는 어떤 것들이 있나요?",
    answer:
      "자바스크립트의 데이터 타입은 크게 원시 타입과 객체 타입으로 나뉩니다.\n\n원시 타입에는 number, string, boolean, undefined, null, symbol, bigint 7가지가 있습니다.\n객체 타입에는 객체, 배열, 함수 등이 포함되며, 원시 타입을 제외한 모든 값은 객체 타입입니다.\n\n두 타입은 값 전달 방식이 다릅니다. 원시 타입은 값 자체가 복사되고, 객체 타입은 참조가 전달됩니다.",
  },
  {
    id: 15,
    category: "JavaScript",
    question: "데이터 타입은 왜 필요할까요?",
    answer:
      "메모리에는 0과 1만 저장되기 때문에, 그 비트열을 몇 개나 읽고 어떻게 해석할지 알려줄 기준이 필요합니다. 그 기준이 데이터 타입입니다.\n\n타입에 따라 저장할 때 확보할 메모리 크기가 정해지고, 읽을 때 몇 바이트를 가져와 숫자로 볼지 문자로 볼지가 결정됩니다.\n\n같은 비트열 01000001도 number로 읽으면 65, string으로 읽으면 'A'입니다.",
  },
  {
    id: 16,
    category: "JavaScript",
    question: "정적 타이핑과 동적 타이핑은 어떤 차이가 있나요?",
    answer:
      '타입이 결정되는 시점이 다릅니다. 정적 타이핑은 컴파일 시점에, 동적 타이핑은 런타임에 결정됩니다.\n\n정적 타이핑은 선언할 때 타입을 명시하거나 추론으로 정하고, 다른 타입의 값을 넣으면 컴파일 에러가 납니다. C, Java, TypeScript가 여기 해당합니다.\n동적 타이핑은 할당된 값에 따라 타입이 정해져서 같은 변수에 다른 타입을 다시 넣을 수 있습니다. 자바스크립트, 파이썬이 대표적입니다.\n\n정적 타이핑은 실행 전에 타입 오류를 잡아 안정성이 높고, 동적 타이핑은 유연한 대신 타입 버그가 런타임에야 드러납니다.\n\n```ts\nlet a = 10;\na = "hello"; // 자바스크립트는 정상, 타입스크립트는 컴파일 에러\n```',
  },
  {
    id: 18,
    category: "JavaScript",
    question: "truthy / falsy 한 값이 뭔가요?",
    answer:
      "truthy와 falsy는 불리언이 아닌 값이 조건문에서 각각 true, false로 평가되는 것을 말합니다.\n\nfalsy 값은 여덟 가지뿐이고 나머지는 전부 truthy입니다. 빈 배열이나 빈 객체, 문자열 '0'도 truthy라 조건문에서 참으로 걸립니다.\n\n```js\n// falsy 값 전부\nfalse, 0, -0, 0n, '', null, undefined, NaN\n\nif ([]) console.log('실행됨');\nif ({}) console.log('실행됨');\nif ('0') console.log('실행됨');\n```",
  },
  {
    id: 19,
    category: "JavaScript",
    question: "자바스크립트의 배열은 자료구조의 배열과 같나요?",
    answer:
      "자바스크립트의 배열은 자료구조의 배열과 달리, 인덱스를 프로퍼티 키로 갖는 특수한 객체입니다.\n\n자료구조의 배열은 같은 크기의 메모리가 빈틈없이 연속으로 나열되는 밀집 배열이지만, 자바스크립트 배열은 요소마다 타입이 달라도 되고 중간에 빈 자리가 있는 희소 배열도 허용합니다.\n\n덕분에 삽입과 삭제는 유연하지만 연속 배열보다 접근이 느릴 수 있습니다. 다만 V8 같은 엔진은 밀집 배열을 연속 메모리로 최적화하고, 희소해질 때만 해시 테이블 방식으로 전환합니다.",
  },
  {
    id: 20,
    category: "JavaScript",
    question: "배열의 메서드는 어떤 종류가 있나요?",
    answer:
      "배열 메서드는 원본을 바꾸는 뮤테이터 메서드와 원본을 그대로 두고 값을 반환하는 접근자 메서드로 나뉩니다.\n\n뮤테이터 메서드에는 push, pop, shift, unshift, splice, sort, reverse 등이 있습니다.\n접근자 메서드에는 slice, concat, join, indexOf, includes 등이 있으며, 반환값은 새 배열일 수도 문자열이나 인덱스일 수도 있습니다.\nmap, filter, reduce, forEach, find, some, every 같은 고차 함수 메서드는 콜백을 받아 배열을 함수형으로 처리하게 해줍니다.\n\nES2023에는 원본을 두고 새 배열을 반환하는 toSorted, toReversed, toSpliced, with가 추가됐습니다. 기존에 [...arr].sort()로 쓰던 패턴을 대신합니다.",
  },
  {
    id: 21,
    category: "JavaScript",
    question: "고차 함수가 뭔가요?",
    answer:
      "고차 함수는 함수를 인수로 받거나 함수를 반환하는 함수를 말합니다.\n\n자바스크립트의 함수는 일급 객체라 값처럼 전달하고 반환할 수 있어서 고차 함수가 성립합니다. 배열의 map, filter, reduce가 대표적입니다.\n\n```js\n// 함수를 인수로 받는 경우\n[1, 2, 3].map((n) => n * 2);\n\n// 함수를 반환하는 경우\nconst multiply = (a) => (b) => a * b;\nmultiply(2)(3); // 6\n```",
  },
  {
    id: 22,
    category: "JavaScript",
    question: "forEach와 map은 어떤 차이가 있나요?",
    answer:
      "둘 다 배열을 순회하지만 반환값이 다릅니다. forEach는 undefined를 반환하고, map은 콜백이 반환한 값으로 만든 새 배열을 반환합니다.\n\n메서드 자체는 원본을 건드리지 않습니다. 변환 결과가 필요하면 map, 순회만 하면 forEach를 씁니다.\n\n```js\nconst nums = [1, 2, 3];\nnums.forEach((n) => n * 2); // undefined\nnums.map((n) => n * 2); // [2, 4, 6]\n```",
  },
  {
    id: 23,
    category: "JavaScript",
    question: "자바스크립트에서 객체란 뭘까요?",
    answer:
      "자바스크립트에서 객체는 키와 값으로 구성된 프로퍼티의 집합입니다.\n\n원시 타입 일곱 가지를 제외한 모든 값이 객체입니다. 함수, 배열, 정규표현식도 전부 객체입니다.\n\n프로퍼티에 상태를 담고, 값이 함수인 프로퍼티를 메서드라 부르며 여기에 동작을 담습니다. 상태와 동작을 한 덩어리로 묶는 자료구조입니다.\n\n```js\nconst user = {\n  name: 'kim', // 프로퍼티, 상태\n  greet() {\n    return 'hi ' + this.name;\n  }, // 메서드, 동작\n};\n```",
  },
  {
    id: 24,
    category: "JavaScript",
    question: "함수와 메서드는 어떤 차이가 있나요?",
    answer:
      "메서드는 객체의 프로퍼티로 할당된 함수이고, 함수는 독립적으로 정의해 호출하는 코드 블록입니다.\n\n차이는 this에서 드러납니다. 메서드로 호출하면 앞에 붙은 객체가 this가 되고, 일반 함수로 호출하면 전역 객체(strict 모드에서는 undefined)가 됩니다. 속한 위치가 아니라 호출 방식이 this를 정합니다.\n\n```js\nconst obj = {\n  value: 1,\n  getValue() {\n    return this.value;\n  },\n};\n\nobj.getValue(); // 1\n\nconst fn = obj.getValue;\nfn(); // undefined, this가 obj가 아님\n```",
  },
  {
    id: 25,
    category: "JavaScript",
    question: "자바스크립트에서 객체를 생성하는 방법은 어떤 것들이 있나요?",
    answer:
      "객체를 만드는 방법은 크게 다섯 가지입니다.\n\n```js\n// 1. 객체 리터럴. 가장 간편해서 대부분 이걸 씁니다\nconst a = {};\n\n// 2. Object 생성자. 빈 객체를 만든 뒤 프로퍼티를 붙여야 해서 번거롭습니다\nconst b = new Object();\n\n// 3. 생성자 함수. 같은 구조의 객체를 여러 개 찍어낼 때 씁니다\nfunction Person(name) {\n  this.name = name;\n}\nconst c = new Person('kim');\n\n// 4. 클래스. 생성자 함수와 같은 역할이고 문법이 더 명확합니다\nclass User {\n  constructor(name) {\n    this.name = name;\n  }\n}\nconst d = new User('kim');\n\n// 5. Object.create. 프로토타입을 직접 지정합니다\nconst e = Object.create(Person.prototype);\n```",
  },
  {
    id: 26,
    category: "JavaScript",
    question: "객체 프로퍼티 접근 시 메모리 동작은 어떻게 되나요?",
    answer:
      "객체 프로퍼티 접근은 스택의 변수에서 힙 주소를 꺼내고, 그 주소의 객체에서 키를 찾는 순서로 진행됩니다. 값이 원시 타입이면 객체 안에 직접 저장돼 있고, 객체 타입이면 또 다른 힙 주소를 참조합니다.\n\n객체에 키가 없으면 프로토타입 체인을 따라 상위로 올라가며 찾고, 끝까지 없으면 에러 대신 undefined를 반환합니다. 체인을 전부 순회해야 하므로 있는 프로퍼티보다 비용이 큽니다.\n\nV8은 히든 클래스로 프로퍼티 위치를 기억하고 인라인 캐싱으로 반복 접근을 빠르게 처리합니다.\n\n```js\nconst person = { name: 'kim' };\n\nperson.name; // 'kim', 객체에서 바로 찾음\nperson.hobby; // undefined, 프로토타입 체인 끝까지 뒤진 뒤 반환\n```",
  },
  {
    id: 27,
    category: "JavaScript",
    question: "전역 객체가 뭔가요?",
    answer:
      "전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진이 가장 먼저 생성하는 특수한 객체입니다.\n\n브라우저에서는 window, Node.js에서는 global이며 ES11부터 globalThis로 통일해 접근합니다.\n\n표준 빌트인 객체와 호스트 객체, 그리고 var로 선언한 전역 변수와 전역 함수를 프로퍼티로 가집니다. let과 const로 선언한 전역 변수는 전역 객체에 붙지 않습니다.\n\n```js\n// 브라우저 전역 스크립트 기준\nvar a = 1;\nlet b = 2;\n\nwindow.a; // 1\nwindow.b; // undefined\n```",
  },
  {
    id: 28,
    category: "JavaScript",
    question: "값에 의한 전달과 참조에 의한 전달은 어떤 차이가 있나요?",
    answer:
      "원시 값을 할당하면 값 자체가 복사되고, 객체를 할당하면 객체가 있는 메모리 주소가 복사됩니다. 전자를 값에 의한 전달, 후자를 참조에 의한 전달이라고 부릅니다.\n\n원시 값은 서로 다른 메모리 공간에 복사되므로 한쪽을 바꿔도 다른 쪽이 그대로입니다. 객체는 두 변수가 같은 주소를 가리키니 한쪽에서 프로퍼티를 바꾸면 다른 쪽에도 그대로 보입니다.\n\n다만 자바스크립트에 진짜 참조에 의한 전달은 없습니다. 객체일 때도 복사되는 건 주소라는 값이라서, 변수에 새 객체를 재할당하면 상대 변수는 영향을 받지 않습니다.\n\n```js\nlet numX = 1;\nlet numY = numX;\nnumY = 2; // numX는 1, numY는 2\n\nconst objX = { v: 1 };\nconst objY = objX;\nobjY.v = 2; // objX.v도 2\n\nlet refX = { v: 1 };\nlet refY = refX;\nrefY = { v: 9 }; // refX.v는 1 그대로\n```",
  },
  {
    id: 30,
    category: "JavaScript",
    question: "함수 선언문과 함수 표현식은 어떤 차이가 있나요?",
    answer:
      "함수 선언문은 function 키워드로 정의하고 이름을 생략할 수 없습니다. 함수 표현식은 함수를 변수에 할당하는 방식이라 이름을 생략할 수 있습니다.\n\n차이는 호이스팅에서 드러납니다. 선언문은 함수 전체가 등록되어 선언 전에도 호출됩니다. 표현식은 변수 호이스팅만 일어나서 선언 전에 호출하면 에러가 납니다.\n\n```js\nadd(2, 5); // 7, 선언문은 미리 등록됨\n\nfunction add(x, y) {\n  return x + y;\n}\n\nsub(2, 5); // TypeError: sub is not a function\n\nvar sub = function (x, y) {\n  return x - y;\n};\n```",
  },
  {
    id: 31,
    category: "JavaScript",
    question: "즉시 실행 함수(IIFE)가 뭔가요?",
    answer:
      "즉시 실행 함수(IIFE, Immediately Invoked Function Expression)는 정의와 동시에 한 번 호출되고 끝나는 함수입니다.\n\n함수를 괄호로 감싸 표현식으로 만든 뒤 바로 호출합니다. 익명 함수라 참조가 남지 않아 다시 호출할 수 없습니다.\n\n전역 스코프를 오염시키지 않고 독립적인 스코프를 만들려고 씁니다. 다만 let과 const가 블록 스코프를 제공하고 ES 모듈이 파일 단위 스코프를 만들면서 쓸 일이 크게 줄었습니다.\n\n```js\n(function () {\n  var a = 3;\n  var b = 5;\n  return a * b;\n})(); // 15\n```",
  },
  {
    id: 32,
    category: "JavaScript",
    question: "스코프가 뭔가요?",
    answer:
      "스코프(Scope)란 변수나 함수에 접근할 수 있는 유효 범위를 말합니다.\n\n자바스크립트 엔진이 식별자를 어디서 찾을지 결정하는 규칙이기도 합니다.\n\n스코프는 계층적으로 이어져 스코프 체인을 이루고, 변수를 참조하면 현재 스코프에서 상위 스코프로 올라가며 찾습니다.",
  },
  {
    id: 33,
    category: "JavaScript",
    question: "스코프에는 어떤 종류가 있나요?",
    answer:
      "스코프의 종류는 크게 전역 스코프, 함수 스코프, 블록 스코프 세 가지입니다.\n\n전역 스코프는 코드 가장 바깥 영역으로 어디서든 참조할 수 있습니다.\n함수 스코프는 함수 몸체 안에서만 유효한 범위로, var가 여기에 해당합니다.\n블록 스코프는 if, for, while 같은 중괄호 블록 안에서만 유효한 범위로, let과 const가 여기에 해당합니다.\n\n```js\nfunction fn() {\n  if (true) {\n    var v = 'var';\n    let l = 'let';\n  }\n  console.log(v); // 'var', 함수 스코프라 블록 밖에서도 보임\n  console.log(l); // ReferenceError, 블록 스코프라 블록 밖에서 못 봄\n}\n```",
  },
  {
    id: 34,
    category: "JavaScript",
    question: "렉시컬 스코프가 뭔가요?",
    answer:
      "렉시컬 스코프(정적 스코프)는 함수를 어디서 호출했는지가 아니라 어디서 정의했는지에 따라 상위 스코프가 결정되는 방식입니다. 자바스크립트가 이 방식을 씁니다.\n\n정의 위치는 코드를 쓸 때 이미 고정되므로 상위 스코프도 그때 정해지고 실행 중에 바뀌지 않습니다.\n\n```js\nconst x = 1;\n\nfunction outer() {\n  const x = 10;\n  inner();\n}\n\nfunction inner() {\n  console.log(x); // 1, outer에서 호출해도 inner를 정의한 위치의 x\n}\n\nouter();\n```",
  },
  {
    id: 35,
    category: "JavaScript",
    question: "전역 변수로 변수를 선언하면 생기는 문제점은 뭔가요?",
    answer:
      "전역 변수의 문제점은 크게 네 가지입니다.\n\n어디서든 참조하고 변경할 수 있어 어느 코드가 값을 바꿨는지 추적하기 어렵습니다.\n생명 주기가 애플리케이션 전체와 같아 메모리를 끝까지 차지합니다.\n스코프 체인의 종점에 있어 식별자 검색이 가장 늦게 끝납니다.\n다른 파일에서 같은 이름을 쓰면 충돌합니다.",
  },
  {
    id: 36,
    category: "JavaScript",
    question: "생성자 함수가 뭔가요?",
    answer:
      "생성자 함수는 new 연산자와 함께 호출해 객체(인스턴스)를 생성하는 함수입니다.\n\n일반 함수와 같은 방식으로 정의하고 관례상 파스칼 케이스로 이름을 짓습니다. 내부의 this는 새로 생성될 인스턴스를 가리킵니다.\n\n```js\nfunction Person(name) {\n  this.name = name;\n}\n\nconst p = new Person('kim'); // Person { name: 'kim' }\n```",
  },
  {
    id: 37,
    category: "JavaScript",
    question: "객체 리터럴로 만들 때와 생성자 함수의 차이는 뭔가요?",
    answer:
      "객체 리터럴은 객체를 하나씩 직접 적는 방식이고, 생성자 함수는 같은 구조의 객체를 템플릿처럼 찍어내는 방식입니다.\n\n리터럴로 같은 구조를 여러 개 만들면 프로퍼티를 매번 다시 적어야 하고, 메서드도 객체마다 따로 만들어집니다. 생성자 함수는 메서드를 prototype에 두면 모든 인스턴스가 하나를 공유하므로 메모리를 덜 씁니다.\n\n```js\nconst a = { name: 'kim', greet() {} };\nconst b = { name: 'lee', greet() {} };\na.greet === b.greet; // false, 각자 다른 함수\n\nfunction Person(name) {\n  this.name = name;\n}\nPerson.prototype.greet = function () {};\n\nconst c = new Person('kim');\nconst d = new Person('lee');\nc.greet === d.greet; // true, 프로토타입의 함수 하나를 공유\n```",
  },
  {
    id: 38,
    category: "JavaScript",
    question: "생성자 함수가 객체(인스턴스)를 생성하는 과정은 어떻게 되나요?",
    answer:
      "new 연산자로 생성자 함수를 호출하면 세 단계를 거칩니다.\n\n```js\nfunction Person(name) {\n  // 1. 빈 객체가 만들어져 this에 바인딩되고, 그 객체의 프로토타입이 Person.prototype으로 연결됩니다\n  // 2. 함수 몸체가 실행되며 this에 프로퍼티를 추가합니다\n  this.name = name;\n  // 3. 다른 객체를 명시적으로 반환하지 않으면 this가 암묵적으로 반환됩니다\n}\n\nconst p = new Person('kim');\nObject.getPrototypeOf(p) === Person.prototype; // true\n```\n\n생성자 함수가 객체를 반환하면 그 객체가 대신 나가고, 원시 값을 반환하면 무시되고 this가 나갑니다.",
  },
  {
    id: 39,
    category: "JavaScript",
    question: "일급 객체가 뭔가요?",
    answer:
      "일급 객체는 값처럼 다룰 수 있는 객체를 말합니다. 자바스크립트의 함수가 여기 해당합니다.\n\n조건은 네 가지입니다.\n무명의 리터럴로 만들 수 있어 런타임에 생성됩니다.\n변수나 자료구조에 저장됩니다.\n함수의 인수로 전달됩니다.\n함수의 반환값이 됩니다.\n\n```js\nconst fn = function () {}; // 무명 리터럴, 변수에 저장\nconst list = [fn]; // 자료구조에 저장\n[1, 2].map(fn); // 인수로 전달\nconst make = () => fn; // 반환값\n```",
  },
  {
    id: 41,
    category: "JavaScript",
    question: "함수형 프로그래밍이 뭔가요?",
    answer:
      "함수형 프로그래밍은 순수 함수를 조합해 프로그램을 만드는 패러다임입니다. 외부 상태를 바꾸는 부수 효과를 줄이고 데이터를 불변으로 다룹니다.\n\n반복문으로 어떻게 순회할지 적는 대신 map, filter, reduce 같은 고차 함수로 무엇을 얻을지 적습니다.\n\n```js\n// 명령형\nconst result = [];\nfor (let i = 0; i < nums.length; i++) {\n  if (nums[i] > 2) result.push(nums[i] * 2);\n}\n\n// 함수형\nconst result = nums.filter((n) => n > 2).map((n) => n * 2);\n```",
  },
  {
    id: 42,
    category: "JavaScript",
    question: "순수 함수가 뭔가요?",
    answer:
      "순수 함수는 같은 인수를 넣으면 항상 같은 결과를 반환하고, 외부 상태를 건드리지 않는 함수입니다.\n\n외부 변수를 읽지도 바꾸지도 않으므로 함수 바깥을 확인할 필요 없이 입력과 출력만으로 동작을 판단합니다. 테스트가 쉬운 이유도 여기에 있습니다.\n\n```js\n// 순수 함수\nconst add = (a, b) => a + b;\nadd(1, 2); // 항상 3\n\n// 비순수 함수\nlet count = 0;\nconst increase = () => ++count; // 외부 변수를 읽고 바꿈\nincrease(); // 1, 2, 3... 호출할 때마다 달라짐\n```",
  },
  {
    id: 43,
    category: "JavaScript",
    question: "Map과 Set이 뭔가요?",
    answer:
      "Map과 Set은 ES6에서 추가된 컬렉션 자료구조입니다.\n\nMap은 키와 값의 쌍을 저장합니다. 객체는 키를 문자열로 바꿔버리지만 Map은 객체나 함수도 키로 쓰고 삽입 순서를 그대로 유지합니다.\nSet은 중복 없는 값의 모음이라 배열의 중복을 걷어낼 때 씁니다.\n\n둘 다 이터러블이라 for...of로 순회하고 size로 개수를 확인합니다.\n\n```js\nconst key = {};\nconst map = new Map();\nmap.set(key, 'value');\nmap.get(key); // 'value', 객체를 키로 그대로 사용\n\nconst obj = {};\nobj[key] = 'value';\nObject.keys(obj); // ['[object Object]'], 키가 문자열로 변환됨\n\nconst set = new Set([1, 1, 2]);\n[...set]; // [1, 2]\n```",
  },
  {
    id: 44,
    category: "JavaScript",
    question: "객체지향 프로그래밍이 뭔가요?",
    answer:
      "객체지향 프로그래밍(OOP)은 프로그램을 독립적인 객체의 집합으로 만들고, 객체끼리 주고받는 상호작용으로 동작을 구성하는 패러다임입니다.\n\n실세계의 사물이나 개념을 객체로 옮깁니다. 프로퍼티에는 그 객체의 상태를, 메서드에는 그 객체가 하는 일을 담습니다.\n\n```js\nconst car = {\n  speed: 0, // 상태\n  accelerate() {\n    this.speed += 10; // 자기 상태를 자기가 바꿈\n  },\n};\n```",
  },
  {
    id: 45,
    category: "JavaScript",
    question: "객체지향 프로그래밍의 특징은 뭔가요?",
    answer:
      "객체지향 프로그래밍의 특징은 캡슐화, 상속, 다형성, 추상화 네 가지입니다.\n\n캡슐화는 데이터와 그 데이터를 다루는 메서드를 한 객체에 묶고, 외부에서 데이터를 직접 건드리지 못하게 막습니다.\n상속은 기존 객체의 프로퍼티와 메서드를 물려받아 겹치는 코드를 다시 쓰지 않게 합니다.\n다형성은 같은 이름의 메서드를 객체마다 다르게 구현해, 호출하는 쪽이 어떤 객체인지 몰라도 되게 만듭니다.\n추상화는 내부 구현을 감추고 쓰는 데 필요한 것만 밖으로 드러냅니다.",
  },
  {
    id: 46,
    category: "JavaScript",
    question: "자바스크립트는 객체지향 프로그래밍 언어인가요?",
    answer:
      "자바스크립트는 프로토타입 기반으로 객체지향을 지원하는 멀티 패러다임 언어입니다. 객체지향만 강제하지 않고 함수형과 명령형도 함께 쓸 수 있습니다.\n\nJava나 C++ 같은 클래스 기반 언어와 달리 프로토타입 체인으로 상속을 구현합니다. ES6에서 class 문법이 추가됐지만 내부는 여전히 프로토타입입니다.\n\n다만 class를 프로토타입의 문법적 설탕이라고만 하기는 어렵습니다. new 없이 호출하면 에러가 나고, 선언 전에 접근하면 TDZ에 걸리며, 프로토타입 메서드가 열거되지 않고, 빌트인 객체 상속도 됩니다. 생성자 함수로는 안 되는 동작들입니다.",
  },
  {
    id: 47,
    category: "JavaScript",
    question: "프로토타입이 뭔가요?",
    answer:
      "프로토타입은 다른 객체에 자기 프로퍼티와 메서드를 물려주는 객체입니다. 자바스크립트는 클래스 대신 이 방식으로 상속을 구현합니다.\n\n모든 객체는 `[[Prototype]]` 내부 슬롯에 자기 프로토타입의 참조를 갖습니다. 프로퍼티를 찾을 때 객체에 없으면 이 참조를 따라 올라가는데, 이렇게 이어진 연결이 프로토타입 체인입니다.\n\n접근은 `Object.getPrototypeOf`로 합니다. `__proto__`도 같은 값을 주지만 레거시로 분류돼 권장되지 않습니다.\n\n```js\nfunction Person(name) {\n  this.name = name;\n}\nPerson.prototype.greet = function () {\n  return 'hi ' + this.name;\n};\n\nconst p = new Person('kim');\np.greet(); // 'hi kim', p에는 없지만 프로토타입에서 찾음\nObject.hasOwn(p, 'greet'); // false\n```",
  },
  {
    id: 48,
    category: "JavaScript",
    question: "빌트인 객체가 뭔가요?",
    answer:
      "빌트인 객체는 자바스크립트 엔진에 내장돼 있어 선언 없이 바로 쓰는 객체입니다.\n\nObject, String, Number, Boolean, Array, Function, Date, RegExp, Promise, Map, Set 등이 표준 빌트인 객체입니다. 대부분 생성자 함수라 new로 인스턴스를 만들고, 그 인스턴스는 해당 프로토타입의 메서드를 씁니다.\n\nMath, JSON, Reflect는 예외입니다. 생성자가 아니라 정적 메서드만 모아둔 객체라 new로 호출하면 에러가 납니다.\n\n```js\nconst d = new Date(); // 생성자 함수라 인스턴스 생성 가능\nd.getFullYear(); // Date.prototype의 메서드\n\nnew Math(); // TypeError: Math is not a constructor\nMath.max(1, 2); // 정적 메서드만 사용\n```",
  },
  {
    id: 49,
    category: "JavaScript",
    question: "래퍼 객체가 뭔가요?",
    answer:
      "래퍼 객체는 원시 값에 마침표로 접근할 때 엔진이 잠깐 만들었다 버리는 임시 객체입니다.\n\n원시 값에는 프로퍼티가 없는데도 'hello'.length가 동작하는 이유가 여기 있습니다. 엔진이 문자열을 String 객체로 감싸 프로퍼티를 읽고, 끝나면 객체를 버린 뒤 원시 값으로 되돌립니다.\n\nstring, number, boolean, symbol, bigint에서 생성됩니다. 감쌀 객체가 없는 null과 undefined는 프로퍼티에 접근하면 에러가 납니다.\n\n```js\nconst s = 'hello';\ns.length; // 5, String 래퍼 객체를 거쳐 읽음\ntypeof s; // 'string', 읽고 나면 원시 값 그대로\n```",
  },
  {
    id: 50,
    category: "JavaScript",
    question: "this가 뭔가요?",
    answer:
      "this는 자신이 속한 객체나 자신이 생성할 인스턴스를 가리키는 자기 참조 변수입니다.\n\nthis로 그 객체의 프로퍼티나 메서드를 참조할 수 있습니다.\n\n자바스크립트에서 this는 함수가 호출되는 방식에 따라 동적으로 결정되는 것이 특징입니다.",
  },
  {
    id: 51,
    category: "JavaScript",
    question: "this 바인딩이 뭔가요?",
    answer:
      "this 바인딩은 this가 가리킬 객체를 연결하는 것으로, 함수 호출 시점에 호출 방식에 따라 동적으로 결정됩니다.\n\n일반 함수로 호출하면 전역 객체(strict 모드에서는 undefined), 메서드로 호출하면 호출한 객체, 생성자 함수로 호출하면 새로 생성되는 인스턴스에 바인딩됩니다.\ncall, apply, bind를 쓰면 this를 명시적으로 지정할 수 있고, 화살표 함수는 자체 this가 없어 상위 스코프의 this를 그대로 사용합니다.",
  },
  {
    id: 53,
    category: "JavaScript",
    question: "실행 컨텍스트에 대해 말해보세요",
    answer:
      "실행 컨텍스트는 소스코드를 실행하는 데 필요한 환경 정보를 모아놓은 객체로, 코드의 실행 순서와 스코프를 관리합니다.\n\n전역 코드, 함수 코드, eval 코드, 모듈 코드 실행 시 생성되며 콜 스택에 쌓여 관리됩니다.\n\n내부에는 변수, 함수 선언 등을 관리하는 렉시컬 환경(Lexical Environment)과 this 바인딩 정보 등이 포함되어 있습니다.",
  },
  {
    id: 54,
    category: "JavaScript",
    question: "클로저에 대해 알고 있나요?",
    answer:
      "클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합으로, 외부 함수의 실행이 끝나도 내부 함수가 외부 함수의 변수에 접근할 수 있는 현상입니다.\n\n내부 함수가 외부 함수의 변수를 참조하고 있으면, 외부 함수의 실행 컨텍스트가 사라져도 해당 변수가 메모리에서 해제되지 않습니다.\n\n이는 자바스크립트가 렉시컬 스코프를 따르기 때문에 가능합니다.",
  },
  {
    id: 55,
    category: "JavaScript",
    question: "클로저를 사용하면 뭐가 좋나요?",
    answer:
      "클로저를 사용하면 상태를 안전하게 은닉(information hiding)하고, 특정 함수에게만 상태 변경을 허용할 수 있습니다.\n\n전역 변수 사용을 줄이고, 데이터 프라이버시를 구현하며, 함수 팩토리나 모듈 패턴을 만들 수 있습니다.\n\n또한 콜백 함수나 이벤트 핸들러에서 특정 상태를 기억하는 데 유용하게 활용됩니다.",
  },
  {
    id: 56,
    category: "JavaScript",
    question: "클로저를 어떻게 생성하나요?",
    answer:
      "클로저는 외부 함수 안에 내부 함수를 정의하고, 내부 함수가 외부 함수의 변수를 참조하며, 내부 함수를 외부로 반환할 때 생성됩니다.\n\n예를 들어, function outer() { let count = 0; return function() { return ++count; }; }처럼 작성하면, 반환된 함수는 count 변수에 계속 접근할 수 있는 클로저가 됩니다.\n\n콜백 함수나 이벤트 핸들러로 전달되는 함수도 외부 변수를 참조하면 클로저를 형성합니다.",
  },
  {
    id: 57,
    category: "JavaScript",
    question:
      "자바스크립트에서 클래스가 생기기 전에는 어떤 방식으로 객체지향 패턴을 구현했나요?",
    answer:
      "ES6 이전에는 생성자 함수와 프로토타입을 조합하여 객체지향 패턴을 구현했습니다.\n\n생성자 함수로 인스턴스를 생성하고, prototype 객체에 메서드를 정의하여 상속을 구현했습니다.\n\n상속은 Object.create()나 프로토타입 체인을 수동으로 연결하는 방식으로 처리했으며, 모듈 패턴과 즉시 실행 함수를 활용하여 캡슐화를 구현했습니다.",
  },
  {
    id: 58,
    category: "JavaScript",
    question: "생성자 함수와 클래스는 어떤 차이가 있나요?",
    answer:
      "생성자 함수와 클래스는 모두 객체를 생성하지만, 호출 방식과 제공 기능에서 차이가 있습니다.\n\n생성자 함수는 new 없이도 일반 함수로 호출이 가능하고, 호이스팅이 일반 함수처럼 동작합니다.\n\n클래스는 new 연산자 없이 호출하면 에러가 발생합니다.\n상속을 지원하는 extends와 super 키워드를 제공하며, 클래스 내부 코드는 암묵적으로 strict mode가 적용됩니다.\n또한 호이스팅이 발생하지 않는 것처럼 동작하며, 클래스의 모든 메서드는 열거 불가능(non-enumerable)합니다.\n\n클래스는 객체지향 패턴을 더 명확하고 안전하게 표현하기 위한 진화된 문법입니다.",
  },
  {
    id: 59,
    category: "JavaScript",
    question: "클래스의 상속에 대해 설명해주세요",
    answer:
      "클래스 상속은 extends 키워드를 사용하여 부모 클래스의 속성과 메서드를 자식 클래스가 물려받는 것입니다.\n\n자식 클래스에서 super()를 호출하여 부모 클래스의 constructor를 실행하고, super.method()로 부모의 메서드를 호출할 수 있습니다.\n\n자식 클래스에서 같은 이름의 메서드를 재정의(오버라이딩)하면 부모 메서드 대신 자식 메서드가 호출되어 다형성을 구현할 수 있습니다.",
  },
  {
    id: 60,
    category: "JavaScript",
    question: "브라우저의 렌더링 과정에 대해 설명해보세요",
    answer:
      "브라우저는 HTML과 CSS를 파싱한 뒤 화면에 픽셀을 그리기까지 여러 단계를 거칩니다.\n\n먼저 HTML을 파싱하여 DOM 트리를, CSS를 파싱하여 CSSOM 트리를 생성합니다.\nDOM과 CSSOM을 결합하여 렌더 트리를 만들고, 레이아웃(Layout) 단계에서 각 요소의 위치와 크기를 계산합니다.\n마지막으로 페인트(Paint) 단계에서 화면에 실제 픽셀을 그리고, 필요시 합성(Composite) 과정을 거쳐 레이어를 합칩니다.\n\n각 단계의 비용을 이해하면 리플로우와 리페인트를 줄이는 최적화 전략을 세울 수 있습니다.",
  },
  {
    id: 61,
    category: "JavaScript",
    question: "브라우저의 렌더링 과정에 자바스크립트는 어떻게 동작하나요?",
    answer:
      "HTML 파싱 중 script 태그를 만나면 파싱을 중단하고 자바스크립트 엔진에 제어권을 넘깁니다.\n\n자바스크립트 엔진은 코드를 파싱하여 AST(추상 구문 트리)를 생성하고, 바이트코드로 변환하여 실행합니다.\n\n자바스크립트 실행이 완료되면 다시 HTML 파싱이 재개되므로, 스크립트의 위치와 async/defer 속성이 렌더링 성능에 영향을 줍니다.",
  },
  {
    id: 62,
    category: "JavaScript",
    question: "script 태그를 body 태그 밑에 둬야 하는 이유가 있을까요?",
    answer:
      "script 태그를 body 하단에 두면 HTML 파싱이 완료된 후 스크립트가 실행되므로, DOM이 완성되기 전에 DOM을 조작하려는 에러를 방지할 수 있습니다.\n\n또한 HTML 파싱이 스크립트에 의해 블로킹되지 않아 페이지가 사용자에게 더 빠르게 표시됩니다.\n\n대안으로 script 태그에 defer 속성을 사용하면 head에 두어도 HTML 파싱 완료 후 실행되게 할 수 있습니다.",
  },
  {
    id: 63,
    category: "JavaScript",
    question: "DOM이 뭔가요?",
    answer:
      "DOM(Document Object Model)은 HTML 문서의 구조화된 표현으로, 브라우저가 HTML을 파싱하여 생성하는 트리 구조의 객체 모델입니다.\n\n자바스크립트를 통해 DOM에 접근하여 문서의 구조, 스타일, 내용을 동적으로 변경할 수 있습니다.\n\nDOM은 W3C 표준으로 프로그래밍 언어가 문서에 접근할 수 있는 API를 제공합니다.",
  },
  {
    id: 64,
    category: "JavaScript",
    question: "DOM을 구성하는 건 뭐가 있나요?",
    answer:
      "DOM은 노드(Node)로 구성되며, 크게 네 가지 종류의 노드가 트리 구조를 이룹니다.\n\n문서 노드(Document)는 DOM 트리의 최상위 노드입니다.\n요소 노드(Element)는 HTML 태그를 나타냅니다.\n어트리뷰트 노드(Attr)는 요소의 속성을 표현합니다.\n텍스트 노드(Text)는 태그 내의 텍스트를 나타냅니다.\n\n이 노드들이 부모-자식, 형제 관계로 연결되어 트리 구조를 이룹니다.",
  },
  {
    id: 65,
    category: "JavaScript",
    question: "이벤트 전파(propagation)에 대해서 알고 있나요?",
    answer:
      "이벤트 전파는 DOM 요소에서 이벤트가 발생했을 때 이벤트가 전달되는 흐름입니다.\n\n캡처링 단계에서 이벤트가 window에서 타겟 요소까지 하위로 전파됩니다.\n타겟 단계에서 이벤트가 타겟에 도달합니다.\n버블링 단계에서 타겟에서 window까지 상위로 전파됩니다.\n\n대부분의 이벤트는 버블링되며, event.stopPropagation()으로 전파를 중단할 수 있습니다.",
  },
  {
    id: 66,
    category: "JavaScript",
    question: "이벤트 위임(delegation)에 대해 알고 있나요?",
    answer:
      "이벤트 위임은 여러 하위 요소에 개별적으로 이벤트 핸들러를 등록하는 대신, 상위 요소 하나에 이벤트 핸들러를 등록하여 하위 요소의 이벤트를 처리하는 패턴입니다.\n\n이벤트 버블링을 활용하며, event.target을 통해 실제 이벤트가 발생한 요소를 식별합니다.\n\n동적으로 추가되는 요소에도 자동으로 이벤트 처리가 적용되고, 메모리 사용을 줄이며 성능을 향상시킵니다.",
  },
  {
    id: 67,
    category: "JavaScript",
    question: "디바운스에 대해서 알고 있나요?",
    answer:
      "디바운스는 연속적으로 발생하는 이벤트에서 마지막 이벤트가 발생한 후 일정 시간이 지나면 한 번만 실행하는 기법입니다.\n\n짧은 시간 간격으로 이벤트가 연속 발생하면 이전 타이머를 취소하고 새 타이머를 설정합니다.\n\n주로 검색 입력 자동완성, 창 크기 조절(resize) 이벤트 등에서 불필요한 함수 호출을 줄이기 위해 사용됩니다.",
  },
  {
    id: 68,
    category: "JavaScript",
    question: "쓰로틀에 대해서 알고 있나요?",
    answer:
      "쓰로틀은 일정 시간 간격 동안 이벤트가 아무리 많이 발생해도 최대 한 번만 함수를 실행하도록 제한하는 기법입니다.\n\n디바운스와 달리 일정 주기로 반드시 한 번은 실행이 보장됩니다.\n\n주로 스크롤 이벤트, 무한 스크롤 구현, 드래그 이벤트 등 빈번하게 발생하는 이벤트의 성능을 최적화할 때 사용합니다.",
  },
  {
    id: 69,
    category: "JavaScript",
    question: "동기와 비동기의 차이점은 뭔가요?",
    answer:
      "동기와 비동기는 작업의 실행 순서와 대기 방식에서 차이가 있습니다.\n\n동기(Synchronous)는 현재 실행 중인 작업이 완료될 때까지 다음 작업이 대기하는 방식으로, 코드가 순서대로 실행됩니다.\n\n비동기(Asynchronous)는 현재 작업의 완료를 기다리지 않고 다음 작업을 바로 실행하는 방식으로, 작업이 완료되면 콜백 등으로 결과를 전달받습니다.\n\n자바스크립트는 싱글 스레드이지만 이벤트 루프를 통해 비동기 처리를 구현하여 네트워크 요청, 타이머 등의 작업을 효율적으로 처리합니다.",
  },
  {
    id: 70,
    category: "JavaScript",
    question: "이벤트 루프와 태스크 큐에 대해서 알고 있나요?",
    answer:
      "이벤트 루프는 콜 스택이 비어있는지 확인하고, 비어있으면 태스크 큐에서 대기 중인 콜백 함수를 콜 스택으로 이동시키는 메커니즘입니다.\n\n태스크 큐(매크로태스크 큐)에는 setTimeout, setInterval, I/O 콜백 등이 담깁니다.\n\n이를 통해 싱글 스레드인 자바스크립트가 비동기 작업을 처리할 수 있으며, Web API가 비동기 작업을 수행한 후 완료된 콜백을 태스크 큐에 넣는 방식으로 동작합니다.",
  },
  {
    id: 71,
    category: "JavaScript",
    question: "마이크로태스크 큐에 대해서 알고 있나요?",
    answer:
      "마이크로태스크 큐는 태스크 큐보다 우선순위가 높은 별도의 큐로, Promise의 then/catch/finally 핸들러, MutationObserver 콜백, queueMicrotask 등이 담깁니다.\n\n이벤트 루프는 콜 스택이 비면 마이크로태스크 큐를 먼저 비운 후에 태스크 큐의 콜백을 실행합니다.\n\n따라서 Promise 콜백은 setTimeout 콜백보다 항상 먼저 실행됩니다.",
  },
  {
    id: 72,
    category: "JavaScript",
    question: "REST API가 뭔가요?",
    answer:
      "REST API는 REST(Representational State Transfer) 아키텍처 스타일을 준수하는 API입니다.\n\nHTTP 프로토콜을 기반으로 자원(Resource)을 URI로 식별하고, HTTP 메서드(GET, POST, PUT, DELETE 등)로 자원에 대한 행위를 정의합니다.\n\n클라이언트-서버 구조, 무상태(Stateless), 캐시 가능, 계층화 시스템 등의 원칙을 따릅니다.",
  },
  {
    id: 73,
    category: "JavaScript",
    question: "REST API를 설계하는데 중요한 것은 뭔가요?",
    answer:
      "REST API를 설계할 때는 URI 표현, HTTP 메서드 활용, 응답 형식의 일관성을 중심에 두어야 합니다.\n\nURI는 리소스를 명확하게 표현해야 하며, 동사보다 명사를 사용하는 것이 좋습니다(예: /users, /posts).\n행위는 URI가 아닌 HTTP 메서드로 표현하고, 슬래시(/)는 계층 관계를 나타냅니다.\n응답에는 적절한 HTTP 상태 코드를 사용하고, 일관된 데이터 형식(주로 JSON)으로 응답합니다.\n\n또한 버전 관리를 통해 API의 하위 호환성을 유지하는 것이 중요합니다.",
  },
  {
    id: 74,
    category: "JavaScript",
    question: "HTTP 요청 메서드에 대해서 설명해주세요",
    answer:
      "HTTP 요청 메서드는 자원에 대해 어떤 행위를 할지를 정의하며, 메서드마다 용도와 특성이 다릅니다.\n\nGET은 리소스를 조회할 때, POST는 새로운 리소스를 생성할 때, PUT은 리소스 전체를 교체할 때, PATCH는 리소스의 일부를 수정할 때, DELETE는 리소스를 삭제할 때 사용합니다.\nGET과 DELETE는 보통 요청 본문(body)을 쓰지 않고, POST, PUT, PATCH는 요청 본문에 데이터를 담습니다.\nGET은 멱등성과 안전성을 보장하며, PUT과 DELETE는 멱등성을 보장하지만 안전하지 않습니다.\n\n메서드의 의미와 멱등성을 의식하여 API를 설계하면 예측 가능한 동작을 보장할 수 있습니다.",
  },
  {
    id: 75,
    category: "JavaScript",
    question: "콜백이 뭔가요?",
    answer:
      "콜백은 다른 함수에 인수로 전달되어 특정 시점에 호출되는 함수를 말합니다.\n\n동기 콜백은 즉시 실행되고(예: forEach의 콜백), 비동기 콜백은 특정 이벤트나 작업 완료 후에 실행됩니다(예: setTimeout의 콜백).\n\n비동기 콜백이 중첩되면 '콜백 헬(Callback Hell)'이 발생하여 코드의 가독성과 유지보수성이 떨어지는데, 이를 해결하기 위해 프로미스나 async/await이 도입되었습니다.",
  },
  {
    id: 76,
    category: "JavaScript",
    question: "프로미스가 뭔가요?",
    answer:
      "프로미스(Promise)는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체로, ES6에서 도입되었습니다.\n\n콜백 헬을 해결하기 위한 패턴으로, then, catch, finally 메서드를 통해 비동기 처리 결과를 후속 처리합니다.\n\nthen 메서드가 프로미스를 반환하므로 체이닝이 가능하여, 비동기 처리를 순차적이고 가독성 높게 작성할 수 있습니다.",
  },
  {
    id: 77,
    category: "JavaScript",
    question: "프로미스의 상태를 나타내는 것은 뭔가요?",
    answer:
      "프로미스는 pending(대기), fulfilled(이행), rejected(거부) 세 가지 상태를 가집니다.\n\n처음 생성되면 pending 상태이고, 비동기 작업이 성공하면 resolve가 호출되어 fulfilled 상태가 되며, 실패하면 reject가 호출되어 rejected 상태가 됩니다.\n\nfulfilled와 rejected를 합쳐 settled(처리됨)라 하며, 한번 settled 상태가 되면 다시 변경되지 않습니다.",
  },
  {
    id: 78,
    category: "JavaScript",
    question: "제너레이터가 뭔가요?",
    answer:
      "제너레이터는 function* 키워드로 선언하며, yield 키워드를 사용하여 함수 실행을 중간에 멈추고 재개할 수 있는 특수한 함수입니다.\n\n호출하면 제너레이터 객체(이터러블이자 이터레이터)를 반환하며, next() 메서드로 yield 지점까지 실행하고 값을 주고받을 수 있습니다.\n\n비동기 처리를 동기처럼 구현하거나 무한 시퀀스를 지연 평가할 때 유용하며, async/await의 기반이 됩니다.",
  },
  {
    id: 79,
    category: "JavaScript",
    question: "async/await가 뭔가요? Promise와의 차이는 뭔가요?",
    answer:
      "async/await는 ES8에서 도입된 비동기 처리 문법으로, 프로미스를 더 직관적으로 사용할 수 있게 해줍니다.\n\nPromise는 then 체이닝을 통해 비동기 처리 결과를 후속 처리하며, 에러는 catch 메서드로 처리합니다.\n\nasync 함수는 항상 프로미스를 반환하고, await는 프로미스가 settled될 때까지 함수 실행을 일시 중지합니다.\n프로미스의 then 체이닝보다 동기 코드처럼 읽기 쉬우며, try/catch로 에러를 처리할 수 있습니다.\n\n가독성과 에러 처리 측면에서 더 직관적이므로, 복잡한 비동기 흐름에서는 async/await가 유리합니다.",
  },
  {
    id: 81,
    category: "JavaScript",
    question: "자바스크립트에서 에러를 처리하는 방법은 뭔가요?",
    answer:
      "자바스크립트에서는 동기와 비동기 코드 각각에 적합한 에러 처리 방법이 마련되어 있습니다.\n\ntry...catch...finally 문을 사용하여 동기 코드의 에러를 처리할 수 있으며, try 블록에서 에러가 발생하면 catch 블록이 실행되고 finally는 항상 실행됩니다.\n프로미스의 경우 .catch() 메서드나 async/await의 try...catch로 에러를 처리합니다.\n\nthrow 문으로 사용자 정의 에러를 발생시킬 수 있고, Error 객체를 상속하여 커스텀 에러 클래스를 만들 수도 있습니다.",
  },
  {
    id: 82,
    category: "JavaScript",
    question: "모듈이 뭔가요?",
    answer:
      "모듈은 애플리케이션을 구성하는 개별적인 코드 단위로, 관련된 변수, 함수, 클래스 등을 하나의 파일로 묶은 것입니다.\n\n모듈은 자체적인 스코프를 가져 전역 스코프를 오염시키지 않으며, export로 모듈 외부에 공개하고 import로 다른 모듈을 가져옵니다.\n\nES6에서 import/export 문법이 표준화되었으며, 코드의 재사용성, 유지보수성, 네임스페이스 관리에 도움을 줍니다.",
  },
  {
    id: 83,
    category: "JavaScript",
    question: "자바스크립트의 가비지 컬렉션에 대해 알고 있나요?",
    answer:
      "가비지 컬렉션은 자바스크립트 엔진이 더 이상 참조되지 않는 메모리를 자동으로 해제하는 메모리 관리 메커니즘입니다.\n\n주로 도달 가능성(reachability) 알고리즘을 사용하며, 루트(전역 객체 등)에서 도달할 수 없는 객체를 가비지로 판단하여 제거합니다.\n\n개발자가 명시적으로 메모리를 해제하지 않아도 되지만, 순환 참조나 불필요한 참조를 유지하면 메모리 누수가 발생할 수 있으므로 주의가 필요합니다.",
  },
  {
    id: 84,
    category: "JavaScript",
    question: "undefined와 null의 차이가 뭔가요?",
    answer:
      "undefined는 변수가 선언됐지만 아직 값이 할당되지 않은 상태를 나타내고, null은 개발자가 의도적으로 '값이 없음'을 명시적으로 할당한 것입니다.\n\nundefined는 자바스크립트 엔진이 자동으로 부여하는 값이지만, null은 개발자가 직접 대입해야 합니다. typeof로 확인하면 undefined는 'undefined', null은 'object'가 반환되는데, null이 'object'로 나오는 건 초기 자바스크립트의 버그가 그대로 굳어진 것입니다.\n\n동등 연산자(==)로 비교하면 null == undefined는 true이지만, 일치 연산자(===)로 비교하면 false입니다. 타입까지 구분해야 할 때는 반드시 ===를 써야 두 값을 정확히 구별할 수 있습니다.",
  },
  {
    id: 85,
    category: "JavaScript",
    question: "ES6에서 어떤 게 추가됐나요?",
    answer:
      "ES6(ECMAScript 2015)는 자바스크립트 역사상 가장 큰 업데이트로, 현대 자바스크립트 개발의 기반이 된 기능들이 대거 도입됐습니다.\n\n변수 선언 키워드로 let과 const가 추가되어 기존 var의 함수 스코프 문제를 해결했고, 화살표 함수로 더 간결하게 함수를 작성하면서 this 바인딩도 직관적으로 다룰 수 있게 됐습니다. 클래스 문법으로 객체지향 패턴을 명확하게 표현할 수 있고, 템플릿 리터럴로 문자열 안에 변수를 자연스럽게 삽입할 수 있습니다.\n\n그 외에도 구조 분해 할당, 스프레드/레스트 연산자, Promise, 모듈(import/export), 기본 매개변수, Map/Set 등이 함께 추가됐습니다. ES6 이전 문법을 이해하는 것도 여전히 중요한데, 레거시 코드베이스 유지보수나 트랜스파일러 동작 원리를 이해할 때 필요하기 때문입니다.",
  },
  {
    id: 86,
    category: "JavaScript",
    question: "불변성(Immutability)이 뭔가요?",
    answer:
      "불변성은 데이터를 직접 변경하지 않고, 변경이 필요할 때 원본을 두고 새로운 데이터를 만들어내는 원칙입니다.\n\n예를 들어 배열에 요소를 추가할 때 push()로 원본을 수정하는 대신 concat()이나 스프레드 연산자로 새 배열을 만드는 식입니다. 객체도 마찬가지로 직접 프로퍼티를 수정하기보다 Object.assign()이나 스프레드를 써서 새 객체를 반환하는 방식을 씁니다.\n\n불변성을 지키면 코드의 예측 가능성이 높아지고, 상태 변화 추적이 쉬워지며, 의도치 않은 부수 효과를 막을 수 있습니다. React에서 상태를 직접 변경하지 않고 새 객체로 교체하는 이유도 바로 이 불변성 원칙 덕분에 렌더링 최적화가 가능하기 때문입니다.",
  },
  {
    id: 87,
    category: "JavaScript",
    question: "requestAnimationFrame이 뭔가요?",
    answer:
      "requestAnimationFrame은 브라우저의 화면 갱신 주기에 맞춰 콜백 함수를 실행하도록 요청하는 API입니다.\n\nsetTimeout이나 setInterval은 지정한 시간 간격마다 실행되지만, 브라우저 렌더링 타이밍과 맞지 않아 프레임이 튀거나 불필요한 연산이 발생할 수 있습니다. requestAnimationFrame은 디스플레이 주사율(보통 60fps 또는 120fps)에 자동으로 맞춰 동작하므로 훨씬 부드러운 애니메이션을 구현할 수 있습니다.\n\n탭이 백그라운드 상태이거나 화면이 숨겨진 경우엔 실행을 자동으로 중단해 배터리와 CPU 자원을 아낍니다. 콜백은 태스크 큐와 별도의 'map of animation frame callbacks' 자료구조에서 관리되어 고유한 실행 주기를 갖습니다.",
  },
  {
    id: 88,
    category: "JavaScript",
    question: "`0.1 + 0.2 === 0.3`이 false인 이유가 뭔가요?",
    answer:
      "자바스크립트의 모든 숫자는 IEEE 754 표준을 따르는 64비트 부동소수점 형식으로 저장됩니다. 문제는 0.1과 0.2를 이진수로 변환하면 무한 소수가 된다는 점입니다.\n\n컴퓨터는 저장 공간이 유한하므로 이 값들을 근사치로 저장하고, 두 근사치를 더하면 0.30000000000000004처럼 미세한 오차가 생깁니다. 0.3 자체도 마찬가지로 근사치로 저장되기 때문에, 두 값이 정확히 일치하지 않아 ===가 false를 반환하는 것입니다.\n\n이를 해결할 때는 toFixed()로 반올림하거나, Number.EPSILON을 활용해 두 수의 차이가 아주 작은 값보다 작으면 같다고 판단하는 방법을 씁니다. Math.abs(a - b) < Number.EPSILON 패턴이 대표적입니다.",
  },
  {
    id: 89,
    category: "JavaScript",
    question: "자바스크립트에서 메모리 누수가 발생하는 상황은 어떤 게 있나요?",
    answer:
      "메모리 누수는 더 이상 필요 없는 메모리가 해제되지 않고 계속 점유되는 상황을 말합니다. 자바스크립트에서는 주로 세 가지 상황에서 발생합니다.\n\n이벤트 리스너가 대표적입니다. DOM 요소를 제거할 때 removeEventListener를 호출하지 않으면 해당 요소에 대한 참조가 남아 가비지 컬렉터가 메모리를 회수하지 못합니다. 클로저를 잘못 사용하는 경우도 문제가 됩니다. 내부 함수가 외부 함수의 변수나 DOM 요소를 계속 참조하고 있으면, 필요 없어진 뒤에도 메모리에 남게 됩니다.\n\n전역 변수 남용도 주의해야 합니다. window 객체에 저장된 변수는 애플리케이션이 종료될 때까지 해제되지 않으므로, 전역 스코프를 최소화하고 필요 없어진 참조는 null로 명시적으로 끊어주는 것이 좋습니다. Chrome DevTools의 Memory 탭에서 Heap snapshot이나 Allocations on timeline으로 누수 여부를 확인할 수 있습니다.",
  },
  {
    id: 90,
    category: "JavaScript",
    question: "커링(Currying)이 뭔가요?",
    answer:
      "커링은 여러 인수를 받는 함수를 하나의 인수만 받는 함수들의 체인으로 변환하는 기법입니다. add(2, 3)처럼 한 번에 호출하는 대신 add(2)(3) 형태로 인수를 하나씩 전달하는 식입니다.\n\n가장 큰 장점은 부분 적용(partial application)입니다. const addTwo = add(2)처럼 인수를 일부만 고정한 새 함수를 만들어 재사용할 수 있습니다. 예를 들어 isGreaterThan(30)이나 isGreaterThan(20)처럼 기준값을 고정해두고 filter에 바로 넘기면, 중복 콜백 패턴을 깔끔하게 제거할 수 있습니다.\n\ncompose나 pipe 같은 함수 합성 유틸리티와 함께 쓸 때도 유용합니다. 단일 인수 함수들만 합성 가능하기 때문에, 커링으로 변환해두면 파이프라인에 자연스럽게 연결됩니다. 다만 중첩 호출이 깊어지면 가독성이 떨어질 수 있어 팀 컨벤션에 맞게 사용하는 게 좋습니다.",
  },
  {
    id: 91,
    category: "JavaScript",
    question: "이터러블 프로토콜이 뭔가요?",
    answer:
      "이터러블 프로토콜은 데이터를 순차적으로 순회할 수 있도록 정해놓은 규약입니다. 이 규약을 따르면 배열, 문자열, Map, Set처럼 서로 다른 자료구조도 동일한 방식으로 반복 처리할 수 있습니다.\n\n이터러블이 되려면 객체에 Symbol.iterator 메서드가 있어야 하고, 이 메서드가 이터레이터 객체를 반환해야 합니다. 반환된 이터레이터는 next() 메서드를 가지며, 호출할 때마다 { value, done } 형태의 결과를 반환합니다. done이 true가 되면 순회가 끝난 것입니다.\n\n이 프로토콜을 구현한 객체는 for...of, 스프레드 연산자, 구조 분해 할당 등에서 모두 동일하게 사용할 수 있습니다. 커스텀 자료구조를 만들 때 Symbol.iterator를 직접 구현하면 언어 내장 문법과 자연스럽게 연동됩니다.",
  },
  {
    id: 92,
    category: "JavaScript",
    question: "자바스크립트 클래스에서 private 필드(#)는 어떻게 사용하나요?",
    answer:
      "private 필드는 클래스 내부에서만 접근 가능한 필드를 선언하는 문법으로, 필드 이름 앞에 # 기호를 붙여서 사용합니다. 클래스 본문 상단에 #fieldName 형태로 먼저 선언한 뒤 constructor나 메서드에서 this.#fieldName으로 접근합니다.\n\n클래스 외부에서 #필드에 접근하면 SyntaxError가 발생합니다. 기존에는 클로저나 WeakMap, 컨벤션(_prefix)으로 private을 흉내냈지만, #을 쓰면 언어 차원에서 진정한 캡슐화가 보장됩니다.\n\n메서드도 마찬가지로 #method() 형태로 선언해 클래스 내부에서만 호출하도록 제한할 수 있습니다. in 연산자로 특정 객체에 해당 private 필드가 있는지 확인하는 패턴(#field in obj)도 활용됩니다.",
  },
];
