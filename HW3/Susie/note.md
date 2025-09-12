1. What is dynamic typing?
It defines types are not specified when they declared, it’s assigned when it assigned a value.

2. Explain the difference between var, let, & const.
1)	var is function scope, allowed to be hoisted and re-declared
2)	let and const is block scope, allowed to be hoisted but not initialized
3)	let is re-assignable, but const is not re-assignable

3. What is immutability? What data types in JS are immutable?
The structure or data cannot be changed.
What data types are immutable?
All primitive data types, their data type cannot be changed once they are created.

4. What is the difference between == and ===?
They both are comparison operator, but === is stricter, not only compare the operands value, but also compare its data type.

5. What are some examples of falsy values in JS?
Null, undefined, false, 0, “”, NaN

6. Explain hoisting in JavaScript.
It’s a default behavior of moving declarations to the top of the current scope before execution.

7. Explain variable shadowing in Javascript.
It happens when a variable declared within a certain scope has the same name as a variable declared in an outer scope.

8. What are 3 ways to declare functions? What is their syntax?
Arrow function: var fn = () => {}
Function declaration: function fn() {}
Function expression: var fn = function () {}

9.  What is a callback function?
It's a function passed as an argument to another function and executed later, commonly used in asynchronous 

10. What’s the difference between primitive data types and reference data types in
JS?
Primitive Data Types: imutable, stored by value. string, number, boolean, null, undefined, bigint, symbol.
Copy a primitive creates a new independent value
Reference Data Types: mutable, stored by reference. objects, arrays, functions
Copy a reference variable points to the same memory location.

11.  What’s the difference between array for loop and forEach?
for loop: can break or continue; more flexible, works with conditionals, reverse loops
forEach: executes a callback for each element; cannot break/continue; always  iterates entire array

12.  What’s the difference between array map and forEach?
map: executes callback and returns a new array; doesn't modify original array; used when we want to tranform data
forEach: executes callback for each element; returns undefined; used when we want side effects(updating variables)

13.  What is the difference between array slice and splice?
slice: returns a new array; extracts from start to end-1
splice: modifies original array; can remove, replace, or insert elements

14.  What is ‘use strict’? What are the major effects that it has?
It’s a literal expression that used to make JS execute in strict mode.
Effects: 
1)	cannot use undeclared variables, obj, functions
2)	cannot have duplicate function name
3)	cannot delete variables or obj

15.   What is an arguments object?
It's an array like object avaible inside all non-arrow functions, it contains the values of all arguments passed to the funtion, regardless of parameters defined.
   