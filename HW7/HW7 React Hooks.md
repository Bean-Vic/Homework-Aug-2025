# HW7: React Hooks

### 0. Leetcode

https://leetcode.com/problem-list/oizxjoit/

每天1-3道题，需要用JavaScript或者TypeScript

### 1. 问答练习(八股）

准备以下⼋股题⽬答案, 写在`note.md`⾥

<aside>

1. How do we do prop types check?
2. What is Prop drilling?
3. How are we going to render a variable as a react component?
4. What is ***HOC*** and why we need it?
5. How to properly render an SVG element as a react component?
6. What is lazy loading and what does it help?
7. List several react hooks that you use most and what do they do?
8. what is `useState` and what value we should pass in as prop?
9. what is the hook `useEffect` and why we need it?
10. What is dependency array in `useEffect`?
11. What is the lifecycle method `componentDidUpdate` equivalent hook?
12. What is the lifecycle method `componentDidMount` equivalent hook?
13. What is the lifecycle method `componentWillUnmount` equivalent hook?
14. What’s the difference between `useCallback` and `useMemo`?
15. What is `useContext` and the difference between `useContext` and `useState`?
</aside>

⼩组间Peer Mock，录⾳并上传

### 2. Coding

Write a `functional component` with React hooks:

1. Fetches a **random dog image** from a public API
2. Render the dog image base on API response
3. Build a **"Get Another Dog"** button to fetch a new image
4. have a **loading** state while API is loading
5. use `fetch()` method to make API request
6. should properly handle failure API requests
7. Extra Credit: Instead of using `fetch()` , use `Axios` with `Factory` design pattern to make the API request
8. Bonus: Make you App look pretty by using 3rd party CSS components like MUI/tailwindCSS

Note: use following API with GET method [`https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random)` ([https://dog.ceo/dog-api/](https://dog.ceo/dog-api/))

Sample payload:

```jsx
{

	"message": "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_3240.jpg",
	"status": "success"

}
```