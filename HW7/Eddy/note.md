# 1. How do we do prop types check?
We can use the prop-types library and define Component.propTypes to specify the expected types of each prop.

# 2. What is Prop drilling?
Prop drilling is passing props down through many layers of components just so a deep child can use them.

# 3. How are we going to render a variable as a react component?
We can store a component in a variable and render it using JSX like {`<MyComponent />`} or {React.createElement(MyComponent)}.

# 4. What is HOC and why we need it?
A Higher-Order Component is a function that takes a component and returns a new one, and it is used to reuse logic between components.

# 5. How to properly render an SVG element as a react component?
We can import it as a component using a bundler (like `import { ReactComponent as Logo } from './logo.svg'`) and use `<Logo />`.

# 6. What is lazy loading and what does it help?
Lazy loading means loading components only when they are needed, which reduces the initial bundle size and speeds up page load.

# 7. List several react hooks that you use most and what do they do?
useState stores state, useEffect runs side effects, useRef stores mutable values, useContext reads context, and useMemo caches calculations.

# 8. what is useState and what value we should pass in as prop?
useState creates a state variable. We pass the initial value, which can be any type like a number, string, or object.

# 9. what is the hook useEffect and why we need it?
useEffect runs side-effect code like data fetching, subscriptions, or DOM updates after rendering.

# 10. What is dependency array in useEffect ?
The dependency array tells React when to re-run the effect. If it is empty, the effect runs only once after the first render.

# 11. What is the lifecycle method componentDidUpdate equivalent hook?
It is useEffect with dependencies, because it runs after the component updates.

# 12. What is the lifecycle method componentDidMount equivalent hook?
It is useEffect with an empty dependency array, because it runs only once after mount.

# 13. What is the lifecycle method componentWillUnmount equivalent hook?
It is the cleanup function returned inside useEffect, which runs when the component unmounts.

# 14. What’s the difference between useCallback and useMemo ?
useCallback memoizes a function, while useMemo memoizes a computed value.

# 15. What is useContext and the difference between useContext and useState ?
useContext lets components read shared data from a context, while useState manages local state inside a single component.
