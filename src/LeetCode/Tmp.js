/*
*
* */

const inputs = [
  [
    '255.0.0.7', 10,
    // 输入：ip = "255.0.0.7", n = 10
    // 输出：["255.0.0.7/32","255.0.0.8/29","255.0.0.16/32"]
  ], // true
];
/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
let ipToCIDR = function(ip, n) {
  console.log(ip, n);
};
function solution(n) {
  return ipToCIDR(...n);
}

export default {inputs, solution};
