// 637 easy 二叉树的层平均值

// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.
//
//     示例 1:
//
// 输入:
//     3
//     / \
//   9  20
// /  \
//    15   7
// 输出: [3, 14.5, 11]
// 解释:
//     第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].
//     注意：
//
// 节点值的范围在32位有符号整数范围内。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(!root) return []

    let arr = []
    let fn = (nodeArr) => {
        let nextLevelNodes = []
        let curLevelNodeValues = []
        nodeArr.forEach((node) => {
            curLevelNodeValues.push(node.val)
            if(node.left){
                nextLevelNodes.push(node.left)
            }
            if(node.right){
                nextLevelNodes.push(node.right)
            }
        })
        arr.push(curLevelNodeValues);
        if(nextLevelNodes.length){fn(nextLevelNodes)}
    }
    fn([root])
    for(let i = 0; i < arr.length; i++){
        let sum = 0
        arr[i].map((v) => {
            sum += v
        })
        arr[i] = sum / arr[i].length
    }
    return arr;
};