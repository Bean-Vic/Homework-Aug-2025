var topKFrequent = function (nums, k) {
  const myMap = new Map();
  for (const num of nums) {
    myMap.set(num, (myMap.get(num) || 0) + 1);
  }

  const sorted = [...myMap.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map(([num]) => num);
};
