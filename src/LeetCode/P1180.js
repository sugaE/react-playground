/*
*
* */

const inputs = [
  // [[1, 2, 3, 4, 5],
  //   1,
  //   3,
  //   3], // 0
  ['aaaba', 8], // 3

];
/**
 * @param {string} S
 * @return {number}
 */
let countLetters = function(S) {
  let reg = new RegExp(/(\w)\1*/, 'ig');
  let res = null;
  let count = 0;
  while (res = reg.exec(S)) {
    // console.log(res);
    count += (res[0].length + 1) * res[0].length / 2;
  }
  return count;
};

function solution(n) {
  console.log(...n);
  return countLetters(...n);
}

export default {inputs, solution};
