1. What is a SPA?
A SPA is a Single Page Application. Instead of loading a new page from the server each time, it dynamically updates the content on a single HTML page using JavaScript, usually React. That gives a smoother user experience, like a desktop app, since only parts of the page update.

2. What is JSX?
JSX is a syntax extension for JavaScript that looks like HTML but compiles down to React createElement calls. It makes it easier to describe what the UI should look like and to mix markup with JavaScript logic in the same file.

3. What is Virtual DOM?
The Virtual DOM is a lightweight JavaScript representation of the real DOM. React keeps this in memory, and when something changes, it compares the new virtual DOM with the previous one, and only updates the real DOM where needed. That makes rendering more efficient.

4. What does ReactDOM.render() do?
ReactDOM.render() takes a React element and mounts it into a DOM node. It’s what connects your React components to the actual HTML page.

5. What are props?
Props are inputs you pass to a component from its parent. They’re read-only and used to make components reusable by giving them different data or configurations.

6. How do prop updates affect rendering?
When props change, React will re-render that component with the new values. Since props are read-only, the parent decides what the child sees, and any updates trigger a re-render of that child.

7. What is a state, and how do you update it? Can you mutate it directly?
State is internal data that a component manages itself. You update it with setState in class components or the useState hook in functional components. You should never mutate state directly. Always use the provided setter so React knows to re-render.

8. What is the difference between a controlled component and uncontrolled component?
In a controlled component, form inputs are tied to React state, so React fully controls their value. In an uncontrolled component, the DOM itself keeps track of the input value and you access it with refs. Controlled gives you more predictable behavior, while uncontrolled is simpler for quick forms.

9. Explain the React component lifecycle.
For class components, the lifecycle has three phases: mounting, updating, and unmounting. React runs certain methods during each phase—for example, componentDidMount after it’s inserted into the DOM, and componentWillUnmount before it’s removed.

10. List some lifecycle methods and explain what they do.
componentDidMount: runs after the component first renders, often used for fetching data.
componentDidUpdate: runs after updates, used for reacting to prop or state changes.
componentWillUnmount: runs just before the component is removed, often for cleanup like removing listeners.

11. What is the execution order of constructor, render, and lifecycle methods?
In class components, first the constructor runs, then render, and after that componentDidMount. On updates, React calls render again, then componentDidUpdate. On removal, componentWillUnmount runs.

12. Describe the use case of lifecycle methods.
They’re mainly for side effects. For example, you fetch data or set up subscriptions in componentDidMount, update things when props change in componentDidUpdate, and clean up timers or listeners in componentWillUnmount.

13. What is React strict mode?
Strict mode is a wrapper component in React that helps catch potential problems in your code. It highlights unsafe lifecycle methods, double-invokes some functions in development to surface issues, and warns about deprecated APIs. It doesn’t affect production behavior.

14. What are synthetic events and how are they different than DOM events?
Synthetic events are React’s wrapper around native DOM events. They work the same way but provide cross-browser consistency and pooling for performance. React normalizes them so you don’t have to worry about browser quirks.

15. List some common events that you used most.
Some common ones are onClick, onChange for inputs, onSubmit for forms, onKeyDown for keyboard handling, and onMouseEnter or onMouseLeave for hover effects.

16. How do React handle errors?
React handles errors with error boundaries. These are components that implement componentDidCatch or getDerivedStateFromError. They catch errors in their child component tree during rendering and let you show a fallback UI instead of crashing the whole app.