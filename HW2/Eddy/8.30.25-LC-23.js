/* You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.*/
function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null
    let step = 1
    while (step < lists.length) {
        for (let i = 0; i + step < lists.length; i += step * 2) {
            lists[i] = merge(lists[i], lists[i + step])
        }
        step *= 2
    }
    return lists[0] || null
}

function merge(a, b) {
    let dummy = new ListNode(0), cur = dummy
    while (a && b) {
        if (a.val < b.val) { cur.next = a; a = a.next }
        else { cur.next = b; b = b.next }
        cur = cur.next
    }
    cur.next = a ? a : b
    return dummy.next
}
