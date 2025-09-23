# 1. What is the Flux architecture?

# 2. Explain what the Redux store, actions, reducers are and what they do.

**Actions:** Describe actions as payloads of information that send data from the application to the Redux store.
Actions: 发生了什么(events), JS object containing a type and payload (data). - {type, payload}
**Reducers:** Pure functions that specify how the application's state changes in response to actions. They take the current state and an action as arguments and return to a new state.
**Store:** The object that brings actions and reducers together.

# 3. Describe the work flow of Redux

A component triggers an action.
Reducers determine what changes should be made to the store
The store is updated
Components receive the updated state
repeat!

4. How do you create/configure a store in redux?
5. Explain how to use `connect()`
6. What is `mapDispatchToProps` and what does it do?
7. What is `mapStateToProps` and what does it do?
   git

# 1. What is Jest?

<!-- Jest is a comprehensive JavaScript testing framework developed by Meta. It's primarily used for unit and integration testing in React and Node.js applications. -->

# 2. What is a test case in Jest?

 <!-- A test case defines what functionality to test and the expected result. It's written using test() or it() functions that describe the behavior being tested. -->

```javascript
test("description of what is being tested", () => {
  // Arrange: Set up test data
  const input = "test data";

  // Act: Execute the function being tested
  const result = functionToTest(input);

  // Assert: Verify the expected outcome
  expect(result).toBe("expected output");
});

// Alternative syntax
it("should behave in a specific way", () => {
  // Test implementation
});
```

# 3. What does expect do in Jest?

In Jest, function results are examined by passing the result to the Jest function expect and providing a matcher to see if the result matches the value we are expecting

# 4. What is the difference between .toBe() and .toEqual() ?

**.toBe():** Uses strict equality (===) comparison. Best for primitive values like numbers, strings, and booleans. Checks if two values are the exact same reference.
**.toEqual():** Performs deep equality comparison. Used for objects and arrays to compare their contents recursively.

# 5. How do you test if a react component renders correctly?

Use React Testing Library's render and screen utilities to test component rendering:

# 6. How do you simulate a button click in a test?

Use @testing-library/user-event (preferred) or fireEvent from React Testing Library to simulate user interactions.

# 7. How do you mock a function with Jest?

# 8. What is snapshot test and how do you utilize it?

Snapshot testing captures a component's rendered output and saves it as a snapshot file. Future test runs compare against this snapshot to detect unexpected UI changes.

```

```
