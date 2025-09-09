import React, { useState } from "react";

function withLocalStorage(WrappedComponent, storageKey = "counterValue") {
  return function WithLocalStorage(props) {
    // 从 localStorage 或 props 初始化
    const [value, setValue] = useState(() => {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : props.initialValue;
    });

    // 统一更新 state 和 localStorage
    const handleValueChange = (newValue) => {
      setValue(newValue); // 更新内部 state
      localStorage.setItem(storageKey, JSON.stringify(newValue));
    };

    return (
      <WrappedComponent
        {...props}
        initialValue={value}
        onValueChange={handleValueChange}
      />
    );
  };
}

export default withLocalStorage;
