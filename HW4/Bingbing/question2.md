## Question 2

### Consider the following code snippet. Assume that it works and was imported into a .html file with the proper button IDs.


for (var i = 1; i <= 3; i++) {
  document.getElementById(`btn${i}`).addEventListener('click', function () {
    console.log(`you just clicked #${i} button`);
  })
}

### a. What is the console output when the user clicks on “Button 3” and why?


Output: ‘you just clicked #4 button’

Why: var is function-scoped. The click handler closes over the same i variable.
After the loop finishes, i === 4, so all handlers log 4, regardless of which button was clicked.

### b. How would we fix the issue before ES6? How do we fix it after ES6?

- Before ES6 (ES5): capture i in a new scope

- IIFE

for (var i = 1; i <= 3; i++) {
  (function(iCopy) {
    document.getElementById('btn' + iCopy).addEventListener('click', function () {
      console.log('you just clicked #' + iCopy + ' button');
    });
  })(i);
}

Here we use an Immediately Invoked Function Expression (IIFE).
Each time the loop runs, we call the function right away with the current i as iCopy.
This creates a new scope and a new variable iCopy for each iteration.
The event handler then closes over iCopy, which has the correct value for that iteration, instead of the shared i.

- bind 

function handler(idx) {
  console.log('you just clicked #' + idx + ' button');
}
for (var i = 1; i <= 3; i++) {
  document.getElementById('btn' + i).addEventListener('click', handler.bind(null, i));
}

Here we define a separate function handler(idx).
When adding the event listener, we use bind to create a new function where the first argument idx is permanently set to the current i.
So for each iteration, a new function is created with its own bound value of i.
That way, when the button is clicked, it prints the correct index.

- After ES6: use block-scoped let (per-iteration binding)

for (let i = 1; i <= 3; i++) {
  const btn = document.getElementById(`btn${i}`);
  btn.addEventListener('click', () => {
    console.log(`you just clicked #${i} button`);
  });
}

With let, each iteration gets its own i, so every handler correctly remembers its own index.