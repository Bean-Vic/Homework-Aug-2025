// Do not use for loop. Use the built-in methods

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Q1: Given the array, implement a function for generating a new array which doubles the quantity and price in each object.

const doubled1 = itemsObject.map((ele) => ({
  quantity: ele.quantity * 2,
  price: ele.price * 2,
}));

const doubled2 = itemsObject.map((ele) => {
  return { quantity: ele.quantity * 2, price: ele.price * 2 };
});

const doubled3 = itemsObject.map(({ quantity, price }) => ({
  quantity: quantity * 2,
  price: price * 2,
}));

const doubled4 = itemsObject.map(({ quantity: q, price: p }) => ({
  quantity: q * 2,
  price: p * 2,
}));

const doubled5 = itemsObject.map(function(ele) {
  return { quantity: ele.quantity * 2, price: ele.price * 2 };
});

console.log(doubled1);
console.log(doubled2);
console.log(doubled3);
console.log(doubled4);
console.log(doubled5);

// Q2: Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.

const filtered1 = itemsObject.filter(ele => ele.quantity > 2 && ele.price > 300)
const filtered2 = itemsObject.filter(ele => {return ele.quantity > 2 && ele.price > 300})
const filtered3 = itemsObject.filter(function(ele){return ele.quantity > 2 && ele.price > 300})
const filtered4 = itemsObject.filter(({quantity,price})=> quantity > 2 && price > 300)
function callback(ele){
  return ele.quantity > 2 && ele.price > 300
}
console.log(filtered1)
console.log(filtered2)
console.log(filtered3)
console.log(filtered4)
console.log(itemsObject.filter(callback))

// Q3: Given the array, implement a function to calculate the total value of the items.

const totalValue1 = itemsObject.reduce(
  (acc, cur) => acc + cur.quantity * cur.price,
  0
);

const totalValue2 = itemsObject.reduce((acc, cur) => {
  return acc + cur.quantity * cur.price;
}, 0);

const totalValue3 = itemsObject.reduce(function(acc,cur){return acc + cur.quantity * cur.price;},0)

function calc(acc, cur) {
  return acc + cur.quantity * cur.price;
}
const totalValue4 = itemsObject.reduce(calc, 0);

const totalValue5 = itemsObject.map(ele => ele.quantity*ele.price).reduce((acc,calc)=> acc+calc)

console.log(totalValue1)
console.log(totalValue2)
console.log(totalValue3)
console.log(totalValue4)
console.log(totalValue5)


