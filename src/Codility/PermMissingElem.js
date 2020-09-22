// Q: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
// A: https://app.codility.com/demo/results/training9R6W62-67S/

const inputs = [
  [2, 3, 1, 5], // 4
  [2, 4, 1, 5], // 4
  [3, 4, 1, 5], // 2
  [], // 1
  [1], // 2
  [2],
];

// function solution(n) {
//   return solution1(n);
// }

// 空间复杂度&时间复杂度 n
function solution(a) {
  let n = a.length + 1;
  return ((1 + n) * n) / 2 - a.reduce((x, y) => x + y, 0);
}
// function solution4(a) {
//   let n = a.length;
//   let arr = a.sort();
//   for (let i = 0; i < n + 1; i++) {
//     if (!arr[i] || arr[i] !== i + 1) {
//       return i + 1;
//     }
//   }
//   return 1;
// }
// function solution3(a) {
//   // if (!a.length) {
//   //   return 1;
//   // }
//   if (a.length < 2) {
//     return 3 - (a[0] || 2);
//   }
//   let arr = a.sort();
//   let len = arr.length;
//
//   // let min = arr[0];
//   return solution2(arr, 0, len - 1);
// }
//
// function solution2(arr, min, max) {
//   let half = Math.floor((max - min) / 2 + min);
//
//   if (arr[half + 1] - arr[half] > 1) {
//     return arr[half] + 1;
//   }
//   if (arr[half + min] === min + half + 1) {
//     return solution2(arr, min + half + 1, max);
//   }
//   return solution2(arr, min, half);
// }

export default {inputs, solution};
