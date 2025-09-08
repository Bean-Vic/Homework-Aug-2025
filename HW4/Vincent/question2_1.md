# Question 2.1 - JavaScript Closure and Scope Analysis

## Part A: Console Output Analysis

**Question:** What is the console output when the user clicks on “Button 3” and why?

### Answer:

**Console Output:** `you just clicked #4 button`

Why: Because var is function-scoped, not block-scoped. After the loop finishes, i = 4, and all event handlers “close over” the same variable i. So no matter which button you click, it always prints 4.

---

## Part B: Solutions to Fix the Issue

**Question:** How do we fix the issue?

### Solution 1: Pre-ES6 Approach (IIFE)

Use an Immediately Invoked Function Expression (IIFE) to capture the current value of `i` in each iteration:

**How it works:** The IIFE creates a new function scope for each iteration, and the parameter `index` captures the current value of `i`.

### Solution 2: ES6+ Approach (Block Scoping)

Replace `var` with `let` in the for loop:

**How it works:** The `let` keyword creates block-scoped variables, so each iteration of the loop gets its own unique `i` variable, preserving the correct value for each event handler.
