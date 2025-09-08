/* Given the head of a linked list, remove the nth node from the end of the list and return its head. */
function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head)
    let fast = dummy, slow = dummy
    for (let i = 0; i < n; i++) fast = fast.next
    while (fast.next) { fast = fast.next; slow = slow.next }
    slow.next = slow.next.next
    return dummy.next
}
