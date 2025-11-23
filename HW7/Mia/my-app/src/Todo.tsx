import React, { useReducer, useState } from "react";

function todoReducer(todos, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.payload);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "EDIT":
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return todos;
  }
}
export function App(props) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (input.trim() !== "") {
      if (editId) {
        dispatch({ type: "EDIT", payload: { id: editId, text: input } });
        setEditId(null);
      } else {
        dispatch({ type: "ADD", payload: input });
      }
      setInput("");
    }
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div>
      <h2>Todo List (useReducer)</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>{editId ? "Update" : "Add"}</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              margin: "8px 0",
            }}
          >
            <span>{todo.text}</span>
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              Delete
            </button>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
