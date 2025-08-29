
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

console.log(doubleItem)