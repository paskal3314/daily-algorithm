/**
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
var pruneTree = function (root) {
  return removeRecursive(root);
};

var removeRecursive = function (node) {
  if (node.left) {
    node.left = removeRecursive(node.left);
  }
  if (node.right) {
    node.right = removeRecursive(node.right);
  }
  if (!node.left && !node.right && node.val === 0) {
    return null;
  }
  return node;
};
