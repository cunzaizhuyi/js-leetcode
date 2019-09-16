// 61 medium 旋转链表

// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
//
// 示例 1:
// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL

// 示例 2:
// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head;

    //计算节点数
    let n = 1;
    let curNode = head;
    while(curNode.next){
        n++;
        curNode = curNode.next
    }

    // 对K取模
    k = k % n;
    if(k === 0)return head;

    // 快慢指针
    let fast = head, slow = head;
    while(k--){fast = fast.next}
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    //操作
    fast.next = head
    head = slow.next
    slow.next = null
    return head;
};