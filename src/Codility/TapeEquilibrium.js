// Q: https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
// A: https://app.codility.com/demo/results/training8T9RZX-YD5/

const inputs = [
  [3, 1, 2, 4, 3], // 1
  [2, 1], // 1
  [-1000, 1000],
];

// 空间复杂度&时间复杂度 n
function solution(a) {
  let sum = a.reduce((x, y) => x + y, 0);
  let diff = Infinity;
  for (let i = 0; i < a.length - 1; i++) {
    sum -= a[i] * 2;
    diff = Math.min(Math.abs(sum), diff);
  }
  return diff;
}

export default {inputs, solution};
