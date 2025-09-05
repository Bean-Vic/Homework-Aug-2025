/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let dummy = new ListNode();
    let tail =  dummy;
    const agg = new Array();

    for (const i of lists) {
        let temp_node = i;
        while (temp_node) {
            agg.push(temp_node.val);
            temp_node = temp_node.next;
        }
    }

    agg.sort((a,b) => a -b );
    for (const i of agg) {
        tail.next = new ListNode(i);
        tail = tail.next;
    }

    return dummy.next;

};