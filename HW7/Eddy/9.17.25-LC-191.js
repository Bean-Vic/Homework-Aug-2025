/* Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).*/
function hammingWeight(n) {
    let cnt = 0
    while (n !== 0) {
        n &= (n - 1)
        cnt++
    }
    return cnt
}
