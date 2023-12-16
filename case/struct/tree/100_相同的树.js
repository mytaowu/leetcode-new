/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const dfs = function (root, root2) {
    if (root === null && root2 === null) {
      return true;
    }

    if (root === null || root2 === null) {
      return false;
    }

    if (root.val !== root2.val) {
      return false;
    }

    
    return dfs(root.left, root2.left) && dfs(root.right, root2.right);    
  }

  return dfs(q, p);
};