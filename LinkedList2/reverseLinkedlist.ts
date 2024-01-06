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

function reverseList(head: ListNode | null): ListNode | null {
    if(head == null) return null; // size 0
    if(head.next == null) return head; // size 1

    let prev = null;
    let curr = head;
    let nextNode = head.next;

    while(curr != null){
        curr.next = prev;

        prev = curr;
        curr = nextNode;
        if(nextNode != null) nextNode = nextNode.next;
    }

    return prev;
};


