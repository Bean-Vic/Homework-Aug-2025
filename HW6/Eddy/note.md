# 1. What is a SPA?
A Single Page Application loads one HTML page and updates the content dynamically without full page reloads.

# 2. What is JSX?
JSX is a syntax that lets us write HTML-like code inside JavaScript, which gets compiled into React.createElement calls.

# 3. What is Virtual DOM?
The Virtual DOM is a lightweight copy of the real DOM that React uses to track changes and update only the changed parts efficiently.

# 4. What does ReactDOM.render() do?
It takes a React element and renders it into a real DOM node on the page.

# 5. What are props?
Props are inputs passed from parent components to child components, and they are read-only.

# 6. How do prop updates affect rendering?
When props change, React re-renders the component to show the new data.

#  7. What is a state, and how do you update it? Can you mutate it directly?
State is data managed inside a component. We update it using setState or useState’s setter. We should never mutate state directly.

# 8. What is the difference between a controlled component and uncontrolled component?
A controlled component has its form data managed by React state. An uncontrolled component stores data in the DOM and uses refs to read it.

# 9. Explain the React component lifecycle.
A component is mounted, updated when props/state change, and unmounted when removed from the DOM.

# 10. List some lifecycle methods and explain what do they do
componentDidMount runs after first render, componentDidUpdate runs after updates, and componentWillUnmount runs before removal.

# 11. What is the execution order of constructor, render, and lifecycle methods?
First constructor runs, then render, then componentDidMount. On updates, render runs then componentDidUpdate.

# 12. Describe the use case of lifecycle methods.
We use them to fetch data, set up subscriptions, update the DOM, or clean up resources.

# 13. What is React strict mode?
Strict mode highlights potential problems by running certain functions twice in development to help find bugs.

# 14. What are synthetic events and how are they different than DOM events?
Synthetic events are React’s wrapper around browser events for cross-browser consistency and performance.

# 15. List some common events that you used most
onClick, onChange, onSubmit, onKeyDown, onMouseEnter, and onFocus.

# 16. How do React handle errors?
React handles errors using error boundaries — components with componentDidCatch or getDerivedStateFromError to catch errors and show a fallback UI.
