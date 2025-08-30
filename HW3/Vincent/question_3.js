const first = [
    {uuid: 2, name: "test"},
    {uuid: 5, name: "test5"},
    {uuid: 3, name: "test3"}
];

const second = [
    {uuid: 6, role: "pm"},
    {uuid: 4, role: "engineer"},
    {uuid: 1, role: "manager"},
    {uuid: 2, role: "associate"}
]

function merge_array(array_name, array_role) {
    const merged = [...array_name, ...array_role].reduce((acc, item) => {
        acc[item.uuid] = {...acc[item.uuid], ...item};
        return acc;
    }, {});

    return Object.values(merged).sort((a,b) => a.uuid - b.uuid);
}

console.log(merge_array(first, second));