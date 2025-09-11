# JavaScript DOM & ES6 Study Notes

## 1. What is DOM?

The Document Object Model, or DOM, is a representation of a web pages content in the form of objects, allowing developers to manipulate the content, structure, and styles of a web page.

## 2. How can you select an HTML element using JavaScript?

**Answer:** There are several methods to select HTML elements:

-1 `getElementById()` - This method returns the element that matches it's ID.

<!-- const $element = document.getElementById('my-id'); -->

- 2`getElementsByName()` - accepts a name which is the value of the name
  attribute of elements and returns a live NodeList of elements.

- 3 `getElementsByTagName()` - This method returns an HTMLCollection of all elements that match the specified tag name.
<!-- const $tagElements = document.getElementsByTagName('div'); -->
- 4`getElementByClassName(className):` - This method returns the **first element** that matches the specified class.
<!-- const $element = document.getElementByClassName('my-class'); -->
- 5`getElementsByClassName(className):` - This methods returns a HTMLCollection of all elements that match the specified class.
- 6`querySelector()` - Selects first element matching CSS selector
- 7`querySelectorAll(selector)`- This method returns a NodeList of all elements in the document that match a specified CSS selector.
<!-- const $links = document.querySelectorAll('a'); -->

you'll generally use the **querySelector or querySelectorAll** methods.
Since both of these methods accept any valid CSS selector, they are more flexible

## 3. What is a DOM event?

**Answer:** A DOM event is an action or occurrence in the browser (such as click, input, load, etc.) that JavaScript can listen to and respond to programmatically.

## 4. How do we register event handlers for a selected element?

**Answer:** There are three main ways to register event handlers:

1. **Inline HTML/Inline Event Handlers::**
   You can specify an event handler directly in your HTML markup using an event attribute, such as onclick, onload, onmouseover, etc.
   `<button onmouseover="myFunction()">Click me</button>`
   Using something like the inline event handler is usually frowned upon because it mixes up your HTML & JavaScript in the same file.
2. **Element Property:** `element.onclick = myFunction;`
You can assign an event handler to an element's event handler property in your JavaScript code.
This is similar to inline event handlers, but it separates your JavaScript from your HTML.
<!-- const $button = document.getElementById('myButton');
$button.onclick = function (event: Event) {
  alert('Button clicked!');
}; -->
3. **Event listener method:** `element.addEventListener("click", myFunction);`
      <!-- const $button = document.querySelector('button');
      function handleClick(event: Event) {
      alert('Button clicked!');
      } -->
   $button.addEventListener('click', handleClick);
   The `addEventListener()` method is generally preferred as it allows multiple handlers for the same event.
   The addEventListener method is more flexible, but also separates the HTML & JavaScript.

## 5. Explain event delegation. Why is it important?

**Answer:** Event delegation is a technique where you attach a single event listener to a parent element and handle events for its children using `event.target`.

**Why it's important:**

- **Efficiency:** Fewer event listeners compared to adding them directly to each child element
- **Dynamic elements:** Automatically handles events for dynamically added elements
- **Memory optimization:** Reduces memory usage and improves performance

## 6. What is event propagation? How many phases are there? In what order does it occur?

**Answer:** Event propagation describes how events move through the DOM tree. It consists of three phases:

1. **Capturing phase:** Event travels from the root down to the target element
2. **Target phase:** Event reaches the target element
3. **Bubbling phase:** Event travels back up from the target to the root

## 7. Explain event bubbling and event capturing.

**Answer:**

- **Bubbling:** After the target event is triggered, the event bubbles up from the target element to its ancestors (child → parent → grandparent)
- **Capturing:** The event starts from the root and travels down to locate the specific target element (root → parent → child)

By default, event listeners are registered for the bubbling phase. You can specify capturing by passing `true` as the third parameter to `addEventListener()`.

## 8. What is an IIFE?

**Answer:** IIFE stands for Immediately Invoked Function Expression. It's a function that runs immediately after it's defined.

**Syntax:** `(function() { /* code */ })();`

**Benefits:**

- Runs instantly upon definition
- Avoids polluting the global scope
- Creates a private scope for variables

## 9. What is the use of preventDefault method?

**Answer:** `preventDefault()` is a method that stops the default browser behavior for an event.

**Common use cases:**

- Preventing form submission: `event.preventDefault()`
- Stopping link navigation
- Preventing right-click context menu
- Blocking keyboard shortcuts

## 10. Can you name some of the new ES6 features?

**Answer:** ES6 introduced many powerful features:

- **Variable declarations:** `let` and `const` (block-scoped)
- **Arrow functions:** `() => {}` (shorter syntax, lexical `this`)
- **Template literals:** `` `Hello ${name}` `` (string interpolation)
- **Destructuring:** `{a, b} = obj` or `[x, y] = array`
- **Function parameters:** Default, rest (`...args`), and spread (`...array`)
- **Classes:** Object-oriented syntax with `class` keyword
- **Modules:** `import` and `export` statements
- **Promises:** Better asynchronous programming with `.then()` and `.catch()`
