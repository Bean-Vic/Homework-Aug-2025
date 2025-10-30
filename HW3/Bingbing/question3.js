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

/*
  Implement a function to merge two arrays of objects based on `uuid`.

  - The first array has `uuid` and `name`.
  - The second array has `uuid` and `role`.
  - If a property does not exist for that `uuid`, fill it with null.
  - After merging, sort the result by `uuid` in ascending order.
*/

function mergeArrays(first, second) {
  // 1. Merge the two arrays into one temporary array
  const combined = [...first, ...second];

  // 2. Use reduce to build an object (key = uuid)
  const mapByUuid = combined.reduce((acc, obj) => {
    const { uuid, name = null, role = null } = obj;

    // If this uuid already exists in acc, update its properties
    acc[uuid] = {
      uuid,
      // name: acc[uuid]?.name ?? name,
      // role: acc[uuid]?.role ?? role
      name: (acc[uuid] && acc[uuid].name) || name,
      role: (acc[uuid] && acc[uuid].role) || role
    };

    return acc;
  }, {});

  // 3. Extract the values (merged array) and sort by uuid in ascending order
  return Object.values(mapByUuid).sort((a, b) => a.uuid - b.uuid);
}

console.log(mergeArrays(first, second));
