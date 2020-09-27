/*
*
* */

const inputs = [
  [
    '#71c986',
    '#77cc88',
  ], // true
  [
    '#09f166',
  ],
];
/**
 * @param {string} color
 * @return {string}
 */
let similarRGB = function(color) {
  let res = '#';
  for (let i = 0; i < 3; i++) {
    let first = color[2 * i + 1];
    let second = color[2 * (i + 1)];

    let fnum = parseInt(first, 16);
    let snum = parseInt(second, 16);

    let abs = Math.abs(parseInt(first + second, 16) - parseInt(first + first, 16));
    if (abs > 8) {
      first = Number(parseInt(first, 16) + (fnum < snum ? 1 : -1)).toString(16);
    }

    res += first + first;
  }

  return res;
};
function solution(n) {
  console.log(...n);
  return similarRGB(...n);
}

export default {inputs, solution};
