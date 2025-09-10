// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let res = 0;
  let curSum = 0;
  for (let i = 0; i < k - 1; i++) {
    curSum += arr[i];
  }
  console.log(curSum);
  for (let left = 0; left < arr.length - k + 1; left++) {
    console.log("left", left);
    curSum += arr[left + k - 1];
    if (curSum / k >= threshold) {
      res += 1;
    }
    curSum -= arr[left];
  }
  return res;
}
