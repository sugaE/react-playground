/*
*
* */

const inputs = [
  [[34, 23, 1, 24, 75, 33, 54, 8], 60, 58],
  // [[10, 20, 30], 15, -1],
];

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
let twoSumLessThanK = function(A, K) {
  let sorted = A.filter((v) => v < K).sort((a, b) => a - b);
  let max = -1;
  let left = 0, right = sorted.length - 1;
  while (left < right) {
    let cur = sorted[left] + sorted[right];
    if (cur < K) {
      (max = Math.max(cur, max));
      left++;
    } else {
      right--;
    }
  }

  return max;
};

function solution(n) {
  console.log(...n);
  return twoSumLessThanK(...n);
}

export default {inputs, solution};
