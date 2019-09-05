

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let BST = function(v){this.root = v}
    let bst = new BST(preorder[0])

    // 给一个值，作为节点插入树。
    let insert = (value) => {
        let curNode = bst.root
        let fn = (curNode) => {
            if (value < curNode.value) {
                if (!curNode.left) {
                    curNode.left = new TreeNode({value})
                    return true;
                } else {
                    curNode = curNode.left
                    return fn(curNode)
                }
            } else if (value > curNode.value) {
                if (!curNode.right) {
                    curNode.right = new TreeNode({value})
                    return true;
                } else {
                    curNode = curNode.right
                    return fn(curNode)
                }
            } else {
                return false;
            }
        }
        return fn(curNode)
    }

    for(let i = 1; i < preorder.length; i++){
        insert(preorder[i])
    }
    return bst.root;
};