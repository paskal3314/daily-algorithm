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
  if (!node || ((node?.left?.val || 0) + (node?.right?.val || 0) + (node?.val || 0) === 0 && isEndTree(node))) {
    return null;
  }

  node.left = removeRecursive(node.left);
  node.right = removeRecursive(node.right);
  return node;
};

var isEndTree = function (node) {
  if (node?.left?.left || node?.left?.right || node?.right?.left || node?.right?.right) {
    return false;
  }
  return true;
};
