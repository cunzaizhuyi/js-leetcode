
//654 medium 最大二叉树

// 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：
//
// 二叉树的根是数组中的最大元素。
// 左子树是通过数组中最大值左边部分构造出的最大二叉树。
// 右子树是通过数组中最大值右边部分构造出的最大二叉树。
// 通过给定的数组构建最大二叉树，并且输出这个树的根节点。

// 提示：
// 给定的数组的大小在 [1, 1000] 之间。

// 递归即可
var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) return null;
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    let root = new TreeNode(max);
    let buildTree = (node, index, arr) => {
        if (arr.length === 1) return;

        let lArr = index === 0 ? []: arr.slice(0, index);
        if (lArr.length){
            let lmax = Math.max(...lArr);
            let lindex = lArr.indexOf(lmax);
            let lNode = new TreeNode(lmax);
            node.left = lNode;
            buildTree(node.left, lindex, lArr);
        }

        let rArr = index === arr.length - 1 ? []: arr.slice(index + 1);
        if (rArr.length){
            let rmax = Math.max(...rArr);
            let rindex = rArr.indexOf(rmax);
            let rNode = new TreeNode(rmax);
            node.right = rNode;
            buildTree(node.right, rindex, rArr);
        }
    };
    buildTree(root, index, nums);
    return root;
};

