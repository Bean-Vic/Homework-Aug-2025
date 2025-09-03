var wordPattern = function(pattern, s) {
    const words = s.split(" "); // 按空格拆分 split by space
    if (pattern.length !== words.length) return false;

    const mapPW = new Map(); // pattern -> word
    const mapWP = new Map(); // word -> pattern

    for (let i = 0; i < pattern.length; i++) {
        let p = pattern[i], w = words[i];

        if (mapPW.has(p) && mapPW.get(p) !== w) return false;
        if (mapWP.has(w) && mapWP.get(w) !== p) return false;

        mapPW.set(p, w);
        mapWP.set(w, p);
    }
    return true;
};
