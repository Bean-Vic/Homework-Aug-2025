1. What is a SPA?
A SPA is a single-page application. It only loads one HTML file, and then JavaScript updates the page dynamically instead of loading new pages from the server. That’s why it feels fast and smooth, because the whole page doesn’t refresh when you navigate.

2. What is JSX?
JSX is basically a syntax that looks like HTML but runs in JavaScript. It gets compiled into React function calls. It makes writing UI easier since you can mix markup and logic in the same place.

3. What is Virtual DOM?
The Virtual DOM is like a lightweight copy of the real DOM kept in memory. React updates the virtual DOM first, figures out what actually changed, and then only updates that part in the real DOM. This makes rendering much more efficient.

4. What does ReactDOM.render() do?
ReactDOM.render() is the function that mounts your React component into the real DOM. It’s basically how your React app gets attached to the HTML page.

5. What are props?
Props are just inputs to a component. They’re passed from a parent to a child, they’re read-only, and they make components reusable and configurable.

6. How do prop updates affect rendering?
If props change, React re-renders that component, and sometimes its children too. Since props are part of a component’s inputs, any change can trigger a new render.

7. What is a state, and how do you update it? Can you mutate it directly?
State is the data a component manages itself.
In class components we update it with this.setState, and in function components we use the setter from useState.
We should never mutate it directly, because React won’t know it changed and won’t re-render.

8. Difference between a controlled and uncontrolled component?
A controlled component means React manages the form data through state. For example, an input’s value comes from useState. This makes it predictable and easy to validate, but React re-renders on every keystroke.
An uncontrolled component lets the browser manage the value itself, and React just reads it with a ref when needed. It’s simpler to set up, but harder to validate or sync with other state.

9. Explain the React component lifecycle.
In class components there are three main phases: mounting, updating, and unmounting. We have methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
In function components we don’t have lifecycle methods, but we use useEffect instead. It runs after render, and can return a cleanup function for unmounting.

10. List some lifecycle methods and what they do.
componentDidMount runs after the component mounts, good for fetching data or starting timers.
componentDidUpdate runs after props or state change, good for reacting to updates.
componentWillUnmount runs before removal, good for cleaning up subscriptions or intervals.

11. Execution order of constructor, render, and lifecycle methods?
When a component first mounts, the constructor runs to initialize state and bind methods. Then render runs, and once it’s in the DOM, componentDidMount fires.
On updates, render runs again, then componentDidUpdate.
Before removal, componentWillUnmount runs to clean up.

12. Use case of lifecycle methods.
We use componentDidMount to fetch data, set up timers, or initialize libraries.
We use componentDidUpdate to react to prop or state changes, like fetching new data or syncing with external systems.
And componentWillUnmount is for cleanup—removing listeners, clearing timers, or canceling requests.

13. What is React strict mode?
Strict mode is just a development tool. It adds extra checks to highlight potential problems, like running functions twice to catch side effects or unsafe code. It doesn’t affect production.

14. What are synthetic events and how are they different than DOM events?
In React, events are handled as synthetic events, which are wrappers around native browser events. They look and act the same, but React makes them consistent across browsers.
One detail is event pooling: React reuses event objects for performance. If I need the event asynchronously, I call e.persist() so it doesn’t get cleared.

15. List some common events you use most.
I often use onClick for buttons, onChange for inputs and checkboxes, onSubmit for forms—usually with preventDefault()—and onKeyDown for keyboard shortcuts or accessibility.
In React all event names use camelCase /ˈkæm.əl keɪs/, like onClick, not lowercase like plain HTML.

16. How does React handle errors?
React uses error boundaries. They catch runtime errors in their child components and show a fallback UI instead of crashing the whole app.
For example, in a class component you can implement getDerivedStateFromError and componentDidCatch to log the error and render something like “Something went wrong.”
It’s really useful when dealing with unreliable components or third-party code, because you can isolate errors and keep the rest of the app running