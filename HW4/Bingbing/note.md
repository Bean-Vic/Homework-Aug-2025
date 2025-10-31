1. **What is the DOM?**  
The DOM is the Document Object Model. It’s a tree structure that represents the HTML of a page. JavaScript can use it to read and change elements, attributes, styles, and content.

2. **How can you select an HTML element using JS?**  
We can use methods like `getElementById`, `getElementsByClassName`, `getElementsByTagName`, or the modern `querySelector` and `querySelectorAll`.

3. **What is a DOM event?**  
A DOM event is a signal that something happened in the page, like a click, a key press, or input. JavaScript can listen to it and react.

4. **How do we register event handlers for a selected element?**  
We use `addEventListener`. For example: `button.addEventListener("click", handler)`. It’s better than inline events because it supports multiple handlers.

5. **Explain event delegation. Why is it important?**  
Event delegation means we put one listener on a parent, and handle events from its children using `event.target`. It’s important because it saves memory and works for dynamically added elements.

6. **What is event propagation? How many phases?**  
Event propagation is how an event travels. There are three phases /ˈfeɪzɪz/: capturing (top down), target, and bubbling (bottom up). The order is capture → target → bubble.

7. **Explain event bubbling and capturing.**  
In bubbling, the event goes from the target up to the root. In capturing, it goes from the root down to the target. By default, most events bubble.

8. **What is an IIFE?**  
IIFE means Immediately Invoked Function Expression. It’s a function that runs as soon as it’s defined. It helps create a private scope and avoid polluting globals.

9. **What is the use of `preventDefault` method?**  
It stops the browser’s default behavior, like preventing a form from submitting or a link from navigating, while still keeping the event flow.

10. **Can you name some of the new ES6 features?**  
Yes, for example: `let` and `const`, arrow functions, template strings, destructuring, default parameters, rest and spread, classes, modules with `import` and `export`, and Promises.
