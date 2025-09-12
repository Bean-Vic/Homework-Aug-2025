/* You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → … You may not modify the values in the list's nodes. Only nodes themselves may be changed. */
function reorderList(head) {
    if (!head || !head.next) return head
    let slow = head, fast = head
    while (fast && fast.next) { slow = slow.next; fast = fast.next.next }
    let second = slow.next
    slow.next = null
    let prev = null, cur = second
    while (cur) { let nxt = cur.next; cur.next = prev; prev = cur; cur = nxt }
    second = prev
    let p1 = head, p2 = second
    while (p2) {
        let n1 = p1.next, n2 = p2.next
        p1.next = p2
        p2.next = n1
        p1 = n1
        p2 = n2
    }
    return head
}
