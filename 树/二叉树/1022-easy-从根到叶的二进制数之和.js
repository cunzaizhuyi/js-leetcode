// 从根到叶的二进制数之和 1022 easy

// 给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。
// 例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
// 对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。
// 以 10^9 + 7 为模，返回这些数字之和。
//

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
var sumRootToLeaf = function(root) {
    if(!root)return 0;
    let arr = []

    let fn = (curNode, str) => {
        str += curNode.val;
        if(!curNode.left && !curNode.right){
            arr.push(str);
            return;
        }
        if(curNode.left){
            fn(curNode.left, str);
        }
        if(curNode.right){
            fn(curNode.right, str);
        }
    };
    fn(root, '');

    // 求和部分
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i], 2);
    }
    return sum;
};
