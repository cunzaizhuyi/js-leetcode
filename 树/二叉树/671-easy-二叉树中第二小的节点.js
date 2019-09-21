// 671 easy 二叉树中的第二小的节点

// 给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么这个节点的值不大于它的子节点的值。 
// 给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。
//
// 示例 1:
// 输入:
//     2
//     / \
//   2   5
// / \
//     5   7
//
// 输出: 5
// 说明: 最小的值是 2 ，第二小的值是 5 。

// 示例 2:
// 输入:
//     2
//     / \
//   2   2
//
// 输出: -1
// 说明: 最小的值是 2, 但是不存在第二小的值。


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
var findSecondMinimumValue = function(root) {
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
        arr.push(...curLevelNodeValues);
        if(nextLevelNodes.length){fn(nextLevelNodes)}
    }
    fn([root])
    let min = arr[0];
    let sec = Number.MAX_SAFE_INTEGER
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > arr[0] && arr[i] < sec){
            sec = arr[i]
        }
    }
    return sec === Number.MAX_SAFE_INTEGER ? -1: sec;
};

