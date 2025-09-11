import React from "react";
import Button from "@mui/material/Button";

// --- High Order Component for localStorage ---
function withLocalStorage(WrappedComponent, key) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      // 从 localStorage 读取值（如果有的话）
      const savedValue = localStorage.getItem(key);
      this.state = {
        initialValue:
          savedValue !== null ? Number(savedValue) : props.initialValue,
      };
    }
    handleValueChange = (newValue) => {
      localStorage.setItem(key, newValue); // 更新缓存
      this.setState({ initialValue: newValue });
    };
    render() {
      return (
        <WrappedComponent
          {...this.props}
          initialValue={this.state.initialValue}
          onValueChange={this.handleValueChange}
        />
      );
    }
  };
}
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Initial props:", props);
    this.state = {
      counter: props.initialValue ?? 10, //Nullish coalescing operator
      // if 1st value nullish, then output 2nd value
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }

  // Updating Phase
  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    // you can do some update logic here with prevProps
    console.log(`
    previous props: ${JSON.stringify(prevProps)}`);
  }
  // unmounting phase
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  handleClick() {
    console.log("handleClick triggered");
    this.setState(
      (prevState) => ({ counter: prevState.counter + 1 }),
      () => this.props.onValueChange?.(this.state.counter) // 通知 HOC 更新 localStorage
    );
  }

  handleClickMinus() {
    console.log("handleClick Minus triggered");
    this.setState(
      (prevState) => ({ counter: prevState.counter - 1 }),
      () => this.props.onValueChange?.(this.state.counter)
    );
  }

  render() {
    return (
      <>
        <Button variant="contained" onClick={this.handleClickMinus}>
          sub
        </Button>
        <span>Render current state on web page: {this.state.counter}</span>
        <Button variant="outlined" onClick={this.handleClick}>
          add
        </Button>
      </>
    );
  }
}

// --- Wrap App with HOC ---
export default withLocalStorage(App, "myCounterValue");
