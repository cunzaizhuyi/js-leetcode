// 本文演示二叉搜索树的数据结构 和 基本操作


class Node {
    constructor({value, left, right}) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class BST {
    constructor(value) {
        this.root = value ? new Node({value}) : null
    }


    // 给一个值，作为节点插入树。顺便解决了LeetCode701题
    insert(value) {
        if (!this.root) {
            this.root = new Node({value})
        }

        let curNode = this.root
        let fn = (curNode) => {
            if (value < curNode.value) {
                if (!curNode.left) {
                    curNode.left = new Node({value})
                    return true;
                } else {
                    curNode = curNode.left
                    return fn(curNode)
                }
            } else if (value > curNode.value) {
                if (!curNode.right) {
                    curNode.right = new Node({value})
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


    // 查找某个值是否存在，返回bool。顺便解决LeetCode700题
    search(value) {
        if (!this.root) return false;
        if (this.root.value === value) {
            return true;
        }
        let curNode = this.root;
        let fn = (curNode) => {
            if (value === curNode.value) return true;
            if (value < curNode.value) {
                if (!curNode.left) {
                    return false;
                } else {
                    curNode = curNode.left
                    return fn(curNode)
                }
            } else if (value > curNode.value) {
                if (!curNode.right) {
                    return false;
                } else {
                    curNode = curNode.right
                    return fn(curNode)
                }
            }
        }
        return fn(curNode)
    }


    // 验证一棵树是否是BST树
    validate(root) {
        if (!this.root) return true;
        let curNode = this.root
    }


    // 前序遍历。LeetCode938、LeetCode530.
    preTraversal(root){
        if (!root) return [];
        let arr = []
        let curNode = root;
        let fn = (curNode) => {
            arr.push(curNode.value)
            if (curNode.left){
                fn(curNode.left)
            }
            if (curNode.right){
                fn(curNode.right)
            }
        }
        fn(curNode)
        return arr;
    }


    // 层序遍历
    levelOrder(root){
        if(!root) return []

        let arr = []
        let fn = (nodeArr) => {
            let nextLevelNodes = []
            nodeArr.forEach((node) => {
                arr.push(node.value)
                if(node.left){
                    nextLevelNodes.push(node.left)
                }
                if(node.right){
                    nextLevelNodes.push(node.right)
                }
            })
            if(nextLevelNodes.length){fn(nextLevelNodes)}
        }
        fn([root])
        return arr;
    }
}


let bst = new BST()
bst.insert(3)
bst.insert(2)
bst.insert(6)
bst.insert(1)
bst.insert(8)
bst.insert(5)
console.log('search: ', bst.search(6))
console.log('validate: ', bst.validate(bst.root));
console.log('qianxu: ', bst.preTraversal(bst.root));
console.log('层序遍历: ', bst.levelOrder(bst.root));