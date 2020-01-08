// 817 1,2,3,4,5    1,4  2,5
getN = (head, arr) => {
    let max = 0;
    let node = head;
    let cur = 0;
    while(node){
        if (!arr.includes(node.val)){
            max = Math.max(max, cur);
            cur = 0;
        } else {
            cur++;
            arr.splice(arr.indexOf(node.val), 1);
        }
        node = node.next;
    }
    return max;
}

let head = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)
head.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
console.log(getN(head, [1, 2, 3, 4]));

