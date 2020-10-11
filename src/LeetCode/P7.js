/*
*
* */
const inputs = [
  [123, 321], // 2
  // ['cbbd', 'bb'], // 2
  // ['a', ''], // 2
  // ['ac', 'a'], // 2
  // ['bb', 'bb'], // 2

];
/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
  // 2**31
  // -2147483648  ~  2147483647
  let y = 0;
  let left = x;
  //  取整
  while (left !== 0) {
    let adds = left % 10;

    let absy = Math.abs(y);
    if (absy > 214748364 || (absy === 214748364 && (adds > 7 || adds < -8))) {
      return 0;
    }
    // console.log('y', y, 'adds', adds, 'left:', left);
    y = y * 10 + adds;
    left = ~~(left / 10);
  }
  return y;
};
function solution(n) {
  console.log(...n);
  return reverse(...n);
}

export default {inputs, solution};
