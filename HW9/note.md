# Homework 9: Redux Fundamental & Redux Middleware

## Redux Fundamental Questions

### 1. What is the Flux architecture?
**Answer:** It enforces unidirectional data flow (one-way data movement) to make state changes predictable and easier to debug. The main idea is:
Actions → Dispatcher → Stores → Views (React components).

### 2. Explain what the Redux store, actions, reducers are and what they do.
**Answer:**
- **Redux Store:** A JavaScript object that holds the entire application state (a single source of truth). It stores the state tree and provides methods to access, update, and subscribe to state changes.
- **Redux Action:** Plain JavaScript objects that describe what happened. They always have a `type` field, and may carry extra data as `payload`.
- **Redux Reducer:** Pure functions that take the current state and an action, decide how the state should change, and return a new state object.

### 3. Describe the work flow of Redux
**Answer:**
1. User interaction triggers an **Action**
2. The action is sent to the **Redux Store**
3. **Reducer** handles the action by checking the action type and deciding how the state should update
4. The **Store** replaces the old state with the new state returned by the reducers. State is always immutable — Redux creates a new state tree instead of mutating the old one.
5. **Components** that subscribed to the store are updated with the new state

### 4. How do you create/configure a store in redux?
**Answer:**
Use `configureStore` from Redux Toolkit (RTK):
```javascript
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
```

### 5. Explain how to use connect()
**Answer:**
`connect()` is a higher-order function from the react-redux library that links a React component to the Redux store.

It allows the component to:
- Read data from the store (`mapStateToProps`)
- Dispatch actions to the store (`mapDispatchToProps`)

```javascript
import { connect } from 'react-redux'

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

### 6. What is mapDispatchToProps and what does it do?
**Answer:**
A function (or object) used with `connect()` in react-redux that maps dispatching actions to props of a component, so the component can trigger Redux state changes.

```javascript
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
})
```

### 7. What is mapStateToProps and what does it do?
**Answer:**
A function used with `connect()` that extracts data from the store and maps it to component props. It lets components read specific parts of the Redux state.

```javascript
const mapStateToProps = (state) => ({
  count: state.counter.value,
  user: state.auth.user
})
```

### 8. How do we use useSelector and useDispatch?
**Answer:**
- **useSelector:** Hook that lets you select data from the Redux store state (similar to `mapStateToProps`)
- **useDispatch:** Hook that gives you access to the store’s dispatch function (similar to `mapDispatchToProps`)

```javascript
import { useSelector, useDispatch } from 'react-redux'

function MyComponent() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const increment = () => dispatch({ type: 'INCREMENT' })
}
```

## Redux Middleware Questions

### 9. What is Redux Middleware?
**Answer:**
Redux middleware is a way to extend Redux with custom functionality. It provides a third-party extension point between dispatching an action and the moment it reaches the reducer. Middleware can:
- Log actions
- Handle async operations
- Transform actions
- Cancel actions

### 10. Describe the timing of redux middleware functions executed in middle of FLUX flow
**Answer:**
Middleware executes in the following order:
1. Action is dispatched
2. **Middleware chain executes** (from first to last middleware)
3. Action reaches the reducer
4. State is updated
5. Components re-render

The middleware sits between the action dispatch and the reducer, allowing you to intercept, modify, or handle actions before they reach the reducer.

### 11. How to apply middleware to redux store?
**Answer:**
Using Redux Toolkit's `configureStore`:
```javascript
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk)
})
```

### 12. What is redux-saga?
**Answer:**
Redux-saga is a middleware library that makes handling side effects (async operations, API calls) easier and more powerful. It uses ES6 generator functions to make async flow easy to read, write, and test. Key features:
- Declarative effects
- Easy testing
- Advanced flow control
- Cancellation support

### 13. What is generator function and how to use it?
**Answer:**
A generator function is a special function that can pause and resume its execution. It's defined with `function*` syntax and uses `yield` to pause execution.

```javascript
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```
### 14. what’s the advantage and disadvantage of using redux-saga compared with redux-thunk?
**Answer:**

**Redux-Saga Advantages:**
- More powerful flow control (racing, parallel execution, cancellation)
- Easier testing with declarative effects
- Better error handling
- Built-in cancellation support
- More readable async code

**Redux-Saga Disadvantages:**
- Steeper learning curve
- Larger bundle size
- Requires understanding of generator functions
- More complex setup

**Redux-Thunk Advantages:**
- Simple and lightweight
- Easy to learn and use
- Smaller bundle size
- Direct function calls

**Redux-Thunk Disadvantages:**
- Limited flow control
- Harder to test
- No built-in cancellation
- Can become complex with nested async operations
### 15. how to create and run a saga middleware?
**Answer:**
```javascript
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './sagas'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

// Create store with saga middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

// Run the saga
sagaMiddleware.run(rootSaga)
```
### 16. compare with takeLatest vs takeEvery
**Answer:**
- **takeLatest:** Only processes the latest action, cancels previous ones if still running
  ```javascript
  function* watchFetchUser() {
    yield takeLatest('FETCH_USER', fetchUser) // Cancels previous if new action comes
  }
  ```

- **takeEvery:** Processes every action, allows multiple concurrent executions
  ```javascript
  function* watchFetchUser() {
    yield takeEvery('FETCH_USER', fetchUser) // Handles all actions concurrently
  }
  ```
### 17. compare fork vs spawn
**Answer:**
- **fork:** Creates a child task that is attached to the parent. If parent is cancelled, child is also cancelled
  ```javascript
  function* parentSaga() {
    const task = yield fork(childSaga) // Attached to parent
  }
  ```

- **spawn:** Creates a detached task that runs independently. Parent cancellation doesn't affect it
  ```javascript
  function* parentSaga() {
    const task = yield spawn(childSaga) // Detached from parent
  }
  ```
### 18. how to call a function in a saga middleware function?
**Answer:**
Use the `call` effect to call functions:
```javascript
import { call, put } from 'redux-saga/effects'

function* fetchUserSaga(action) {
  try {
    // Call API function
    const user = yield call(api.fetchUser, action.payload.userId)

    // Dispatch success action
    yield put({ type: 'FETCH_USER_SUCCESS', payload: user })
  } catch (error) {
    yield put({ type: 'FETCH_USER_ERROR', payload: error.message })
  }
}
```
### 19. how to acquire redux store value in a saga middle function?
**Answer:**
Use the `select` effect to get values from the Redux store:
```javascript
import { select, call, put } from 'redux-saga/effects'

// Selector function
const getUserId = (state) => state.auth.userId

function* fetchUserProfileSaga() {
  try {
    // Get value from store
    const userId = yield select(getUserId)

    // Use the value
    const profile = yield call(api.fetchProfile, userId)

    yield put({ type: 'FETCH_PROFILE_SUCCESS', payload: profile })
  } catch (error) {
    yield put({ type: 'FETCH_PROFILE_ERROR', payload: error.message })
  }
}
```