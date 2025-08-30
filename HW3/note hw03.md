1. What is dynamic typing?
Dynamic typing means you don’t need to declare variable types ahead of time. A variable can hold a number at one point and later hold a string or an object. The type is determined at runtime instead of being fixed.

2. Explain the difference between var, let, & const.
var is function-scoped and allows redeclaration, which can cause issues. let is block-scoped and can be reassigned but not redeclared in the same scope, so it’s safer. const is also block-scoped, but its value can’t be reassigned.

3. What is immutability? What data types in JS are immutable?
Immutability means once a value is created, it cannot be changed. In JavaScript, primitive data types—like numbers, strings, booleans, null, undefined, and symbols—are immutable. Objects and arrays are mutable, meaning their contents can be modified.

4. What is the difference between == and ===?
== checks for equality after type coercion, so 5 == '5' is true. === is strict equality, which means both value and type must match, so 5 === '5' is false.

5. What are some examples of falsy values in JS?
Falsy values are values that evaluate to false in a boolean context. They include: false, 0, "" or empty string, null, undefined, and NaN

6. Explain hoisting in JavaScript.
Hoisting is JavaScript’s behavior of moving declarations to the top of their scope before execution. For example, function declarations and variables declared with var are hoisted, but let and const are hoisted in a ‘temporal dead zone,’ meaning you can’t use them until after their declaration

7. Explain variable shadowing in Javascript.
Variable shadowing happens when a variable declared in an inner scope has the same name as one in an outer scope. The inner variable temporarily overrides access to the outer one inside its block.

8. What are 3 ways to declare functions? What is their syntax?
The first way is to use function followed by its name and argument, then we use a curly bracket to wrap up the code block. The second way is to assign a function to a variable. You can use const or let for the variable, and the function itself can be anonymous or named. And the third way is the modern arrow function. You use the arrow => syntax

9. What is a callback function?
A callback is a function passed as an argument to another function, and it’s executed later. For example, in setTimeout(() => console.log('done'), 1000), the arrow function is a callback that runs after one second

10. What’s the difference between primitive data types and reference data types in
JS?
Primitives—like numbers, strings, booleans, null, undefined, symbols, and BigInts—are stored directly and compared by value. Reference types—like objects, arrays, and functions—are stored as references, meaning two variables can point to the same object in memory.

11. What’s the difference between array for loop and forEach?
A for loop gives you more control—you can break out early, skip indices, or go backward. forEach is a method on arrays that runs a callback for each element, but you can’t break out of it early. It’s more concise but less flexible.

12. What’s the difference between array map and forEach?
Both iterate over arrays, but map creates a new array with transformed values, while forEach just executes a function for each element and doesn’t return anything useful. Use map when you need a new array, and forEach when you just want to perform an action.

13. What is the difference between array slice and splice?
slice returns a shallow copy of part of an array without changing the original. splice actually modifies the array by adding or removing elements. For example, arr.slice(1, 3) gives you a copy of elements 1–2, but arr.splice(1, 2) removes them from the array.

14. What is ‘use strict’? What are the major effects that it has?
'use strict' is a directive that makes JavaScript run in a stricter mode. It prevents some silent errors, like accidentally creating global variables, and it makes assignments to read-only properties throw errors. It also reserves some keywords for future use. It’s generally recommended because it enforces safer coding.

15. What is an arguments object?
The arguments object is an array-like object available inside traditional functions. It holds all the arguments passed to the function, even if they weren’t declared as parameters. It’s not available in arrow functions, and nowadays the rest operator ...args is often preferred.
