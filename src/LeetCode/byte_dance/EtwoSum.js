/*
* https://leetcode-cn.com/problems/two-sum/
* */

const inputs = [
  [[2, 7, 11, 15], 9], // [0,1]
  [[3, 2, 4], 6], // [1,2]
  [[3, 3], 6], // [0,1]
];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  // for (let i = 0; i < nums.length; i++) {
  //   let x = nums.indexOf(target - nums[i], i + 1);
  //   if (x > -1) return [i, x];
  // }
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x = map.get(target - nums[i]);
    if (x !== undefined) {
      return [x, i];
    }
    map.set(nums[i], i);
  }

  return [];
};

function solution(n) {
  return twoSum(...n);
}

export default {inputs, solution};
