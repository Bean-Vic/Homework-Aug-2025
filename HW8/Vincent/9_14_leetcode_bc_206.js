/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head && head.next) {
        let prev = head;
        let cur = head.next;

        head.next = null;

        while (cur) {
            let next_n = cur.next;
            cur.next = prev;

            prev = cur;
            cur = next_n;
        }

        return prev;
    } else {
        return head
    }
};