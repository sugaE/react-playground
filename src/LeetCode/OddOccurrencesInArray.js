// Q: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// A: https://app.codility.com/demo/results/training3MNFFF-V65/

const inputs = [
  [9, 3, 9, 3, 9, 7, 9], // 7
  // [0, 0, 0], /// [0, 0, 0]
  // [1, 2, 3, 4], // [1, 2, 3, 4]
  // [1, 2, 3, 4], // [1, 2, 3, 4]
  [42],
  [1000000000, 1000000000, 1],
  [2, 2, 3, 3, 4], // 4
];

// 空间复杂度&时间复杂度 n
// =>
function solution(n) {
  let arr = n.sort();
  let odd;

  for (let i = 0; i < arr.length; i++) {
    if (odd === arr[i]) {
      odd = undefined;
    } else if (odd === undefined) {
      odd = arr[i];
    } else {
      return odd;
    }
  }

  return arr[arr.length - 1];
}

export default {inputs, solution};
