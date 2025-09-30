import { useDispatch } from "react-redux";
import { markAsCompleted, deleteTodo } from "./todosSlice";

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      {/* 2 function props for when the complete button is clicked */}
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      //display a delete button if a todo is already complete
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.text))}>
          {" "}
          Delete Item{" "}
        </button>
      ) : (
        <button onClick={() => dispatch(markAsCompleted(todo.text))}>
          Mark as Completed
        </button>
      )}
    </div>
  );
}
