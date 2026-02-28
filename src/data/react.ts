import type { Flashcard } from "@/types/flashcard";

export const react: Flashcard[] = [
  {
    id: 1,
    category: "React",
    question: "리액트는 라이브러리인가요 프레임워크인가요?",
    answer:
      "리액트는 UI를 만들기 위한 자바스크립트 라이브러리입니다. 프레임워크는 애플리케이션의 전체 흐름을 제어하지만, 리액트는 뷰(View) 레이어만 담당하며 라우팅, 상태 관리 등은 개발자가 직접 선택하여 구성할 수 있습니다. 즉, 제어의 주도권이 개발자에게 있으므로 라이브러리에 해당합니다.",
  },
  {
    id: 2,
    category: "React",
    question: "리액트를 사용하는 이유",
    answer:
      "컴포넌트 기반 아키텍처로 UI를 재사용 가능한 단위로 분리하여 개발 효율성과 유지보수성을 높일 수 있습니다. Virtual DOM을 통해 효율적인 렌더링을 수행하고, 단방향 데이터 흐름으로 상태 관리를 예측 가능하게 만듭니다. 또한 거대한 생태계와 커뮤니티 지원 덕분에 다양한 서드파티 라이브러리를 활용할 수 있습니다.",
  },
  {
    id: 3,
    category: "React",
    question: "virtual DOM에 대해서 아나요?",
    answer:
      "Virtual DOM은 실제 DOM의 가벼운 복사본으로, 메모리에 존재하는 자바스크립트 객체입니다. 상태가 변경되면 새로운 Virtual DOM 트리를 생성하고 이전 트리와 비교(diffing)하여 변경된 부분만 실제 DOM에 반영(reconciliation)합니다. 이를 통해 불필요한 DOM 조작을 최소화하여 렌더링 성능을 향상시킵니다.",
  },
  {
    id: 4,
    category: "React",
    question: "리액트의 렌더링에 대해 아나요?",
    answer:
      "리액트의 렌더링은 컴포넌트가 현재 props와 state를 기반으로 UI를 어떻게 구성할지 계산하는 과정입니다. 최초 마운트 시 루트 컴포넌트부터 렌더링이 시작되며, 이후 state 변경, props 변경, 부모 컴포넌트 리렌더링 등의 조건에 의해 리렌더링이 발생합니다. 렌더링 결과물은 Virtual DOM으로 생성되며, 이전 결과와 비교하여 실제 DOM에 최소한의 변경만 적용됩니다.",
  },
  {
    id: 5,
    category: "React",
    question: "리액트 파이버에 대해서 아나요?",
    answer:
      "리액트 파이버(Fiber)는 리액트 16에서 도입된 새로운 재조정(reconciliation) 엔진입니다. 기존의 스택 기반 재조정은 동기적으로 실행되어 한 번 시작하면 중단할 수 없었지만, 파이버는 작업을 작은 단위(fiber)로 쪼개어 비동기적으로 처리할 수 있습니다. 이를 통해 우선순위에 따라 작업을 중단, 재개, 폐기할 수 있어 애니메이션이나 사용자 인터랙션 같은 긴급한 작업을 우선 처리할 수 있습니다.",
  },
  {
    id: 6,
    category: "React",
    question: "리액트 파이버 트리",
    answer:
      "리액트 파이버 트리는 current 트리와 workInProgress 트리, 두 개의 트리로 구성됩니다. current 트리는 현재 화면에 렌더링된 상태를 나타내고, workInProgress 트리는 다음 렌더링에 반영될 변경 사항을 작업하는 트리입니다. 작업이 완료되면 workInProgress 트리가 current 트리가 되는 더블 버퍼링 방식을 사용하여 사용자에게 불완전한 UI가 보이는 것을 방지합니다.",
  },
  {
    id: 7,
    category: "React",
    question: "리액트 파이버와 DOM, Virtual DOM의 관계",
    answer:
      "파이버는 Virtual DOM을 구현하는 내부 아키텍처로, 각 리액트 엘리먼트에 대응하는 파이버 노드를 생성하여 트리 구조를 형성합니다. 파이버가 재조정 과정에서 변경 사항을 계산하면 그 결과가 Virtual DOM의 diff로 나타나고, 최종적으로 실제 DOM에 반영됩니다. 즉, 파이버는 Virtual DOM의 재조정을 효율적으로 수행하기 위한 내부 구현체이며, DOM은 최종 렌더링 대상입니다.",
  },
  {
    id: 8,
    category: "React",
    question: "렌더 단계와 커밋 단계에 대해 아나요?",
    answer:
      "렌더 단계(Render Phase)는 컴포넌트를 호출하여 Virtual DOM을 생성하고 이전 결과와 비교(diffing)하여 변경 사항을 계산하는 단계입니다. 이 단계는 비동기적으로 수행될 수 있으며 부수 효과가 없어야 합니다. 커밋 단계(Commit Phase)는 렌더 단계에서 계산된 변경 사항을 실제 DOM에 반영하는 단계로, 동기적으로 실행되며 useEffect 같은 부수 효과도 이 단계에서 처리됩니다.",
  },
  {
    id: 9,
    category: "React",
    question: "React에서 함수 컴포넌트와 클래스 컴포넌트의 차이",
    answer:
      "클래스 컴포넌트는 React.Component를 상속받아 render() 메서드로 UI를 반환하며, 라이프사이클 메서드와 this.state를 사용합니다. 함수 컴포넌트는 단순한 자바스크립트 함수로 props를 인자로 받아 JSX를 반환하며, Hooks를 통해 상태 관리와 부수 효과를 처리합니다. 함수 컴포넌트가 더 간결하고 Hooks와의 호환성이 좋아 현재 리액트에서 권장하는 방식입니다.",
  },
  {
    id: 10,
    category: "React",
    question:
      "리액트에서 함수형 컴포넌트라고 부르지 않고 함수 컴포넌트라고 부르는 이유",
    answer:
      "함수형 프로그래밍에서 '함수형(functional)'은 순수 함수, 불변성, 부수 효과 없음 등의 특성을 의미합니다. 하지만 리액트의 함수 컴포넌트는 Hooks를 통해 상태(state)를 관리하고 부수 효과(side effect)를 수행할 수 있으므로 엄밀한 함수형 프로그래밍의 정의에 부합하지 않습니다. 따라서 혼동을 피하기 위해 '함수형(functional) 컴포넌트'가 아닌 '함수(function) 컴포넌트'로 부릅니다.",
  },
  {
    id: 11,
    category: "React",
    question: "props와 state의 차이",
    answer:
      "props는 부모 컴포넌트로부터 전달받는 읽기 전용 데이터로, 자식 컴포넌트에서 직접 수정할 수 없습니다. state는 컴포넌트 내부에서 관리하는 변경 가능한 데이터로, setState나 useState를 통해 업데이트하면 리렌더링이 발생합니다. props는 외부에서 주입되는 데이터이고, state는 컴포넌트 자체가 소유하고 관리하는 데이터라는 점이 핵심적인 차이입니다.",
  },
  {
    id: 12,
    category: "React",
    question:
      "Props가 컴포넌트간에 전달받는 것이라고 했는데 자식에서 부모로도 전달할 수 있는가",
    answer:
      "리액트의 데이터 흐름은 단방향(부모에서 자식)이므로 자식이 직접 부모에게 props를 전달할 수는 없습니다. 하지만 부모가 콜백 함수를 props로 자식에게 전달하고, 자식이 해당 함수를 호출하면서 인자로 데이터를 넘기는 방식으로 간접적으로 부모에게 데이터를 전달할 수 있습니다. 이를 역방향 데이터 흐름(lifting state up) 패턴이라고 합니다.",
  },
  {
    id: 13,
    category: "React",
    question: "FLUX에 대해서 아나요?",
    answer:
      "Flux는 Facebook이 제안한 단방향 데이터 흐름 아키텍처 패턴입니다. Action이 발생하면 Dispatcher가 이를 Store에 전달하고, Store가 상태를 업데이트하면 View가 리렌더링되는 흐름으로 동작합니다. 기존 MVC 패턴에서 모델과 뷰 사이의 양방향 데이터 흐름이 복잡해지는 문제를 해결하기 위해 등장했으며, Redux 등 현대 상태 관리 라이브러리의 기반이 되었습니다.",
  },
  {
    id: 14,
    category: "React",
    question: "리덕스에 대해서 아나요?",
    answer:
      "리덕스(Redux)는 자바스크립트 애플리케이션의 전역 상태를 관리하기 위한 라이브러리입니다. 하나의 스토어(Store)에 애플리케이션의 전체 상태를 저장하고, 액션(Action)을 디스패치하여 리듀서(Reducer)를 통해 상태를 업데이트하는 방식으로 동작합니다. Flux 패턴을 기반으로 하며, 예측 가능한 상태 변화와 강력한 디버깅 도구(Redux DevTools)를 제공합니다.",
  },
  {
    id: 15,
    category: "React",
    question: "리덕스의 기본 원칙은?",
    answer:
      "리덕스의 세 가지 기본 원칙이 있습니다. 첫째, 단일 스토어(Single Source of Truth)로 애플리케이션의 전체 상태를 하나의 스토어에 저장합니다. 둘째, 상태는 읽기 전용(State is Read-only)으로 상태를 변경하려면 반드시 액션을 디스패치해야 합니다. 셋째, 변경은 순수 함수로 이루어져야(Changes are made with Pure Functions) 하며, 리듀서는 이전 상태와 액션을 받아 새로운 상태를 반환하는 순수 함수여야 합니다.",
  },
  {
    id: 16,
    category: "React",
    question:
      "React에서 state의 불변성을 유지하라는 말이 있는데 이에 대해 설명해달라",
    answer:
      "불변성을 유지한다는 것은 기존 state 객체를 직접 수정하지 않고 새로운 객체를 생성하여 교체하는 것을 의미합니다. 리액트는 state의 참조값(reference)을 비교하여 변경 여부를 판단하기 때문에, 객체를 직접 변경하면 참조값이 동일하여 리렌더링이 발생하지 않습니다. 따라서 전개 연산자, Object.assign, 배열 메서드(map, filter 등)를 사용해 새로운 객체나 배열을 만들어 상태를 업데이트해야 합니다.",
  },
  {
    id: 17,
    category: "React",
    question:
      "리듀서 내부에서 불변성을 지키는 이유는? 전개 연산자의 단점을 해결할 수 있는 방법은?",
    answer:
      "리듀서에서 불변성을 지켜야 상태 변경을 정확히 추적할 수 있고, 이전 상태와 새로운 상태를 비교하여 효율적인 리렌더링과 시간 여행 디버깅이 가능합니다. 전개 연산자는 얕은 복사만 수행하므로 중첩 객체가 깊어지면 코드가 복잡해지는 단점이 있습니다. 이를 해결하기 위해 Immer 라이브러리를 사용하면 불변성을 직접 관리하지 않아도 마치 객체를 직접 수정하는 것처럼 코드를 작성할 수 있으며, Redux Toolkit은 내부적으로 Immer를 사용합니다.",
  },
  {
    id: 18,
    category: "React",
    question: "리액트 사용시에 부수효과로 인해 생기는 문제점이 있다면",
    answer:
      "부수효과(side effect)는 컴포넌트 렌더링 외에 발생하는 API 호출, DOM 직접 조작, 타이머 설정 등을 말합니다. 부수효과를 적절히 관리하지 않으면 메모리 누수(cleanup 미처리), 무한 루프(의존성 배열 설정 오류), 경쟁 조건(race condition) 등의 문제가 발생할 수 있습니다. 이를 방지하려면 useEffect의 클린업 함수를 활용하고, 의존성 배열을 정확히 설정하며, 비동기 작업의 취소 처리를 적절히 해야 합니다.",
  },
  {
    id: 19,
    category: "React",
    question: "컴포넌트의 라이프 사이클 메서드에 대해 설명해주세요",
    answer:
      "클래스 컴포넌트의 라이프사이클은 마운트, 업데이트, 언마운트 세 단계로 나뉩니다. 마운트 시에는 constructor, render, componentDidMount가 호출되고, 업데이트 시에는 render, componentDidUpdate가 호출되며, 언마운트 시에는 componentWillUnmount가 호출됩니다. 함수 컴포넌트에서는 useEffect Hook이 이러한 라이프사이클을 대체하며, 의존성 배열과 클린업 함수를 조합하여 동일한 동작을 구현할 수 있습니다.",
  },
  {
    id: 20,
    category: "React",
    question: "useState에 대해 설명해주세요",
    answer:
      "useState는 함수 컴포넌트에서 상태를 선언하고 관리할 수 있게 해주는 Hook입니다. const [state, setState] = useState(initialValue) 형태로 사용하며, 현재 상태값과 상태를 업데이트하는 함수를 배열로 반환합니다. setState를 호출하면 컴포넌트가 리렌더링되며, 초기값으로 함수를 전달하면 최초 렌더링 시에만 실행되는 지연 초기화(lazy initialization)를 활용할 수 있습니다.",
  },
  {
    id: 21,
    category: "React",
    question: "useEffect에 대해 설명해주세요",
    answer:
      "useEffect는 함수 컴포넌트에서 부수 효과를 수행하기 위한 Hook입니다. API 호출, 이벤트 리스너 등록, DOM 조작 등 렌더링 외의 작업을 처리할 때 사용합니다. 두 번째 인자인 의존성 배열에 따라 실행 시점이 달라지며, 빈 배열이면 마운트 시에만, 특정 값을 넣으면 해당 값이 변경될 때마다 실행됩니다. 반환하는 클린업 함수는 컴포넌트 언마운트 시 또는 다음 effect 실행 전에 호출됩니다.",
  },
  {
    id: 22,
    category: "React",
    question: "useReducer에 대해 설명해주세요",
    answer:
      "useReducer는 useState의 대안으로, 복잡한 상태 로직을 리듀서 함수로 관리할 수 있게 해주는 Hook입니다. const [state, dispatch] = useReducer(reducer, initialState) 형태로 사용하며, dispatch로 액션을 보내면 리듀서 함수가 현재 상태와 액션을 기반으로 새로운 상태를 반환합니다. 여러 하위 값을 포함하는 복잡한 상태 로직이나 다음 상태가 이전 상태에 의존하는 경우에 useState보다 적합합니다.",
  },
  {
    id: 23,
    category: "React",
    question: "useMemo에 대해 설명해주세요",
    answer:
      "useMemo는 계산 비용이 큰 연산의 결과값을 메모이제이션하여 불필요한 재계산을 방지하는 Hook입니다. useMemo(() => expensiveComputation(a, b), [a, b]) 형태로 사용하며, 의존성 배열의 값이 변경될 때만 함수를 다시 실행하여 새로운 값을 계산합니다. 모든 곳에 남용하면 오히려 메모리 사용량이 증가하므로, 실제로 비용이 큰 연산이나 참조 동일성이 중요한 경우에만 사용해야 합니다.",
  },
  {
    id: 24,
    category: "React",
    question: "useCallback에 대해 설명해주세요",
    answer:
      "useCallback은 함수 자체를 메모이제이션하여 불필요한 함수 재생성을 방지하는 Hook입니다. useCallback(fn, [deps]) 형태로 사용하며, 의존성 배열의 값이 변경되지 않는 한 동일한 함수 참조를 유지합니다. 주로 자식 컴포넌트에 콜백 함수를 props로 전달할 때 React.memo와 함께 사용하여 불필요한 리렌더링을 방지하는 데 활용됩니다.",
  },
  {
    id: 25,
    category: "React",
    question: "useRef에 대해 설명해주세요",
    answer:
      "useRef는 렌더링 사이에 값을 유지하면서도 변경 시 리렌더링을 발생시키지 않는 가변 참조 객체를 생성하는 Hook입니다. 반환되는 객체의 .current 속성에 값을 저장하며, DOM 요소에 직접 접근하거나 이전 상태값을 기억하는 등의 용도로 사용됩니다. state와 달리 값이 변경되어도 리렌더링을 트리거하지 않으므로, 렌더링에 영향을 주지 않는 값을 저장할 때 적합합니다.",
  },
  {
    id: 26,
    category: "React",
    question: "커스텀 Hooks에 대해 설명해주세요",
    answer:
      "커스텀 Hook은 반복되는 상태 로직을 재사용 가능한 함수로 추출한 것으로, 'use'로 시작하는 이름 규칙을 따릅니다. 내부에서 useState, useEffect 등 다른 Hook을 조합하여 특정 기능을 캡슐화할 수 있습니다. 예를 들어 useInput, useFetch, useLocalStorage 등으로 공통 로직을 분리하면 컴포넌트를 간결하게 유지하면서 코드 재사용성을 높일 수 있습니다.",
  },
  {
    id: 27,
    category: "React",
    question: "useMemo와 useCallback의 차이를 아나요",
    answer:
      "useMemo는 함수의 실행 결과값을 메모이제이션하고, useCallback은 함수 자체를 메모이제이션한다는 점이 핵심 차이입니다. useMemo(() => fn(a, b), [a, b])는 fn(a, b)의 반환값을 캐싱하고, useCallback(fn, [deps])는 fn 함수의 참조를 캐싱합니다. 실제로 useCallback(fn, deps)는 useMemo(() => fn, deps)와 동일하게 동작합니다.",
  },
  {
    id: 28,
    category: "React",
    question: "리액트에서 setState는 비동기 동작인가요 동기 동작인가요?",
    answer:
      "setState는 비동기적으로 동작합니다. 리액트는 성능 최적화를 위해 여러 setState 호출을 배치(batch)로 모아서 한 번에 처리합니다. 따라서 setState 호출 직후에 변경된 state 값에 바로 접근할 수 없으며, 업데이트된 값을 기반으로 로직을 작성하려면 useEffect를 사용하거나 setState에 콜백 함수 형태(prev => newState)를 전달해야 합니다.",
  },
  {
    id: 29,
    category: "React",
    question: "setState가 비동기 동작을 취했을 때 얻을 수 있는 이점은?",
    answer:
      "여러 setState 호출을 배치(batch)로 모아 한 번에 처리함으로써 불필요한 리렌더링 횟수를 줄여 성능을 최적화할 수 있습니다. 만약 setState가 동기적으로 동작한다면 각 호출마다 리렌더링이 발생하여 성능 저하로 이어질 수 있습니다. 또한 일관된 상태를 보장하여 부모와 자식 컴포넌트가 서로 다른 시점의 상태를 참조하는 문제를 방지합니다.",
  },
  {
    id: 30,
    category: "React",
    question: "useLayoutEffect는 무엇인가요?",
    answer:
      "useLayoutEffect는 useEffect와 동일한 시그니처를 가지지만, DOM이 업데이트된 직후 브라우저가 화면을 그리기(paint) 전에 동기적으로 실행됩니다. useEffect는 화면이 그려진 후 비동기적으로 실행되는 반면, useLayoutEffect는 레이아웃 측정이나 DOM 조작이 필요한 경우에 사용하여 화면 깜빡임(flickering)을 방지할 수 있습니다. 동기적으로 실행되므로 과도하게 사용하면 렌더링 성능에 영향을 줄 수 있어 필요한 경우에만 사용해야 합니다.",
  },
  {
    id: 31,
    category: "React",
    question: "리액트의 성능개선 방법에 대해서 설명해주세요",
    answer:
      "React.memo로 불필요한 리렌더링을 방지하고, useMemo와 useCallback으로 값과 함수를 메모이제이션할 수 있습니다. 코드 스플리팅(React.lazy, Suspense)을 통해 번들 크기를 줄이고, 리스트 렌더링 시 고유한 key를 부여하여 재조정 성능을 높입니다. 또한 상태를 필요한 컴포넌트 가까이에 배치(state colocation)하고, 가상화(virtualization) 라이브러리를 사용해 대량 데이터 렌더링을 최적화할 수 있습니다.",
  },
  {
    id: 32,
    category: "React",
    question:
      "컴포넌트에서 이벤트를 실행시키기 위해서는 어떻게 핸들링해야 하나요?",
    answer:
      "리액트에서는 JSX 요소에 카멜 케이스(camelCase)로 이벤트 핸들러를 작성합니다. 예를 들어 onClick, onChange, onSubmit 등의 속성에 함수를 전달합니다. HTML과 달리 문자열이 아닌 함수 참조를 전달해야 하며, onClick={handleClick}처럼 함수를 호출하지 않고 참조만 전달합니다. 이벤트 객체는 브라우저 네이티브 이벤트를 래핑한 합성 이벤트(SyntheticEvent)로 전달되어 크로스 브라우저 호환성을 보장합니다.",
  },
  {
    id: 33,
    category: "React",
    question: "SPA가 뭔가요?",
    answer:
      "SPA(Single Page Application)는 하나의 HTML 페이지로 구성되며, 페이지 전환 시 전체 페이지를 다시 로드하지 않고 자바스크립트로 필요한 부분만 동적으로 업데이트하는 웹 애플리케이션입니다. 초기 로딩 시 필요한 리소스를 한 번에 받아온 후, 이후 사용자 인터랙션에 따라 AJAX 등으로 데이터를 받아 화면을 갱신합니다. React, Vue, Angular 등의 프레임워크/라이브러리가 SPA 개발에 주로 사용됩니다.",
  },
  {
    id: 34,
    category: "React",
    question: "SPA의 단점은?",
    answer:
      "초기 로딩 시 모든 자바스크립트 번들을 다운로드해야 하므로 첫 페이지 로딩 속도가 느릴 수 있습니다. 자바스크립트로 페이지를 렌더링하기 때문에 검색 엔진 크롤러가 콘텐츠를 제대로 수집하지 못해 SEO에 불리합니다. 또한 브라우저 히스토리 관리를 직접 처리해야 하며, 보안 측면에서 클라이언트에 비즈니스 로직이 노출될 수 있는 단점이 있습니다.",
  },
  {
    id: 35,
    category: "React",
    question: "SSR이 뭔가요?",
    answer:
      "SSR(Server-Side Rendering)은 서버에서 HTML을 완성하여 클라이언트에 전달하는 렌더링 방식입니다. 서버가 요청을 받으면 리액트 컴포넌트를 HTML 문자열로 렌더링하여 응답하고, 클라이언트는 완성된 HTML을 받아 즉시 화면에 표시한 후 자바스크립트를 로드하여 인터랙션을 활성화합니다. SPA의 초기 로딩 속도와 SEO 문제를 해결할 수 있으며, Next.js가 대표적인 SSR 프레임워크입니다.",
  },
  {
    id: 36,
    category: "React",
    question: "SEO가 뭔가요?",
    answer:
      "SEO(Search Engine Optimization)는 검색 엔진 최적화로, 웹사이트가 검색 엔진 결과 페이지에서 높은 순위에 노출되도록 최적화하는 작업입니다. 검색 엔진 크롤러가 웹페이지의 콘텐츠를 수집하고 색인하는 과정에서 HTML 구조, 메타 태그, 콘텐츠 품질 등을 분석합니다. CSR 기반 SPA는 빈 HTML을 반환하므로 크롤러가 콘텐츠를 인식하기 어려워 SSR이나 SSG를 활용하여 SEO를 개선합니다.",
  },
  {
    id: 37,
    category: "React",
    question: "하이드레이션에 대해 알고 있나요",
    answer:
      "하이드레이션(Hydration)은 서버에서 렌더링된 정적 HTML에 자바스크립트 이벤트 핸들러와 상태를 연결하여 인터랙티브한 페이지로 만드는 과정입니다. SSR로 전달된 HTML은 화면에 바로 표시되지만 클릭 등의 상호작용은 불가능한 상태이며, 하이드레이션 과정을 거쳐야 리액트가 관리하는 동적 웹 애플리케이션으로 동작합니다. 리액트에서는 hydrateRoot 메서드를 사용하여 이 과정을 수행합니다.",
  },
  {
    id: 38,
    category: "React",
    question: "Next의 렌더링 수행 방식",
    answer:
      "Next.js는 SSR(Server-Side Rendering), SSG(Static Site Generation), ISR(Incremental Static Regeneration), CSR(Client-Side Rendering) 등 다양한 렌더링 방식을 지원합니다. SSR은 매 요청마다 서버에서 HTML을 생성하고, SSG는 빌드 타임에 HTML을 미리 생성하며, ISR은 정적 페이지를 일정 주기로 재생성합니다. App Router에서는 기본적으로 서버 컴포넌트(RSC)를 사용하며, 'use client' 지시어로 클라이언트 컴포넌트를 명시적으로 선언합니다.",
  },
  {
    id: 39,
    category: "React",
    question: "Next를 쓴 이유가 있나요?",
    answer:
      "Next.js는 SSR과 SSG를 기본 지원하여 SEO와 초기 로딩 성능을 개선할 수 있습니다. 파일 기반 라우팅, 이미지 최적화, API Routes, 자동 코드 스플리팅 등 프로덕션에 필요한 기능들이 내장되어 있어 별도 설정 없이 바로 사용할 수 있습니다. 또한 서버 컴포넌트, 스트리밍 등 리액트의 최신 기능을 가장 빠르게 활용할 수 있는 프레임워크이기도 합니다.",
  },
  {
    id: 40,
    category: "React",
    question: "Next를 구성하는 기본 설정 파일에 대해서 알고 있나요?",
    answer:
      "next.config.js(또는 next.config.mjs)는 Next.js의 핵심 설정 파일로 리다이렉트, 환경 변수, 이미지 도메인 등을 설정합니다. pages/_app.tsx(또는 app/layout.tsx)는 모든 페이지에 공통으로 적용되는 레이아웃과 전역 상태를 관리합니다. pages/_document.tsx는 HTML 문서 구조를 커스터마이징하며, middleware.ts는 요청 전처리를 수행하고, .env 파일로 환경 변수를 관리합니다.",
  },
  {
    id: 41,
    category: "React",
    question: "사전 렌더링을 위해 사용해 본 함수가 있나요",
    answer:
      "Next.js의 Pages Router에서는 getStaticProps(SSG용), getStaticPaths(동적 경로 SSG용), getServerSideProps(SSR용)를 사용하여 사전 렌더링을 구현합니다. getStaticProps는 빌드 시 데이터를 가져와 정적 페이지를 생성하고, getServerSideProps는 매 요청마다 서버에서 데이터를 가져옵니다. App Router에서는 서버 컴포넌트에서 직접 async/await로 데이터를 가져오는 방식으로 사전 렌더링을 수행합니다.",
  },
  {
    id: 42,
    category: "React",
    question: "suspense가 뭔가요?",
    answer:
      "Suspense는 컴포넌트가 렌더링에 필요한 데이터나 코드가 준비될 때까지 로딩 상태를 선언적으로 처리할 수 있게 해주는 리액트의 기능입니다. <Suspense fallback={<Loading />}>으로 컴포넌트를 감싸면, 내부 컴포넌트가 준비되기 전까지 fallback에 지정한 로딩 UI를 표시합니다. 비동기 작업의 로딩 상태를 컴포넌트 트리 수준에서 관리할 수 있어 코드의 가독성과 사용자 경험을 개선합니다.",
  },
  {
    id: 43,
    category: "React",
    question: "suspense로 가능한 것은 어떤 것들이 있나요?",
    answer:
      "React.lazy와 함께 사용하여 컴포넌트 코드 스플리팅 및 지연 로딩을 구현할 수 있습니다. 서버 컴포넌트에서 데이터 페칭의 로딩 상태를 선언적으로 관리할 수 있으며, Next.js에서 스트리밍 SSR을 통해 페이지의 일부분을 먼저 전송하고 나머지를 점진적으로 로드할 수 있습니다. 또한 여러 Suspense 경계를 중첩하여 세밀한 로딩 상태 제어가 가능합니다.",
  },
  {
    id: 44,
    category: "React",
    question: "LCP가 뭔가요?",
    answer:
      "LCP(Largest Contentful Paint)는 웹 페이지에서 뷰포트 내 가장 큰 콘텐츠 요소(이미지, 비디오, 텍스트 블록 등)가 렌더링되는 데 걸리는 시간을 측정하는 Core Web Vitals 지표입니다. 사용자가 페이지의 주요 콘텐츠를 볼 수 있는 시점을 나타내며, 좋은 사용자 경험을 위해 2.5초 이내가 권장됩니다. 이미지 최적화, 서버 응답 시간 개선, 렌더링 차단 리소스 제거 등으로 LCP를 개선할 수 있습니다.",
  },
  {
    id: 45,
    category: "React",
    question: "FCP가 뭔가요?",
    answer:
      "FCP(First Contentful Paint)는 페이지 로드 시작부터 화면에 첫 번째 콘텐츠(텍스트, 이미지, SVG 등)가 렌더링되기까지 걸리는 시간을 측정하는 성능 지표입니다. 사용자가 페이지가 로드되고 있음을 인식하는 첫 번째 시점으로, 1.8초 이내가 좋은 수준으로 권장됩니다. SSR 적용, CSS 최적화, 폰트 로딩 전략 개선 등을 통해 FCP를 단축할 수 있습니다.",
  },
  {
    id: 46,
    category: "React",
    question: "controlled pattern에 대해서 아나요?",
    answer:
      "Controlled 패턴은 폼 요소의 값을 리액트의 state로 관리하는 방식입니다. input의 value 속성에 state를 바인딩하고, onChange 핸들러에서 setState를 호출하여 값을 업데이트합니다. 리액트가 폼 데이터의 유일한 진실 공급원(single source of truth)이 되므로 입력값 검증, 조건부 제출, 실시간 포맷팅 등 세밀한 제어가 가능합니다.",
  },
  {
    id: 47,
    category: "React",
    question: "uncontrolled pattern에 대해서 아나요?",
    answer:
      "Uncontrolled 패턴은 폼 요소의 값을 DOM 자체가 관리하는 방식으로, 리액트 state 대신 useRef를 사용하여 필요할 때 DOM에서 직접 값을 가져옵니다. state 업데이트가 발생하지 않으므로 입력마다 리렌더링이 발생하지 않아 성능상 이점이 있습니다. 단순한 폼이나 파일 입력처럼 리액트로 제어할 필요가 없는 경우에 적합하며, defaultValue 속성으로 초기값을 설정합니다.",
  },
];
