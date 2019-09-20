

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
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    // 找左子树、和 右子树 的最大深度
    let fn = (cNodeArr, arr) => {
        let nextLevel = []
        cNodeArr.forEach((cNode) => {
           if(cNode.left){
               nextLevel.push(cNode.left)
           }
           if(cNode.right){
               nextLevel.push(cNode.right)
           }
        })
        if(nextLevel.length){
            arr.push(nextLevel)
            fn(nextLevel, arr)
        }else{
            return arr.length;
        }
    }

    let arr = []
    let cNode = root;
    while(cNode){
        if(cNode.left && cNode.right){
            arr.push(fn(cNode.left, []) + fn(cNode.right, []))
            cNode = cNode.left;
        }
    }
    arr.push(fn(root, []))
    return Math.max(...arr)
};