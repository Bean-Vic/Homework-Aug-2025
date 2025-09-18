# 1. What is dynamic typing?
JavaScript is dynamically typed, which means variables do not have fixed types. The type is decided at runtime based on the value assigned.

# 2. Explain the difference between var, let, & const.
var is function-scoped and can be re-declared. let is block-scoped and can be reassigned but not re-declared in the same scope. const is block-scoped and cannot be reassigned.

# 3. What is immutability? What data types in JS are immutable?
Immutability means the value cannot be changed after creation. In JavaScript, primitive types like string, number, boolean, null, undefined, symbol, and bigint are immutable.

# 4. What is the difference between == and ===?
== checks equality with type coercion, while === checks equality without type conversion, meaning both value and type must match.

# 5. What are some examples of falsy values in JS?
Falsy values are false, 0, "" (empty string), null, undefined, and NaN.

# 6. Explain hoisting in JavaScript.
Hoisting means variable and function declarations are moved to the top of their scope during compilation. var variables are hoisted as undefined, while let and const are hoisted but not initialized.

# 7. Explain variable shadowing in Javascript.
Variable shadowing happens when a variable in a local scope has the same name as one in an outer scope, hiding the outer one within that block.

# 8. What are 3 ways to declare functions? What is their syntax?
Function declaration:
function add(a, b) { return a + b; }

Function expression:
const add = function(a, b) { return a + b; };

Arrow function:
const add = (a, b) => a + b;

# 9. What is a callback function?
A callback is a function passed as an argument to another function and executed later, often after an operation is complete.

# 10. What’s the difference between primitive data types and reference data types in JS?
Primitive types store actual values directly. Reference types, like objects and arrays, store a reference to the memory location of the value.

# 11. What’s the difference between array for loop and forEach?
A for loop gives more control, like breaking early. forEach is simpler to use but cannot be broken out of.

# 12. What’s the difference between array map and forEach?
forEach runs a function on each element but returns undefined. map creates and returns a new array with the transformed results.

# 13. What is the difference between array slice and splice?
slice returns a shallow copy of part of the array without changing the original. splice changes the array by adding or removing elements.

# 14. What is ‘use strict’? What are the major eﬀects that it has?
'use strict' is a directive that makes JavaScript run in strict mode. It prevents using undeclared variables, disallows duplicate parameter names, and makes assignments to read-only properties throw errors.

# 15. What is an arguments object?
The arguments object is an array-like object available inside functions that contains all the arguments passed to that function.
