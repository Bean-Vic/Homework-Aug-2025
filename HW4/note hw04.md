1. What is the DOM?
The DOM stands for Document Object Model. It’s basically a tree-like structure that the browser creates from your HTML, where every element, attribute, and piece of text becomes a node you can access and manipulate with JavaScript. It’s what lets you change things on the page dynamically, like updating text, changing styles, or adding elements.

2. How can you select an HTML element using JS?
You can select elements in a few ways. The older ones are document.getElementById('id') and document.getElementsByClassName('class'). The more modern and flexible methods are document.querySelector() for a single element and document.querySelectorAll() for multiple elements, which work with CSS selectors.

3. What is a DOM event?
A DOM event is any kind of interaction or occurrence that happens in the browser. For example, clicking a button, typing into an input field, or when the page finishes loading—all of these trigger events. JavaScript can listen for these events and then run code in response.

4. How do we register event handlers for a selected element?
The modern way is to use addEventListener. For example, button.addEventListener('click', () => { console.log('clicked'); });. This attaches a function that runs when the event happens. There are also older approaches like setting onclick directly on the element, but addEventListener is preferred since it allows multiple handlers and more control.

5. Explain event delegation. Why is it important?
Event delegation is when instead of adding event listeners to multiple child elements, you add a single listener to a parent element and handle events as they bubble up. For example, if you have a long list of items, you can put one click handler on the <ul> and check which <li> was clicked. It’s important because it improves performance and works for dynamically added elements.

6. What is event propagation? How many phases are there? In what order does it occur?
Event propagation is the process by which events move through the DOM tree. There are three phases: the capturing phase, the target phase, and the bubbling phase. First, the event travels down from the root to the target (capturing), then it hits the target element, and finally it bubbles back up to the root.

7. Explain event bubbling and event capturing.
In event bubbling, the event starts at the target element and moves upward to its ancestors. In capturing, the event goes from the top ancestor down to the target before firing. By default, most event listeners in JavaScript use bubbling, but you can choose capturing by passing true as the third argument in addEventListener.

8. What is an IIFE?
IIFE stands for Immediately Invoked Function Expression. It’s a function that runs as soon as it’s defined. You wrap it in parentheses and then call it right away, like this:
(function() {
  console.log('This runs immediately');
})();

9. What is the use of preventDefault method?
“preventDefault is used to stop the browser’s default action for an event. For example, when you submit a form, the default is to reload the page—you can call event.preventDefault() to stop that and handle the submission with JavaScript instead. It’s also useful for things like stopping links from navigating away.

10. Can you name some of the new ES6 features?
ES6 introduced a lot of helpful features. Some of the big ones are: let and const for block-scoped variables, arrow functions for shorter syntax, template literals with backticks for string interpolation, default parameters, destructuring for arrays and objects, spread and rest operators, classes for object-oriented programming, and promises for asynchronous code.