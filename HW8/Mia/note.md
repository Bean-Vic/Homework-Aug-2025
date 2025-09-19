1. What is the Flux architecture?

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
