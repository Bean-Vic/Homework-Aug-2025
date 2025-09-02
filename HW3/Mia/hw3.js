const itemsObject = [
{ quantity: 1, price: 200 },
{ quantity: 3, price: 350 },
{ quantity: 5, price: 400 },
];

let doubleItem = itemsObject.map(item => {
    return {
        quantity: item.quantity *2 ,
        price: item.price * 2
    }
})

const filteredItems = itemsObject.filter(item => 
  item.quantity > 2 && item.price > 300
);

// 3. Calculate total value
const totalValue = itemsObject.reduce((total, item) => 
  total + (item.quantity * item.price), 0
);
console.log(doubleItem)

 const string =
" Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
// Given the string, implement a function to remove all the non-alphabet characters and
// extra space in the string and convert the string to all lowercase.
let stringAfter = string.trim().toLowerCase().replace(/[^a-zA-Z ]/g, ' ')
console.log(stringAfter)

const first = [
{ uuid: 2, name: "test" },
{ uuid: 5, name: "test5" },
{ uuid: 3, name: "test3" }
];
const second = [
{ uuid: 6, role: "pm" },
{ uuid: 4, role: "engineer" },
{ uuid: 1, role: "manager" },
{ uuid: 2, role: "associate" }
];
// Implement a function to merge two arrays of objects on uuid, but first has uuid and
// name, second has uuid and role. With the not existing property, fill with null. Sort
// according to uuid after merge.

function mergeArrays(first, second) {
  // 合并两个数组
  const merged = [...first, ...second];
  // 用 reduce 生成 uuid -> 对象 的 Map
  const map = merged.reduce((acc, item) => {
    if (!acc[item.uuid]) {
      acc[item.uuid] = { uuid: item.uuid, name: null, role: null };
    }
    if ("name" in item) acc[item.uuid].name = item.name;
    if ("role" in item) acc[item.uuid].role = item.role;
    return acc;
  }, {});
// {
//   '1': { uuid: 1, name: null, role: 'manager' },
//   '2': { uuid: 2, name: 'test', role: 'associate' },
//   '3': { uuid: 3, name: 'test3', role: null },
//   '4': { uuid: 4, name: null, role: 'engineer' },
//   '5': { uuid: 5, name: 'test5', role: null },
//   '6': { uuid: 6, name: null, role: 'pm' }
// }
// 如果没有这个 uuid 的条目
// if (acc[item.uuid] === undefined) {
//   // 创建基础模板
//   acc[item.uuid] = {
//     uuid: item.uuid,  // 设置 uuid
//     name: null,       // 默认值
//     role: null        // 默认值
//   };
// }
  // 转换成数组并排序
  return Object.values(map).sort((a, b) => a.uuid - b.uuid);
}

console.log(mergeArrays(first, second));