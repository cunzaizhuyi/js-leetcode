// 5179 medium 


// 给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
// 如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。
// 如果有多种构造方法，请你返回任意一种。

var balanceBST = function(root) {
    let arr = []
    let fn = (node) => {
        if(!node.left && !node.right){
            arr.push(node.val);
            return;
        }
        if(node.left){
            fn(node.left)
        }
        arr.push(node.val)
        if(node.right){
            fn(node.right);
        }
    }
    fn(root);
    // console.log(arr)
    let mid = ~~(arr.length / 2);
    let h = new TreeNode(arr[mid]);
    let c = 1;
    let ff = (node, arr, mid) => {
        console.log(node, arr)
        if(!arr.length || arr.length===1){
            return;
        }
        if(arr.length === 2){
            if(node.val===arr[0]){
                node.right = new TreeNode(arr[1])
            }else{
                node.left = new TreeNode(arr[0])
            }
            return
        }
        if(arr.length === 3){
            node.left = new TreeNode(arr[0])
            node.right = new TreeNode(arr[2])
            return
        }

        if(mid>=0){
            node.left = new TreeNode(arr[~~(mid / 2)]);
            ff(node.left, arr.slice(0, mid), ~~(mid / 2))
        }
        if(mid<=arr.length-1){
            let a = arr.slice(mid+1);
            let mi = ~~(a.length / 2);
            node.right = new TreeNode(a[mi]);
            ff(node.right, a, mi)
        }
    }
    ff(h, arr, mid)
    return h;
};