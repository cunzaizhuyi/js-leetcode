// 429 easy N叉树的层序遍历

// 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
// 例如，给定一个 3叉树 :
//
//
//
//
//
//
//
//     返回其层序遍历:
//
//         [
//             [1],
//             [3,2,4],
//             [5,6]
//         ]
//
//
// 说明:
//
//     树的深度不会超过 1000。
// 树的节点总数不会超过 5000。
//

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []

    let arr = []
    let fn = (nodeArr) => {
        let nextLevelNodes = []
        let curLevelNodeValues = []
        nodeArr.forEach((node) => {
            curLevelNodeValues.push(node.val)
            if(node.children){
                nextLevelNodes.push(...node.children)
            }
        })
        arr.push(curLevelNodeValues)
        if(nextLevelNodes.length){fn(nextLevelNodes)}
    }
    fn([root])
    return arr;
};