// 230. 二叉搜索树中第K小的元素 medium

// 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
//
// 说明：
// 你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(!root) return null;
    let arr = []
    let fn = (cNode) => {
        // 碰到叶子节点
        if(!cNode.left && !cNode.right){
            arr.push(cNode.val)
            return;
        }
        if(cNode.left){
            fn(cNode.left)
        }
        arr.push(cNode.val)
        if(cNode.right){
            fn(cNode.right)
        }
    }
    fn(root);
    return arr[k-1]
};