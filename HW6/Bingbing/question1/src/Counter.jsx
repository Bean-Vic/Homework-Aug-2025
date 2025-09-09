import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 0,
    };
  }

  increment = () => {
    this.setState((prev) => ({ value: prev.value + 1 }), () => {
      if (this.props.onValueChange) {
        this.props.onValueChange(this.state.value);
      }
    });
  };

  decrement = () => {
    this.setState((prev) => ({ value: prev.value - 1 }), () => {
      if (this.props.onValueChange) {
        this.props.onValueChange(this.state.value);
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p style={{ fontSize: "24px" }}>{this.state.value}</p>
        <div>
          <button onClick={this.decrement}>-1</button>
          <button onClick={this.increment}>+1</button>
        </div>
      </div>
    );
  }
}

export default Counter;
