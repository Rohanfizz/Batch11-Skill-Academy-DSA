/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    if(head == null) return null;
    let fast = head;
    let slow = head;
    while(fast!=null && fast.next != null){ // till i can make 2 jumps
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};