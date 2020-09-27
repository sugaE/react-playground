/*
*
* */

const inputs = [
  [[34, 23, 1, 24, 75, 33, 54, 8], 0],
];
/**
 * @param {number[]} A
 * @return {number}
 */
let sumOfDigits = function(A) {
  return 1 - `${Math.min(...A)}`.split('').reduce((x, y) => x += (Number(y)), 0) % 2;
};
function solution(n) {
  console.log(...n);
  return sumOfDigits(...n);
}

export default {inputs, solution};
