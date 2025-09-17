const mergeAndSortArrays = (arr1, arr2) => {
    const mergedMap = arr1.reduce((acc, item) => {
      acc[item.uuid] = { ...item, role: null };
      return acc;
    }, {});
  
    arr2.forEach(item => {
      mergedMap[item.uuid] = { ...mergedMap[item.uuid], ...item, name: mergedMap[item.uuid]?.name || null };
    });
  
    const mergedArr = Object.values(mergedMap);
  
    mergedArr.sort((a, b) => a.uuid - b.uuid);
  
    return mergedArr;
  };
  