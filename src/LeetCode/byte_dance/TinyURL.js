// TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.
//
// 要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。

const inputs = [
  'https://leetcode.com/problems/design-tinyurl', // 3
  // [[999, 999, 999], 4], // 0
  // [[999, 999, 999], 3], // 0
  // [[999, 999, 999], 2], // 999
];

const charMap = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const ratio = charMap.length;

function convert(arrStr) {
  console.log(arrStr);

  let arr = getBaseLog(1, 1);

  return arr;
}

// logxy
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let encode = function(longUrl) {
  // let arr = [];
  // let a = 'a'.charCodeAt(); // 97
  // for (let i = 0; i < longUrl.length; i++) {
  //   let char = longUrl[i];
  //   let ascii = char.charCodeAt();
  //   arr.push(ascii - a);
  // }
  // let min = Math.min(...arr);
  // let arrMin = arr.map((v) => v - min);
  // console.log(arr, arrMin, ratio, min);
  //
  // let arrStr = arrMin.reduce((x, y) => x + ('0' + y).substr(-2), min + '');
  //
  // return convert(arrStr);
  let str = encodeURIComponent(Buffer.from(longUrl).toString('base64'));
  return str;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
let decode = function(shortUrl) {
  // 解密
  let str = decodeURIComponent(Buffer.from(shortUrl, 'base64').toString()); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 0, 0]
  return str;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
function solution(n) {
  return decode(encode(n));
}

export default {inputs, solution};
