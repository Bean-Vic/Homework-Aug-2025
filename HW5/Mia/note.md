1. What is the difference between innerHTML and textContent?

**innerHTML** parses HTML strings and inserts them as DOM nodes, which triggers reflow and returns the full markup including tags.
**textContent** only inserts plain text without any HTML parsing, making it faster and safer. It returns just the text content without any markup.
**Use innerHTML when you need to insert HTML elements, and textContent when you only need to display plain text.**

2. What are the diﬀerences between call, apply & bind?
   call, apply, and bind are methods that allow you to set the “this” context of a function.
   **call**: invokes the function with a given 'this' context and arguments provided one by one.
   **apply**:invokes the function with a given 'this' context and arguments provided as an array.
   **bind**: returns a new function with the given 'this' context and optional arguments. **It does not immediately invoke the function.**

3. Explain the this keyword in JavaScript.
   The this keyword references the object that is currently calling the function. By default, it points to the global window object in browsers.
   You can explicitly set this using call, apply, or bind methods.
   Arrow functions don't have their own this - they capture it from the surrounding lexical scope. In strict mode, this defaults to undefined instead of the global object.
   **When a function is called with call, apply, or bind, this is explicitly set to the first argument provided to these methods.**
   The key is remembering that this depends on how the function is called, not where it's defined.

4. What does the event loop do? What data structures does it use?
   The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded.

- Call Stack: Where the code is executed.
- Heap: Used for memory allocation.
  **Web APIs** for async operations like setTimeout
- **callback queue** for completed async tasks.Holds messages or tasks that are waiting to be processed.
  The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first task from the callback queue and pushes it onto the call stack for execution.

5. What is the callback queue?
   The callback queue is a FIFO data structure that holds callbacks from completed asynchronous tasks like setTimeout, DOM events, and network requests. These callbacks wait in the queue until the call stack is empty. The event loop only moves tasks from the callback queue to the call stack after all microtasks are finished. This ensures that asynchronous operations don't block the main thread while maintaining proper execution order.

6. What are closures?
   Closures are functions that have access to variables in their outer (enclosing) lexical scope, even after the outer function has returned.

7. What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?
   JavaScript is single-threaded, but achieves asynchronous behavior through Web APIs and the event loop. Long-running operations like timers, network requests, and file I/O are handled outside the main call stack by browser APIs or Node.js APIs. When these operations complete, their callbacks are queued and executed when the main thread is free. JavaScript provides several mechanisms for async code: callbacks, Promises, async/await syntax, event listeners, and Web Workers for true parallel processing.
8. What is async & await? How do we use them?
   Async/await is syntactic sugar that makes Promise-based code look synchronous. The **async** keyword marks a function as asynchronous and makes it return a Promise. The **await** keyword pauses execution inside an async function until the Promise resolves, without blocking the main thread. For optimal performance, start multiple independent Promises first, then await them. Use await sequentially only when operations depend on each other. Always wrap await calls in try/catch blocks for proper error handling.

9. How many HTTP methods are there? Explain each one.
   GET: Retrieve data from the server
   POST: Send data to the server
   PUT: Update existing data on the server
   DELETE: Remove data from the server
   PATCH: Partially update data on the server
   HEAD: Retrieve only the headers.like GET but returns only headers.
   OPTIONS: Describe the communication options for the target resource

   What is the diﬀerence between GET and POST? What about POST and PUT?
   **GET**: request data from a specific resource(should not have a body )
   -Typing the url in the browser sends a GET request.
   **POST**:send data to a server to create a resource
   -Can be used to send a data body that identifies resources that you want to retrieve.

-**PUT** requests are idempotent, sending the same put request multiple times always has the same result -**POST** requests are not idempotent and can have different effects depending on the specific circumstances.

10. What is a Promise?
    Promises are objects representing the eventual completion or failure of an asynchronous operation. They have three states:

11. What is promise chaining?
    Promise chaining allows you to sequence asynchronous operations by connecting multiple .then() calls. Each .then() returns a new Promise, enabling the chain. When you return a value from .then(), it becomes the fulfillment value for the next link. When you return a Promise, the next .then() waits for that Promise to resolve. If any step throws an error or rejects, execution jumps to the next .catch() in the chain.

12. Explain the three states of a Promise.

- Pending: Initial state, neither fulfilled nor rejected
- Fulfilled: Operation completed successfully
- Rejected: Operation failed

13. What is the use of Promise.all()? How is it different from Promise.allSettled?

- **Promise.all([p1, p2, p3]) takes an array of Promises and resolves to an array of all results when every Promise fulfills**: Resolves when all promises resolve, rejects if any promise rejects
- **Promise.allSettled([p1, p2, p3]), Use it when you need every outcome, even if some operations fail.** Always resolves with an array of results, regardless of promise outcomes

14. What is the advantage of Promises over callbacks?
    Promises provide better composability through chaining, cleaner error propagation similar to try/catch blocks, and avoid callback hell and inversion of control issues. They have standardized microtask timing and work seamlessly with async/await syntax. Promises make asynchronous code more readable and maintainable, though they're not cancellable by default - you need AbortController or specialized libraries for cancellation.

15. Describe the difference between a cookie, sessionStorage and localStorage in browsers.

**Cookies** are automatically sent to the server with every request, limited to about 4KB each, and have security attributes like Secure, HttpOnly, and SameSite. They're best for server-side needs like session management.
**localStorage** persists until manually cleared, stores 5-10MB per origin, stays client-side only, and uses synchronous APIs. It's good for user preferences and small caches. **sessionStorage** is similar to localStorage but clears when the tab closes, making it perfect for transient UI state. For security, never store sensitive tokens in JavaScript-readable storage - use HttpOnly cookies with proper SameSite settings instead.
