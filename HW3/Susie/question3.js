const first = [
    { uuid: 2, name: 'test' },
    { uuid: 5, name: 'test5' },
    { uuid: 3, name: 'test3' },
];
const second = [
    { uuid: 6, role: 'pm' },
    { uuid: 4, role: 'engineer' },
    { uuid: 1, role: 'manager' },
    { uuid: 2, role: 'associate' },
];

function merge(first, second) {
    const map = new Map();
    first.map(({ uuid, name }) => {
        map.set(uuid, { uuid, name, role: null });
    });
    second.map(({ uuid, role }) => {
        if (map.has(uuid)) {
            map.get(uuid).role = role;
        } else {
            map.set(uuid, { uuid, name: null, role });
        }
    });

    // sort uuid
    return Array.from(map.values()).sort((a, b) => a.uuid - b.uuid);
}

console.log(merge(first, second));
