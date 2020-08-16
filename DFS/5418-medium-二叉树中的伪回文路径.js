
//5418. 二叉树中的伪回文路径 medium

//给你一棵二叉树，每个节点的值为 1 到 9 。我们称二叉树中的一条路径是 「伪回文」的，当它满足：路径经过的所有节点值的排列中，存在一个回文序列。
//
// 请你返回从根到叶子节点的所有路径中 伪回文 路径的数目。
//
//  
//
// 示例 1：
//
//
//
// 输入：root = [2,3,1,3,1,null,1]
// 输出：2
// 解释：上图为给定的二叉树。总共有 3 条从根到叶子的路径：红色路径 [2,3,3] ，绿色路径 [2,1,1] 和路径 [2,3,1] 。
//      在这些路径中，只有红色和绿色的路径是伪回文路径，因为红色路径 [2,3,3] 存在回文排列 [3,2,3] ，绿色路径 [2,1,1] 存在回文排列 [1,2,1] 。
// 示例 2：
//
//
//
// 输入：root = [2,1,1,1,3,null,null,null,null,null,1]
// 输出：1
// 解释：上图为给定二叉树。总共有 3 条从根到叶子的路径：绿色路径 [2,1,1] ，路径 [2,1,3,1] 和路径 [2,1] 。
//      这些路径中只有绿色路径是伪回文路径，因为 [2,1,1] 存在回文排列 [1,2,1] 。
// 示例 3：
//
// 输入：root = [9]
// 输出：1
//  
//
// 提示：
//
// 给定二叉树的节点数目在 1 到 10^5 之间。
// 节点值在 1 到 9 之间。
//

// 超时。。。。
var pseudoPalindromicPaths  = function(root) {
    let cnt = 0;
    let dfs = (node, path) => {
        if(!node)return;
        if(!node.left && !node.right){
            if(path.indexOf(node.val)!==-1){
                path.splice(path.indexOf(node.val), 1)
            }else{
                path.push(node.val)
            }
            if(path.length === 0 || path.length === 1){
                cnt++;
            }
            return;
        }

        if(path.indexOf(node.val)!==-1){
            path.splice(path.indexOf(node.val), 1)
        }else{
            path.push(node.val)
        }
        if(node.left){
            dfs(node.left, [...path])
        }
        if(node.right){
            dfs(node.right, [...path])
        }
    }
    dfs(root, [])
    return cnt;
};




// 换成同一个数组空间，同样超时
var pseudoPalindromicPaths2  = function(root) {
    let cnt = 0;
    let tong = []
    let dfs = (node) => {
        if(!node)return;
        if(!node.left && !node.right){
            tong[node.val] = !tong[node.val]
            let tt = 0;
            for(let i = 1; i <= 9; i++){
                if(tong[i]){tt++}
            }
            if(tt===0 || tt===1)cnt++
            tong[node.val] = !tong[node.val]
            return;
        }

        tong[node.val] = !tong[node.val]

        if(node.left){
            dfs(node.left)
        }
        if(node.right){
            dfs(node.right)
        }
        tong[node.val] = !tong[node.val]
    }
    dfs(root)
    return cnt;
};