# eact Study Notes - Interview Ready Answers

## 1. How do we do prop types check?

**Answer:**
- **TypeScript (compile-time, preferred)**
    - Define a Props interface and type your component
    - Catches issues before running the app; great editor support
- **prop-types package (run-time)**
    - Validates props in development at runtime
    - Useful in JS projects but less robust than TypeScript

---

## 2. What is Prop drilling?

**Answer:**
Prop drilling is passing props through multiple intermediary components that don't need them, just to reach a deeply nested child.

**Problems:**
- Repetitive code
- Fragile class hierarchy
- Hard to maintain

**Solutions:**
- Use Context API
- State colocation
- Global stores with Redux

---

## 3. How are we going to render a variable as a react component?

**Answer:**
We treat variables as React elements that contain component/tag type with necessary props information (blueprint), then use `React.createElement()` to build up the React component.

---

## 4. What is HOC and why we need it?

**Answer:**
A Higher-Order Component (HOC) is a function that takes a component and returns an enhanced component.

**Purpose:**
- Reuse cross-cutting logic (auth, theming, analytics) across components
- Add functionality without modifying the original component

---

## 5. How to properly render an SVG element as a react component?

**Answer:**
- **Inline JSX:** Use SVG elements directly in JSX with props and all necessary parameters
- **As image:** Use CSS or `<img>` tag to render SVG elements as pictures
- **SVG components:** Import SVG files as React components (with proper bundler configuration)

---

## 6. What is lazy loading and what does it help?

**Answer:**
Code-split components and only load them when needed, which reduces initial bundle size and provides faster first paint.

**Key points:**
- Works with default exports
- Should always wrap in `<Suspense>` with fallback UI

---

## 7. List several react hooks that you use most and what do they do?

**Answer:**

- **`useState`:** Local state (primitive/object). Setter replaces, doesn't merge
- **`useEffect`:** Run side effects after render; optional cleanup. Controlled by dependencies
- **`useMemo`:** Memoize computed values; avoids expensive recalculations
- **`useCallback`:** Memoize function identities to stabilize props for children
- **`useRef`:** Mutable container that doesn't re-render on change; access DOM nodes
- **`useContext`:** Read from nearest Context Provider; avoids prop drilling
- **`useReducer`:** Complex state logic / state machine; predictable updates
- **`useLayoutEffect`:** Like useEffect but fires synchronously after DOM mutations (measure/position)
- **`useImperativeHandle`:** Customize instance value exposed by forwardRef
- **Concurrent hooks:**
  - `useTransition` (mark state updates as non-urgent)
  - `useDeferredValue` (defer expensive calculations)
  - `useId` (stable unique IDs for SSR/CSR)

---

## 8. what is useState and what value we should pass in as prop?

**Answer:**
`useState(initial)` returns `[state, setState]`. We should pass in the initial state value.

**Key points:**
- Can be a primitive value, object, or function
- If initial state is expensive to compute, pass a function that returns the initial state
- State updates are asynchronous and may be batched

---

## 9. what is the hook useEffect and why we need it?

**Answer:**
Run side effects after render (data fetching, subscriptions, timers, logging, interacting with non-React code).

**Key characteristics:**
- Runs after paint (non-blocking to render)
- Return a cleanup function to avoid memory leaks
- Dependencies control when it re-runs

---

## 10. What is dependency array in useEffect?

**Answer:**
Controls when the effect runs:

- **`[]` (empty array):** Run once on mount (and cleanup on unmount)
- **Omitted:** Run after every render
- **`[dep1, dep2]`:** Run on mount and whenever dependencies change

**Important notes:**
- Dependencies are compared by reference (arrays/objects/functions need stable identities)
- Include everything the effect reads from its closure
- Use ESLint plugin to catch missing dependencies

---

## 11. What is the lifecycle method componentDidUpdate equivalent hook?

**Answer:**
`useEffect` with dependencies that execute when component initializes and updates the values inside.

---

## 12. What is the lifecycle method componentDidMount equivalent hook?

**Answer:**
`useEffect` with empty dependency array that only triggers once when the component initializes.

---

## 13. What is the lifecycle method componentWillUnmount equivalent hook?

**Answer:**
`useEffect` return function which triggers when the component unmounts and performs cleanup functions.

---

## 14. What’s the difference between useCallback and useMemo?
**Answer:**

- **`useMemo(fn, deps)`:** Returns a memoized **value** (the result of fn)
- **`useCallback(fn, deps)`:** Returns a memoized **function** (the fn itself)

**When to use:**
- Use `useMemo` for expensive calculations
- Use `useCallback` to stabilize callback identities passed to children (to prevent unnecessary renders)

---

## 15. What is useContext and the difference between useContext and useState?
**Answer:**

**`useContext`:** Lets a component read a value from the nearest matching Context.Provider without prop drilling.

**`useState`:** Manages local state inside a component. Updating it re-renders that component and its children.

**Key differences:**
- `useState`: Local state management within a single component
- `useContext`: Shared state consumption from a provider higher in the tree

**Relationship:**
They're complementary - you often create state with `useState` (or `useReducer`) in a provider, then read it via `useContext` in children.

**Performance tip:**
For large contexts, consider splitting providers or using context selector libraries to avoid over-renders.

---