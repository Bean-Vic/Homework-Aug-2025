/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
function isValid(s) {
    let stack = []
    let map = {')':'(', ']':'[', '}':'{'}
    for (let ch of s) {
        if (ch in map) {
            if (!stack.length || stack.pop() !== map[ch]) return false
        } else {
            stack.push(ch)
        }
    }
    return stack.length === 0
}
