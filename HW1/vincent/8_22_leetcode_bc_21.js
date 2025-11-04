/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy_node = new ListNode(0, null);
    const start_node = dummy_node;

    let node1 = list1, node2 = list2;

    while (node1 && node2) {
        if (node1.val > node2.val) {
            dummy_node.next = node2;
            node2 = node2.next;
            dummy_node = dummy_node.next;
        } else {
            dummy_node.next = node1;
            node1 = node1.next;
            dummy_node = dummy_node.next;
        }
    }

    if (node1) {
        dummy_node.next = node1;
    } else {
        dummy_node.next = node2;
    }

    return start_node.next;

};