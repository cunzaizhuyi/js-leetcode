// 515 medium 在每个树行中找最大值

// 您需要在二叉树的每一行中找到最大的值。

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
var largestValues = function(root) {
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
    return arr.map((a) => {
        return Math.max(...a)
    });
};