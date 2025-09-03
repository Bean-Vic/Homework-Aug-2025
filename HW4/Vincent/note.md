# JavaScript DOM & ES6 Study Notes

## 1. What is DOM?

**Answer:** The Document Object Model (DOM) is a tree-like representation of HTML that allows JavaScript to access and manipulate the structure, style, and content of web pages dynamically.

## 2. How can you select an HTML element using JavaScript?

**Answer:** There are several methods to select HTML elements:
- `getElementById()` - Selects element by ID
- `getElementsByClassName()` - Selects elements by class name
- `getElementsByTagName()` - Selects elements by tag name
- `getElementsByName()` - Selects elements by name attribute
- `querySelector()` - Selects first element matching CSS selector
- `querySelectorAll()` - Selects all elements matching CSS selector

## 3. What is a DOM event?

**Answer:** A DOM event is an action or occurrence in the browser (such as click, input, load, etc.) that JavaScript can listen to and respond to programmatically.

## 4. How do we register event handlers?

**Answer:** There are three main ways to register event handlers:

1. **Inline HTML:** `<button onclick="myFunction()">Click me</button>`
2. **Property assignment:** `element.onclick = myFunction;`
3. **Event listener method:** `element.addEventListener("click", myFunction);`

The `addEventListener()` method is generally preferred as it allows multiple handlers for the same event.

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

## 7. Explain event bubbling and event capturing

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

## 9. What is the use of preventDefault method

**Answer:** `preventDefault()` is a method that stops the default browser behavior for an event.

**Common use cases:**
- Preventing form submission: `event.preventDefault()`
- Stopping link navigation
- Preventing right-click context menu
- Blocking keyboard shortcuts

## 10. Can you name some of the new es6 features?

**Answer:** ES6 introduced many powerful features:

- **Variable declarations:** `let` and `const` (block-scoped)
- **Arrow functions:** `() => {}` (shorter syntax, lexical `this`)
- **Template literals:** `` `Hello ${name}` `` (string interpolation)
- **Destructuring:** `{a, b} = obj` or `[x, y] = array`
- **Function parameters:** Default, rest (`...args`), and spread (`...array`)
- **Classes:** Object-oriented syntax with `class` keyword
- **Modules:** `import` and `export` statements
- **Promises:** Better asynchronous programming with `.then()` and `.catch()`