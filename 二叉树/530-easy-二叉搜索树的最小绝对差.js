// 530 easy 二叉搜索树的最小绝对差
// 同783题  一模一样

// 给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。
//
// 示例 :
//
//     输入:
//
//         1
//     \
//      3
//      /
//      2
//
// 输出:
//     1
//
// 解释:
//     最小绝对差为1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
// 注意: 树中至少有2个节点。


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
var getMinimumDifference = function(root) {
    if (!root) return [];
    let arr = []
    let curNode = root;
    let fn = (curNode) => {
        arr.push(curNode.val)
        if (curNode.left){
            fn(curNode.left)
        }
        if (curNode.right){
            fn(curNode.right)
        }
    }
    fn(curNode)


    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(min > Math.abs(arr[i] - arr[j])){
                min = Math.abs(arr[i] - arr[j])
            }
        }
    }
    return min;
};