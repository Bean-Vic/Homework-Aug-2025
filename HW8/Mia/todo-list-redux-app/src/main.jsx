import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { todoSlice } from "./todosSlice";

const store = configureStore({ reducer: { todos: todoSlice.reducer } }); //add them to the object as properties
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* allow any component inside this provider, access and modify the store by dispatching actions */}
      <App />{" "}
    </Provider>
  </StrictMode>
);
