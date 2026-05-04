import type { Flashcard } from "@/types/flashcard";

export const react: Flashcard[] = [
  {
    id: 1,
    category: "React",
    question: "리액트는 라이브러리인가요 프레임워크인가요?",
    answer:
      "리액트는 UI를 만들기 위한 자바스크립트 라이브러리이며, 뷰(View) 레이어만 담당합니다.\n\n프레임워크는 애플리케이션의 전체 흐름을 제어하지만, 리액트는 라우팅, 상태 관리 등을 개발자가 직접 선택하여 구성할 수 있습니다.\n\n즉, 제어의 주도권이 개발자에게 있으므로 라이브러리에 해당합니다.",
  },
  {
    id: 2,
    category: "React",
    question: "리액트를 사용하는 이유는 무엇인가요?",
    answer:
      "리액트는 컴포넌트 기반 아키텍처와 효율적인 렌더링 메커니즘을 통해 개발 효율성과 유지보수성을 높여주는 라이브러리입니다.\n\nUI를 재사용 가능한 단위로 분리할 수 있고, Virtual DOM을 통해 효율적인 렌더링을 수행하며, 단방향 데이터 흐름으로 상태 관리를 예측 가능하게 만듭니다.\n\n또한 거대한 생태계와 커뮤니티 지원 덕분에 다양한 서드파티 라이브러리를 활용할 수 있습니다.",
  },
  {
    id: 3,
    category: "React",
    question: "virtual DOM에 대해 알고 있나요?",
    answer:
      "Virtual DOM은 실제 DOM의 가벼운 복사본으로, 메모리 안에 존재하는 자바스크립트 객체입니다. 리액트는 상태나 props가 바뀔 때마다 전체 DOM을 직접 건드리는 대신, 먼저 Virtual DOM 트리를 새로 만들고 이전 트리와 비교(diffing)해서 실제로 달라진 부분만 DOM에 반영합니다.\n\n이 과정을 재조정(reconciliation)이라고 하는데, 덕분에 불필요한 DOM 조작이 줄어들고 렌더링 성능이 좋아집니다. 다만 Virtual DOM이 항상 빠른 건 아닙니다. 변경이 매우 잦거나 단순한 경우엔 오히려 Virtual DOM 비교 비용이 더 생기기도 하지만, 대부분의 일반적인 웹 앱에서는 충분히 효율적인 접근입니다.\n\n리액트 16부터는 Fiber 아키텍처를 도입해서 이 재조정 작업을 잘게 쪼개 비동기적으로 처리할 수 있게 됐고, 덕분에 우선순위가 높은 인터랙션(클릭, 입력 등)을 먼저 처리하는 동시성 기능의 토대가 마련됐습니다.",
  },
  {
    id: 4,
    category: "React",
    question: "리액트의 렌더링에 대해 알고 있나요?",
    answer:
      "리액트의 렌더링은 컴포넌트가 현재 props와 state를 기반으로 UI를 어떻게 구성할지 계산하는 과정입니다.\n\n최초 마운트 시 루트 컴포넌트부터 렌더링이 시작되며, 이후 state 변경, props 변경, 부모 컴포넌트 리렌더링 등의 조건에 의해 리렌더링이 발생합니다.\n\n렌더링 결과물은 Virtual DOM으로 생성되며, 이전 결과와 비교하여 실제 DOM에 최소한의 변경만 적용됩니다.",
  },
  {
    id: 5,
    category: "React",
    question: "리액트 파이버에 대해 알고 있나요?",
    answer:
      "리액트 파이버(Fiber)는 리액트 16에서 도입된 새로운 재조정(reconciliation) 엔진입니다.\n\n기존의 스택 기반 재조정은 동기적으로 실행되어 한 번 시작하면 중단할 수 없었지만, 파이버는 작업을 작은 단위(fiber)로 쪼개어 비동기적으로 처리할 수 있습니다.\n\n이를 통해 우선순위에 따라 작업을 중단, 재개, 폐기할 수 있어 애니메이션이나 사용자 인터랙션 같은 긴급한 작업을 우선 처리할 수 있습니다.",
  },
  {
    id: 6,
    category: "React",
    question: "리액트 파이버 트리란 무엇인가요?",
    answer:
      "리액트 파이버 트리는 current 트리와 workInProgress 트리, 두 개의 트리로 구성됩니다.\n\ncurrent 트리는 현재 화면에 렌더링된 상태를 나타내고, workInProgress 트리는 다음 렌더링에 반영될 변경 사항을 작업하는 트리입니다.\n\n작업이 완료되면 workInProgress 트리가 current 트리가 되는 더블 버퍼링 방식을 사용하여 사용자에게 불완전한 UI가 보이는 것을 방지합니다.",
  },
  {
    id: 7,
    category: "React",
    question: "리액트 파이버와 DOM, Virtual DOM의 관계는 어떻게 되나요?",
    answer:
      "파이버는 Virtual DOM을 구현하는 내부 아키텍처로, 각 리액트 엘리먼트에 대응하는 파이버 노드를 생성하여 트리 구조를 형성합니다.\n\n파이버가 재조정 과정에서 변경 사항을 계산하면 그 결과가 Virtual DOM의 diff로 나타나고, 최종적으로 실제 DOM에 반영됩니다.\n\n즉, 파이버는 Virtual DOM의 재조정을 효율적으로 수행하기 위한 내부 구현체이며, DOM은 최종 렌더링 대상입니다.",
  },
  {
    id: 8,
    category: "React",
    question: "렌더 단계와 커밋 단계에 대해 알고 있나요?",
    answer:
      "렌더 단계와 커밋 단계는 리액트가 변경 사항을 화면에 반영하기 위해 거치는 두 가지 작업 단계입니다.\n\n렌더 단계(Render Phase)는 컴포넌트를 호출하여 Virtual DOM을 생성하고 이전 결과와 비교(diffing)하여 변경 사항을 계산하며, 비동기적으로 수행될 수 있고 부수 효과가 없어야 합니다.\n\n커밋 단계(Commit Phase)는 렌더 단계에서 계산된 변경 사항을 실제 DOM에 반영하는 단계로, 동기적으로 실행되며 useEffect 같은 부수 효과도 이 단계에서 처리됩니다.",
  },
  {
    id: 9,
    category: "React",
    question: "React에서 함수 컴포넌트와 클래스 컴포넌트의 차이는 무엇인가요?",
    answer:
      "두 컴포넌트는 작성 방식과 상태 관리 방식이 다르며, 현재는 함수 컴포넌트가 권장됩니다.\n\n클래스 컴포넌트는 React.Component를 상속받아 render() 메서드로 UI를 반환하며, 라이프사이클 메서드와 this.state를 사용합니다.\n\n함수 컴포넌트는 단순한 자바스크립트 함수로 props를 인자로 받아 JSX를 반환하며, Hooks를 통해 상태 관리와 부수 효과를 처리합니다.\n\n함수 컴포넌트가 더 간결하고 Hooks와의 호환성이 좋아 현재 리액트에서 권장하는 방식입니다.",
  },
  {
    id: 10,
    category: "React",
    question:
      "리액트에서 함수형 컴포넌트라고 부르지 않고 함수 컴포넌트라고 부르는 이유",
    answer:
      "리액트의 함수 컴포넌트는 엄밀한 함수형 프로그래밍의 정의에 부합하지 않기 때문에 '함수형'이 아닌 '함수' 컴포넌트로 부릅니다.\n\n함수형 프로그래밍에서 '함수형(functional)'은 순수 함수, 불변성, 부수 효과 없음 등의 특성을 의미합니다.\n\n하지만 리액트의 함수 컴포넌트는 Hooks를 통해 상태(state)를 관리하고 부수 효과(side effect)를 수행할 수 있으므로 혼동을 피하기 위해 함수(function) 컴포넌트로 부릅니다.",
  },
  {
    id: 11,
    category: "React",
    question: "props와 state의 차이는 무엇인가요?",
    answer:
      "props는 부모 컴포넌트가 자식에게 전달하는 데이터고, state는 컴포넌트가 자기 자신 내부에서 직접 관리하는 데이터입니다. 가장 큰 차이는 '누가 소유하느냐'와 '바꿀 수 있느냐'입니다.\n\nprops는 읽기 전용입니다. 자식 컴포넌트에서 받은 props를 직접 수정하면 안 되고, 변경이 필요하다면 부모에서 상태를 끌어올려 콜백을 통해 바꿔야 합니다. 이렇게 단방향으로만 데이터가 흐르기 때문에 어디서 데이터가 바뀌는지 추적하기 쉽고, 버그가 생겼을 때 원인을 찾기가 훨씬 수월합니다.\n\nstate는 컴포넌트 내부에서 useState 같은 훅으로 관리하며, 값이 바뀌면 리렌더링이 발생해 UI가 갱신됩니다. 사용자 입력이나 비동기 응답처럼 시간에 따라 달라지는 값을 다룰 때 씁니다.\n\n정리하면 props는 '밖에서 받아서 표시하는 것', state는 '스스로 갖고 바꾸는 것'이라고 생각하면 됩니다.",
  },
  {
    id: 12,
    category: "React",
    question:
      "Props가 컴포넌트간에 전달받는 것이라고 했는데 자식에서 부모로도 전달할 수 있는가",
    answer:
      "리액트의 데이터 흐름은 단방향(부모에서 자식)이므로 자식이 직접 부모에게 props를 전달할 수는 없습니다.\n\n하지만 부모가 콜백 함수를 props로 자식에게 전달하고, 자식이 해당 함수를 호출하면서 인자로 데이터를 넘기는 방식으로 간접적으로 부모에게 데이터를 전달할 수 있습니다.\n\n이를 역방향 데이터 흐름(lifting state up) 패턴이라고 합니다.",
  },
  {
    id: 13,
    category: "React",
    question: "FLUX에 대해 알고 있나요?",
    answer:
      "Flux는 Facebook이 제안한 단방향 데이터 흐름 아키텍처 패턴입니다.\n\nAction이 발생하면 Dispatcher가 이를 Store에 전달하고, Store가 상태를 업데이트하면 View가 리렌더링되는 흐름으로 동작합니다.\n\n기존 MVC 패턴에서 모델과 뷰 사이의 양방향 데이터 흐름이 복잡해지는 문제를 해결하기 위해 등장했으며, Redux 등 현대 상태 관리 라이브러리의 기반이 되었습니다.",
  },
  {
    id: 14,
    category: "React",
    question: "리덕스에 대해 알고 있나요?",
    answer:
      "리덕스(Redux)는 자바스크립트 애플리케이션의 전역 상태를 관리하기 위한 라이브러리입니다.\n\n하나의 스토어(Store)에 애플리케이션의 전체 상태를 저장하고, 액션(Action)을 디스패치하여 리듀서(Reducer)를 통해 상태를 업데이트하는 방식으로 동작합니다.\n\nFlux 패턴을 기반으로 하며, 예측 가능한 상태 변화와 강력한 디버깅 도구(Redux DevTools)를 제공합니다.",
  },
  {
    id: 15,
    category: "React",
    question: "리덕스의 기본 원칙은?",
    answer:
      "리덕스는 세 가지 원칙 위에서 동작합니다.\n\n앱의 전체 상태는 하나의 스토어에만 저장합니다(Single Source of Truth). 상태를 바꾸려면 반드시 액션을 디스패치해야 하고, 직접 수정은 불가능합니다. 그리고 리듀서는 이전 상태와 액션을 받아 새 상태를 돌려주는 순수 함수여야 합니다.\n\n이 세 원칙 덕분에 상태 변화를 예측하고 추적하기가 훨씬 쉬워집니다.",
  },
  {
    id: 16,
    category: "React",
    question:
      "React에서 state의 불변성을 유지하라는 말이 있는데 이에 대해 설명해달라",
    answer:
      "불변성을 유지한다는 것은 기존 state 객체를 직접 수정하지 않고 새로운 객체를 생성하여 교체하는 것을 의미합니다.\n\n리액트는 state의 참조값(reference)을 비교하여 변경 여부를 판단하기 때문에, 객체를 직접 변경하면 참조값이 동일하여 리렌더링이 발생하지 않습니다.\n\n따라서 전개 연산자, Object.assign, 배열 메서드(map, filter 등)를 사용해 새로운 객체나 배열을 만들어 상태를 업데이트해야 합니다.",
  },
  {
    id: 17,
    category: "React",
    question:
      "리듀서 내부에서 불변성을 지키는 이유는? 전개 연산자의 단점을 해결할 수 있는 방법은?",
    answer:
      "리듀서에서 불변성을 지켜야 상태 변경을 정확히 추적할 수 있고, 이전 상태와 새로운 상태를 비교하여 효율적인 리렌더링과 시간 여행 디버깅이 가능합니다.\n\n전개 연산자는 얕은 복사만 수행하므로 중첩 객체가 깊어지면 코드가 복잡해지는 단점이 있습니다.\n\n이를 해결하기 위해 Immer 라이브러리를 사용하면 불변성을 직접 관리하지 않아도 마치 객체를 직접 수정하는 것처럼 코드를 작성할 수 있으며, Redux Toolkit은 내부적으로 Immer를 사용합니다.",
  },
  {
    id: 18,
    category: "React",
    question: "리액트 사용 시 부수효과로 인해 생기는 문제점은 무엇인가요?",
    answer:
      "부수효과(side effect)는 컴포넌트 렌더링 외에 발생하는 API 호출, DOM 직접 조작, 타이머 설정 등을 말합니다.\n\n부수효과를 적절히 관리하지 않으면 메모리 누수(cleanup 미처리), 무한 루프(의존성 배열 설정 오류), 경쟁 조건(race condition) 등의 문제가 발생할 수 있습니다.\n\n이를 방지하려면 useEffect의 클린업 함수를 활용하고, 의존성 배열을 정확히 설정하며, 비동기 작업의 취소 처리를 적절히 해야 합니다.",
  },
  {
    id: 19,
    category: "React",
    question: "컴포넌트의 라이프 사이클 메서드에 대해 설명해주세요",
    answer:
      "클래스 컴포넌트의 라이프사이클은 마운트, 업데이트, 언마운트 세 단계로 나뉩니다.\n\n마운트 시에는 constructor, render, componentDidMount가 호출되고, 업데이트 시에는 render, componentDidUpdate가 호출되며, 언마운트 시에는 componentWillUnmount가 호출됩니다.\n\n함수 컴포넌트에서는 useEffect Hook이 이러한 라이프사이클을 대체하며, 의존성 배열과 클린업 함수를 조합하여 동일한 동작을 구현할 수 있습니다.",
  },
  {
    id: 20,
    category: "React",
    question: "useState에 대해 설명해주세요",
    answer:
      "useState는 함수 컴포넌트에서 상태를 선언하고 관리할 수 있게 해주는 Hook입니다.\n\nconst [state, setState] = useState(initialValue) 형태로 사용하며, 현재 상태값과 상태를 업데이트하는 함수를 배열로 반환합니다.\n\nsetState를 호출하면 컴포넌트가 리렌더링되며, 초기값으로 함수를 전달하면 최초 렌더링 시에만 실행되는 지연 초기화(lazy initialization)를 활용할 수 있습니다.",
  },
  {
    id: 21,
    category: "React",
    question: "useEffect에 대해 설명해주세요",
    answer:
      "useEffect는 함수 컴포넌트에서 부수 효과를 수행하기 위한 Hook으로, API 호출, 이벤트 리스너 등록, DOM 조작 등 렌더링 외의 작업을 처리할 때 사용합니다.\n\n두 번째 인자인 의존성 배열에 따라 실행 시점이 달라지며, 빈 배열이면 마운트 시에만, 특정 값을 넣으면 해당 값이 변경될 때마다 실행됩니다.\n\n반환하는 클린업 함수는 컴포넌트 언마운트 시 또는 다음 effect 실행 전에 호출됩니다.",
  },
  {
    id: 22,
    category: "React",
    question: "useReducer에 대해 설명해주세요",
    answer:
      "useReducer는 useState의 대안으로, 복잡한 상태 로직을 리듀서 함수로 관리할 수 있게 해주는 Hook입니다.\n\nconst [state, dispatch] = useReducer(reducer, initialState) 형태로 사용하며, dispatch로 액션을 보내면 리듀서 함수가 현재 상태와 액션을 기반으로 새로운 상태를 반환합니다.\n\n여러 하위 값을 포함하는 복잡한 상태 로직이나 다음 상태가 이전 상태에 의존하는 경우에 useState보다 적합합니다.",
  },
  {
    id: 23,
    category: "React",
    question: "useMemo에 대해 설명해주세요",
    answer:
      "useMemo는 계산 비용이 큰 연산의 결과값을 메모이제이션하여 불필요한 재계산을 방지하는 Hook입니다.\n\nuseMemo(() => expensiveComputation(a, b), [a, b]) 형태로 사용하며, 의존성 배열의 값이 변경될 때만 함수를 다시 실행하여 새로운 값을 계산합니다.\n\n모든 곳에 남용하면 오히려 메모리 사용량이 증가하므로, 실제로 비용이 큰 연산이나 참조 동일성이 중요한 경우에만 사용해야 합니다.",
  },
  {
    id: 24,
    category: "React",
    question: "useCallback에 대해 설명해주세요",
    answer:
      "useCallback은 함수 자체를 메모이제이션하여 불필요한 함수 재생성을 방지하는 Hook입니다.\n\nuseCallback(fn, [deps]) 형태로 사용하며, 의존성 배열의 값이 변경되지 않는 한 동일한 함수 참조를 유지합니다.\n\n주로 자식 컴포넌트에 콜백 함수를 props로 전달할 때 React.memo와 함께 사용하여 불필요한 리렌더링을 방지하는 데 활용됩니다.",
  },
  {
    id: 25,
    category: "React",
    question: "useRef에 대해 설명해주세요",
    answer:
      "useRef는 렌더링 사이에 값을 유지하면서도 변경 시 리렌더링을 발생시키지 않는 가변 참조 객체를 생성하는 Hook입니다.\n\n반환되는 객체의 .current 속성에 값을 저장하며, DOM 요소에 직접 접근하거나 이전 상태값을 기억하는 등의 용도로 사용됩니다.\n\nstate와 달리 값이 변경되어도 리렌더링을 트리거하지 않으므로, 렌더링에 영향을 주지 않는 값을 저장할 때 적합합니다.",
  },
  {
    id: 26,
    category: "React",
    question: "커스텀 Hooks에 대해 설명해주세요",
    answer:
      "커스텀 Hook은 반복되는 상태 로직을 재사용 가능한 함수로 추출한 것으로, 'use'로 시작하는 이름 규칙을 따릅니다.\n\n내부에서 useState, useEffect 등 다른 Hook을 조합하여 특정 기능을 캡슐화할 수 있습니다.\n\n예를 들어 useInput, useFetch, useLocalStorage 등으로 공통 로직을 분리하면 컴포넌트를 간결하게 유지하면서 코드 재사용성을 높일 수 있습니다.",
  },
  {
    id: 27,
    category: "React",
    question: "useMemo와 useCallback의 차이를 알고 있나요?",
    answer:
      "useMemo는 함수의 실행 결과값을 메모이제이션하고, useCallback은 함수 자체를 메모이제이션한다는 점이 핵심 차이입니다.\n\nuseMemo(() => fn(a, b), [a, b])는 fn(a, b)의 반환값을 캐싱합니다.\n\nuseCallback(fn, [deps])는 fn 함수의 참조를 캐싱하며, 실제로 useCallback(fn, deps)는 useMemo(() => fn, deps)와 동일하게 동작합니다.",
  },
  {
    id: 28,
    category: "React",
    question: "리액트에서 setState는 비동기 동작인가요 동기 동작인가요?",
    answer:
      "setState는 비동기적으로 동작합니다.\n\n리액트는 성능 최적화를 위해 여러 setState 호출을 배치(batch)로 모아서 한 번에 처리합니다.\n\n따라서 setState 호출 직후에 변경된 state 값에 바로 접근할 수 없으며, 업데이트된 값을 기반으로 로직을 작성하려면 useEffect를 사용하거나 setState에 콜백 함수 형태(prev => newState)를 전달해야 합니다.",
  },
  {
    id: 29,
    category: "React",
    question: "setState가 비동기 동작을 취했을 때 얻을 수 있는 이점은?",
    answer:
      "여러 setState 호출을 배치(batch)로 모아 한 번에 처리함으로써 불필요한 리렌더링 횟수를 줄여 성능을 최적화할 수 있습니다.\n\n만약 setState가 동기적으로 동작한다면 각 호출마다 리렌더링이 발생하여 성능 저하로 이어질 수 있습니다.\n\n또한 일관된 상태를 보장하여 부모와 자식 컴포넌트가 서로 다른 시점의 상태를 참조하는 문제를 방지합니다.",
  },
  {
    id: 30,
    category: "React",
    question: "useLayoutEffect는 무엇인가요?",
    answer:
      "useLayoutEffect와 useEffect는 사용법이 거의 같지만 실행 타이밍이 다릅니다. useEffect는 브라우저가 화면을 그린 이후 비동기적으로 실행되고, useLayoutEffect는 DOM이 업데이트된 직후, 브라우저가 화면을 그리기 전에 동기적으로 실행됩니다.\n\n이 차이가 중요한 경우는 DOM 크기를 측정하거나 위치를 조정해야 할 때입니다. useEffect를 쓰면 화면이 한 번 그려진 뒤에 레이아웃이 변경되기 때문에 깜빡임(flickering)이 생길 수 있습니다. useLayoutEffect는 그리기 전에 처리하기 때문에 사용자 눈에 보이는 깜빡임 없이 DOM을 조작할 수 있습니다.\n\n단, 동기적으로 실행되기 때문에 무거운 작업을 넣으면 렌더링이 그만큼 블로킹됩니다. 기본적으로는 useEffect를 쓰고, 레이아웃 측정이나 시각적 일관성이 꼭 필요한 경우에만 useLayoutEffect로 바꾸는 것이 좋습니다.",
  },
  {
    id: 31,
    category: "React",
    question: "리액트의 성능개선 방법에 대해서 설명해주세요",
    answer:
      "리액트의 성능 개선은 불필요한 렌더링과 연산을 줄이고 번들 크기를 최적화하는 방향으로 이루어집니다.\n\nReact.memo로 불필요한 리렌더링을 방지하고, useMemo와 useCallback으로 값과 함수를 메모이제이션할 수 있습니다.\n코드 스플리팅(React.lazy, Suspense)을 통해 번들 크기를 줄이고, 리스트 렌더링 시 고유한 key를 부여하여 재조정 성능을 높입니다.\n\n또한 상태를 필요한 컴포넌트 가까이에 배치(state colocation)하고, 가상화(virtualization) 라이브러리를 사용해 대량 데이터 렌더링을 최적화할 수 있습니다.",
  },
  {
    id: 32,
    category: "React",
    question:
      "컴포넌트에서 이벤트를 실행시키기 위해서는 어떻게 핸들링해야 하나요?",
    answer:
      "리액트에서는 JSX 요소에 카멜 케이스(camelCase)로 이벤트 핸들러를 작성합니다.\n\n예를 들어 onClick, onChange, onSubmit 등의 속성에 함수를 전달하며, HTML과 달리 문자열이 아닌 함수 참조를 전달해야 합니다. onClick={handleClick}처럼 함수를 호출하지 않고 참조만 전달합니다.\n\n이벤트 객체는 브라우저 네이티브 이벤트를 래핑한 합성 이벤트(SyntheticEvent)로 전달되어 크로스 브라우저 호환성을 보장합니다.",
  },
  {
    id: 33,
    category: "React",
    question: "SPA가 뭔가요?",
    answer:
      "SPA(Single Page Application)는 하나의 HTML 페이지로 구성되며, 페이지 전환 시 전체 페이지를 다시 로드하지 않고 자바스크립트로 필요한 부분만 동적으로 업데이트하는 웹 애플리케이션입니다.\n\n초기 로딩 시 필요한 리소스를 한 번에 받아온 후, 이후 사용자 인터랙션에 따라 AJAX 등으로 데이터를 받아 화면을 갱신합니다.\n\nReact, Vue, Angular 등의 프레임워크/라이브러리가 SPA 개발에 주로 사용됩니다.",
  },
  {
    id: 34,
    category: "React",
    question: "SPA의 단점은?",
    answer:
      "초기 로딩 시 모든 자바스크립트 번들을 다운로드해야 하므로 첫 페이지 로딩 속도가 느릴 수 있습니다.\n\n자바스크립트로 페이지를 렌더링하기 때문에 검색 엔진 크롤러가 콘텐츠를 제대로 수집하지 못해 SEO에 불리합니다.\n\n또한 브라우저 히스토리 관리를 직접 처리해야 하며, 보안 측면에서 클라이언트에 비즈니스 로직이 노출될 수 있는 단점이 있습니다.",
  },
  {
    id: 35,
    category: "React",
    question: "SSR이 뭔가요?",
    answer:
      "SSR(Server-Side Rendering)은 서버에서 완성된 HTML을 만들어 클라이언트에 내려주는 방식입니다. 브라우저는 받은 HTML을 그대로 파싱해서 화면에 보여주기 때문에, 자바스크립트 번들이 실행되기 전부터 콘텐츠를 볼 수 있습니다.\n\nCSR(SPA)과 비교했을 때 가장 큰 장점은 SEO와 초기 로딩 속도입니다. 검색 엔진 크롤러가 완성된 HTML을 바로 읽을 수 있고, 사용자도 페이지가 더 빨리 나타나는 것처럼 느낍니다. 특히 블로그나 쇼핑몰처럼 콘텐츠 노출이 중요한 서비스에서 효과적입니다.\n\n단점도 있습니다. 전통적인 SSR은 페이지 전환마다 서버에서 전체 HTML을 새로 생성하기 때문에 클라이언트 사이드 라우팅처럼 부드러운 전환이 어렵고, 요청마다 서버에 부하가 생깁니다. 또한 Next.js처럼 SSR과 CSR을 함께 쓰는 구조에서는 하이드레이션 과정이 끝나기 전까지 인터랙션이 불가능해서, 화면이 보이는 시점(TTV)과 실제로 조작 가능한 시점(TTI) 사이에 간격이 생길 수 있습니다.",
  },
  {
    id: 36,
    category: "React",
    question: "SEO가 뭔가요?",
    answer:
      "SEO(Search Engine Optimization)는 검색 엔진 최적화로, 웹사이트가 검색 엔진 결과 페이지에서 높은 순위에 노출되도록 최적화하는 작업입니다.\n\n검색 엔진 크롤러가 웹페이지의 콘텐츠를 수집하고 색인하는 과정에서 HTML 구조, 메타 태그, 콘텐츠 품질 등을 분석합니다.\n\nCSR 기반 SPA는 빈 HTML을 반환하므로 크롤러가 콘텐츠를 인식하기 어려워 SSR이나 SSG를 활용하여 SEO를 개선합니다.",
  },
  {
    id: 37,
    category: "React",
    question: "하이드레이션에 대해 알고 있나요?",
    answer:
      "하이드레이션(Hydration)은 서버에서 렌더링된 정적 HTML에 자바스크립트 이벤트 핸들러와 상태를 연결하여 인터랙티브한 페이지로 만드는 과정입니다.\n\nSSR로 전달된 HTML은 화면에 바로 표시되지만 클릭 등의 상호작용은 불가능한 상태이며, 하이드레이션 과정을 거쳐야 리액트가 관리하는 동적 웹 애플리케이션으로 동작합니다.\n\n리액트에서는 hydrateRoot 메서드를 사용하여 이 과정을 수행합니다.",
  },
  {
    id: 38,
    category: "React",
    question: "Next.js의 렌더링 수행 방식은 어떻게 되나요?",
    answer:
      "Next.js는 SSR(Server-Side Rendering), SSG(Static Site Generation), ISR(Incremental Static Regeneration), CSR(Client-Side Rendering) 등 다양한 렌더링 방식을 지원합니다.\n\nSSR은 매 요청마다 서버에서 HTML을 생성하고, SSG는 빌드 타임에 HTML을 미리 생성하며, ISR은 정적 페이지를 일정 주기로 재생성합니다.\n\nApp Router에서는 기본적으로 서버 컴포넌트(RSC)를 사용하며, 'use client' 지시어로 클라이언트 컴포넌트를 명시적으로 선언합니다.",
  },
  {
    id: 39,
    category: "React",
    question: "Next를 쓴 이유가 있나요?",
    answer:
      "Next.js는 SSR과 SSG를 기본 지원하여 SEO와 초기 로딩 성능을 개선할 수 있습니다.\n\n파일 기반 라우팅, 이미지 최적화, API Routes, 자동 코드 스플리팅 등 프로덕션에 필요한 기능들이 내장되어 있어 별도 설정 없이 바로 사용할 수 있습니다.\n\n또한 서버 컴포넌트, 스트리밍 등 리액트의 최신 기능을 가장 빠르게 활용할 수 있는 프레임워크이기도 합니다.",
  },
  {
    id: 40,
    category: "React",
    question: "Next를 구성하는 기본 설정 파일에 대해서 알고 있나요?",
    answer:
      "next.config.js(또는 next.config.mjs)는 Next.js의 핵심 설정 파일로 리다이렉트, 환경 변수, 이미지 도메인 등을 설정합니다.\n\npages/_app.tsx(또는 app/layout.tsx)는 모든 페이지에 공통으로 적용되는 레이아웃과 전역 상태를 관리합니다.\n\npages/_document.tsx는 HTML 문서 구조를 커스터마이징하며, middleware.ts는 요청 전처리를 수행하고, .env 파일로 환경 변수를 관리합니다.",
  },
  {
    id: 41,
    category: "React",
    question: "사전 렌더링을 위해 사용해 본 함수가 있나요?",
    answer:
      "Next.js의 Pages Router에서는 getStaticProps(SSG용), getStaticPaths(동적 경로 SSG용), getServerSideProps(SSR용)를 사용하여 사전 렌더링을 구현합니다.\n\ngetStaticProps는 빌드 시 데이터를 가져와 정적 페이지를 생성하고, getServerSideProps는 매 요청마다 서버에서 데이터를 가져옵니다.\n\nApp Router에서는 서버 컴포넌트에서 직접 async/await로 데이터를 가져오는 방식으로 사전 렌더링을 수행합니다.",
  },
  {
    id: 42,
    category: "React",
    question: "suspense가 뭔가요?",
    answer:
      "Suspense는 컴포넌트가 렌더링에 필요한 데이터나 코드가 준비될 때까지 로딩 상태를 선언적으로 처리할 수 있게 해주는 리액트의 기능입니다.\n\n<Suspense fallback={<Loading />}>으로 컴포넌트를 감싸면, 내부 컴포넌트가 준비되기 전까지 fallback에 지정한 로딩 UI를 표시합니다.\n\n비동기 작업의 로딩 상태를 컴포넌트 트리 수준에서 관리할 수 있어 코드의 가독성과 사용자 경험을 개선합니다.",
  },
  {
    id: 43,
    category: "React",
    question: "suspense로 가능한 것은 어떤 것들이 있나요?",
    answer:
      "Suspense는 코드 스플리팅, 데이터 페칭 로딩 처리, 스트리밍 SSR 등 다양한 비동기 시나리오에서 활용됩니다.\n\nReact.lazy와 함께 사용하여 컴포넌트 코드 스플리팅 및 지연 로딩을 구현할 수 있고, 서버 컴포넌트에서 데이터 페칭의 로딩 상태를 선언적으로 관리할 수 있습니다.\n\nNext.js에서 스트리밍 SSR을 통해 페이지의 일부분을 먼저 전송하고 나머지를 점진적으로 로드할 수 있으며, 여러 Suspense 경계를 중첩하여 세밀한 로딩 상태 제어가 가능합니다.",
  },
  {
    id: 44,
    category: "React",
    question: "LCP가 뭔가요?",
    answer:
      "LCP(Largest Contentful Paint)는 웹 페이지에서 뷰포트 내 가장 큰 콘텐츠 요소(이미지, 비디오, 텍스트 블록 등)가 렌더링되는 데 걸리는 시간을 측정하는 Core Web Vitals 지표입니다.\n\n사용자가 페이지의 주요 콘텐츠를 볼 수 있는 시점을 나타내며, 좋은 사용자 경험을 위해 2.5초 이내가 권장됩니다.\n\n이미지 최적화, 서버 응답 시간 개선, 렌더링 차단 리소스 제거 등으로 LCP를 개선할 수 있습니다.",
  },
  {
    id: 45,
    category: "React",
    question: "FCP가 뭔가요?",
    answer:
      "FCP(First Contentful Paint)는 페이지 로드 시작부터 화면에 첫 번째 콘텐츠(텍스트, 이미지, SVG 등)가 렌더링되기까지 걸리는 시간을 측정하는 성능 지표입니다.\n\n사용자가 페이지가 로드되고 있음을 인식하는 첫 번째 시점으로, 1.8초 이내가 좋은 수준으로 권장됩니다.\n\nSSR 적용, CSS 최적화, 폰트 로딩 전략 개선 등을 통해 FCP를 단축할 수 있습니다.",
  },
  {
    id: 46,
    category: "React",
    question: "controlled pattern에 대해 알고 있나요?",
    answer:
      "Controlled 패턴은 폼 요소의 값을 리액트 state로 관리하는 방식입니다. input의 value 속성에 state를 바인딩하고, onChange 핸들러에서 setState를 호출해 값을 업데이트합니다.\n\n이렇게 하면 리액트가 폼 데이터의 유일한 진실 공급원(single source of truth)이 됩니다. 입력할 때마다 state가 바뀌고 리렌더링이 발생하기 때문에, 입력값 실시간 검증, 조건부 제출 버튼 활성화, 자동 포맷팅 같은 세밀한 제어가 가능합니다.\n\n대부분의 폼에서 권장되는 방식이지만, 입력마다 리렌더링이 생긴다는 점은 인식하고 있어야 합니다. 성능이 중요한 경우엔 디바운싱이나 Uncontrolled 패턴을 고려해볼 수 있습니다.",
  },
  {
    id: 47,
    category: "React",
    question: "uncontrolled pattern에 대해 알고 있나요?",
    answer:
      'Uncontrolled 패턴은 폼 요소의 값을 DOM 자체가 관리하게 두는 방식입니다. 리액트 state 대신 useRef를 사용해서, 필요한 시점(예: 폼 제출)에 DOM에서 직접 값을 읽어옵니다.\n\n입력마다 setState가 호출되지 않으니 리렌더링이 생기지 않아 성능상 이점이 있습니다. 단순한 폼이거나 파일 입력(input type="file")처럼 리액트로 값을 제어할 필요가 없는 경우에 적합합니다. 초기값은 value 대신 defaultValue 속성으로 설정합니다.\n\n다만 입력값에 따라 즉각적인 검증이나 UI 반응이 필요한 경우엔 Uncontrolled 패턴으로는 구현이 번거롭습니다. 대부분의 폼은 Controlled 패턴이 더 관리하기 쉽고, Uncontrolled 패턴은 성능 최적화가 진짜 필요한 상황이나 서드파티 DOM 라이브러리와 통합할 때 선택합니다.',
  },
  {
    id: 48,
    category: "React",
    question: "React Strict Mode가 뭔가요?",
    answer:
      "Strict Mode는 개발 환경에서만 동작하는 리액트의 진단 도구입니다. <React.StrictMode>로 감싼 컴포넌트 트리에 대해 잠재적인 문제를 미리 찾아내도록 도와줍니다.\n\n가장 눈에 띄는 동작은 특정 함수와 훅을 두 번 실행하는 것입니다. 컴포넌트 함수, useState의 초기화 함수, useReducer의 리듀서 등을 이중으로 호출해서, 두 결과가 같은지 확인합니다. 같다면 순수 함수로 동작한다는 뜻이고, 같지 않다면 부수 효과가 섞여 있다는 신호입니다. 이 이중 실행은 개발 빌드에서만 일어나고 프로덕션 성능에는 영향을 주지 않습니다.\n\n또한 더 이상 권장되지 않는 레거시 라이프사이클 메서드나 오래된 API 사용을 감지해서 콘솔 경고를 띄웁니다. 팀이 최신 리액트 패턴을 따르도록 강제하는 장치이기도 합니다.",
  },
  {
    id: 49,
    category: "React",
    question: "리스트 렌더링에서 index를 key로 쓰면 안 되는 이유가 뭔가요?",
    answer:
      "key는 리액트가 리스트 아이템을 구별해서 재조정(reconciliation)할 때 쓰는 식별자입니다. 리렌더링이 일어날 때 이전 트리와 새 트리를 비교하면서, key가 같은 노드는 업데이트하고 없어진 key는 제거하고 새 key는 추가합니다.\n\nindex를 key로 쓰면 아이템 순서가 바뀌거나 중간에 추가/삭제가 일어날 때 문제가 됩니다. 예를 들어 맨 앞에 아이템을 추가하면 기존 아이템의 index가 전부 1씩 밀립니다. 리액트 입장에서는 key 0번 아이템이 달라진 것이므로 기존 DOM을 재사용하지 못하고 전부 다시 그리거나, 더 나쁜 경우 잘못된 컴포넌트 상태가 유지된 채로 다른 데이터가 보이는 버그가 생깁니다.\n\n실제로 input이나 체크박스처럼 내부 상태를 가지는 컴포넌트를 리스트로 렌더링할 때 index를 key로 쓰면, 순서가 바뀐 뒤에도 이전 상태가 엉뚱한 아이템에 남아있는 현상을 경험할 수 있습니다. 고유한 id나 다른 안정적인 식별자를 key로 쓰는 것이 맞습니다. 순서가 절대 바뀌지 않고 추가/삭제도 없는 단순 표시용 정적 리스트라면 index를 써도 크게 문제가 없긴 합니다.",
  },
  {
    id: 50,
    category: "React",
    question: "Error Boundary가 뭔가요?",
    answer:
      "Error Boundary는 자식 컴포넌트에서 발생한 렌더링 에러를 잡아내서 애플리케이션 전체가 흰 화면으로 죽는 걸 막아주는 컴포넌트입니다. 에러가 발생한 영역만 폴백 UI로 대체하고 나머지는 정상적으로 동작하게 할 수 있습니다.\n\n현재는 클래스 컴포넌트로만 구현할 수 있고, getDerivedStateFromError와 componentDidCatch 두 라이프사이클 메서드를 씁니다. getDerivedStateFromError는 에러가 감지됐을 때 state를 업데이트해서 폴백 UI를 렌더링하도록 하고, componentDidCatch는 에러 정보를 로깅하는 용도로 씁니다.\n\n선언적으로 에러 처리를 표현할 수 있다는 게 장점입니다. 어떤 컴포넌트를 Error Boundary로 감쌀지만 결정하면, '이 영역에서 에러가 나면 이 UI를 보여줘'라는 의도가 JSX 구조만 봐도 명확히 드러납니다. react-error-boundary 라이브러리를 쓰면 함수 컴포넌트처럼 사용할 수 있어서 실무에서는 이쪽을 많이 씁니다.",
  },
  {
    id: 51,
    category: "React",
    question: "React의 동시성 모드(Concurrent Mode)가 뭔가요?",
    answer:
      "동시성 모드는 렌더링 작업을 중단하고 우선순위에 따라 재개할 수 있게 해주는 리액트의 아키텍처 변화입니다. React 18에서 정식으로 도입됐습니다.\n\n기존 리액트는 렌더링을 시작하면 끝낼 때까지 메인 스레드를 점유했습니다. 무거운 렌더링이 진행 중이면 그 사이 사용자 입력이 끊겨 보이는 문제가 있었습니다. 동시성 모드에서는 렌더링 작업을 잘게 쪼개고, 긴급한 인터랙션(예: 입력 필드 타이핑)이 들어오면 진행 중인 렌더링을 잠시 중단하고 먼저 처리한 뒤 다시 이어갑니다.\n\nuseDeferredValue, useTransition, Suspense의 스트리밍 지원 같은 API들이 이 동시성 모델 위에서 동작합니다. 예를 들어 useTransition을 쓰면 검색 결과 업데이트 같은 덜 긴급한 상태 변경을 낮은 우선순위로 처리해서, 입력창이 버벅이지 않게 할 수 있습니다.",
  },
  {
    id: 52,
    category: "React",
    question: "전역 상태 관리 라이브러리는 왜 쓰나요?",
    answer:
      "리액트의 기본 상태 관리는 컴포넌트 로컬 state와 props 전달입니다. 그런데 앱이 커지면 멀리 떨어진 컴포넌트끼리 같은 데이터를 공유해야 하는 상황이 생깁니다. 이걸 props로만 해결하려면 중간에 있는 컴포넌트들이 사용도 않는 데이터를 계속 받아서 내려줘야 하는 props drilling 문제가 생깁니다.\n\nContext API로 어느 정도 해결되지만, Context 값이 바뀌면 해당 Context를 구독하는 모든 컴포넌트가 리렌더링된다는 성능 문제가 있습니다. 전역 상태 관리 라이브러리들은 이 문제를 개선해서, 실제로 필요한 값이 바뀐 컴포넌트만 리렌더링되도록 최적화합니다.\n\nRedux는 예측 가능한 단방향 흐름과 강력한 DevTools가 장점이고, Zustand나 Jotai처럼 더 가벼운 라이브러리들은 보일러플레이트를 줄이고 간단하게 전역 상태를 다룰 수 있게 해줍니다. 어떤 라이브러리를 쓸지는 앱의 복잡도와 팀 컨벤션에 따라 선택하면 됩니다.",
  },
  {
    id: 53,
    category: "React",
    question: "useState를 조건문 안에서 쓰면 안 되는 이유가 뭔가요?",
    answer:
      "리액트는 훅을 호출 순서로 구별합니다. 컴포넌트가 렌더링될 때마다 훅들이 항상 같은 순서로 호출되어야 리액트가 이전 렌더링의 상태값을 올바르게 매핑할 수 있습니다.\n\n조건문 안에 훅을 넣으면 조건에 따라 그 훅이 실행되거나 건너뛰게 됩니다. 예를 들어 첫 렌더링에서 훅이 A, B, C 순서로 호출됐는데, 다음 렌더링에서 조건이 바뀌어 B가 건너뛰어지면 C가 두 번째 자리에 들어가게 됩니다. 리액트는 여전히 두 번째 슬롯에 B의 상태가 있다고 기대하고 있어서 완전히 엉뚱한 값이 반환됩니다.\n\n이것이 Hooks의 규칙 중 하나인 '최상위에서만 훅을 호출하라'는 규칙의 이유입니다. 반복문이나 중첩 함수 안에서도 마찬가지입니다. 조건에 따라 다른 동작이 필요하다면 훅 자체를 조건문 밖에 두고, 훅 내부에서 조건 처리를 하거나 반환값을 조건에 따라 다르게 활용해야 합니다.",
  },
  {
    id: 54,
    category: "React",
    question: "useRef와 let 변수의 차이가 뭔가요?",
    answer:
      "가장 큰 차이는 리렌더링 시 동작입니다. 함수 컴포넌트 안에서 let으로 선언한 변수는 렌더링할 때마다 새로 초기화됩니다. 반면 useRef로 만든 값은 .current에 저장되며, 리렌더링되어도 이전 값이 그대로 유지됩니다.\n\nuseRef는 또한 값이 바뀌어도 리렌더링을 유발하지 않습니다. useState처럼 화면 갱신이 필요하지 않지만 값을 기억해야 할 때, 예를 들어 setTimeout ID나 이전 렌더링의 값을 저장할 때 씁니다. DOM 요소에 직접 접근할 때도 ref를 씁니다.\n\n컴포넌트 외부에서 let을 선언하면 리렌더링의 영향은 안 받지만, 같은 컴포넌트를 여러 인스턴스로 사용할 때 모든 인스턴스가 변수를 공유하게 되는 문제가 있습니다. 이건 의도치 않은 버그로 이어지기 쉬워서 권장하지 않습니다. 인스턴스별로 독립적인 값을 유지하면서 리렌더링을 피하고 싶다면 useRef가 맞습니다.",
  },
  {
    id: 55,
    category: "React",
    question: "React의 Batching Update가 뭔가요?",
    answer:
      "Batching은 여러 state 업데이트를 하나의 리렌더링으로 묶어서 처리하는 최적화 기법입니다. setState를 여러 번 호출해도 매번 리렌더링하는 대신, 한 번에 모아서 처리합니다.\n\nReact 17까지는 배칭이 리액트 이벤트 핸들러 안에서만 동작했습니다. setTimeout, Promise, 네이티브 이벤트 핸들러 안에서의 setState는 배칭되지 않아서 setState 호출마다 개별 리렌더링이 발생했습니다.\n\nReact 18에서 자동 배칭(Automatic Batching)이 도입되면서 이제 Promise, setTimeout, 네이티브 이벤트 등 모든 컨텍스트에서도 배칭이 적용됩니다. 별도로 설정할 필요 없이 자동으로 동작해서 불필요한 리렌더링을 줄일 수 있습니다. 만약 특정 state 업데이트를 즉시 처리해야 한다면 flushSync를 쓰면 배칭을 우회할 수 있습니다.",
  },
  {
    id: 56,
    category: "React",
    question: "Error Boundary가 비동기 에러를 잡지 못하는 이유가 뭔가요?",
    answer:
      "Error Boundary는 렌더링 중에 발생하는 동기적 에러만 잡습니다. React의 렌더링 콜 스택 안에서 throw된 에러여야 포착할 수 있습니다.\n\nPromise나 setTimeout 안에서 발생하는 에러는 렌더링 콜 스택이 이미 완전히 비워진 뒤 실행됩니다. 그 시점에는 Error Boundary가 감시하는 동기적 렌더링 흐름이 끝났기 때문에 에러가 전파될 경로 자체가 없습니다.\n\n비동기 에러를 처리하려면 보통 try-catch로 직접 잡아서 state로 관리하거나, setState를 활용해 에러를 동기적 에러로 전환해서 Error Boundary가 감지하게 만드는 방법을 씁니다. TanStack Query 같은 라이브러리는 이런 패턴을 내부적으로 처리해주기도 합니다.",
  },
  {
    id: 57,
    category: "React",
    question: "낙관적 업데이트(Optimistic Update)가 뭔가요?",
    answer:
      "낙관적 업데이트는 서버 응답을 기다리지 않고 UI를 먼저 업데이트하는 패턴입니다. 요청이 성공할 거라고 낙관적으로 가정하고 화면을 바로 바꿔주기 때문에 사용자 입장에서 인터랙션이 즉각적으로 느껴집니다.\n\n예를 들어 좋아요 버튼을 누르면, 서버 응답이 오기 전에 하트 아이콘을 먼저 채웁니다. 서버 요청이 성공하면 그대로 유지하고, 실패하면 원래 상태로 되돌립니다(rollback). 이 되돌리기 로직이 낙관적 업데이트 구현의 핵심입니다.\n\nTanStack Query에서는 useMutation의 onMutate 콜백에서 캐시를 미리 업데이트하고, onError에서 이전 데이터를 복원하는 방식으로 구현합니다. 성공 확률이 높고 실패 시 롤백이 자연스러운 기능에 적용하면 체감 성능을 크게 높일 수 있습니다.",
  },
  {
    id: 58,
    category: "React",
    question: "Tanstack Query를 사용하는 이유가 뭔가요?",
    answer:
      "TanStack Query는 서버 상태(server state) 관리를 전담하는 라이브러리입니다. 서버에서 가져오는 데이터는 비동기로 받아야 하고, 캐싱이 필요하고, 오래되면 새로 불러와야 하는데, 이걸 useState + useEffect로만 처리하면 코드가 금세 복잡해집니다.\n\nTanStack Query를 쓰면 데이터 페칭, 캐싱, 리패칭, 로딩/에러 상태 관리를 간결하게 선언할 수 있습니다. useQuery 하나로 서버 데이터를 가져오면서 캐시도 자동으로 관리되고, 같은 키로 여러 컴포넌트에서 요청해도 중복 요청이 발생하지 않습니다.\n\n한계도 있습니다. staleTime, gcTime 같은 캐시 전략 옵션을 잘못 설정하면 오래된 데이터가 보이거나 불필요한 요청이 생깁니다. 또 클라이언트 상태와 서버 상태 사이에 복잡한 의존성이 있을 경우엔 TanStack Query만으로 부족해서 Zustand나 Redux와 함께 쓰기도 합니다.",
  },
  {
    id: 59,
    category: "React",
    question: "서버 컴포넌트(React Server Component)가 뭔가요?",
    answer:
      "서버 컴포넌트(RSC)는 서버에서만 렌더링되는 컴포넌트입니다. React 18부터 도입됐고 Next.js App Router에서 기본값입니다.\n\n서버에서 렌더링되기 때문에 컴포넌트 안에서 직접 데이터베이스를 조회하거나 API를 호출해도 됩니다. 자바스크립트 번들에 포함되지 않으니 클라이언트로 내려가는 JS 크기가 줄어들고, DB 연결 정보나 API 키 같은 민감한 정보도 서버에만 머뭅니다.\n\n클라이언트 컴포넌트와 함께 사용하는 게 핵심입니다. onClick이나 useState처럼 브라우저에서 실행돼야 하는 코드는 'use client' 지시어가 붙은 클라이언트 컴포넌트에 넣고, 데이터 페칭이나 정적 렌더링은 서버 컴포넌트에 둡니다. 서버 컴포넌트는 실시간 인터랙션이 필요한 부분에는 적합하지 않고, 데이터 중심의 정적인 UI를 렌더링할 때 잘 맞습니다.",
  },
  {
    id: 60,
    category: "React",
    question: "Streaming SSR이 뭔가요?",
    answer:
      "전통적인 SSR은 서버에서 페이지 전체 HTML을 완성한 뒤 한 번에 클라이언트로 보냅니다. 데이터가 느린 API에 의존하면 그 응답이 올 때까지 아무것도 못 보내는 문제가 있습니다.\n\nStreaming SSR은 HTML을 청크 단위로 쪼개서 준비되는 부분부터 순서대로 전송합니다. 사용자는 전체 페이지가 완성되기 전에 헤더나 레이아웃처럼 빠르게 준비되는 부분을 먼저 볼 수 있고, 느린 데이터가 필요한 부분은 나중에 채워집니다.\n\nReact의 Suspense와 잘 맞습니다. Suspense로 감싼 영역은 스트리밍에서 자연스럽게 나중에 전송되고, 데이터가 준비되면 해당 부분이 클라이언트로 스트리밍돼 교체됩니다. Next.js App Router에서 loading.tsx 파일이나 Suspense를 활용하면 이 패턴을 쉽게 쓸 수 있고, FCP와 TTFB 개선에 효과적입니다.",
  },
  {
    id: 61,
    category: "React",
    question: "Server Action이 뭔가요?",
    answer:
      "Server Action은 서버에서 실행되는 비동기 함수를 클라이언트 코드에서 직접 호출할 수 있게 해주는 Next.js의 기능입니다. 'use server' 지시어를 붙여서 정의합니다.\n\n가장 큰 장점은 별도의 API 라우트 없이 서버 로직을 직접 실행할 수 있다는 점입니다. 폼의 action 속성에 Server Action 함수를 전달하거나, 버튼 onClick에서 호출하면 됩니다. 데이터베이스 접근이나 파일 처리 같은 로직이 클라이언트 번들에 포함되지 않으니 보안도 좋아집니다.\n\nHTTP 요청/응답 구조를 직접 다루지 않아도 되니 코드가 간결해지고, 자바스크립트가 아직 로드되지 않은 상태에서도 HTML form을 통해 서버와 통신할 수 있는 점진적 향상(progressive enhancement)도 지원합니다. 다만 Server Action 자체가 암묵적인 API 엔드포인트처럼 동작하기 때문에, 입력값 검증과 인증 처리를 꼼꼼히 해야 합니다.",
  },
  {
    id: 62,
    category: "React",
    question: "BFF(Backend For Frontend)가 뭔가요?",
    answer:
      "BFF는 프론트엔드를 위한 전용 중간 서버입니다. 클라이언트가 여러 백엔드 API를 직접 호출하는 대신, BFF가 그 사이에서 데이터를 모아서 가공해 클라이언트에 맞는 형태로 내려줍니다.\n\nMSA(마이크로서비스 아키텍처) 환경에서 특히 유용합니다. 화면 하나를 그리기 위해 여러 서비스의 API를 각각 호출해야 한다면 클라이언트가 복잡해지고 요청도 많아집니다. BFF에서 이 요청들을 한 번에 모아 처리하고 필요한 데이터만 골라서 내려주면 클라이언트 코드가 훨씬 단순해집니다.\n\n플랫폼별 최적화도 됩니다. 웹과 모바일, 스마트TV처럼 서로 다른 클라이언트가 요구하는 데이터 형태가 다를 때, 각 플랫폼에 맞는 BFF를 두면 클라이언트마다 딱 필요한 데이터만 받을 수 있습니다. 추가로 API 키 관리, CORS 처리, 인증 같은 공통 관심사도 BFF에서 처리할 수 있습니다.",
  },
  {
    id: 63,
    category: "React",
    question: "next/Image를 기본 img 태그 대신 쓰는 이유가 뭔가요?",
    answer:
      "next/image 컴포넌트는 이미지 최적화를 자동으로 처리해줍니다. 개발자가 별도 작업 없이도 여러 성능 개선 효과를 얻을 수 있습니다.\n\n우선 브라우저 환경에 맞는 최적 포맷과 크기를 자동으로 제공합니다. WebP를 지원하는 브라우저엔 WebP로, 요청된 화면 크기에 맞는 리사이즈된 이미지를 서빙합니다. 기본 img 태그로는 이걸 직접 구현하거나 Cloudinary 같은 외부 서비스를 써야 합니다.\n\nplaceholder 속성으로 이미지가 로딩되는 동안 흐릿한 대체 이미지(blur)를 보여줄 수 있어 시각적 일관성을 유지합니다. 또한 기본적으로 lazy loading이 적용돼서 뷰포트에 들어올 때만 이미지를 로드하고, 초기 로딩 속도와 네트워크 사용량을 아낄 수 있습니다.\n\n단점도 있습니다. 외부 도메인 이미지를 쓰려면 next.config.js에 해당 도메인을 허용 목록에 추가해야 하고, 이미지 최적화가 서버 사이드에서 이뤄지기 때문에 자체 서버가 없는 정적 배포 환경에서는 제약이 생깁니다.",
  },
  {
    id: 64,
    category: "React",
    question: "Next.js의 캐싱 기능에는 어떤 게 있나요?",
    answer:
      "Next.js는 성능 최적화를 위해 네 가지 캐싱 레이어를 제공합니다.\n\nRequest Memoization은 단일 렌더링 사이클 안에서 동일한 fetch 요청이 여러 번 호출될 때 중복 요청을 막습니다. 여러 컴포넌트에서 같은 데이터를 요청해도 실제 네트워크 요청은 한 번만 일어납니다. Data Cache는 fetch 응답을 Next.js 서버에 저장합니다. force-cache, revalidate, no-store 옵션으로 캐시 전략을 세밀하게 조정할 수 있고, revalidate를 설정하면 ISR처럼 일정 주기마다 데이터를 갱신합니다.\n\nFull Route Cache는 빌드 시 정적으로 생성된 페이지 전체를 서버에 캐싱합니다. 동일 요청이 오면 페이지를 다시 생성하지 않고 캐시된 결과를 바로 제공합니다. Client Router Cache는 브라우저에서 이미 방문한 라우트의 RSC 페이로드를 저장해서, 뒤로 가기나 같은 레이아웃을 공유하는 페이지로 이동할 때 서버 요청 없이 빠르게 전환할 수 있게 합니다.",
  },
  {
    id: 65,
    category: "React",
    question: "클라이언트 사이드 라우팅은 어떻게 동작하나요?",
    answer:
      "클라이언트 사이드 라우팅은 페이지를 전환할 때 서버에서 새 HTML을 받아오지 않고, 현재 앱 안에서 필요한 컴포넌트만 교체하는 방식입니다.\n\n핵심은 History API입니다. 링크를 클릭하면 브라우저 기본 동작(서버 요청)을 막고, window.history.pushState()를 호출해서 URL만 바꿉니다. 그러면 라우터가 현재 URL을 보고 매핑된 컴포넌트를 찾아 렌더링합니다. 전체 페이지 새로고침 없이 URL이 바뀌고 화면이 업데이트되는 것처럼 보입니다.\n\n데이터가 필요한 경우엔 컴포넌트 안에서 useEffect나 서버 컴포넌트의 fetch로 필요한 데이터만 요청합니다. 전체 HTML이 아니라 데이터만 받으니 전환이 훨씬 빠릅니다. 브라우저의 뒤로 가기/앞으로 가기는 popstate 이벤트를 통해 감지하고, 라우터가 해당 URL에 맞는 컴포넌트를 다시 렌더링합니다.",
  },
  {
    id: 66,
    category: "React",
    question: "PPR(Progressive Partial Rendering)이 뭔가요?",
    answer:
      "PPR은 Next.js에서 실험적으로 도입한 렌더링 최적화 기법으로, 한 페이지 안에서 정적인 부분과 동적인 부분을 분리해서 처리합니다. 페이지 전체를 한 번에 기다리지 않고, 빠르게 렌더링 가능한 영역을 먼저 내려보내고 느린 동적 부분은 나중에 스트리밍으로 채웁니다.\n\n기존 SSR에서는 페이지 안에 느린 동적 데이터가 하나라도 있으면 전체 HTML 완성이 그만큼 늦어졌습니다. PPR은 정적으로 확정되는 레이아웃이나 공통 영역은 빌드 타임에 미리 만들어두고, Suspense 경계 안의 동적 콘텐츠만 스트리밍으로 나중에 전달합니다.\n\n결과적으로 FCP는 빠르면서 동시에 동적 데이터도 제공하는 구조를 만들 수 있습니다. SSG의 속도와 SSR의 동적 기능을 한 페이지에서 모두 취하는 방식입니다. Next.js 15에서 experimental 플래그로 사용할 수 있습니다.",
  },
];
