// 1315 medium 祖父节点值为偶数的节点和

//给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：
//
// 该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）
// 如果不存在祖父节点值为偶数的节点，那么返回 0 。


//提示：
// 树中节点的数目在 1 到 10^4 之间。
// 每个节点的值在 1 到 100 之间。


/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    if (!root) return 0;
    let ans = 0;
    let fn = (nodes) => {
        let nextLevels = [];
        for(let i = 0; i < nodes.length; i++){
            // 下一层要遍历的节点们
            if(nodes[i].left){
                nextLevels.push(nodes[i].left)
            }
            if(nodes[i].right){
                nextLevels.push(nodes[i].right)
            }

            // 计算值
            if(nodes[i].val % 2 !== 0) continue;
            if (nodes[i].left && nodes[i].left.left){
                ans += nodes[i].left.left.val;
            }
            if (nodes[i].left && nodes[i].left.right){
                ans += nodes[i].left.right.val;
            }
            if (nodes[i].right && nodes[i].right.left){
                ans += nodes[i].right.left.val;
            }
            if (nodes[i].right && nodes[i].right.right){
                ans += nodes[i].right.right.val;
            }
        }

        // 继续递归  下一层级
        if(!nextLevels.length) return;
        fn(nextLevels);
    };
    fn([root]);
    return ans;
};