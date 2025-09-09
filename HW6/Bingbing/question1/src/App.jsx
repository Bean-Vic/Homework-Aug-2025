import React from "react";
import Counter from "./Counter";
import withLocalStorage from "./withLocalStorage";

// 包装 Counter，让它带上 localStorage 功能
const PersistentCounter = withLocalStorage(Counter, "myCounter");

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello React Counter with LocalStorage</h1>
      <PersistentCounter initialValue={10} />
    </div>
  );
}

export default App;
