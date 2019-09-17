// 872 easy 叶子相似的树

// 请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
//
//
//
// 举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。
// 如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
// 如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。
//
// 提示：
// 给定的两颗树可能会有 1 到 100 个结点。



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let arr1 = []
    let arr2 = []
    // 找两棵树叶子节点的过程
    let fn = (curNode, arr) => {
        if(!curNode) return arr;
        if(!curNode.left && !curNode.right){
            arr.push(curNode.val);
        }else if(curNode.left && !curNode.right){
            fn(curNode.left, arr)
        }else if(!curNode.left && curNode.right){
            fn(curNode.right, arr)
        }else{
            fn(curNode.left, arr)
            fn(curNode.right, arr)
        }
    }
    fn(root1, arr1)
    fn(root2, arr2)


    // 比较的过程
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
};