// 1161 easy 最大层内元素和

// 给你一个二叉树的根节点 root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。
// 请你找出层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中 最小 的那个。
//
//  
//
// 示例：
// 输入：[1,7,0,7,-8,null,null]
// 输出：2
// 解释：
// 第 1 层各元素之和为 1，
// 第 2 层各元素之和为 7 + 0 = 7，
// 第 3 层各元素之和为 7 + -8 = -1，
// 所以我们返回第 2 层的层号，它的层内元素之和最大。
//  
//
// 提示：
// 树中的节点数介于 1 和 10^4 之间
// -10^5 <= node.val <= 10^5


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    if(!root) return 1;

    let cNode = root
    let arr = [0]
    let fn = (nodeArr) => {
        let nextLevelNodes = []
        let sum = 0
        nodeArr.forEach((node) => {
            sum += node.val
            if(node.left){
                nextLevelNodes.push(node.left)
            }
            if(node.right){
                nextLevelNodes.push(node.right)
            }
        })
        arr.push(sum);
        if(nextLevelNodes.length){fn(nextLevelNodes)}
    }
    fn([cNode]);
    let max = Math.max(...arr)
    return arr.indexOf(max)
};