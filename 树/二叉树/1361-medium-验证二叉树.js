// 1361 medium 验证二叉树

//二叉树上有 n 个节点，按从 0 到 n - 1 编号，其中节点 i 的两个子节点分别是 leftChild[i] 和 rightChild[i]。
//
// 只有 所有 节点能够形成且 只 形成 一颗 有效的二叉树时，返回 true；否则返回 false。
//
// 如果节点 i 没有左子节点，那么 leftChild[i] 就等于 -1。右子节点也符合该规则。
//
// 注意：节点没有值，本问题中仅仅使用节点编号。


// 判断度
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    if (n !== leftChild.length || n !== rightChild.length
        || leftChild.length !== rightChild.length) return false;

    let hash = {} // 入度
    // 统计节点的度，入度大于等于2的，肯定不是二叉树
    for(let i = 0; i < leftChild.length; i++){
        if (leftChild[i] !== -1){
            hash[leftChild[i]] = ~~hash[leftChild[i]] + 1;
            if (hash[leftChild[i]] > 1){
                return false;
            }
        }
    }
    for(let j = 0; j < rightChild.length; j++){
        if (rightChild[j] !== -1){
            hash[rightChild[j]] = ~~hash[rightChild[j]] + 1;
            if (hash[rightChild[j]] > 1){
                return false;
            }
        }
    }

    // 没有根节点 或者 森林的情况
    let count = 0;
    for(let i = 0; i < n; i++){
        if (!hash[i]){
            count++;
        }
    }
    if(count === 0 || count >= 2){return false};

    return true;
};