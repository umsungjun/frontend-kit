import type { Flashcard } from "@/types/flashcard";

export const typescript: Flashcard[] = [
  {
    id: 1,
    category: "TypeScript",
    question: "TypeScript란 무엇이고, JavaScript와의 차이점은 뭔가요?",
    answer:
      "TypeScript는 Microsoft가 개발한 JavaScript의 상위 집합(Superset) 언어로, 정적 타입 시스템을 추가한 것이 가장 큰 특징입니다.\n\nTypeScript 코드는 컴파일(트랜스파일) 과정을 거쳐 순수 JavaScript로 변환되어 실행됩니다. JavaScript와 달리 컴파일 시점에 타입 오류를 잡을 수 있어 런타임 에러를 사전에 방지할 수 있습니다.\n\nIDE의 자동 완성과 리팩토링 지원이 강화되어 대규모 프로젝트의 생산성과 안정성을 높이는 데 효과적입니다.",
  },
  {
    id: 2,
    category: "TypeScript",
    question: "TypeScript를 사용하는 이유와 장점은 뭔가요?",
    answer:
      "TypeScript는 정적 타입 검사를 통해 코드 작성 단계에서 버그를 조기에 발견하도록 도와주는 도구입니다.\n\nIDE에서 강력한 자동 완성, 타입 기반 리팩토링, 코드 네비게이션을 제공받을 수 있습니다.\n타입 자체가 문서 역할을 하여 협업 시 코드의 의도를 명확히 전달합니다.\n대규모 프로젝트에서 코드의 안정성과 유지보수성을 크게 향상시킵니다.\n\n팀 단위 개발이나 장기 유지보수가 필요한 프로젝트에서 특히 가치가 큽니다.",
  },
  {
    id: 3,
    category: "TypeScript",
    question: "정적 타이핑과 동적 타이핑의 차이점은 뭔가요?",
    answer:
      "정적 타이핑은 타입이 컴파일 시점에 결정되고, 동적 타이핑은 타입이 런타임에 결정된다는 점이 가장 큰 차이입니다.\n\n정적 타이핑은 TypeScript, Java, C++ 등이 해당하며, 코드 실행 전에 타입 오류를 발견할 수 있어 안정성이 높습니다.\n\n동적 타이핑은 JavaScript, Python 등이 해당하며, 작성이 유연하지만 런타임에서야 타입 관련 에러를 발견할 수 있다는 단점이 있습니다.\n\n안정성을 우선한다면 정적 타이핑, 빠른 프로토타이핑이 중요하다면 동적 타이핑이 어울립니다.",
  },
  {
    id: 4,
    category: "TypeScript",
    question: "타입 추론(Type Inference)이란 뭔가요?",
    answer:
      "타입 추론은 개발자가 명시적으로 타입을 지정하지 않아도 TypeScript 컴파일러가 코드의 문맥을 분석해 자동으로 타입을 결정하는 기능입니다.\n\n예를 들어 let x = 10이라고 작성하면 x는 자동으로 number 타입으로 추론됩니다. 변수 초기화, 함수 반환값, 기본 매개변수 등에서 타입 추론이 동작합니다.\n\n불필요한 타입 어노테이션을 줄여 코드를 간결하게 유지할 수 있고, 표현식이 복잡할 때만 명시적으로 타입을 작성하는 것이 일반적입니다.",
  },
  {
    id: 5,
    category: "TypeScript",
    question: "any, unknown, never 타입의 차이점은 뭔가요?",
    answer:
      "any는 타입 검사를 우회하고, unknown은 검사를 강제하며, never는 절대 발생하지 않는 값을 의미한다는 점에서 다릅니다.\n\nany는 모든 타입을 허용하며 타입 검사를 완전히 무시하므로 편리하지만 타입 안전성을 포기합니다.\nunknown은 모든 값을 할당할 수 있지만, 사용하기 전에 반드시 타입 검사를 거쳐야 하므로 안전성이 유지됩니다.\nnever는 항상 예외를 던지는 함수나 도달할 수 없는 코드처럼 절대 발생하지 않는 값의 타입입니다.\n\n타입을 알 수 없을 때는 any 대신 unknown을 사용하는 것이 권장됩니다.",
  },
  {
    id: 6,
    category: "TypeScript",
    question: "interface와 type alias의 차이점은 뭔가요?",
    answer:
      "interface는 객체 구조 정의에 특화되어 있고 선언 병합이 가능하지만, type alias는 모든 형태의 타입에 별칭을 붙일 수 있다는 점에서 다릅니다.\n\ninterface는 객체의 구조 정의에 사용되며, 동일 이름으로 여러 번 선언하면 자동으로 합쳐지는 선언 병합을 지원합니다. extends 키워드로 확장합니다.\n\ntype alias는 유니온, 인터섹션, 튜플, 원시 타입 등 다양한 타입 표현이 가능합니다. 객체 타입 정의 시에는 둘 다 사용할 수 있습니다.\n\n외부 계약(Props, API 응답 등)에는 interface, 내부 유니온/유틸리티 조합에는 type을 쓰는 컨벤션이 자주 사용됩니다.",
  },
  {
    id: 7,
    category: "TypeScript",
    question: "enum이란 뭐고, const enum과의 차이는 뭔가요?",
    answer:
      "enum은 관련된 상수들의 집합을 이름이 있는 형태로 정의하는 기능이고, const enum은 컴파일 시 인라인으로 치환되어 런타임 객체가 생성되지 않는다는 점에서 다릅니다.\n\n일반 enum은 숫자형이면 자동으로 0부터 값이 할당되고, 문자열 enum은 각 멤버에 문자열 값을 직접 지정합니다. 런타임에 객체로 존재합니다.\n\nconst enum은 컴파일 시 enum 객체를 생성하지 않고 사용처에 값을 인라인으로 치환하여 번들 크기를 줄입니다. 컴파일 후에는 사라집니다.\n\n번들 크기와 런타임 참조가 둘 다 필요한 상황을 고려해 선택합니다.",
  },
  {
    id: 8,
    category: "TypeScript",
    question:
      "유니온 타입(Union Type)과 인터섹션 타입(Intersection Type)이란 뭔가요?",
    answer:
      "유니온은 여러 타입 중 하나를 의미하는 OR 개념이고, 인터섹션은 여러 타입을 모두 만족하는 AND 개념이라는 점이 핵심 차이입니다.\n\n유니온 타입은 | 연산자를 사용하여 여러 타입 중 하나가 될 수 있는 타입을 정의합니다. 예를 들어 string | number는 문자열 또는 숫자를 허용합니다.\n\n인터섹션 타입은 & 연산자를 사용하여 여러 타입을 모두 만족하는 타입을 만듭니다. A & B는 A와 B의 모든 속성을 가진 타입이 됩니다.\n\n유니온은 입력값의 종류를 제한할 때, 인터섹션은 여러 타입을 합성할 때 주로 활용합니다.",
  },
  {
    id: 9,
    category: "TypeScript",
    question: "리터럴 타입(Literal Type)이란 뭔가요?",
    answer:
      "리터럴 타입은 특정 값 자체를 타입으로 지정하여 허용되는 값의 범위를 좁히는 타입입니다.\n\n문자열 리터럴('hello'), 숫자 리터럴(42), 불리언 리터럴(true) 등이 있으며, 주로 유니온 타입과 함께 사용하여 허용되는 값의 범위를 제한합니다.\n\n예를 들어 type Direction = 'up' | 'down' | 'left' | 'right'처럼 특정 문자열만 허용하는 타입을 정의하면, 잘못된 값이 전달되는 것을 컴파일 시점에 방지할 수 있습니다.",
  },
  {
    id: 10,
    category: "TypeScript",
    question: "튜플(Tuple) 타입이란 뭔가요?",
    answer:
      "튜플은 고정된 길이와 각 위치별로 정해진 타입을 가지는 배열 타입입니다.\n\n일반 배열과 달리 각 요소의 타입이 다를 수 있으며, 순서와 개수가 고정됩니다. 예를 들어 [string, number]는 첫 번째 요소가 문자열, 두 번째 요소가 숫자인 배열입니다.\n\nReact의 useState 훅이 반환하는 [state, setState]가 대표적인 튜플 예시이며, 선택적 요소(?)나 나머지 요소(...)도 사용할 수 있습니다.",
  },
  {
    id: 11,
    category: "TypeScript",
    question: "제네릭(Generics)이란 뭐고, 왜 사용하나요?",
    answer:
      "제네릭은 타입을 매개변수처럼 사용하여 재사용 가능한 컴포넌트를 만드는 기능입니다.\n\n함수, 클래스, 인터페이스 등에 적용할 수 있으며, 호출 시점에 구체적인 타입을 지정합니다. 예를 들어 function identity<T>(arg: T): T는 어떤 타입이든 받아서 같은 타입을 반환합니다.\n\nany를 사용하면 타입 정보를 잃지만, 제네릭은 타입 안전성을 유지하면서도 유연한 코드를 작성할 수 있게 해줍니다. 컬렉션 자료구조나 공통 유틸 함수에서 특히 유용합니다.",
  },
  {
    id: 12,
    category: "TypeScript",
    question: "제네릭 제약 조건(Generic Constraints)이란 뭔가요?",
    answer:
      "제네릭 제약 조건은 extends 키워드를 사용하여 제네릭 타입 매개변수가 특정 조건을 만족하도록 제한하는 기능입니다.\n\n예를 들어 <T extends { length: number }>는 T가 반드시 length 속성을 가진 타입이어야 함을 의미합니다. 제네릭 함수 내부에서 해당 속성에 안전하게 접근할 수 있게 됩니다.\n\nkeyof와 함께 사용하면 객체의 키로 타입을 제한하는 것도 가능하므로, 잘못된 타입이 전달되는 것을 방지하면서 유연성을 유지할 수 있습니다.",
  },
  {
    id: 13,
    category: "TypeScript",
    question: "타입 가드(Type Guard)란 뭐고, 어떤 종류가 있나요?",
    answer:
      "타입 가드는 조건문을 통해 특정 스코프 내에서 변수의 타입을 좁혀주는 런타임 검사입니다.\n\ntypeof 가드는 원시 타입 검사에 사용됩니다.\ninstanceof 가드는 클래스 인스턴스 검사에 사용됩니다.\nin 연산자는 속성 존재 여부 검사에 사용됩니다.\n사용자 정의 타입 가드는 is 키워드로 직접 구현할 수 있습니다.\n\n타입 가드를 사용하면 유니온 타입의 변수를 안전하게 특정 타입으로 좁혀, 해당 타입의 속성이나 메서드에 접근할 수 있습니다.",
  },
  {
    id: 14,
    category: "TypeScript",
    question: "typeof와 instanceof의 차이점은 뭔가요?",
    answer:
      "typeof는 원시 타입을 문자열로 반환하는 연산자이고, instanceof는 객체가 특정 클래스의 인스턴스인지 프로토타입 체인으로 확인하는 연산자라는 점이 다릅니다.\n\ntypeof는 'string', 'number', 'boolean', 'object', 'function' 등을 검사하며, 원시 타입을 구분할 때 주로 사용합니다.\n\ninstanceof는 객체가 특정 클래스의 인스턴스인지 확인하며, 프로토타입 체인을 따라 검사합니다.\n\nTypeScript에서 typeof는 원시 타입 가드로, instanceof는 클래스 기반 타입 가드로 활용되어 타입을 좁히는 데 사용됩니다.",
  },
  {
    id: 15,
    category: "TypeScript",
    question: "in 연산자를 활용한 타입 좁히기란 뭔가요?",
    answer:
      "in 연산자는 객체에 특정 속성이 존재하는지 확인하는 연산자로, TypeScript에서 타입 가드로 활용됩니다.\n\n유니온 타입에서 각 타입이 고유한 속성을 가질 때 유용합니다. 예를 들어 if ('swim' in animal)로 검사하면 해당 블록 안에서 animal은 swim 속성을 가진 타입으로 좁혀집니다.\n\n클래스가 아닌 일반 객체 타입을 구분할 때 instanceof 대신 사용할 수 있는 패턴입니다.",
  },
  {
    id: 16,
    category: "TypeScript",
    question:
      "타입 단언(Type Assertion)이란 뭔가요? as와 angle bracket의 차이는 뭔가요?",
    answer:
      "타입 단언은 개발자가 컴파일러에게 '이 값의 타입을 내가 더 잘 알고 있다'고 알려주는 기능입니다.\n\nvalue as string 형태의 as 구문과 <string>value 형태의 앵글 브래킷 구문이 있습니다. 두 방식은 기능적으로 동일합니다.\n\nJSX/TSX 파일에서는 앵글 브래킷이 JSX 태그와 충돌하므로 as 구문을 사용해야 합니다.\n\n타입 단언은 타입 검사를 우회하므로 남용하면 런타임 에러가 발생할 수 있어 꼭 필요한 경우에만 사용해야 합니다.",
  },
  {
    id: 17,
    category: "TypeScript",
    question: "유틸리티 타입을 사용하는 이유와 주요 종류는 뭔가요?",
    answer:
      "유틸리티 타입은 TypeScript가 기본 제공하는 타입 변환 도구로, 기존 타입을 기반으로 새로운 타입을 쉽게 만들 수 있게 해줍니다.\n\n속성을 변환하는 Partial, Required, Readonly가 있습니다.\n속성을 선택하는 Pick, Omit이 있습니다.\n객체를 생성하는 Record가 있습니다.\n유니온을 필터링하는 Exclude, Extract, NonNullable이 있습니다.\n함수 관련 ReturnType, Parameters가 있습니다.\n\n중복 타입 정의를 줄이고 타입 간의 관계를 명확히 표현하여 유지보수성을 높이는 데 도움이 됩니다.",
  },
  {
    id: 18,
    category: "TypeScript",
    question: "Partial, Required, Pick, Omit의 용도는 뭔가요?",
    answer:
      "네 가지 유틸리티 타입은 기존 타입의 속성을 변형하거나 일부만 골라 새로운 타입을 만드는 도구입니다.\n\nPartial<T>는 T의 모든 속성을 선택적(optional)으로 만듭니다. 업데이트 함수의 매개변수처럼 일부 속성만 전달할 때 유용합니다.\nRequired<T>는 반대로 모든 속성을 필수로 만듭니다.\nPick<T, K>는 T에서 특정 속성만 골라 새 타입을 만듭니다.\nOmit<T, K>는 특정 속성을 제외한 나머지로 새 타입을 만듭니다.\n\n이들을 조합하면 기존 타입을 재활용하면서 다양한 상황에 맞는 타입을 유연하게 정의할 수 있습니다.",
  },
  {
    id: 19,
    category: "TypeScript",
    question: "Record 타입이란 뭔가요?",
    answer:
      "Record<K, V>는 키의 타입이 K이고 값의 타입이 V인 객체 타입을 생성하는 유틸리티 타입입니다.\n\n예를 들어 Record<string, number>는 문자열 키에 숫자 값을 가지는 객체를 의미합니다. 유니온 타입과 함께 사용하면 특정 키만 허용하는 객체를 정의할 수 있습니다.\n\nRecord<'a' | 'b', boolean>은 'a'와 'b' 키만 가지며 값은 boolean인 객체입니다.\n\n인덱스 시그니처보다 키를 명확히 제한할 수 있어 타입 안전성이 높아집니다.",
  },
  {
    id: 20,
    category: "TypeScript",
    question: "Exclude, Extract, NonNullable의 차이는 뭔가요?",
    answer:
      "세 유틸리티 타입은 모두 유니온 타입을 필터링한다는 공통점이 있지만, 제거/추출/널 제거라는 동작 방향이 다릅니다.\n\nExclude<T, U>는 유니온 타입 T에서 U에 해당하는 타입을 제거합니다. 예를 들어 Exclude<'a' | 'b' | 'c', 'a'>는 'b' | 'c'가 됩니다.\n\nExtract<T, U>는 반대로 T에서 U에 해당하는 타입만 추출합니다.\n\nNonNullable<T>는 T에서 null과 undefined를 제거합니다.\n\n이들은 모두 조건부 타입 기반으로 구현되어 있으며, 원하는 타입만 골라낼 때 유용합니다.",
  },
  {
    id: 21,
    category: "TypeScript",
    question: "ReturnType, Parameters 유틸리티 타입이란 뭔가요?",
    answer:
      "ReturnType과 Parameters는 함수 타입에서 반환 타입과 매개변수 타입을 각각 추출하는 유틸리티 타입입니다.\n\nReturnType<T>는 함수 타입 T의 반환 타입을 추출합니다. 예를 들어 ReturnType<typeof myFunction>으로 함수의 반환값 타입을 가져올 수 있습니다.\n\nParameters<T>는 함수 타입 T의 매개변수 타입을 튜플로 추출합니다.\n\n서드파티 라이브러리 함수의 타입을 재활용하거나, 함수 시그니처가 변경되어도 자동으로 타입이 따라가도록 할 때 유용합니다.",
  },
  {
    id: 22,
    category: "TypeScript",
    question: "타입 호환성(Type Compatibility)과 구조적 타이핑이란 뭔가요?",
    answer:
      "TypeScript는 타입의 이름이 아닌 구조(속성과 타입)가 같으면 호환 가능한 타입으로 간주하는 구조적 타이핑(Structural Typing)을 채택하고 있습니다.\n\n예를 들어 interface A와 interface B가 같은 속성을 가지면 서로 대입이 가능합니다. 이는 Java 같은 명목적 타이핑(Nominal Typing)과 대비되는 방식입니다.\n\n덕 타이핑(Duck Typing)과 유사한 개념으로, '오리처럼 걷고 꽥꽥거리면 오리다'라는 원칙을 컴파일 타임에 적용한다고 이해할 수 있습니다.",
  },
  {
    id: 23,
    category: "TypeScript",
    question: "선언 병합(Declaration Merging)이란 뭔가요?",
    answer:
      "선언 병합은 동일한 이름으로 여러 번 선언된 interface가 자동으로 하나로 합쳐지는 TypeScript의 기능입니다.\n\n같은 이름의 interface를 두 번 선언하면 두 선언의 속성이 모두 포함된 하나의 interface가 됩니다. 외부 라이브러리의 타입을 확장할 때 유용합니다.\n\ntype alias는 선언 병합을 지원하지 않으며, 중복 선언 시 에러가 발생합니다. 이 점이 interface와 type의 주요 차이점 중 하나입니다.",
  },
  {
    id: 24,
    category: "TypeScript",
    question: "타입 선언은 어디에 하고, 공통 타입은 어떻게 관리하나요?",
    answer:
      "공통 타입은 별도의 types 디렉토리나 파일에 모아 관리하고, 컴포넌트 전용 타입은 해당 파일 내부에 두는 분리 전략이 효과적입니다.\n\nAPI 응답 타입은 types/api.ts, 도메인 모델은 types/models.ts 등으로 역할별로 분리합니다.\n컴포넌트 전용 Props 타입은 해당 컴포넌트 파일 내에 선언합니다.\n여러 곳에서 사용하는 타입은 공통 파일에 선언합니다.\n\nbarrel 파일(index.ts)로 re-export하면 import 경로를 단순화할 수 있고, 경로 별칭(@/types)을 활용하면 깊은 상대 경로를 피할 수 있습니다.",
  },
];
