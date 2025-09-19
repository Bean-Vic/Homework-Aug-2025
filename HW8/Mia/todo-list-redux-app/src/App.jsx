import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoList from "./TodoList";

import "./App.css";

function App() {
  // const [completedTodos, setCompletedTodos] = useState([
  //   { text: "take out the garbage", isCompleted: true },
  //   { text: "take out the garbage2", isCompleted: true },
  // ]); //array of javascript object
  // const [incompleteTodos, setIncompleteTodos] = useState([
  //   { text: "take out the garbage3", isCompleted: false },
  // ]);
  function createTodo(text) {
    setIncompleteTodos([...incompleteTodos, { text, isCompleted: false }]);
  }
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
