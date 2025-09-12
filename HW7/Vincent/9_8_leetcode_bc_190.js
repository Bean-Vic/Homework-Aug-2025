/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let binary = n.toString(2).padStart(32, "0");
    let reversed = binary.split("").reverse().join();
    output = parseInt(reversed,2);

    let ans = 0;
    for (let i = 0; i < 32; i++) {
        ans = (ans << 1) | (n & 1);
        n >>= 1
    }
    return ans;
};