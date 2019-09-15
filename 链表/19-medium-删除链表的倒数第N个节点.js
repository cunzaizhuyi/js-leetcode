// 19 medium 删除链表的倒数第N个节点

// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
//
// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：
// 给定的 n 保证是有效的。
//
// 进阶：
// 你能尝试使用一趟扫描实现吗？



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 双指针，让两个指针始终保持N个数的差距。
 * 当前指针指向链表末尾时，后指针正好指向要删节点的前一个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 技巧：构造虚拟头结点  指向 现有 头结点。以防N正好的链表节点数，要删掉的是真实的头节点
    let vHead = new ListNode()
    vHead.next = head;

    let l = vHead, r = vHead
    let distance = 0
    while(r.next){
        if(distance === n){
            l = l.next;
            r = r.next;
            continue;
        }
        r = r.next;
        distance++;
    }

    //删除操作
    l.next = l.next.next;

    // 如果l指向是虚拟头结点，说明删掉的是头结点，那就返回原链表的第二个节点。
    // 也就是虚拟头结点现在指向的下一个
    return l === vHead ? l.next: head;
};