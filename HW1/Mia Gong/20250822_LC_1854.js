var maximumPopulation = function(logs) {
    const years = new Array(2051).fill(0);
    // 记录出生和死亡
    for (const log of logs) {
        years[log[0]]++;  // 出生年份：人数+1
        years[log[1]]--;  // 死亡年份：人数-1
    }
    let maxPopulation = years[1950];
    let resultYear = 1950;
    
    // 计算累积人口并找出最大值
    for (let i = 1951; i <= 2050; i++) {
        years[i] += years[i - 1];
        
        if (years[i] > maxPopulation) {
            maxPopulation = years[i];
            resultYear = i;
        }
    }
    
    return resultYear;
};