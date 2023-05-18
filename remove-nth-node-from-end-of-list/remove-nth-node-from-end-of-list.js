/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr = [];
    let res = new ListNode();
    let copy = res;
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    for(let i=0; i<arr.length; i++) {
        if(arr.length-i === n) {
            continue;
        }
        copy.next = new ListNode(arr[i]);
        copy = copy.next;
    }
    return res.next;
};