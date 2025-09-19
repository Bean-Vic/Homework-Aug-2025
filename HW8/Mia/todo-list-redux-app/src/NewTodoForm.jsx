import { useState } from "react";
//add usedispatch hook so would be able to trigger the right action
import { useDispatch } from "react-redux";
import { createTodo } from "./todosSlice";

export default function NewTodoForm({}) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(createTodo(inputText));
          setInputText("");
        }}
      >
        Create Todo
      </button>
    </div>
  );
}
