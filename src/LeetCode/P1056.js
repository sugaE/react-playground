/*
*
* */

const inputs = [
  [
    25,
  ], // true
  [
    11,
  ],
  [160],
];
/**
 * 如 0, 1, 6, 8, 9 旋转 180° 以后，得到了新的数字 0, 1, 9, 8, 6 。
 * @param {number} N
 * @return {boolean}
 */
let confusingNumber = function(N) {
  let numMap = new Map([['0', 0], ['1', 1], ['6', 9], ['8', 8], ['9', 6]]);
  let rev = Number(N.toString().split('').reverse().map((v) => (numMap.get(v)) + '')
    .join(''));

  return !isNaN(rev) && rev !== N;
};
function solution(n) {
  console.log(...n);
  return confusingNumber(...n);
}

export default {inputs, solution};
