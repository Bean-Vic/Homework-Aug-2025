const string = 
" Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
/*
  Given the string, implement a function to:

  1. Remove all the non-alphabet characters.
  2. Remove extra spaces in the string.
  3. Convert the string to all lowercase.
*/

function cleanString(str) {
  return str
    .trim()                               // remove spaces at start/end
    .split(' ')                           // split into words
    .filter(word => word !== '')          // remove empty strings
    .map(word => 
      word
        .split('')                        // split word into chars
        .filter(ch => /[a-zA-Z]/.test(ch))// keep only letters
        .reduce((acc, ch) => acc + ch, '')// join chars back
        .toLowerCase()                    // to lowercase
    )
    .reduce((acc, word) => acc + ' ' + word); // join words back into a sentence
}

console.log(cleanString(string));
