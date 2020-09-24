/*
* https://leetcode-cn.com/problems/read-n-characters-given-read4/
* */

const inputs = [
  // [['practice', 'makes', 'perfect', 'coding', 'makes'], 'coding', 'practice'], // 3
  // [['a', 'c', 'b', 'b', 'a'], 'a', 'b'], // 1
  [['a', 'b', 'c', 'd', 'd'], 'a', 'd'], // 3
];

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let shortestDistance = function(words, word1, word2) {
  let pos1 = -1;
  let pos2 = -1;
  let min = words.length;
  words.forEach((v, i) => {
    if (v === word1) pos1 = i;
    if (v === word2) pos2 = i;
    if (pos1 >= 0 && pos2 >= 0) {
      min = Math.min(min, Math.abs(pos2 - pos1));
    }
  });
  return min;
};

function solution(n) {
  return shortestDistance(...n);
}

export default {inputs, solution};
