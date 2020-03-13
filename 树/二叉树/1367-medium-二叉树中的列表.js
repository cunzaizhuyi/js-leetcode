
// 1367. medium 二叉树中的列表

// 给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。
// 如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，
// 那么请你返回 True ，否则返回 False 。
// 一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。


var isSubPath = function(head, root) {
    if(!root && head) return false;
    if (!head) return true;
    let pArr = [];
    let fn = (node, curPath) => {
        if (!node.left && !node.right){
            pArr.push(curPath + '' + node.val);
            return;
        }
        if (node.left){
            fn(node.left, curPath + '' + node.val);
        }
        if(node.right){
            fn(node.right, curPath + '' + node.val);
        }
    }
    fn(root, '');

    let lArr = []
    let str = ''
    while(head.next){
        str += head.val;
        head = head.next;
    }
    str += head.val;
    for(let i = 0; i < pArr.length; i++){
        if(pArr[i].indexOf(str) >= 0){
            return true;
        }
    }
    return false;
};