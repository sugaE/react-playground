/*
*
* */

const inputs = [
  // [[1, 2, 3, 4, 5],
  //   1,
  //   3,
  //   3], // 0
  ['257'], // 9
  // [[15, 13, 12]], /// 14

];
/**
 * @param {string} num
 * @return {string}
 */
let toHexspeak = function(num) {
  let hex = Number(num).toString(16);
  let res = hex.replaceAll('0', 'O').replaceAll('1', 'I');
  console.log(res);
  if (/\d/.test(res)) {
    return 'ERROR';
  }
  return res.toUpperCase();
};

function solution(n) {
  console.log(...n);
  return toHexspeak(...n);
}

export default {inputs, solution};
