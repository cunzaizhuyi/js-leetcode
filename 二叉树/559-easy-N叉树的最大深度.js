// 559 easy N叉树的最大深度
// 跟429题只差最后一行代码

// 给定一个 N 叉树，找到其最大深度。
//
// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
//
// 例如，给定一个 3叉树 :
//
//
//
//
//
//
//
//     我们应返回其最大深度，3。
//
// 说明:
//
//     树的深度不会超过 1000。
// 树的节点总不会超过 5000。


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
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
    return arr.length;
};