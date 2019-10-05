// 445 medium 两数相加2

// 给定两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。
// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
// 进阶:
// 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
//
// 示例:
// 输入: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出: 7 -> 8 -> 0 -> 7

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
    if(!l1 && !l2) return null;
    if(!l1 && l2) return l2;
    if(l1 && !l2) return l1;

    // 两个栈存储
    let stack1 = [];
    let stack2 = [];
    let node = l1;
    while(node){
        stack1.push(node.val)
        node = node.next;
    }
    let node2 = l2;
    while(node2){
        stack2.push(node2.val)
        node2 = node2.next;
    }


    let n = new ListNode();
    let head = n;
    let isJinwei = 0;
    let l = stack1.pop();
    let r = stack2.pop();
    while(true){
        // 赋值
        head.val = (isJinwei + l + r) % 10;

        // 为下一个数 修改进位
        isJinwei = (isJinwei + l + r) >= 10 ? 1: 0;

        // 后移
        let newNode = new ListNode();
        if (stack1.length && stack2.length) {
            l = stack1.pop();
            r = stack2.pop()
        }else if(!stack1.length && !stack2.length){
            if(isJinwei) {
                newNode.val = 1;
                newNode.next = head;
                head = newNode;
            }
            break;
        } else if(stack1.length && !stack2.length){
            l = stack1.pop();
            r = 0; // 补0
        }else if(!stack1.length && stack2.length){
            r = stack2.pop();
            l = 0 // 补0
        }
        newNode.next = head;
        head = newNode;
    }
    return head;
};