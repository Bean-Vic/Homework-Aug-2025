/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.
*/
function groupAnagrams(strs) {
    let map = new Map()
    for (let s of strs) {
        let key = s.split('').sort().join('')
        if (!map.has(key)) map.set(key, [])
        map.get(key).push(s)
    }
    return Array.from(map.values())
}
