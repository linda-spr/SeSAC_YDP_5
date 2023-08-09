// math2 module
// 자주 사용할 함수와 변수를 정의한 파일

const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;

// case1. 객체로 감싸서 내보내기
// module.exports = {
//   add: add,
//   PI: PI,
//   E: E,
// };

// case2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.E = E;

// case2를 더 간단히!
exports.add = add;
exports.PI = PI;
exports.E = E;
