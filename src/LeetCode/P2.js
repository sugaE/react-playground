/*
*
* */

const inputs = [
  [99, 1], // 9

];
/**
 * @param {string} num
 * @return {string}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  return add(l1, l2, 0);
};

function add(a1, a2, lastflag = 0) {
  let res = null;

  if (a1 && a2) {
    let sum = a1.val + a2.val + lastflag;
    let flag = Math.floor(sum / 10);

    res = {
      val: (sum) % 10,
      next: add(a1.next, a2.next, flag),
    };
  } else {
    res = a1 || a2 || null;
    if (lastflag) {
      let last = {
        val: lastflag,
        next: null,
      };

      res = add(res, last, 0);
    }
  }

  return res;
}

function solution(n) {
  console.log(...n);
  return addTwoNumbers(...n);
}

export default {inputs, solution};
