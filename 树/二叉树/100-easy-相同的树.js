//100 easy 相同的树

//给定两个二叉树，编写一个函数来检验它们是否相同。
//
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let fn = (a, b) => {
        if(!a && !b) return true;
        if(!a && b) {
            return false;
        }
        if(a && !b){
            return false;
        }
        if(a.val !== b.val) {
            return false;
        }
        return fn(a.left, b.left) && fn(a.right, b.right)
    };
    return fn(p, q);
};