/**
 * Beats 64%
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  const sums = [];
  searchForSums(root, 0, sums);
  updateNodes(root, 0, sums, 0);
  return root;
};

function searchForSums(node, level, sums) {
  if (node === null) {
    return;
  }
  sums[level] = (sums[level] ?? 0) + node.val;
  searchForSums(node.left, level + 1, sums);
  searchForSums(node.right, level + 1, sums);
}

function updateNodes(node, level, sums, siblingVal) {
  if (node === null) {
    return;
  }
  node.val = sums[level] - (node.val + siblingVal);
  const leftVal = node.left?.val ?? 0;
  const rightVal = node.right?.val ?? 0;
  updateNodes(node.left, level + 1, sums, rightVal);
  updateNodes(node.right, level + 1, sums, leftVal);
}
