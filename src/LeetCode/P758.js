/*
*
* */

const inputs = [
  [
    // ['ab', 'bc'], 'aabcd', 'a<b>abc</b>d',
    // ['ab', 'bc', 'bcd'], 'aabcdecab', 'a<b>abc</b>d',
    ['ccb', 'b', 'd', 'cba', 'dc'],
    'eeaadadadc', 'eeaa<b>d</b>a<b>d</b>a<b>dc</b>',
    // 例如，给定 words = ["ab", "bc"] 和 S = "aabcd"，需要返回 "a<b>abc</b>d"。注意返回 "a<b>a<b>b</b>c</b>d" 会使用更多的标签，因此是错误的。

  ], // true
];
/**
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
let boldWords = function(words, S) {
  // flag 不能加g，加了g可能不会匹配第一个遇到的模式
  let reg = new RegExp('(' + words.sort((a, b) => b.length - a.length).join('|') + ')+', 'i');
  let res = null;
  let boldStartIndex = -1;
  let boldEndIndex = -1;
  let i = 0;

  while (res = reg.exec(S.substring(i))) {
    let ind = i + res.index;
    if (ind > boldEndIndex) {
      if (boldEndIndex > 0) {
        S = replaceStr(S, boldStartIndex, boldEndIndex);
        i += 7; ind += 7;
      }
      boldStartIndex = ind;
    } else {
      boldStartIndex = Math.min(boldStartIndex, ind);
    }
    boldEndIndex = Math.max(boldEndIndex, ind + res[0].length);

    // 下一个开始搜索的位置；如果匹配到abc，那下次从bc开始搜索
    i += res.index + 1;
  }

  // 匹配的最后一个没有在while里来得及做替换，因为最后一个之后res=null
  if (boldEndIndex > 0) {
    S = replaceStr(S, boldStartIndex, boldEndIndex);
  }
  return S;
};

function replaceStr(S, boldStartIndex, boldEndIndex) {
  return S.substring(0, boldStartIndex) + '<b>' + S.substring(boldStartIndex, boldEndIndex) + '</b>' + S.substring(boldEndIndex);
}

function solution(n) {
  return boldWords(...n);
}

export default {inputs, solution};
