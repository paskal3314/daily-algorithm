/**
 * Beats 12%
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function (root) {
  if ([0, 1].includes(root.val)) {
    return root.val === 0 ? false : true;
  }

  const left = evaluateTree(root.left);
  const right = evaluateTree(root.right);
  return root.val === 2 ? left || right : left && right;
};
