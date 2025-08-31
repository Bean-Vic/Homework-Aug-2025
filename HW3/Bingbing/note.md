1. **What is dynamic typing?**
   In JavaScript you don’t have to say the type of a variable. A variable can start as a number, and later you can assign a string. The type is decided while the program is running.

2. **Difference between var, let, and const?**
   `var` is the old one, it’s function scoped and can be redeclared /ˌriːdɪˈklɛrd/. `let` and `const` are block scoped. `let` can be reassigned, `const` cannot.

3. **What is immutability?**
   Immutability means once a value is created, you can’t change it. Numbers, strings, booleans are immutable. Objects and arrays can be changed.

4. **Difference between == and ===?** (double equals” and “triple equals”)
   `==` does type conversion before comparing. `===` checks both value and type, so it’s safer and usually recommended.

5. **Examples of falsy values?**
   False, zero, empty string, null, undefined, and NaN. Everything else counts as truthy.

6. **What is hoisting?**
   JavaScript moves declarations /ˌdɛkləˈreɪʃən/ to the top of the scope. With `var`, you can access it but it’s undefined. With `let` and `const`, you can’t use them before declaring.

7. **What is variable shadowing?**
   When a variable in an inner block has the same name as one in the outer block, the inner one temporarily hides the outer one.

8. **Three ways to declare functions?**
   The first is the classic function declaration, like function foo(){}—this one gets hoisted so I can call it before it’s defined.
   The second is a function expression, where I assign an anonymous function to a variable, like const foo = function(){}.
   And the third is the arrow function, const foo = () => {}, which is shorter and doesn’t have its own this, so it’s really handy in callbacks.

9. **What is a callback function?**
   A callback is a function you pass into another function as an argument, so it runs later. Like in `setTimeout` or array methods.

10. **Primitive vs reference types?**
    Primitive types like numbers and strings are stored as values. Reference types like objects and arrays are stored by reference, so copies point to the same memory.

11. **Array for loop vs forEach?**
    A for loop gives full control, you can break or continue. forEach is cleaner to write, but you can’t break out early.

12. **Array map vs forEach?**
    forEach just runs a function for each element. map creates a new array with the returned values.

13. **Slice vs splice?** (/splaɪs/)
    Slice copies part of an array and doesn’t change the original. Splice changes the array itself, removing or adding items.

14. **What is 'use strict'?**
    It’s a mode that makes JavaScript more strict, like not allowing undeclared variables, which helps catch mistakes.

15. **What is the arguments object?**
    Inside a normal function, there’s an `arguments` object. It holds all the values passed into the function, even if they’re not listed as parameters./pəˈræmɪtərz/
