# JS 1 Study Notes

## Question 1: What is dynamic typing?

**Answer:** Variables don't have fixed types. A variable can hold a number now and a string later. Type checks and conversions happen at runtime, which is flexible but can cause subtle bugs if you rely on implicit coercion.

## Question 2: Explain the difference between var, let, & const.

**Answer:**

- **var**: Function-scoped, hoisted and initialized to undefined, allows re-declaration in the same scope; ignores block scope.
- **let**: Block-scoped, hoisted but in the TDZ (temporal dead zone) until declaration; no re-declaration in same scope.
- **const**: Like let but must be initialized and cannot be reassigned (note: the object it points to can still be mutated).

## Question 3: What is immutability? What data types in JS are immutable?

**Answer:** Immutability means a value cannot be changed after it's created. In JavaScript, the following are immutable primitives: number, string, boolean, null, undefined, symbol, bigint. These can only be replaced, not modified.

## Question 4: What is the difference between == and ===?

**Answer:**

- **=== (strict equality)**: No type coercion;
- **== (loose equality)**: Performs implicit type coercion before comparison; can be surprising.

## Question 5: What are some examples of falsy values in JS?

**Answer:** The falsy values are: false, 0, -0, 0n, "" (empty string), null, undefined, NaN.

## Question 6: Explain hoisting in JavaScript.

**Answer:** Declarations are conceptually moved to the top of their scope before code runs.

- **var** and **function declarations** are hoisted; var is initialized to undefined, functions are hoisted with their body.
- **let**, **const**, and **class** are hoisted but not initialized (TDZ) until their line executes.
- **Function expressions** and **arrow functions** are not hoisted as functions; only the variable name is hoisted.

## Question 7: Explain variable shadowing in Javascript.

**Answer:**
Variable Shadowing occurs when we declare the same name for the variable in the
inner and outer scope.
The inner variable will hide or override the outer variable.
The outer variable will become inaccessible in the inner scope.

With var, shadowing is function-scoped (blocks don't create scope). With let/const, blocks do create scope.

## Question 8: What are 3 ways to declare functions? What is their syntax?

**Answer:**

**1. Function Declaration:**

```js
function add(a, b) {
  return a + b;
}
```

Hoisted (with body), has a name, good for recursion.

**2. Function Expression:**

```js
const add = function (a, b) {
  return a + b;
};
```

Not hoisted as a function; assigned to a variable.

**3. Arrow Function:**

```js
const add = (a, b) => a + b;
```

## Question 9: What is a callback function?

**Answer:** A function you pass as an argument to be invoked later (after an event, timer, async completion, etc.). Many JS APIs use them.

```js
setTimeout(() => console.log("done"), 1000);
[1, 2, 3].forEach((n, i) => console.log(n, i));
```

## Question 10: What's the difference between primitive data types and reference data types in JS?

**Answer:**

- **Primitives**: Stored as values. Assigning/copying creates a new independent value. Types: number, string, boolean, null, undefined, symbol, bigint.
- **Reference types**: Objects/arrays/functions are stored as references. Assigning/copying the variable copies the reference (two variables point to the same object).

## Question 11: What's the difference between array for loop and forEach?

**Answer:**

- **for loop**: Most control (break, continue, return from surrounding function); can be faster; flexible indices.
- **forEach**: Cleaner iteration; cannot break/continue; ignores await in the callback (doesn't pause the outer function).

## Question 12: What's the difference between array map and forEach?

**Answer:**

- **forEach**: Run a function once per element for side-effects (logging, mutating something external, updating DOM, etc.); returns undefined; can mutate original object.
- **map**: Transforms each element and returns a new array of the same length; pure transformation.

## Question 13: What is the difference between array slice and splice?

**Answer:**

- **slice(start, end?)**: Non-mutating; returns a shallow copy of a segment.
- **splice(start, deleteCount, ...items)**: Mutates the original array by removing/replacing/inserting elements; returns the removed items.

## Question 14: What is 'use strict'? What are the major effects that it has?

**Answer:** Enables strict mode (file or function scope):

- Converts many silent failures to errors (e.g., assigning to undeclared vars).
- `this` inside functions is undefined (not window) when not called as a method.
- Disallows duplicate parameter names, octal literals, with statement.
- Restricts delete on variables/functions/params.
- `eval` does not leak bindings into the enclosing scope.
- Prefer modules (`<script type="module">`), which are strict by default.

## Question 15: What is an arguments object?

**Answer:** An array-like object available inside non-arrow functions that contains the passed arguments.

- Has length and indexed entries, but not real array methods.
- In non-strict mode, it's linked to named parameters (mutations reflect each other). In strict mode, it's decoupled.
- Modern JS prefers rest parameters.
