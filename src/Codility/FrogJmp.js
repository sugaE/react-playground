// Q: https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
// A: https://app.codility.com/demo/results/trainingPSKVTN-SV7/

const inputs = [
  [10, 85, 30], // 3
];

function solution(n) {
  return solution1(...n);
}

// 空间复杂度&时间复杂度 n
// =>
function solution1(x, y, d) {
  return Math.ceil((y - x) / d);
}

export default {inputs, solution};
