/*
* https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
* */

const inputs = [
  ['abcabcbb'], // 3
  ['bbbbb'], // 1
  ['pwwkew'], // 3
  ['abcdefg'], // 7
  ['dvdf'], // 3
  ['abba'], // 2
];

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  // let res=Array.from({length:s.length})
  let max = 0;
  let map = new Map();
  // console.log('\n');
  let lastd = -1;
  for (let i = 0; i < s.length; i++) {
    let lasti = map.get(s[i]);
    if (lasti === undefined) {
      lasti = -1;
    } else {
      lastd = Math.max(lastd, lasti);
    }
    // i = lasti;
    // lastd = lasti < 0 ? lastd : i;
    max = Math.max(max, i - lastd);
    map.set(s[i], i);
    // console.log(map, lasti, lastd, max);
  }

  return max;
};

function solution(n) {
  return lengthOfLongestSubstring(...n);
}

export default {inputs, solution};
