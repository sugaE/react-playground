// https://app.codility.com/demo/results/trainingP8DHMC-NDW/

const inputs = [
  [[3, 8, 9, 7, 6], 3], // [9, 7, 6, 3, 8].
  [[0, 0, 0], 1], /// [0, 0, 0]
  [[1, 2, 3, 4], 4], // [1, 2, 3, 4]
  [[1, 2, 3, 4], 10], // [1, 2, 3, 4]
];

function outter(n) {
  return solution(...n);
}

// 空间复杂度&时间复杂度 n
// =>
function solution(arr, n) {
  let newn = n % arr.length;
  let end = arr.splice(arr.length - newn);
  return end.concat(arr);
}

export default {inputs, solution: outter};
