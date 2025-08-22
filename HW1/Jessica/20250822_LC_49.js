strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
function groupAnagrams(strs) {
  const myMap = new Map();
  for (const word of strs) {
    const sorted = word.split("").sort().join("");
    if (!myMap.has(sorted)) {
      myMap.set(sorted, []);
    }
    myMap.get(sorted).push(word);
  }
  return Array.from(myMap.values());
}
