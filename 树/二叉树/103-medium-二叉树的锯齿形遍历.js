// 103 medium 二叉树的锯齿形遍历

// 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
//
// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],
//
// 3
// / \
//   9  20
// /  \
//    15   7
// 返回锯齿形层次遍历如下：
//
// [
//     [3],
//     [20,9],
//     [15,7]
// ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []

    let arr = []
    let isOdd = true
    let fn = (nodeArr) => {
        let nextLevelNodes = []
        let curLevelNodeValues = []
        nodeArr.forEach((node) => {
            curLevelNodeValues.push(node.val)
        })
        arr.push(curLevelNodeValues);

        if(isOdd){ //当前层是奇数层，那下一层就要逆序排
            isOdd = !isOdd
            for (let i = 0; i < nodeArr.length; i++) {
                if(nodeArr[i].left){
                    nextLevelNodes.push(nodeArr[i].left)
                }
                if(nodeArr[i].right){
                    nextLevelNodes.push(nodeArr[i].right)
                }
            }
        }else{
            isOdd = !isOdd
            for(let i = 0; i < nodeArr.length; i++){
                if(nodeArr[i].right){
                    nextLevelNodes.push(nodeArr[i].right)
                }
                if(nodeArr[i].left){
                    nextLevelNodes.push(nodeArr[i].left)
                }
            }
        }
        if(nextLevelNodes.length){
            fn(nextLevelNodes.reverse())
        }
    }
    fn([root])
    return arr;
};