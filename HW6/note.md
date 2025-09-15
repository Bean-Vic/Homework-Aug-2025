# 1. What is a SPA?

A single-page application is a web application or website that
interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages, which can result in performance gains and a more dynamic experience.
**Props:** fast, instant
Easily debug
Nice user experience
Can be converted to IOS and Android app
**Cons:** SEO for single page applications can be challenging
Need javascript
Security issues
Favor modern browsers
Use a lot of browser resources

# 2. What is JSX?

JSX is a JavaScript extension that allows developers to write the code for dynamic DOM creation in a syntax that is very similar to standard HTML.

# 3. What is Virtual DOM?

**Virtual DOM: a lightweight, in-memory copy of the real DOM.**
Improve performance, minimize the number of direct manipulations to the real dom
When the state of a component changes, a virtual dom tree is created and, then compare to the previous one, to determine what changes ca n be made to the actual dom.

# 4. What does `ReactDOM.render()` do?

**ReactDOM.render(): convert Virtual DOM into real DOM**
In React 18+, this has been replaced with createRoot().render() for better concurrent features and improved performance.

# 5. What are props?

Props (properties) are read-only inputs passed from parent components to child components.
"Props" is react's name for a component's properties, similar to an HTML element's attributes.
event handler props tells a child element to communicate with it's parent.

# 6. How do prop updates affect rendering?

When props change, React re-renders that component and its children by default.
However, this can be optimized using:
-shouldComponentUpdate() in class components
-useMemo() and useCallback() hooks for specific optimizations

# 7. What is a state, and how do you update it? Can you mutate it directly?

**State in React refers to an object that holds data which may change over time and affects a component's rendering.**
It allows components to be dynamic and interactive.

# 8. What is the difference between a `controlled` component and `uncontrolled` component?

**Controlled components** are components where the form data is handled by the React component’s state.The value of the form element is set via the state.
Any change to the form element triggers an event handler (e.g., onChange) that updates the state.This makes React the single source of truth for form data, ensuring that changes in form elements are reflected in the state through event handlers.

<!-- most element in react are going to be controlled components(we hold that)-->

On the other hand,**Uncontrolled components** are components where the form data is handled by the DOM itself. The value of the form element is not tied to the state.
React accesses the form element value using a ref.In this case, refs are used to access form values directly, allowing the DOM to be the source of truth.

<!-- HTML elements hold their own state. -->

**Controlled components are useful for complex forms and validation, while uncontrolled components can be simpler to implement and are useful for less interactive forms.**

# 9. Explain the React component lifecycle.

# 10. List some lifecycle methods and explain what do they do

the stages that a component follows from when it appears on the page to when it is removed.
There are 3 main categories of life cycle methods in React: mounting, updating, and unmounting.
**Mounting:** constructor(). render(), componentDidMount(). (called when component is being created and inserted into the DOM)
**Updating:** componentDidUpdate(), setState(). (called when component being re-rendered)
**Unmounting:** componentWillUnmount(). (called when component being removed from the DOM)

# 11. What is the execution order of constructor, render, and lifecycle methods?

Answer: For class components, the execution order is:

Mounting:

constructor() - Initialize state and bind methods
getDerivedStateFromProps() - Update state from props
render() - Return JSX
componentDidMount() - Post-render side effects
Updating:

getDerivedStateFromProps()
shouldComponentUpdate()
render()
componentDidUpdate()

# 12. Describe the use case of lifecycle methods.

Answer: Common use cases include:

componentDidMount(): Fetch data from APIs, set up subscriptions, initialize third-party libraries
componentDidUpdate(): React to prop/state changes, update DOM based on changes, make conditional API calls
componentWillUnmount(): Clean up resources, remove event listeners, cancel network requests, clear timers
shouldComponentUpdate(): Optimize performance by preventing unnecessary re-renders

# 13. What is React strict mode?

**Is a development-only tool for highlighting potential problems in an application**

- Wraps a component and its children and performs extra checks and warnings for its behavior
- Does not catch errors, but instead provides additional warnings for potential issues in the code.
  <React.StrictMode>
  <ComponentOne />
  </React.StrictMode>

# 14. What are synthetic events and how are they different than DOM events?

Answer: Synthetic events are React's cross-browser wrapper around native DOM events. Key differences:

Synthetic Events:

Consistent API across all browsers
Automatic event pooling for performance (React 16 and earlier)
Additional React-specific properties
Automatic cleanup and memory management
Built-in preventDefault() and stopPropagation()
DOM Events:

Browser-specific implementations
Direct access to native event properties
Manual memory management required

# 15. List some common events that you used most

onClick - Handle button/element clicks
onChange - Handle input value changes
onSubmit - Handle form submissions
onKeyDown/onKeyUp - Handle keyboard interactions
onMouseEnter/onMouseLeave - Handle mouse hover effects
onFocus/onBlur - Handle input focus states
onLoad - Handle resource loading completion

# 16. How do React handle errors?
