# 1. What is the difference between innerHTML and textContent?
innerHTML returns or sets the HTML content of an element, while textContent only returns or sets the plain text without parsing HTML tags.

# 2. What are the diﬀerences between call, apply & bind?
call invokes a function with a given this and arguments listed one by one. apply is similar but takes arguments as an array. bind returns a new function with this set permanently.

# 3. Explain the this keyword in JavaScript.
this refers to the object that is executing the current function. Its value depends on how the function is called: global, object method, constructor, or with call/apply/bind.

# 4. What does the event loop do? What data structures does it use?
The event loop continuously checks the call stack and the callback queue. If the stack is empty, it pushes tasks from the queue into the stack to be executed. It mainly uses a stack, a queue, and sometimes microtask queues.

# 5. What is the callback queue?
The callback queue is a list of functions waiting to be executed after asynchronous operations, like timers or network requests, are finished.

# 6. What are closures?
A closure is a function that remembers and can access variables from its outer scope even after that scope has finished executing.

# 7. What is asynchronous code in JavaScript? How does JavaScript achieve asynchronous code?
Asynchronous code lets operations like network requests or timers run without blocking the main thread. JavaScript achieves it using callbacks, promises, async/await, and the event loop.

# 8. What is async & await? How do we use them?
async marks a function that returns a promise, and await pauses execution until a promise resolves. They are used together to write asynchronous code in a synchronous style.

# 9. How many HTTP methods are there? Explain each one.
Common methods are:
GET: request data.
POST: send new data.
PUT: update or replace data.
PATCH: partially update data.
DELETE: remove data.
HEAD: like GET but only headers.
OPTIONS: describe allowed methods

## a. What is the diﬀerence between GET and POST? What about POST and PUT?
GET sends data in the URL and is used to retrieve data, while POST sends data in the body and is used to create resources. POST creates new resources, while PUT replaces existing resources with the new version.

# 10. What is a Promise?
A promise is an object that represents a value that will be available now, later, or never, used to handle asynchronous operations.

# 11. What is promise chaining?
Promise chaining is using .then() repeatedly so that the result of one promise feeds into the next.

# 12. Explain the three states of a Promise.
A promise starts as pending, then becomes either fulfilled when it resolves, or rejected when it fails.

# 13. What is the use of Promise.all()? How is it different from Promise.allSettled?
Promise.all() waits for all promises to resolve or rejects immediately if one fails. Promise.allSettled() waits for all promises to finish and gives results for both successes and failures.

# 14. What is the advantage of Promises over callbacks?
Promises make asynchronous code easier to read and avoid “callback hell” by handling errors and chaining more cleanly.

# 15. Describe the difference between a cookie, sessionStorage and localStorage in browsers.
Cookies are small pieces of data stored on the client and sent with every HTTP request. sessionStorage stores data for one browser session and is cleared when the tab closes. localStorage stores data with no expiration until the user clears it.
