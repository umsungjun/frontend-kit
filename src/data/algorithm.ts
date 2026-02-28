import type { Flashcard } from "@/types/flashcard";

export const algorithm: Flashcard[] = [
  {
    id: 1,
    category: "알고리즘",
    question: "Frequency Counters 패턴이란?",
    answer:
      "Frequency Counters는 객체나 Set을 사용하여 값의 빈도를 수집하는 패턴입니다. 두 배열이나 문자열을 비교할 때 중첩 반복문(O(n²)) 대신 각각을 한 번씩 순회하며 빈도를 기록하여 O(n) 시간 복잡도로 문제를 해결합니다. 아나그램 검사, 배열 요소 비교 등에 자주 활용됩니다.",
  },
  {
    id: 2,
    category: "알고리즘",
    question: "Multiple Pointers 패턴이란?",
    answer:
      "Multiple Pointers는 정렬된 배열이나 문자열에서 두 개 이상의 포인터를 사용하여 특정 조건을 만족하는 쌍이나 값을 찾는 패턴입니다. 보통 양쪽 끝에서 시작하여 중앙으로 이동하거나, 같은 방향으로 서로 다른 속도로 이동합니다. 중첩 반복문 없이 O(n) 시간 복잡도로 문제를 해결할 수 있습니다.",
  },
  {
    id: 3,
    category: "알고리즘",
    question: "Sliding Window 패턴이란?",
    answer:
      "Sliding Window는 배열이나 문자열에서 연속된 부분집합을 추적할 때 사용하는 패턴입니다. 고정 크기 또는 가변 크기의 윈도우를 이동시키며, 새로 들어오는 요소를 추가하고 빠지는 요소를 제거하는 방식으로 동작합니다. 매번 전체를 재계산하지 않아 O(n) 시간 복잡도로 최대합, 최장 부분 문자열 등의 문제를 효율적으로 풀 수 있습니다.",
  },
  {
    id: 4,
    category: "알고리즘",
    question: "Divide and Conquer란?",
    answer:
      "Divide and Conquer(분할 정복)는 큰 문제를 작은 하위 문제로 분할하고, 각각을 재귀적으로 해결한 뒤 결과를 합쳐 원래 문제를 해결하는 전략입니다. 대표적으로 Merge Sort, Quick Sort, Binary Search가 이 패턴을 사용합니다. 문제의 크기를 매번 절반으로 줄여 O(n log n) 또는 O(log n)의 효율적인 시간 복잡도를 달성합니다.",
  },
  {
    id: 5,
    category: "알고리즘",
    question: "Recursion(재귀)이란?",
    answer:
      "재귀란 함수가 자기 자신을 호출하여 문제를 해결하는 기법입니다. 반드시 종료 조건(base case)이 있어야 무한 호출을 방지할 수 있으며, 매 호출마다 입력이 종료 조건에 가까워져야 합니다. 호출 스택(call stack)을 사용하므로 너무 깊은 재귀는 스택 오버플로우를 일으킬 수 있습니다.",
  },
  {
    id: 6,
    category: "알고리즘",
    question: "Linear Search란?",
    answer:
      "Linear Search(선형 탐색)는 배열의 처음부터 끝까지 하나씩 순차적으로 확인하며 목표 값을 찾는 가장 단순한 탐색 알고리즘입니다. 정렬되지 않은 데이터에서도 사용할 수 있지만, 시간 복잡도가 O(n)이므로 데이터가 클수록 비효율적입니다. JavaScript의 indexOf, includes, find 등의 메서드가 내부적으로 선형 탐색을 수행합니다.",
  },
  {
    id: 7,
    category: "알고리즘",
    question: "Naive String Search란?",
    answer:
      "Naive String Search(단순 문자열 검색)는 긴 문자열에서 짧은 패턴 문자열이 몇 번 등장하는지 찾는 가장 기본적인 방법입니다. 긴 문자열의 각 위치에서 패턴의 모든 문자를 하나씩 비교하며, 불일치가 발생하면 다음 위치로 이동합니다. 시간 복잡도는 최악의 경우 O(n * m)이며, KMP 같은 고급 알고리즘으로 개선할 수 있습니다.",
  },
  {
    id: 8,
    category: "알고리즘",
    question: "Binary Search란?",
    answer:
      "Binary Search(이진 탐색)는 정렬된 배열에서 목표 값을 찾는 효율적인 알고리즘입니다. 배열의 중간 요소와 목표를 비교하여, 목표가 더 작으면 왼쪽 절반을, 더 크면 오른쪽 절반을 탐색합니다. 매 단계마다 탐색 범위가 절반으로 줄어 시간 복잡도가 O(log n)이지만, 반드시 정렬된 데이터에서만 사용할 수 있습니다.",
  },
  {
    id: 9,
    category: "알고리즘",
    question: "Bubble Sort란?",
    answer:
      "Bubble Sort(버블 정렬)는 인접한 두 요소를 반복적으로 비교하여 큰 값을 배열 끝으로 보내는 정렬 알고리즘입니다. 한 번의 순회가 끝날 때마다 가장 큰 값이 맨 뒤에 정렬되며, 이 과정을 반복합니다. 평균 및 최악 시간 복잡도가 O(n²)으로 비효율적이지만, 구현이 매우 단순하고 거의 정렬된 데이터에서는 조기 종료 최적화가 가능합니다.",
  },
  {
    id: 10,
    category: "알고리즘",
    question: "Selection Sort란?",
    answer:
      "Selection Sort(선택 정렬)는 배열에서 최솟값을 찾아 맨 앞의 정렬되지 않은 위치와 교환하는 과정을 반복하는 정렬 알고리즘입니다. 매 반복마다 하나의 요소가 올바른 위치에 확정됩니다. 시간 복잡도는 항상 O(n²)이지만, 교환(swap) 횟수가 적어 메모리 쓰기 비용이 높은 환경에서는 Bubble Sort보다 유리할 수 있습니다.",
  },
  {
    id: 11,
    category: "알고리즘",
    question: "Insertion Sort란?",
    answer:
      "Insertion Sort(삽입 정렬)는 배열을 정렬된 부분과 정렬되지 않은 부분으로 나누고, 정렬되지 않은 요소를 하나씩 정렬된 부분의 올바른 위치에 삽입하는 알고리즘입니다. 평균 및 최악 시간 복잡도는 O(n²)이지만, 거의 정렬된 데이터에서는 O(n)에 가까운 성능을 보입니다. 데이터가 실시간으로 들어오는 온라인 정렬 상황에 적합합니다.",
  },
  {
    id: 12,
    category: "알고리즘",
    question: "Merge Sort란?",
    answer:
      "Merge Sort(병합 정렬)는 분할 정복 전략을 사용하여 배열을 절반씩 분할한 뒤, 각각을 재귀적으로 정렬하고 합치는 알고리즘입니다. 항상 O(n log n)의 안정적인 시간 복잡도를 보장하며, 정렬 순서가 유지되는 안정 정렬(stable sort)입니다. 다만 병합 과정에서 추가 메모리 O(n)이 필요하다는 단점이 있습니다.",
  },
  {
    id: 13,
    category: "알고리즘",
    question: "Quick Sort란?",
    answer:
      "Quick Sort(퀵 정렬)는 피벗(pivot) 요소를 선택하고, 피벗보다 작은 값은 왼쪽, 큰 값은 오른쪽으로 분할한 뒤 각각을 재귀적으로 정렬하는 알고리즘입니다. 평균 시간 복잡도는 O(n log n)이며 제자리 정렬(in-place)이 가능합니다. 최악의 경우(이미 정렬된 배열에서 첫 요소를 피벗으로 선택) O(n²)이 될 수 있으므로, 피벗 선택 전략이 중요합니다.",
  },
  {
    id: 14,
    category: "알고리즘",
    question: "Single Linked List란?",
    answer:
      "Single Linked List(단일 연결 리스트)는 각 노드가 데이터와 다음 노드를 가리키는 포인터(next)를 가진 선형 자료구조입니다. 배열과 달리 인덱스가 없어 접근에 O(n)이 걸리지만, 맨 앞에 삽입/삭제하는 연산은 O(1)로 빠릅니다. head에서 시작하여 한 방향으로만 순회할 수 있으며, 동적으로 크기가 변하는 데이터에 적합합니다.",
  },
  {
    id: 15,
    category: "알고리즘",
    question: "Double Linked List란?",
    answer:
      "Double Linked List(이중 연결 리스트)는 각 노드가 이전 노드(prev)와 다음 노드(next) 두 개의 포인터를 가진 자료구조입니다. 양방향 순회가 가능하여 특정 노드에서 앞뒤로 이동할 수 있고, 뒤에서부터 탐색이 가능하므로 탐색 시간을 절반으로 줄일 수 있습니다. 단일 연결 리스트보다 메모리를 더 사용하지만, 삭제 연산 등에서 더 유연합니다.",
  },
  {
    id: 16,
    category: "알고리즘",
    question: "Stack이란? (알고리즘 관점)",
    answer:
      "Stack(스택)은 후입선출(LIFO, Last In First Out) 원칙을 따르는 자료구조입니다. 가장 마지막에 추가된 요소가 가장 먼저 제거되며, push(삽입)와 pop(제거) 연산이 모두 O(1)입니다. 함수 호출 스택, 실행 취소(Undo) 기능, 괄호 유효성 검사, DFS 구현 등에 활용됩니다.",
  },
  {
    id: 17,
    category: "알고리즘",
    question: "Queue란? (알고리즘 관점)",
    answer:
      "Queue(큐)는 선입선출(FIFO, First In First Out) 원칙을 따르는 자료구조입니다. 가장 먼저 추가된 요소가 가장 먼저 제거되며, enqueue(삽입)와 dequeue(제거) 연산이 모두 O(1)입니다. BFS(너비 우선 탐색), 작업 스케줄링, 프린터 대기열 등 순서가 중요한 처리에 활용됩니다.",
  },
  {
    id: 18,
    category: "알고리즘",
    question: "Binary Search Tree란?",
    answer:
      "Binary Search Tree(이진 탐색 트리)는 각 노드가 최대 두 개의 자식을 가지며, 왼쪽 자식은 부모보다 작고 오른쪽 자식은 부모보다 큰 값을 저장하는 자료구조입니다. 이 규칙 덕분에 탐색, 삽입, 삭제의 평균 시간 복잡도가 O(log n)입니다. 그러나 편향 트리(한쪽으로 치우친 트리)가 되면 O(n)으로 성능이 저하될 수 있어, AVL 트리나 레드-블랙 트리 같은 균형 트리로 개선합니다.",
  },
  {
    id: 19,
    category: "알고리즘",
    question: "Breadth First Search(BFS)란?",
    answer:
      "BFS(너비 우선 탐색)는 시작 노드에서 가까운 노드부터 단계별로 탐색하는 그래프/트리 순회 알고리즘입니다. 큐(Queue)를 사용하여 같은 깊이의 모든 노드를 방문한 후 다음 깊이로 넘어갑니다. 최단 경로 탐색에 적합하며, 시간 복잡도는 O(V + E)(V: 정점 수, E: 간선 수)입니다.",
  },
  {
    id: 20,
    category: "알고리즘",
    question: "Depth First Search(DFS)란?",
    answer:
      "DFS(깊이 우선 탐색)는 시작 노드에서 한 방향으로 최대한 깊이 탐색한 후, 더 이상 갈 수 없으면 되돌아와 다른 경로를 탐색하는 알고리즘입니다. 스택(Stack) 또는 재귀를 사용하며, 전위(Pre-order), 중위(In-order), 후위(Post-order) 순회 방식이 있습니다. 시간 복잡도는 O(V + E)이며, 경로 탐색이나 미로 문제 등에 활용됩니다.",
  },
  {
    id: 21,
    category: "알고리즘",
    question: "Binary Heap이란?",
    answer:
      "Binary Heap(이진 힙)은 완전 이진 트리 형태의 자료구조로, 최대 힙(Max Heap)에서는 부모가 자식보다 항상 크고, 최소 힙(Min Heap)에서는 부모가 자식보다 항상 작습니다. 삽입과 삭제 연산이 O(log n)이며, 최댓값 또는 최솟값 조회는 O(1)입니다. 배열로 효율적으로 구현할 수 있으며, 우선순위 큐와 힙 정렬의 기반이 됩니다.",
  },
  {
    id: 22,
    category: "알고리즘",
    question: "Priority Queue란?",
    answer:
      "Priority Queue(우선순위 큐)는 각 요소에 우선순위가 부여되어, 우선순위가 높은 요소가 먼저 처리되는 자료구조입니다. 일반적으로 Binary Heap을 사용하여 구현하며, 삽입과 추출 연산이 O(log n)입니다. 다익스트라 알고리즘, 작업 스케줄링, 허프만 코딩 등 우선순위 기반 처리가 필요한 곳에 널리 사용됩니다.",
  },
  {
    id: 23,
    category: "알고리즘",
    question: "Hash Table이란?",
    answer:
      "Hash Table(해시 테이블)은 키를 해시 함수를 통해 인덱스로 변환하여 값을 저장하는 자료구조입니다. 평균적으로 삽입, 삭제, 조회가 O(1)로 매우 빠릅니다. 서로 다른 키가 같은 인덱스를 가리키는 해시 충돌이 발생할 수 있으며, 이를 체이닝(Chaining)이나 개방 주소법(Open Addressing)으로 해결합니다.",
  },
  {
    id: 24,
    category: "알고리즘",
    question: "Graph란?",
    answer:
      "Graph(그래프)는 정점(Vertex)과 간선(Edge)으로 구성된 비선형 자료구조로, 데이터 간의 관계를 표현합니다. 방향 그래프와 무방향 그래프, 가중치 그래프와 비가중치 그래프로 분류됩니다. 인접 행렬(Adjacency Matrix)이나 인접 리스트(Adjacency List)로 구현하며, SNS 관계, 지도 경로, 네트워크 구조 등 다양한 현실 문제를 모델링하는 데 사용됩니다.",
  },
  {
    id: 25,
    category: "알고리즘",
    question: "Dijkstra 알고리즘이란?",
    answer:
      "Dijkstra(다익스트라) 알고리즘은 가중치가 있는 그래프에서 하나의 시작 정점으로부터 다른 모든 정점까지의 최단 경로를 구하는 알고리즘입니다. 우선순위 큐를 사용하여 현재까지 가장 짧은 거리의 정점을 선택하고, 인접 정점의 거리를 갱신하는 방식으로 동작합니다. 음수 가중치가 없는 그래프에서만 정확하며, 내비게이션, 네트워크 라우팅 등에 활용됩니다.",
  },
  {
    id: 26,
    category: "알고리즘",
    question: "Dynamic Programming이란?",
    answer:
      "Dynamic Programming(동적 프로그래밍)은 복잡한 문제를 겹치는 하위 문제(Overlapping Subproblems)로 나누고, 각 하위 문제의 결과를 저장(메모이제이션)하여 중복 계산을 방지하는 최적화 기법입니다. 최적 부분 구조(Optimal Substructure)를 가진 문제에 적용할 수 있습니다. 하향식(Top-down, 메모이제이션)과 상향식(Bottom-up, 타뷸레이션) 두 가지 접근법이 있으며, 피보나치 수열, 배낭 문제, 최장 공통 부분 수열 등에 활용됩니다.",
  },
];
