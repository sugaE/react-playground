/*
* https://leetcode-cn.com/problems/paint-house/
* */

const inputs = [
  [[[17, 2, 17], [16, 16, 5], [14, 3, 19]]], // 10
  [[]], // 0
];
/**
 * @param {number[][]} costs
 * @return {number}
 */
let minCost = function(costs) {
  let minCostMap = [[0, 0, 0]];// 第n个房子刷三个颜色最小cost

  for (let i = 1; i < costs.length + 1; i++) {
    minCostMap[i] = [];
    let last = minCostMap[i - 1];
    for (let j = 0; j < 3; j++) {
      let lasttmp = last.filter((v, ind) => ind !== j);
      // console.log(i, j, lasttmp);
      minCostMap[i][j] = costs[i - 1][j] + Math.min(...lasttmp);
    }

    // minCostMap[i] = [   // 红,  // 黄, // 蓝 // ];
  }
  return Math.min(...(minCostMap[minCostMap.length - 1]));
};

function solution(n) {
  return minCost(...n);
}

export default {inputs, solution};
