# JS Web Study Notes - Interview Ready Answers

## 1. What is the difference between innerHTML and textContent?

**innerHTML** parses HTML strings and inserts them as DOM nodes, which triggers reflow and returns the full markup including tags. **textContent** only inserts plain text without any HTML parsing, making it faster and safer. It returns just the text content without any markup. Use innerHTML when you need to insert HTML elements, and textContent when you only need to display plain text.

## 2. What are the differences between call, apply & bind?

All three methods control the **this** context in JavaScript functions. **Call** takes the this object as the first parameter, followed by individual arguments. **Apply** also takes this as the first parameter, but the remaining function arguments are passed as an array. **Bind** takes this and arguments like call, but instead of immediately invoking the function, it returns a new function with the this context permanently bound. Think of it as: call now with individual args, apply now with array args, bind later with bound context.

## 3. Explain the this keyword in JavaScript.

The **this** keyword references the object that is currently calling the function. By default, it points to the global window object in browsers. You can explicitly set this using call, apply, or bind methods. Arrow functions don't have their own this - they capture it from the surrounding lexical scope. In strict mode, this defaults to undefined instead of the global object. The key is remembering that this depends on how the function is called, not where it's defined.

## 4. What does the event loop do? What data structures does it use?

The event loop manages JavaScript's single-threaded execution by coordinating synchronous and asynchronous tasks without blocking the main thread. It uses four main components: the **call stack** for function execution, the **heap** for memory allocation, **Web APIs** for async operations like setTimeout, and the **callback queue** for completed async tasks. The queue has two parts: microtasks (like Promises) which have higher priority, and macrotasks (like setTimeout). The execution order is: synchronous functions first, then all microtasks, then one macrotask, and repeat.

## 5. What is the callback queue?

The callback queue is a FIFO data structure that holds callbacks from completed asynchronous tasks like setTimeout, DOM events, and network requests. These callbacks wait in the queue until the call stack is empty. The event loop only moves tasks from the callback queue to the call stack after all microtasks are finished. This ensures that asynchronous operations don't block the main thread while maintaining proper execution order.

## 6. What are closures?

A closure is a function combined with its lexical environment - it "remembers" variables from the scope where it was created, even after that scope has finished executing. Closures enable powerful patterns like data encapsulation for private state, factory functions, currying, debouncing, and persistent event handlers. They're essential for maintaining state in functional programming and creating modules with private variables.

## 7. What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?

JavaScript is single-threaded, but achieves asynchronous behavior through Web APIs and the event loop. Long-running operations like timers, network requests, and file I/O are handled outside the main call stack by browser APIs or Node.js APIs. When these operations complete, their callbacks are queued and executed when the main thread is free. JavaScript provides several mechanisms for async code: callbacks, Promises, async/await syntax, event listeners, and Web Workers for true parallel processing.

## 8. What is async & await? How do we use them?

Async/await is syntactic sugar that makes Promise-based code look synchronous. The **async** keyword marks a function as asynchronous and makes it return a Promise. The **await** keyword pauses execution inside an async function until the Promise resolves, without blocking the main thread. For optimal performance, start multiple independent Promises first, then await them. Use await sequentially only when operations depend on each other. Always wrap await calls in try/catch blocks for proper error handling.

## 9. How many HTTP methods are there? Explain each one.

There are 9 main HTTP methods. **GET** retrieves data without a request body and is cacheable by proxies. **POST** creates or submits data with a request body and changes server state. **PUT** replaces an entire resource. **DELETE** removes a resource. **PATCH** performs partial updates. **HEAD** is like GET but returns only headers. **OPTIONS** checks what methods are allowed. **CONNECT** establishes tunnels for HTTPS proxies. **TRACE** performs message loop-back tests for debugging.

### What is the difference between GET and POST? What about POST and PUT?

**GET vs POST**: GET retrieves information without a request body, though parameters can be passed via URL (which is less secure). POST sends data in the request body for server processing and can change server state. **POST vs PUT**: POST typically creates new resources or submits data for processing, while PUT replaces an entire existing resource with the provided data. PUT is idempotent - calling it multiple times has the same effect.

## 10. What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: **Pending** (initial state), **Fulfilled** (operation completed successfully with a value), and **Rejected** (operation failed with an error). Once a Promise is fulfilled or rejected, its state is settled and cannot change. Promises make asynchronous code more manageable by avoiding callback hell and providing chainable operations.

## 11. What is promise chaining?

Promise chaining allows you to sequence asynchronous operations by connecting multiple .then() calls. Each .then() returns a new Promise, enabling the chain. When you return a value from .then(), it becomes the fulfillment value for the next link. When you return a Promise, the next .then() waits for that Promise to resolve. If any step throws an error or rejects, execution jumps to the next .catch() in the chain.

## 12. Explain the three states of a Promise.

**Pending** means the Promise is neither fulfilled nor rejected - the operation is still in progress. **Fulfilled** means the operation completed successfully and the Promise has a resolved value. **Rejected** means the operation failed and the Promise has a reason for failure (usually an error). Once a Promise transitions from pending to either fulfilled or rejected, it becomes settled and its state cannot change again.

## 13. What is the use of Promise.all()? How is it different from Promise.allSettled?

**Promise.all()** takes an array of Promises and resolves to an array of all results when every Promise fulfills. If any Promise rejects, Promise.all immediately rejects with that error. Use it when all operations must succeed. **Promise.allSettled()** always fulfills and returns an array of objects with status and value/reason for each Promise, regardless of whether they succeed or fail. Use it when you need every outcome, even if some operations fail.

## 14. What is the advantage of Promises over callbacks?

Promises provide better composability through chaining, cleaner error propagation similar to try/catch blocks, and avoid callback hell and inversion of control issues. They have standardized microtask timing and work seamlessly with async/await syntax. Promises make asynchronous code more readable and maintainable, though they're not cancellable by default - you need AbortController or specialized libraries for cancellation.

## 15. Describe the difference between a cookie, sessionStorage and localStorage in browsers.

**Cookies** are automatically sent to the server with every request, limited to about 4KB each, and have security attributes like Secure, HttpOnly, and SameSite. They're best for server-side needs like session management. **localStorage** persists until manually cleared, stores 5-10MB per origin, stays client-side only, and uses synchronous APIs. It's good for user preferences and small caches. **sessionStorage** is similar to localStorage but clears when the tab closes, making it perfect for transient UI state. For security, never store sensitive tokens in JavaScript-readable storage - use HttpOnly cookies with proper SameSite settings instead.
