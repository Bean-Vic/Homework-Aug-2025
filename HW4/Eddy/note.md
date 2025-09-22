# 1. What is the DOM?
The DOM is the Document Object Model. It represents the HTML page as a tree of nodes that JavaScript can read and change.

# 2. How can you select an HTML element using JS?
You can use methods like document.getElementById, document.querySelector, or document.querySelectorAll.

# 3. What is a DOM event?
A DOM event is an action or occurrence in the browser, like a click, keypress, or page load, that JavaScript can respond to.

# 4. How do we register event handlers for a selected element?
We can use element.addEventListener("event", handler) to attach a function that runs when the event happens.

# 5. Explain event delegation. Why is it important?
Event delegation means attaching a single event listener on a parent element and handling events on its children through bubbling. It is important because it saves memory and works for dynamically added elements.

# 6. What is event propagation? How many phases are there? In what order does it occur?
Event propagation is the order in which events move through the DOM. There are three phases: capturing, target, and bubbling, in that order.

# 7. Explain event bubbling and event capturing.
In bubbling, the event starts at the target and bubbles up to parents. In capturing, the event moves from the root down to the target before reaching it.

# 8. What is an IIF
An IIFE is an Immediately Invoked Function Expression. It runs as soon as it is defined and helps avoid polluting the global scope.

# 9. What is the use of preventDefault method?
preventDefault() stops the browser’s default action, like stopping a form from submitting or a link from navigating.

# 10. Can you name some of the new ES6 features?
Some features are let and const, arrow functions, template literals, default parameters, destructuring, spread/rest operators, promises, classes, and modules.
