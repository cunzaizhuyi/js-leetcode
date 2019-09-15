// 965 easy 单值二叉树

// 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
// 只有给定的树是单值二叉树时，才返回 true；否则返回 false。
//
// 示例 1：
//
//
//
// 输入：[1,1,1,1,1,null,1]
// 输出：true
// 示例 2：
//
//
//
// 输入：[2,2,2,5,2]
// 输出：false
//
//
// 提示：
// 给定树的节点数范围是 [1, 100]。
// 每个节点的值都是整数，范围为 [0, 99] 。


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
var isUnivalTree = function(root) {
    let curNode = root;
    let v = curNode.val
    let result = true
    let fn = (node, v) => {
        if (node.val !== v){
            result = false
        } else {
            if(node.left){
                fn(node.left, v);
            }
            if(node.right){
                fn(node.right, v);
            }
        }
    }
    fn(curNode, v)
    return !(result === false)
};