//04.06. 后继者

//设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。
// 如果指定节点没有对应的“下一个”节点，则返回null。

var inorderSuccessor = function(root, p) {
    let arr = [];
    let dfs = (node) => {
        if(!node)return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    };
    dfs(root);
    if(arr.indexOf(p.val) === arr.length-1)return null;

    // 找节点
    let des = arr[arr.indexOf(p.val) + 1];
    let res;
    let fn = (node) => {
        if(!node)return;
        if(node.val === des){res = node;return }
        fn(node.left);
        fn(node.right);
    };
    fn(root);
    return res;
};

