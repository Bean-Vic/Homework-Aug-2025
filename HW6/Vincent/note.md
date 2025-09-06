# React Study Notes - Interview Ready Answers

## 1. What is a SPA?

**Answer:** A Single Page Application (SPA) loads a single HTML page and dynamically updates content using JavaScript without full page reloads. This approach improves performance and user experience by:
- Reducing server requests and bandwidth usage
- Providing faster navigation between views
- Creating a more fluid, app-like user experience
- Maintaining application state across different views

## 2. What is JSX?

**Answer:** JavaScript XML (JSX) is a syntax extension for JavaScript that looks like HTML but compiles to `React.createElement()` calls. JSX makes UI code more declarative and readable while still being JavaScript underneath. Key benefits include:
- Familiar HTML-like syntax for developers
- Type checking and compile-time error detection
- Ability to embed JavaScript expressions using curly braces `{}`
- Better tooling support and IDE integration

## 3. What is Virtual DOM?

**Answer:** The Virtual DOM is an in-memory representation of the real DOM elements. React uses a diffing algorithm to compare the Virtual DOM tree with the real DOM and updates only the changed parts, resulting in efficient rendering. Benefits include:
- Faster updates by batching DOM changes
- Predictable performance through reconciliation
- Cross-browser compatibility
- Easier debugging and testing

## 4. What does ReactDOM.render() do?

**Answer:** `ReactDOM.render()` renders a React element into the real DOM at a specified root container. It serves as the entry point that links React's Virtual DOM tree to the actual DOM. Note: In React 18+, this has been replaced with `createRoot().render()` for better concurrent features and improved performance.

## 5. What are props?

**Answer:** Props (properties) are read-only inputs passed from parent components to child components. They are used to make components reusable and dynamic by:
- Passing data down the component tree
- Configuring component behavior
- Enabling component composition
- Maintaining unidirectional data flow (parent to child)

## 6. How do prop updates affect rendering?

**Answer:** When props change, React re-renders that component and its children by default. However, this can be optimized using:
- `shouldComponentUpdate()` in class components
- `React.memo()` for functional components
- `useMemo()` and `useCallback()` hooks for specific optimizations
- Proper key props for list items

## 7. What is state, and how do you update it? Can you mutate it directly?

**Answer:** State is a component's internal data that can change over time and trigger re-renders. It should be updated using:
- `setState()` in class components
- State setter functions from `useState()` in functional components

**Important:** Never mutate state directly because:
- React won't detect the change and won't re-render
- It can cause bugs and unpredictable behavior
- It breaks React's reconciliation process
- Always create new objects/arrays when updating state

## 8. What is the difference between a controlled component and uncontrolled component?

**Answer:** Both refer to how form inputs are managed:

**Controlled Component:**
- Input value is controlled by React state
- Changes handled through event handlers
- Single source of truth in React state
- Better for validation and dynamic behavior

**Uncontrolled Component:**
- Input value managed by the DOM itself
- Access values using refs
- Less React overhead
- Useful for simple forms or integrating with non-React libraries

## 9. Explain the React component lifecycle.

**Answer:** React component lifecycle consists of three main phases:

1. **Mounting:** Component is being created and inserted into the DOM
2. **Updating:** Component is being re-rendered as a result of changes to props or state
3. **Unmounting:** Component is being removed from the DOM

Each phase has specific lifecycle methods and hooks that allow developers to perform actions at the right time.

## 10. List some lifecycle methods and explain what they do.

**Answer:** Key lifecycle methods include:

- **`componentDidMount()`:** Called after first render - ideal for API calls, setting up subscriptions
- **`componentDidUpdate()`:** Called after updates - used for side effects based on prop/state changes
- **`componentWillUnmount()`:** Called before component removal - cleanup (remove listeners, cancel timers, abort requests)
- **`shouldComponentUpdate()`:** Performance optimization - determines if component should re-render
- **`getDerivedStateFromProps()`:** Updates state based on prop changes (rarely used)

## 11. What is the execution order of constructor, render, and lifecycle methods?

**Answer:** For class components, the execution order is:

**Mounting:**
1. `constructor()` - Initialize state and bind methods
2. `getDerivedStateFromProps()` - Update state from props
3. `render()` - Return JSX
4. `componentDidMount()` - Post-render side effects

**Updating:**
1. `getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `componentDidUpdate()`

## 12. Describe the use case of lifecycle methods.

**Answer:** Common use cases include:

- **`componentDidMount()`:** Fetch data from APIs, set up subscriptions, initialize third-party libraries
- **`componentDidUpdate()`:** React to prop/state changes, update DOM based on changes, make conditional API calls
- **`componentWillUnmount()`:** Clean up resources, remove event listeners, cancel network requests, clear timers
- **`shouldComponentUpdate()`:** Optimize performance by preventing unnecessary re-renders

## 13. What is React strict mode?

**Answer:** React Strict Mode is a development-only wrapper component that highlights potential problems in an application. It helps identify:
- Unsafe lifecycle methods
- Deprecated API usage
- Unexpected side effects
- Components with non-pure rendering
- Missing keys in lists

It intentionally double-invokes functions to help detect side effects and doesn't affect production builds.

## 14. What are synthetic events and how are they different from DOM events?

**Answer:** Synthetic events are React's cross-browser wrapper around native DOM events. Key differences:

**Synthetic Events:**
- Consistent API across all browsers
- Automatic event pooling for performance (React 16 and earlier)
- Additional React-specific properties
- Automatic cleanup and memory management
- Built-in preventDefault() and stopPropagation()

**DOM Events:**
- Browser-specific implementations
- Direct access to native event properties
- Manual memory management required

## 15. List some common events that you use most.

**Answer:** Most commonly used React events include:
- **`onClick`** - Handle button/element clicks
- **`onChange`** - Handle input value changes
- **`onSubmit`** - Handle form submissions
- **`onKeyDown/onKeyUp`** - Handle keyboard interactions
- **`onMouseEnter/onMouseLeave`** - Handle mouse hover effects
- **`onFocus/onBlur`** - Handle input focus states
- **`onLoad`** - Handle resource loading completion

## 16. How does React handle errors?

**Answer:** React handles errors through Error Boundaries, which are components that:
- Catch JavaScript errors anywhere in the child component tree
- Log errors and display fallback UI instead of crashing the entire app
- Only catch errors in render methods, lifecycle methods, and constructors
- Don't catch errors in event handlers, async code, or during server-side rendering

Error boundaries are implemented using `componentDidCatch()` and `getDerivedStateFromError()` in class components, or the `react-error-boundary` library for functional components.