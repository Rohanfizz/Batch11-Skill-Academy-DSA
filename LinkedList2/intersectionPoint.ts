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

function getSize(head:ListNode | null){
    let temp = head;
    let  size = 0;
    while(temp != null){
        size++;
        temp = temp.next;
    }
    return size;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let size1 = getSize(headA);
    let size2 = getSize(headB);

    let temp1 = headA;
    let temp2 = headB;

    while(size1 != size2){
        if(size1 > size2){
            temp1 = temp1.next;
            size1--;
        }else{
            temp2 = temp2.next;
            size2--;
        }
    }

    while(temp1!= temp2){
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    return temp1;
};