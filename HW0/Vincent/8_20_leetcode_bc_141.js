/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const visted = new Set();
    let currentNode = head;

    while (currentNode) {
        if (visted.has(currentNode)) {
            return true;
        }
        visted.add(currentNode);
        currentNode = currentNode.next;
    }

    return false;
};