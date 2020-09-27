/*
* https://leetcode-cn.com/problems/ip-to-cidr/
* */

const inputs = [

  ['255.0.0.7',
    10,
    ['255.0.0.7/32', '255.0.0.8/29', '255.0.0.16/32'], // results
  ],

  ['0.0.0.0',
    2], // ["0.0.0.0/31"]

];
/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
const getTrailingZeroCount = (ip) => {
  const base2 = ip.split('.').map((i) => parseInt(i).toString(2).padStart(8, '0')).join('');
  let zeroCount = 0;
  for (let i = base2.length - 1; i >= 0; i--) {
    if (base2[i] === '0') {
      zeroCount++;
    } else {
      break;
    }
  }
  return zeroCount;
};

const getNextIp = (cur, offset) => {
  let [a, b, c, d] = cur.split('.').map(Number);
  d += offset;
  if (d >= 256) {
    c += Math.floor(d / 256);
    d %= 256;
  }
  if (c >= 256) {
    b += Math.floor(c / 256);
    c %= 256;
  }
  if (b >= 256) {
    a += Math.floor(b / 256);
    b %= 256;
  }
  return [a, b, c, d].join('.');
};

/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
let ipToCIDR = function(ip, n) {
  console.log(ip, n);
  let offset = 0;
  const ans = [];
  let cur = ip;
  while (n > 0) {
    let zeroCount = getTrailingZeroCount(cur);
    while (n < Math.pow(2, zeroCount)) {
      zeroCount--;
    }
    ans.push(cur + '/' + (32 - zeroCount));
    offset = Math.pow(2, zeroCount);
    n -= offset;
    cur = getNextIp(cur, offset);
  }
  return ans;
};

function solution(n) {
  return ipToCIDR(...n);
}

export default {inputs, solution};
