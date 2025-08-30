const itemsObject = [
{ quantity: 1, price: 200 },
{ quantity: 3, price: 350 },
{ quantity: 5, price: 400 },
];
function doubleitem(array) {
    return array.map(item => {
        return {
            quantity: item.quantity * 2,
            price: item.price * 2
        };
    });
}
function filteritem(array) {
    return array.filter(item => item.quantity>2 && item.price>300);
    }
function totalvalue(array) {
    return array.reduce((total,item) => {
        return total+(item.quantity*item.price);
    },0);
}
console.log(doubleitem(itemsObject));
console.log(filteritem(itemsObject));
console.log(totalvalue(itemsObject));
const string =
" Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
function cleanstring(str) {
    return str.replace(/[^a-zA-Z ]/g,"").replace(/\s+/g," ").toLowerCase().trim();
}
console.log(cleanstring(string));

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

function mergearray(array_1, array_2) {
    const everyuuid = [...array_1.map(item => item.uuid), ...array_2.map(item => item.uuid)];
    const remove_duplicate = everyuuid.filter((uuid,index) => everyuuid.indexOf(uuid)===index);
    const merged = remove_duplicate.map(id => {
    let name;
    let role;
    if (array_1.find(obj => obj.uuid === id)) {
        name = array_1.find(obj => obj.uuid === id).name;
    }
    else {
        name = null
    }
    if (array_2.find(obj => obj.uuid === id)) {
        role = array_2.find(obj => obj.uuid === id).role;
    }
    else {
        role = null
    }
    return {
        uuid: id,
        name: name,
        role: role
    };
    });
    return merged.sort((a, b) => a.uuid - b.uuid);
}
console.log(mergearray(first, second));