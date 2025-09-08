for (let i = 1; i <= 3; i++) {
  document.getElementById(`btn${i}`).addEventListener("click", function () {
    console.log(`you just clicked #${i} button`);
  });
}

// Question 2.1 - JavaScript Closure and Scope Analysis
//What is the console output when the user clicks on “Button 3” and why?

// **Console Output:** `you just clicked #4 button`

// Why: Because var is function-scoped, not block-scoped.
// The for loop runs synchronously and completes almost instantly
// var i has function scope, so there's only one i variable shared by all event listeners
// After the loop finishes, i = 4, when any button is clicked,
// the event handler function executes and looks up the current value of i,
//  So no matter which button you click, it always prints 4.

// Solution 1:
// Pre-ES6 Approach (IIFE)

// Use an Immediately Invoked Function Expression (IIFE) to
// capture the current value of `i` in each iteration:

// **How it works:**
for (var i = 1; i <= 3; i++) {
  (function (index) {
    document
      .getElementById(`btn${index}`)
      .addEventListener("click", function () {
        console.log(`you just clicked #${index} button`);
      });
  })(i);
}
// The IIFE creates a new function scope for each iteration,
// and the parameter `index` captures the current value of `i`.

//Solution 2: ES6+ Approach (Block Scoping)

// Replace `var` with `let` in the for loop:

// **How it works:** The `let` keyword creates block-scoped variables,
// so each iteration of the loop gets its own unique `i` variable,
//preserving the correct value for each event handler.
for (let i = 1; i <= 3; i++) {
  document.getElementById(`btn${i}`).addEventListener("click", function () {
    console.log(`you just clicked #${i} button`);
  });
}
