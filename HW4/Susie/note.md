1. What is the DOM?
Document Object Model. It’s an interface that represents the structure of a webpage as a tree of objects, allowing people to modify it by using JS.

2. How can you select an HTML element using JS?
QuerySelectors, getElementBy(Id, className, tagName)

3. What is a DOM event?
It’s an action that triggered on webpage that can be detected by JS.

4. How do we register event handlers for a selected element?
We use addEventListener() method. It allows us to listen for the specified type of event and execute functions when event triggered.

5. Explain event delegation. Why is it important?
Event delegation is a technique where we attach a single event listener to a parent element instead of each child. When an event bubbles up, the parent handles it. It’s important because it saves memory, works for dynamically added elements, and makes code cleaner.

6. What is event propagation? How many phases are there? In what order does it
occur?
Event propagation is the process that shows how an event goes from the top of the DOM, down to the target, and goes back up to the top when it occurs. 3 phases: capture phase, target phase, bubbling phase.

7. Explain event bubbling and event capturing.
Event bubbling means the event starts from the target element and goes up through its ancestors, while event capturing means the event is checked from the top (document) down to the target before it fires.

8. What is an IIF
It’s a function that is invoked when it is defined. 
Use it when you want to do initiation code, or encapsulation avoid conflicts with other scripts.

9.  What is the use of preventDefault method?、
This method is used to stop the browser’s default behavior for an event, like preventing a form from submitting or a link from navigating.

10.  Can you name some of the new ES6 features?
Let, const, arrow functions, spread operator, destructuring, map& set, template literals etc.