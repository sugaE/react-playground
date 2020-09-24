/*
* https://leetcode-cn.com/problems/task-scheduler/solution/yong-shi-he-nei-cun-xiao-hao-du-zai-85zuo-you-de-j/
* */
// 给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。
//
// 然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
//
// 你需要计算完成所有任务所需要的最短时间。
//
//
//
// 示例 ：
//
// 输入：tasks = ["A","A","A","B","B","B"], n = 2
// 输出：8
// 解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
//      在本示例中，两个相同类型任务之间必须间隔长度为 n = 2 的冷却时间，而执行一个任务只需要一个单位时间，所以中间出现了（待命）状态。
//
//
// 提示：
//
// 任务的总个数为 [1, 10000]。
// n 的取值范围为 [0, 100]。
const inputs = [
  [['A', 'A', 'A', 'B', 'B', 'B'], 2], // 8
  [['A', 'A', 'C', 'B', 'B', 'B', 'D'], 2], // 7
  [['A', 'A', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'D', 'E'], 2], // 16
  [['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2], // 12
  [['G', 'C', 'A', 'H', 'A', 'G', 'G', 'F', 'G', 'J', 'H', 'C', 'A', 'G', 'E', 'A', 'H', 'E', 'F', 'D', 'B', 'D', 'H', 'H', 'E', 'G', 'F', 'B', 'C', 'G', 'F', 'H', 'J', 'F', 'A', 'C', 'G', 'D', 'I', 'J', 'A', 'G', 'D', 'F', 'B', 'F', 'H', 'I', 'G', 'J', 'G', 'H', 'F', 'E', 'H', 'J', 'C', 'E', 'H', 'F', 'C', 'E', 'F', 'H', 'H', 'I', 'G', 'A', 'G', 'D', 'C', 'B', 'I', 'D', 'B', 'C', 'J', 'I', 'B', 'G', 'C', 'H', 'D', 'I', 'A', 'B', 'A', 'J', 'C', 'E', 'B', 'F', 'B', 'J', 'J', 'D', 'D', 'H', 'I', 'I', 'B', 'A', 'E', 'H', 'J', 'J', 'A', 'J', 'E', 'H', 'G', 'B', 'F', 'C', 'H', 'C', 'B', 'J', 'B', 'A', 'H', 'B', 'D', 'I', 'F', 'A', 'E', 'J', 'H', 'C', 'E', 'G', 'F', 'G', 'B', 'G', 'C', 'G', 'A', 'H', 'E', 'F', 'H', 'F', 'C', 'G', 'B', 'I', 'E', 'B', 'J', 'D', 'B', 'B', 'G', 'C', 'A', 'J', 'B', 'J', 'J', 'F', 'J', 'C', 'A', 'G', 'J', 'E', 'G', 'J', 'C', 'D', 'D', 'A', 'I', 'A', 'J', 'F', 'H', 'J', 'D', 'D', 'D', 'C', 'E', 'D', 'D', 'F', 'B', 'A', 'J', 'D', 'I', 'H', 'B', 'A', 'F', 'E', 'B', 'J', 'A', 'H', 'D', 'E', 'I', 'B', 'H', 'C', 'C', 'C', 'G', 'C', 'B', 'E', 'A', 'G', 'H', 'H', 'A', 'I', 'A', 'B', 'A', 'D', 'A', 'I', 'E', 'C', 'C', 'D', 'A', 'B', 'H', 'D', 'E', 'C', 'A', 'H', 'B', 'I', 'A', 'B', 'E', 'H', 'C', 'B', 'A', 'D', 'H', 'E', 'J', 'B', 'J', 'A', 'B', 'G', 'J', 'J', 'F', 'F', 'H', 'I', 'A', 'H', 'F', 'C', 'H', 'D', 'H', 'C', 'C', 'E', 'I', 'G', 'J', 'H', 'D', 'E', 'I', 'J', 'C', 'C', 'H', 'J', 'C', 'G', 'I', 'E', 'D', 'E', 'H', 'J', 'A', 'H', 'D', 'A', 'B', 'F', 'I', 'F', 'J', 'J', 'H', 'D', 'I', 'C', 'G', 'J', 'C', 'C', 'D', 'B', 'E', 'B', 'E', 'B', 'G', 'B', 'A', 'C', 'F', 'E', 'H', 'B', 'D', 'C', 'H', 'F', 'A', 'I', 'A', 'E', 'J', 'F', 'A', 'E', 'B', 'I', 'G', 'H', 'D', 'B', 'F', 'D', 'B', 'I', 'B', 'E', 'D', 'I', 'D', 'F', 'A', 'E', 'H', 'B', 'I', 'G', 'F', 'D', 'E', 'B', 'E', 'C', 'C', 'C', 'J', 'J', 'C', 'H', 'I', 'B', 'H', 'F', 'H', 'F', 'D', 'J', 'D', 'D', 'H', 'H', 'C', 'D', 'A', 'J', 'D', 'F', 'D', 'G', 'B', 'I', 'F', 'J', 'J', 'C', 'C', 'I', 'F', 'G', 'F', 'C', 'E', 'G', 'E', 'F', 'D', 'A', 'I', 'I', 'H', 'G', 'H', 'H', 'A', 'J', 'D', 'J', 'G', 'F', 'G', 'E', 'E', 'A', 'H', 'B', 'G', 'A', 'J', 'J', 'E', 'I', 'H', 'A', 'G', 'E', 'C', 'D', 'I', 'B', 'E', 'A', 'G', 'A', 'C', 'E', 'B', 'J', 'C', 'B', 'A', 'D', 'J', 'E', 'J', 'I', 'F', 'F', 'C', 'B', 'I', 'H', 'C', 'F', 'B', 'C', 'G', 'D', 'A', 'A', 'B', 'F', 'C', 'D', 'B', 'I', 'I', 'H', 'H', 'J', 'A', 'F', 'J', 'F', 'J', 'F', 'H', 'G', 'F', 'D', 'J', 'G', 'I', 'E', 'B', 'C', 'G', 'I', 'F', 'F', 'J', 'H', 'H', 'G', 'A', 'A', 'J', 'C', 'G', 'F', 'B', 'A', 'A', 'E', 'E', 'A', 'E', 'I', 'G', 'F', 'D', 'B', 'I', 'F', 'A', 'B', 'J', 'F', 'F', 'J', 'B', 'F', 'J', 'F', 'J', 'F', 'I', 'E', 'J', 'H', 'D', 'G', 'G', 'D', 'F', 'G', 'B', 'J', 'F', 'J', 'A', 'J', 'E', 'G', 'H', 'I', 'E', 'G', 'D', 'I', 'B', 'D', 'J', 'A', 'A', 'G', 'A', 'I', 'I', 'A', 'A', 'I', 'I', 'H', 'E', 'C', 'A', 'G', 'I', 'F', 'F', 'C', 'D', 'J', 'J', 'I', 'A', 'A', 'F', 'C', 'J', 'G', 'C', 'C', 'H', 'E', 'A', 'H', 'F', 'B', 'J', 'G', 'I', 'A', 'A', 'H', 'G', 'B', 'E', 'G', 'D', 'I', 'C', 'G', 'J', 'C', 'C', 'I', 'H', 'B', 'D', 'J', 'H', 'B', 'J', 'H', 'B', 'F', 'J', 'E', 'J', 'A', 'G', 'H', 'B', 'E', 'H', 'B', 'F', 'F', 'H', 'E', 'B', 'E', 'G', 'H', 'J', 'G', 'J', 'B', 'H', 'C', 'H', 'A', 'A', 'B', 'E', 'I', 'H', 'B', 'I', 'D', 'J', 'J', 'C', 'D', 'G', 'I', 'J', 'G', 'J', 'D', 'F', 'J', 'E', 'F', 'D', 'E', 'B', 'D', 'B', 'C', 'B', 'B', 'C', 'C', 'I', 'F', 'D', 'E', 'I', 'G', 'G', 'I', 'B', 'H', 'G', 'J', 'A', 'A', 'H', 'I', 'I', 'H', 'A', 'I', 'F', 'C', 'D', 'A', 'C', 'G', 'E', 'G', 'E', 'E', 'H', 'D', 'C', 'G', 'D', 'I', 'A', 'G', 'G', 'D', 'A', 'H', 'H', 'I', 'F', 'E', 'I', 'A', 'D', 'H', 'B', 'B', 'G', 'I', 'C', 'G', 'B', 'I', 'I', 'D', 'F', 'F', 'C', 'C', 'A', 'I', 'E', 'A', 'E', 'J', 'A', 'H', 'C', 'D', 'A', 'C', 'B', 'G', 'H', 'G', 'J', 'G', 'I', 'H', 'B', 'A', 'C', 'H', 'I', 'D', 'D', 'C', 'F', 'G', 'B', 'H', 'E', 'B', 'B', 'H', 'C', 'B', 'G', 'G', 'C', 'F', 'B', 'E', 'J', 'B', 'B', 'I', 'D', 'H', 'D', 'I', 'I', 'A', 'A', 'H', 'G', 'F', 'B', 'J', 'F', 'D', 'E', 'G', 'F', 'A', 'G', 'G', 'D', 'A', 'B', 'B', 'B', 'J', 'A', 'F', 'H', 'H', 'D', 'C', 'J', 'I', 'A', 'H', 'G', 'C', 'J', 'I', 'F', 'J', 'C', 'A', 'E', 'C', 'H', 'J', 'H', 'H', 'F', 'G', 'E', 'A', 'C', 'F', 'J', 'H', 'D', 'G', 'G', 'D', 'D', 'C', 'B', 'H', 'B', 'C', 'E', 'F', 'B', 'D', 'J', 'H', 'J', 'J', 'J', 'A', 'F', 'F', 'D', 'E', 'F', 'C', 'I', 'B', 'H', 'H', 'D', 'E', 'A', 'I', 'A', 'B', 'F', 'G', 'F', 'F', 'I', 'E', 'E', 'G', 'A', 'I', 'D', 'F', 'C', 'H', 'E', 'C', 'G', 'H', 'F', 'F', 'H', 'J', 'H', 'G', 'A', 'E', 'H', 'B', 'G', 'G', 'D', 'D', 'D', 'F', 'I', 'A', 'F', 'F', 'D', 'E', 'H', 'J', 'E', 'D', 'D', 'A', 'J', 'F', 'E', 'E', 'E', 'F', 'I', 'D', 'A', 'F', 'F', 'J', 'E', 'I', 'J', 'D', 'D', 'G', 'A', 'C', 'G', 'G', 'I', 'E', 'G', 'E', 'H', 'E', 'D', 'E', 'J', 'B', 'G', 'I', 'J', 'C', 'H', 'C', 'C', 'A', 'A', 'B', 'C', 'G', 'B', 'D', 'I', 'D', 'E', 'H', 'J', 'J', 'B', 'F', 'E', 'J', 'H', 'H', 'I', 'G', 'B', 'D'],
    1], // 1000

];
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
let leastInterval = function(tasks, n) {
  // 得到 任务=>出现次数 的map
  let mapKeyCount = new Map();
  tasks.forEach((t) => {
    let m = (mapKeyCount.get(t) || 0) + 1;
    mapKeyCount.set(t, m);
  });

  // 按个数倒序
  // 对得到的map，不需要关注key值，我们只需要关注最多的任务有哪些，所以直接就变成一维数组排序
  let sorted = Array.from(mapKeyCount.values()).sort((x, y) => y - x);

  // 我们知道第一个数肯定是最大的，然后想知道有几个最大的数
  // 用lastindex计算比while循环一个一个比快吧（我猜，就算不快也不会更慢
  let countMax = sorted.lastIndexOf(sorted[0]);

  // (sorted[0] - 1) * (n + 1) + countMax + 1 是上面提到的x
  return Math.max((sorted[0] - 1) * (n + 1) + countMax + 1, tasks.length);
};

let leastIntervalOld = function(tasks, n) {
  let mapKeyCount = new Map();
  tasks.forEach((t) => {
    let m = (mapKeyCount.get(t) || 0) + 1;
    mapKeyCount.set(t, m);
  });

  // let mapKeyCountDesc = Array.from(mapKeyCount.keys()).sort((x, y) => {
  //   return mapKeyCount.get(y) - mapKeyCount.get(x);
  // }); // 按个数倒叙

  let mapKeyCountDesc = Array.from(mapKeyCount.values()).sort((x, y) => y - x); // 按个数倒叙
  let totalTask = tasks.length;
  let maxTask = mapKeyCountDesc[0];
  let leftTask = totalTask - maxTask;
  let maxTaskLen = (maxTask - 1) * (n + 1) + 1;
  let countMax = 1;
  for (let i = 1; i < mapKeyCountDesc.length; i++) {
    // debugger;
    if (mapKeyCountDesc[i] >= maxTask) {
      countMax++;
      leftTask -= maxTask;
      maxTaskLen += 1;
    } else {
      break;
    }
  }
  let result = Math.max(0, (leftTask - (maxTaskLen - maxTask * countMax))) + maxTaskLen;
  return result;

  // let arr = [];
  // let leftover = 0;
  // for (let i = 0; i < mapKeyCountDesc.length; i++) {
  //   let key = mapKeyCountDesc[i];
  //   let ini = arr.findIndex((v) => !v);
  //   if (ini < 0) {
  //     // 第一个数
  //     ini = arr.length;
  //     if (ini !== 0) {
  //       // 前面的数都已经插完了
  //       // 这个时候再增加的最多是剩下的数组长度
  //       leftover += mapKeyCount.get(key);
  //       continue;
  //     }
  //   }
  //   for (let j = 0; j < mapKeyCount.get(key); j++) {
  //     arr[ini + j * (n + 1)] = key;
  //   }
  // }
  // console.log(arr, arr.length, mapKeyCount, mapKeyCountDesc, leftover, (arr.filter((v) => !v)).length);
  // return arr.length + leftover;
};

function solution(n) {
  console.log(leastIntervalOld(...n));
  return leastInterval(...n);
}

export default {inputs, solution};
