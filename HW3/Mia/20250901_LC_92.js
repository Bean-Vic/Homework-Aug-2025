/**Reverse Linked List II
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let curr = head
    let prev = null
    while (left > 1){
        prev = curr
        curr = curr.next 
        left--;
        right--
    }
// 反转区间的长度是 right - left + 1。
// 当我们把 curr 移动到第 left 个节点时，已经往前走了 (left-1) 步。
// 这时候，如果还保持原来的 right，那么反转的长度会变大。
// 所以要同时 right--，保持区间长度不变。
     // 2️⃣ 记录两个关键点
    let start = prev         // start 指向反转区间前一个节点（用于后面重新接上去）
    let tail = curr          // tail 指向反转区间的第一个节点（反转后会变成尾巴）
    
    // 3️⃣ 开始反转 [left, right] 这段区间
    let temp = null          // 临时变量，存放下一步要走的节点
    while (right > 0){       // 反转 right 个节点
        temp = curr.next     // 暂存下一个节点
        curr.next = prev     // 当前节点指向前一个节点（指针翻转）
        prev = curr          // prev 前进：移到当前节点
        curr = temp          // curr 前进：移到下一个节点
        right--              // 已完成一次反转，次数减 1
    }
    
    // 4️⃣ 重新接回反转后的链表
    if (start !== null){     // 如果反转区间不是从头开始
        start.next = prev    // 把前半段的尾巴接到反转后的头
    } else {                 // 如果反转区间包含头节点
        head = prev          // 那么新的头结点就是 prev
    }
    
    tail.next = curr         // 把反转后的尾巴接回剩下的链表
    
    // 5️⃣ 返回新的链表头
    return head
}
