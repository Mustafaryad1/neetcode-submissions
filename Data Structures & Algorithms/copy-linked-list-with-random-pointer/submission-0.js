// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let dummy = { val: 0, random: null, next: null };
        let result = dummy;
        let mapNodes = new Map();
        let oldHead = head;
        while (head) {
            let newNode = new Node(head.val);
            if (!mapNodes.has(head)) {
                mapNodes.set(head, newNode)
            }
            dummy.next = newNode;
            dummy = dummy.next;
            head = head.next;
        }
        let prev = result.next;
        while (prev && oldHead) {
            if (oldHead.random && mapNodes.has(oldHead.random)) {

                prev.random = mapNodes.get(oldHead.random);
            }
            oldHead = oldHead.next;
            prev = prev.next;
        }

        return result.next;
    }
}
