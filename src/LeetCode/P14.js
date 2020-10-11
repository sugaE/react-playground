/*
*
* */
const inputs = [
  ['fl', 'flddf', 'flasdf'], // fl

];
/**
 * 时间复杂度O(m+nlogn)；nlogn是排序；m是遍历字符串
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
  if (strs.length < 1) return '';
  // 找到最短字符串的长度，最长前缀不会比这个再长了
  let len = Math.min(...strs.map((v) => v.length));
  // 对数组排序
  strs = strs.sort();
  let i = 0;
  for (;i < len; i++) {
    // 因为排过序，所以只需要比较第一个和最后一个的对应字母是不是相等
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      break;
    }
  }
  return strs[0].substring(0, i);
};

function solution(n) {
  console.log(...n);
  return longestCommonPrefix(...n);
}

export default {inputs, solution};
