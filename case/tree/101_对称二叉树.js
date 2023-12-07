
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  return cmp(root.left, root.right);
};

var cmp = function (node1, node2) {
  if (node1 === null && node2 === null) {
    return true;
  }

  if (node1 === null) {
    return false;
  }

  if (node2 === null) {
    return false;
  }

  if (node1.val !== node2.val) {
    return false;
  }
  
  return cmp(node1.left, node2.right) && cmp(node1.right, node2.left)
}