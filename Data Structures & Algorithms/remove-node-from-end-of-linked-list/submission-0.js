/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let count = 0;
        let temp = head;
        while (temp) {
            count++;
            temp = temp.next;
        }
        let delItem = (count - n);
        if (delItem === 0) return head.next;
        count = 0;
        temp = head;
        let prev = temp;
        while (temp) {
            if (delItem == count) {
                prev.next = temp.next;
            }
            count++;
            prev = temp;
            temp = temp.next;

        }
        return head;
    }
}
