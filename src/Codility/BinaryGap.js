// https://app.codility.com/demo/results/trainingP3M4J6-SGW/

const inputs = [
  // 1,
  9, // 2
  // 32, // 0
  // 1041, // 5
  // 2147483647, 2,147,483,647
  // 1162, // 3
  66561, // 9
];

// 空间复杂度&时间复杂度
// function solution(n) {
//   let bi = n.toString(2);
//   let newbi = bi.substring(bi.indexOf('1'), bi.lastIndexOf('1') + 1);
//
//   let max = newbi.split('1').reduce((x, y) => {
//     return Math.max(x, y.length);
//   }, 0);
//
//   return max;
// }

// 空间复杂度&时间复杂度 n
function solution(n) {
  let bi = n.toString(2);
  let max = 0;
  let cur = -1;

  for (let i = 0; i < bi.length; i++) {
    if (bi[i] === '1') {
      if (!(cur < 0)) {
        max = Math.max(cur, max);
      }
      cur = 0;
    } else if (!(cur < 0)) {
      cur++;
    }
  }

  return max;
}

export default {inputs, solution};
