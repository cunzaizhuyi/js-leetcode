// 814 medium 二叉树剪枝

// 给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。
// 返回移除了所有不包含 1 的子树的原二叉树。
// ( 节点 X 的子树为 X 本身，以及所有 X 的后代。)


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if(!root)return root;
    if(root.left){
        pruneTree(root.left);
    }
    if(root.right){
        pruneTree(root.right);
    }
    if(root.left){
        if(!root.left.left && !root.left.right && root.left.val === 0) root.left = null
    }
    if(root.right){
        if(!root.right.left && !root.right.right && root.right.val === 0) root.right = null
    }
    return root;
};