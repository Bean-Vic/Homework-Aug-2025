import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [{ text: "go to the store", isCompleted: true }],
  },
  reducers: {
    createTodo: (state, action) => {
      state.value = [
        ...state.value,
        {
          text: action.payload,
          isCompleted: false,
        },
      ];
    },
    markAsCompleted: (state) => {
      const text = action.payload;
      const todo = state.value.find((t) => t.text === text);
      todo.isCompleted = true;
    },
    deleteTodo: (state, action) => {
      const text = "new todo";
      state.value = state.value.filter((t) => t.text !== text);
    },
  },
});

export const { createTodo, markAsCompleted, deleteTodo } = todoSlice.actions;
