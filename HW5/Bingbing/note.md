### 1. Difference between innerHTML and textContent

innerHTML returns the HTML with tags and lets you insert HTML, while textContent only gives the text only. If I am not sure whether the data source is safe, I should always prefer textContent to avoid potential XSS risks.
---

### 2. call, apply, and bind

call runs the function immediately and takes arguments one by one. It’s simple and great when the arguments are fixed.

apply runs the function immediately, but it takes the arguments as an array. This is handy if you already have an array of values.

Bind is different. It doesn’t run the function immediately. It gives back a new function where this is fixed. This is useful for callbacks, event handlers, or when you want to run the function later.
---

### 3. The `this` keyword

This depends on how the function is called. In an object method it’s the object, with new it’s the new instance, and in arrow functions it just uses the outer scope’s this. That’s why context really matters in JavaScript.

---

### 4. Event Loop

The event loop is what makes JavaScript non-blocking. Synchronous code runs in the call stack, while async tasks are put into queues. There are actually two types of queues: the microtask queue for things like Promises, and the macrotask queue for things like setTimeout or DOM events. Once the stack is empty, the event loop first runs all microtasks, then picks one macrotask, and repeats. That’s how JS schedules async code.

---

### 5. Callback Queue

The callback queue usually refers to the macrotask queue, where callbacks from timeouts, intervals, or event listeners wait. The event loop checks if the call stack is empty, and if so, it takes tasks from the queue and executes them. Microtasks, like Promise callbacks, are handled in a separate queue and always run before the next macrotask.

---

### 6. Closures

A closure is when a function remembers variables from the scope where it was created, even after that scope has finished. It’s useful for data privacy—like creating private variables—and for function factories that generate specialized functions. Closures also come up naturally in callbacks and event listeners, which is why they’re such a common pattern in JavaScript.

---

### 7. Asynchronous Code in JavaScript

JavaScript is single-threaded, so async code is how we prevent blocking. Historically, we used callbacks, but that led to callback hell. Then Promises made async more manageable, and async/await made it look like synchronous code. Under the hood, all of these rely on the event loop, which schedules tasks through microtask and macrotask queues.

---

### 8. async & await

Async functions always return a Promise, and await pauses execution until that Promise resolves. It makes async code look synchronous, which is much easier to read and write. One important point is that await can only be used inside an async function—or in modern environments, at the top level of a module. For error handling, we usually wrap await calls in a try...catch block, which makes handling async errors much cleaner compared to using .catch() with Promises.

---

### 9. HTTP Methods

The common ones are GET, POST, PUT, DELETE. GET is for fetching data, POST for creating, PUT for updating, and DELETE for removing. GET puts data in the URL, POST in the body. PUT is idempotent /ˌaɪ.dəmˈpoʊ.tənt/, meaning multiple calls have the same result, but POST isn’t.

---

### 10. Promise

A Promise is an object that represents a value you’ll get in the future. It starts in the pending state, then either resolves successfully or rejects with an error, and once it settles, it can’t change again. We use .then to handle success, .catch for errors, and .finally for cleanup, which makes async code more predictable and easier to manage.

---

### 11. Promise Chaining

With Promise chaining, each .then can return a new value or even another Promise, so you can run async tasks step by step in sequence. This avoids callback hell and makes the flow easier to read. Errors also propagate down the chain, so a single .catch at the end can handle failures from any step.

---

### 12. Three States of a Promise

A Promise has three states: pending, fulfilled, and rejected. Pending means it hasn’t finished yet. Fulfilled means it resolved successfully, and rejected means it failed. Once a Promise is either fulfilled or rejected, we say it’s settled, and its state can never change again. This one-way transition is what makes Promises predictable.

---

### 13. Promise.all vs Promise.allSettled

Promise.all runs multiple Promises in parallel and only succeeds if all succeed—if one fails, the whole thing rejects. It returns an array of results in order. In contrast, Promise.allSettled always waits for every Promise to finish, whether they succeed or fail, and gives you an array of objects with each result’s status and value or reason. So in practice, use all when you require all results, and allSettled when you just want to know the outcome of each task.

---

### 14. Promises vs Callbacks

The main advantage of Promises over callbacks is readability and maintainability. With callbacks, you often end up in “callback hell /hɛl/,” where nested functions are hard to follow and error handling is messy. Promises flatten this into a cleaner chain with .then, .catch, and .finally, so errors can be handled in one place and async flows are easier to compose and reason about.

---

### 15. cookie, sessionStorage, and localStorage

Cookies are small pieces of data stored in the browser and automatically sent to the server with every request, which is why they’re often used for authentication. LocalStorage and sessionStorage are only accessible in the browser and never go to the server. LocalStorage stays in the browser until you delete it yourself, while sessionStorage disappears when the tab is closed. Also, cookies are limited to about 4KB, but localStorage and sessionStorage usually allow several megabytes /ˈmɛɡ.əˌbaɪts/.