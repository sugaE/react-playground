/*
* https://leetcode-cn.com/problems/split-array-largest-sum/
* */

const inputs = [
  [[7, 2, 5, 10, 8], 2], // 18 ; 其中最好的方式是将其分为[7,2,5] 和 [10,8]，
  // [[999, 999, 999], 4], // 0
  // [[999, 999, 999], 3], // 0
  // [[999, 999, 999], 2], // 999
];

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
let splitArray = function(nums, m) {
  // 计算「子数组各自的和的最大值」的上下界
  let sum = nums.reduce((x, y) => x + y, 0);
  let maxN = Math.max(...nums);

  // 使用「二分查找」确定一个恰当的「子数组各自的和的最大值」，
  // 使得它对应的「子数组的分割数」恰好等于 m
  let left = maxN;
  let right = sum;
  // console.log('splitArray', left, right);
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let splits = split(nums, mid);
    console.log('sss', left, right, 'mid', mid, 's', splits);
    if (splits > m) {
      // 如果分割数太多，说明「子数组各自的和的最大值」太小，此时需要将「子数组各自的和的最大值」调大
      // 下一轮搜索的区间是 [mid + 1, right]
      left = mid + 1; // ⚠️这个地方+1，否则会无限循环；因为mid是不满足条件的，所以不需要再考虑mid
    } else {
      // 下一轮搜索的区间是上一轮的反面区间[left, mid];
      right = mid;
    }
  }

  return left;
};

/**
 * @param {number[]} nums
 * @param {number} max
 * @return {number}
 */
function split(nums, max) {
  // console.log('split', nums, max);
  let splits = 1; // 至少是一个分割!
  let sum = 0;

  nums.forEach((n, i) => {
    if (sum + n <= max) {
      sum += n;
    } else {
      splits++;
      sum = n;
    }
  });

  return splits;
}

function solution(n) {
  return splitArray(...n);
}

export default {inputs, solution};
