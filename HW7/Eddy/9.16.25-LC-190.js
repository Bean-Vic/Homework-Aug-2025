/* Reverse bits of a given 32 bits signed integer.
*/
function reverseBits(n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
        res = (res << 1) | (n & 1)
        n = n >>> 1
    }
    return res >>> 0
}
