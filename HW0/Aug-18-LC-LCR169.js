/**
 * @param {string} arr
 * @return {character}
 */
var dismantlingAction = function(arr) {
    let newa = arr.split('')
    let newmap = {}
    for(let char of newa){
        newmap[char] = (newmap[char]||0)+1
    }
    for(let char of newa){
        if(newmap[char] < 2){
            return char
        }
    }
    return " "
};