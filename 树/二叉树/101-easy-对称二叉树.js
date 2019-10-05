
// 101 easy 对称二叉树
//给定一个二叉树，检查它是否是镜像对称的。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    let isMirror = (a, b) => {
        if(!a)return true;
        if(!a && !b)return true;
        if(!a || !b)return false;
        return (a.val === b.val) && isMirror(a.left, b.right) && isMirror(a.right, b.left)
    }
    return isMirror(root, root)
};