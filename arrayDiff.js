// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list `a`, which are present in list `b` keeping their order

// 이 kata의 목표는 한 목록에서 다른 목록을 빼고 결과를 반환하는 차이 함수를 구현하는 것입니다.
// 순서를 유지하면서 목록 b에 있는 모든 값을 목록에서 제거해야 합니다.

// ex)

// `arrayDiff([1,2],[1]) == [2]`

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}
