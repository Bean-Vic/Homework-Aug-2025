/**316
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let charmap = {};
  let boolarrayUsed = new Array(26).fill(false);
  let res = "";
  for (let i = 0; i < s.length; i++) {
    charmap[s[i]] = i;
  }
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    //     curr 是个字符，例如 "a", "b", … 不能直接用来当索引。
    // 你需要把它转换为数字索引（0–25），比如：
    let idx = curr.charCodeAt(0) - "a".charCodeAt(0);
    if (boolarrayUsed[idx]) continue;
    //判断是否用过了
    //如果没有用过 看一下前面一个字母是否比现在这个要大
    while (
      res.length > 0 &&
      curr < res.charAt(res.length - 1) &&
      i < charmap[res.charAt(res.length - 1)]
    ) {
      // res.charAt(res.length - 1) 取的是 栈顶字符（最后一个字符）。
      //如果当前字符更小，而且栈顶字符后面还会再出现，就把栈顶字符弹出去，保证最后得到的结果 字典序最小。
      let last = res.charAt(res.length - 1);
      boolarrayUsed[last.charCodeAt(0) - "a".charCodeAt(0)] = false;
      res = res.slice(0, -1);
      //     slice(start, end) 用来截取字符串的一部分：
      // start → 起始下标（包含这个位置）
      // end → 结束下标（不包含这个位置），可以是负数
      // 如果 end 是 -1，表示 从倒数第 1 个字符之前结束
      //         console.log(str.slice(0, -1)); // "abc"   (去掉最后 1 个字符)
      // console.log(str.slice(0, -2)); // "ab"    (去掉最后 2 个字符)
      // console.log(str.slice(0, -3)); // "a"     (去掉最后 3 个字符)
    }
    // 把当前字符放入结果
    res += curr;
    boolarrayUsed[idx] = true;
  }

  return res;
};
