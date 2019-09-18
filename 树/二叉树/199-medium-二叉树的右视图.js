// 199 medium 二叉树的右视图

// 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * push每一层的最右节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root)return []

    let arr = []
    let fn = (nodeArr) => {
        let nextLevel = []
        arr.push(nodeArr[nodeArr.length - 1].val)
        nodeArr.forEach((node, index) => {
            if(node.left){
                nextLevel.push(node.left);
            }
            if(node.right){
                nextLevel.push(node.right);
            }
        });
        // 退出条件
        if(nextLevel.length){fn(nextLevel)}
    }
    fn([root])
    return arr
};