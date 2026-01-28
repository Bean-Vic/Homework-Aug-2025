const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

function double(objArr) {
    return objArr.map((item) => {
        return { quantity: item.quantity * 2, price: item.price * 2 };
    });
}
console.log(double(itemsObject));

function filter(objArr) {
    return objArr.filter((item) => item.quantity > 2 && item.price > 300);
}
console.log(filter(itemsObject));

function calculate(objArr) {
    return objArr.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
}
console.log(calculate(itemsObject));
