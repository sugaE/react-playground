/*
*
* */

const inputs = [
  ['babad', 'bab'], // 2
  ['cbbd', 'bb'], // 2
  ['a', ''], // 2
  ['ac', 'a'], // 2
  ['bb', 'bb'], // 2

];
/**
 * @param {string} s
 * @return {string}
 *
 */
let longestPalindrome = function(s) {
  if (!s || s.length < 1) {
    return '';
  }
  // s左右两边和每个字符中间增加#
  // 如 aba => #a#b#a#； b => #b#;
  // 插入的字符可以是任意字符，只起占位作用，这样不用0.5计算，更好理解
  let ssharp = '#' + s.split('').join('#') + '#';

  // 回文字符重复的部分的长度，即回文串一半的长度
  // 如 aba，maxlen=1；aaaa，maxlen=2；a，maxlen=0
  let maxlen = 0;

  // maxlen最大可能的长度
  let max = Math.floor(ssharp.length / 2);

  // 最长对称中心的起始值，因为前面有#，所以是从1开始；
  // 因为单个字符是最少的对称中心
  let mid = 1;

  for (let i = 1; i <= ssharp.length - 2; i++) {
    // 如果i是偶数，说明i是插入的字符#，所以实际上应该是偶数中心，所以左右两边从+1开始扩散
    // 如果i是奇数，说明i是原始字符串里的字符，所以实际上应该是奇数中心，所以左右两边从+2开始扩散，中间的+1一定是#所以一定相等
    let right = i + 1 + (i % 2);
    // 两种情况步长都应该为2
    for (; right <= Math.min(ssharp.length - 1, 2 * i); right += 2) {
      // 最左端和最右端以i为中心对称
      let left = 2 * i - right;
      // 直至两端不相等
      if (ssharp[left] !== ssharp[right]) {
        break;
      }
    }
    // 不管是因为不相等break循环，还是超出条件结束循环，
    // right现在都是满足条件+2的状态，所以-2恢复前一个满足条件的状态
    right -= 2;

    // 取最大的maxlen
    if (maxlen < right - i) {
      mid = i;
      maxlen = right - i;
    }

    // 如果当前找到了满足条件的最大长度的回文，后续就不需要再做循环
    if (maxlen === max) break;
  }

  return s.substr((mid - maxlen - 1) / 2, maxlen + 1);
};
function solution(n) {
  console.log(...n);
  return longestPalindrome(...n);
}

export default {inputs, solution};
