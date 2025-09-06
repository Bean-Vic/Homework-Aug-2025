1. What is the difference between innerHTML and textContent?
innerHTML returns or sets the HTML markup inside an element, so it parses tags and can insert HTML. textContent, on the other hand, only returns or sets the plain text of an element, ignoring tags. For example, if you set innerHTML = '<b>Hi</b>' it renders bold text, while textContent = '<b>Hi</b>' literally shows the angle brackets.

2. What are the differences between call, apply, and bind?
call, apply, and bind are used to control the this context when calling a function. call invokes the function immediately and you pass arguments one by one. apply also invokes immediately but you pass arguments as an array. bind doesn’t run the function right away—it returns a new function with this permanently set, which you can call later.

3. Explain the this keyword in JavaScript.
this refers to the context of the function call—it depends on how the function is called, not where it’s written. In a method, this usually refers to the object before the dot. In the global scope in browsers, it refers to window. In strict mode it can be undefined. In arrow functions, it takes the value from the surrounding context instead of its own.

4. What does the event loop do? What data structures does it use?
The event loop is what allows JavaScript to be non-blocking. It constantly checks if the call stack is empty, and if it is, it takes tasks from the callback queue or microtask queue and pushes them onto the stack to run. The two main structures are the call stack, the callback (or task) queue, and the microtask queue for promises.

5. What is the callback queue?
The callback queue is where functions from asynchronous tasks, like setTimeout or DOM events, wait until the call stack is clear. Once the stack is empty, the event loop pushes them from the queue into the stack to be executed.

6. What are closures?
A closure happens when a function remembers the variables from the scope in which it was created, even after that scope has finished executing. For example, if an inner function uses variables from its outer function, and you return the inner function, it still has access to those variables.

7. What is asynchronous code in JavaScript? How does JavaScript achieve it?
Asynchronous code means code that doesn’t block the rest of the program while waiting for something, like a network request or timer. JavaScript achieves it using the event loop and Web APIs. You can write async code using callbacks, promises, or async/await, and the event loop coordinates when those results get executed.

8. What is async and await? How do we use them?
async and await are syntactic sugar on top of promises. You mark a function as async, and inside you can use await in front of a promise to pause execution until it resolves. It makes asynchronous code look and feel like synchronous code, which is easier to read and debug.

9. How many HTTP methods are there? Explain each one.
The most common HTTP methods are:
GET: request data from a server, no body.
POST: send data to create something new.
PUT: update an existing resource fully.
PATCH: partially update a resource.
DELETE: remove a resource.
HEAD: same as GET but without the body, usually for metadata.
OPTIONS: ask the server what methods are allowed.
For differences: GET vs POST—GET is idempotent and used for retrieving, POST is used to create or send data. POST vs PUT—POST creates a new resource, while PUT replaces an existing one.

10. What is a Promise?
A promise is an object that represents the eventual result of an asynchronous operation. It can be in one of three states—pending, fulfilled, or rejected—and it lets you attach callbacks with .then, .catch, and .finally instead of relying on nested callbacks.

11. What is promise chaining?
Promise chaining is when you return another promise inside a .then, and it allows you to sequence asynchronous operations. Each .then waits for the previous one to resolve, so you can run async steps in order without nesting.

12. Explain the three states of a Promise.
The three states are: pending, when it’s still running and hasn’t finished; fulfilled, when it completed successfully and has a value; and rejected, when it failed and has a reason or error.

13. What is the use of Promise.all()? How is it different from Promise.allSettled()?
Promise.all() runs multiple promises in parallel and resolves only when all succeed—it rejects immediately if any one fails. Promise.allSettled() also runs them in parallel, but it waits for all of them to finish and gives you an array of results showing which ones succeeded and which ones failed.

14. What is the advantage of Promises over callbacks?
Promises solve the problem of callback hell by making async code easier to read and manage. They let you chain operations and handle errors in one place, instead of deeply nesting functions. They also integrate better with modern async syntax.

15. Describe the difference between a cookie, sessionStorage and localStorage in browsers.
Cookies are small pieces of data stored by the browser and sent to the server with every request, often used for authentication. localStorage stores key-value pairs that persist even after you close the browser. sessionStorage is similar but it only lasts until you close the tab or browser window.