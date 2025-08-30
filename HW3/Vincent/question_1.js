const items_object = [
    { quantity:1, price:200},
    { quantity:3, price:350},
    { quantity:5, price:400},
];

function double_qp(array_object) {
    const double_array = array_object.map(item => ({
        quantity: item.quantity*2,
        price: item.price*2
    }));

    return double_array;
}

function filter_qp(array_object) {
    const filtered_array = array_object.filter(item =>
        item.quantity > 2 && item.price > 300
    );

    return filtered_array;
}

function accumulate(array_object) {
    const sum = array_object.reduce((acc, value) => {
        acc.quantity += value.quantity;
        acc.price += value.price;
        return acc
    }, {quantity:0, price:0});
    return sum;
}

console.log("double the array")
console.log(double_qp(items_object));
console.log("-------------------")

console.log("filter the array")
console.log(filter_qp(items_object));
console.log("-------------------")

console.log("accumulate the array")
console.log(accumulate(items_object));
console.log("-------------------")