// a. What is the console output when the user clicks on “Button 3” and why?
// you just clicked #4 button
// because var is function-scoped,  so the value of i is 4 after the loop ends, and all event listeners reference the same i variable

// b. How would we fix the issue before ES6? How do we fix it after ES6?
// before ES6, we can use an IIFE to create a closure that captures the current value of i
// after ES6, we can use let instead of var to create a block-scoped variable