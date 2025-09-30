import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

export default function TodoList({}) {
  const todos = useSelector((state) => state.todos.value); //exact part of redux store
  return (
    <div>
      <h1>My todos</h1>
      <NewTodoForm />
      <h3>InCompleted</h3>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
      <h3>Completed</h3>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  );
}
