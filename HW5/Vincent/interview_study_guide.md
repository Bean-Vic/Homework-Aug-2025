# JavaScript Interview Study Guide

## 1. innerHTML vs textContent

### Key Differences:
- **innerHTML**: 
  - Parses HTML strings → creates DOM nodes
  - Triggers reflow/repaint
  - Returns full markup with tags
  - Security risk (XSS attacks)
- **textContent**: 
  - Plain text only, no HTML parsing
  - Faster performance
  - Returns text without markup
  - Safe from XSS

### When to Use:
- innerHTML: Need to insert HTML elements
- textContent: Display plain text safely

---

## 2. call, apply & bind

### All control `this` context:

| Method | Arguments | Execution | Returns |
|--------|-----------|-----------|---------|
| **call** | Individual args | Immediate | Function result |
| **apply** | Array of args | Immediate | Function result |
| **bind** | Individual args | Later | New bound function |

### Memory Aid:
- **Call**: Call now with individual args
- **Apply**: Apply now with Array args  
- **Bind**: Bind later with bound context

---

## 3. The `this` Keyword

### What `this` Points To:
- **Default**: Global object (window) or undefined (strict mode)
- **Method call**: The calling object
- **Arrow functions**: Lexical scope (inherited from parent)
- **Explicit binding**: Set via call/apply/bind

### Key Rule:
`this` depends on **HOW** the function is called, not WHERE it's defined

---

## 4. Event Loop

### Components:
1. **Call Stack**: Function execution (LIFO)
2. **Heap**: Memory allocation
3. **Web APIs**: Async operations (setTimeout, fetch)
4. **Callback Queue**: Completed async tasks

### Execution Order:
1. Synchronous code (call stack)
2. Microtasks (Promises, queueMicrotask)
3. Macrotasks (setTimeout, setInterval)

### Purpose:
Manages single-threaded execution without blocking

---

## 5. Callback Queue

### Structure:
- **FIFO** (First In, First Out)
- **Microtask Queue**: Higher priority (Promises)
- **Macrotask Queue**: Lower priority (timers, I/O)

### Process:
1. Async operation completes
2. Callback added to appropriate queue
3. Event loop moves to call stack when empty
4. Microtasks processed before macrotasks

---

## 6. Closures

### Definition:
Function + its lexical environment (remembers outer variables)

### Use Cases:
- **Data encapsulation**: Private variables
- **Factory functions**: Create specialized functions
- **Event handlers**: Maintain state
- **Debouncing**: Control function execution timing
- **Currying**: Partial function application

### Key Benefit:
Variables persist even after outer function returns

---

## 7. Asynchronous JavaScript

### Why Async?
- JavaScript is single-threaded
- Long operations would block UI
- Web APIs handle heavy lifting

### Mechanisms:
- **Callbacks**: Basic async pattern
- **Promises**: Better error handling, chainable
- **async/await**: Synchronous-looking async code
- **Event listeners**: User interaction handling
- **Web Workers**: True parallelism

---

## 8. async/await

### Key Points:
- **async**: Makes function return Promise
- **await**: Pauses execution until Promise resolves
- **Non-blocking**: Doesn't freeze the thread

### Best Practices:
- Start independent Promises first, then await
- Use sequential await only for dependencies
- Always use try/catch for error handling

### Example Pattern:
```javascript
// Parallel execution
const promise1 = fetch('/api/data1');
const promise2 = fetch('/api/data2');
const result1 = await promise1;
const result2 = await promise2;
```

---

## 9. HTTP Methods

### Main Methods:
| Method | Purpose | Body | Idempotent |
|--------|---------|------|------------|
| **GET** | Retrieve data | No | Yes |
| **POST** | Create/Submit | Yes | No |
| **PUT** | Replace entire resource | Yes | Yes |
| **PATCH** | Partial update | Yes | No |
| **DELETE** | Remove resource | No | Yes |
| **HEAD** | Get headers only | No | Yes |
| **OPTIONS** | Check allowed methods | No | Yes |

### Key Differences:
- **GET vs POST**: GET retrieves, POST submits/creates
- **POST vs PUT**: POST creates, PUT replaces entirely
- **PUT vs PATCH**: PUT replaces all, PATCH updates parts

---

## 10. Promises

### Three States:
- **Pending**: Initial state, operation in progress
- **Fulfilled**: Operation succeeded with value
- **Rejected**: Operation failed with error

### Key Features:
- **Immutable**: State cannot change once settled
- **Chainable**: .then() returns new Promise
- **Error propagation**: Errors bubble to .catch()

---

## 11. Promise Chaining

### How It Works:
- Each `.then()` returns new Promise
- Return value becomes next Promise's value
- Return Promise makes next .then() wait
- Errors jump to next .catch()

### Pattern:
```javascript
promise
  .then(result => processResult(result))
  .then(processed => saveData(processed))
  .catch(error => handleError(error));
```

---

## 12. Promise Methods Comparison

### Promise.all():
- **Behavior**: Fails fast on first rejection
- **Result**: Array of all results
- **Use case**: All operations must succeed

### Promise.allSettled():
- **Behavior**: Always resolves
- **Result**: Array of {status, value/reason}
- **Use case**: Need all outcomes regardless of success/failure

---

## 13. Promises vs Callbacks

### Promise Advantages:
- **Composability**: Chainable operations
- **Error handling**: Centralized with .catch()
- **Readability**: Avoids callback hell
- **Standards**: Works with async/await
- **Timing**: Predictable microtask scheduling

### Callback Disadvantages:
- **Callback hell**: Nested pyramid of doom
- **Error handling**: Must handle at each level
- **Inversion of control**: Library controls your callback

---

## 14. Browser Storage Comparison

### Cookies:
- **Size**: ~4KB per cookie
- **Scope**: Sent with every HTTP request
- **Lifetime**: Configurable expiration
- **Security**: HttpOnly, Secure, SameSite flags
- **Use case**: Server-side session management

### localStorage:
- **Size**: 5-10MB per origin
- **Scope**: Client-side only
- **Lifetime**: Until manually cleared
- **API**: Synchronous
- **Use case**: User preferences, offline data

### sessionStorage:
- **Size**: 5-10MB per origin
- **Scope**: Client-side only
- **Lifetime**: Until tab closes
- **API**: Synchronous
- **Use case**: Temporary UI state

### Security Best Practice:
Never store sensitive tokens in JavaScript-accessible storage. Use HttpOnly cookies with proper SameSite settings.
