function productExceptSelf(nums) {
  const n = nums.length;
  const res = new Array(n);

  let left = 1;
  for (let i = 0; i < n; i++) {
    res[i] = left;
    left *= nums[i];
  }

  let r = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= r;
    r *= nums[i];
  }

  return res;
}
