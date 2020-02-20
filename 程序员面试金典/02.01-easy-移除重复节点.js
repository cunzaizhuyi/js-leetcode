// 面试题 02.01. 移除重复节点

//编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
//
// 示例1:
//  输入：[1, 2, 3, 3, 2, 1]
//  输出：[1, 2, 3]
// 示例2:
//  输入：[1, 1, 1, 1, 2]
//  输出：[1, 2]

// 提示：
// 链表长度在[0, 20000]范围内。
// 链表元素在[0, 20000]范围内。

// 进阶：
// 如果不得使用临时缓冲区，该怎么解决？


var removeDuplicateNodes = function(head) {
    if (!head) return head;
    let hash = {};
    let node = new ListNode();
    node.next = head;
    while(node.next){
        if (hash[node.next.val]){
            // 执行删除，分两种情况
            if (node.next.next){
                // next不是最后节点
                node.next = node.next.next;
            } else {
                // next就是最后一个节点
                node.next = null;
            }
        } else {
            hash[node.next.val] = true;
            // 注意，只有不删除节点时，才往下走。因为删除节点时，next = next.next。
            // 这next是新的未判断的节点，需要重新进循环判断if(hash[next.val]),所以不往下走。
            node = node.next;
        }
    }
    return head;
};