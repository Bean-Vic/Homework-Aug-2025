/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function (currentState) {
  let result = [];

  for (let i = 1; i < currentState.length; i++) {
    // console.log("currentState",currentState)
    let newarray = currentState.split("");
    // console.log("new",newarray)
    if (currentState[i - 1] === "+" && currentState[i] === "+") {
      newarray[i - 1] = "-";
      newarray[i] = "-";
      //  console.log(newarray)
      result.push(newarray.join(""));
      // console.log(result)
    }
  }
  return result;
};
