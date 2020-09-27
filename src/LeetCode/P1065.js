/*
*
* */

const inputs = [
  ['thestoryofleetcodeandme', ['story', 'fleet', 'leetcode'], [[3, 7], [9, 13], [10, 17]]],
  //   输入: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
  // 输出: [[3,7],[9,13],[10,17]]
  ['ababa', ['aba', 'ab'], [[0, 1], [0, 2], [2, 3], [2, 4]]],

  //   输入: text = "ababa", words = ["aba","ab"]
  // 输出: [[0,1],[0,2],[2,3],[2,4]]

];
/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
let indexPairs = function(text, words) {
  let arr = [];

  arr = (words.reduce((x, word) => {
    let next = -1;// text.indexOf(word);
    while ((next = text.indexOf(word, next + 1)) > -1) {
      x.push([next, next + word.length - 1]);
    }
    return x;
  }, arr));

  arr = arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return arr;
};

function solution(n) {
  console.log(...n);
  return indexPairs(...n);
}

export default {inputs, solution};
