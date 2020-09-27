/*
*
* */

const inputs = [
  [[-10, -5, 0, 3, 7]], // 3
  [[0, 2, 5, 8, 17]], // 0
  [[-10, -5, 3, 4, 7, 9]], // -1
  [[-10, -5, -2, 0, 4, 5, 6, 7, 8, 9, 10, 12]], // 4
  [[]],
];
/**
 * @param {number[]} A
 * @return {number}
 */
let fixedPoint = function(A) {
  let left = 0, right = A.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid <= A[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right === A[right] ? right : -1;
};
function solution(n) {
  console.log(...n);
  return fixedPoint(...n);
}

export default {inputs, solution};
