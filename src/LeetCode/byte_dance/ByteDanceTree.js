/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const inputs = [
  [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8], // 15
  [1], // 1
];

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
let deepestLeavesSum = function(arr) {
  let root = detree(arr);
  let n = Math.floor(((root.length + 1) / 2) ** 1 / 2) + 1;
  return root.slice(2 ** (n - 1) - 1).reduce((x, y) => ~~x + ~~y, 0);
};

// 广度遍历二叉树
function detree(root) {
  let arr = [root.val];
  let queque = [root];
  while (queque.length) {
    let cur = queque[0];
    if (cur.left) {
      arr.push(cur.left.val);
      queque.push(cur.left);
    }
    if (cur.right) {
      arr.push(cur.right.val);
      queque.push(cur.right);
    }
    queque.shift();
  }
  return arr;
}

// 广度遍构造二叉树
function totree(root) {
  let arr = [root.val];
  let queque = [root];
  while (queque.length) {
    // let cur = queque[0];
    // if (cur.left) {
    //   arr.push(cur.left.val);
    //   queque.push(cur.left);
    // }
    // if (cur.right) {
    //   arr.push(cur.right.val);
    //   queque.push(cur.right);
    // }
    // queque.shift();
  }
  return arr;
}

function solution(n) {
  let tree = totree(n);
  console.log(tree);
  // new TreeNode(n[0]);
  // tree.left = new TreeNode(n[1]);
  // tree.right = new TreeNode(n[2]);
  // tree.left.left = new TreeNode(n[3]);
  // tree.left.right = new TreeNode(n[4]);
  // tree.right.left = new TreeNode(n[5]);
  // tree.right.right = new TreeNode(n[6]);
  // tree.left.left.left = new TreeNode(n[7]);
  // tree.left.left.right = new TreeNode(n[8]);
  // tree.left.right.left = new TreeNode(n[9]);
  // tree.left.right.right = new TreeNode(n[10]);
  // tree.right.left.left = new TreeNode(n[11]);
  // tree.right.left.right = new TreeNode(n[12]);

  // return deepestLeavesSum(tree);
}

export default {inputs, solution};
