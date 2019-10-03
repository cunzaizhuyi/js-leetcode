// 2 medium 两数相加

// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，
// 并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
//
// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1)return l2;
    if(!l2)return l1;

    let nList = new ListNode()
    let n = nList
    let isJinwei = 0;
    let l = l1;
    let r = l2;
    while(true){
        // 赋值
        n.val = (isJinwei + l.val + r.val) % 10;

        // 为下一个数 修改进位
        isJinwei = (isJinwei + l.val + r.val) >= 10 ? 1: 0;

        // 后移
        if (l.next && r.next) {
            l = l.next;
            r = r.next;
            n.next = new ListNode();
            n = n.next;
        }else if(!l.next && !r.next){
            if(isJinwei) {
                n.next = new ListNode(1);
            }
            break;
        } else if(l.next && !r.next){
            l = l.next;
            n.next = new ListNode();
            n = n.next;
            r.next = new ListNode(0); // 给右边补0
            r = r.next;
        }else if(!l.next && r.next){
            r = r.next;
            n.next = new ListNode();
            n = n.next;
            l.next = new ListNode(0); // 给左边补0
            l = l.next;
        }
    }

    return nList;
};