import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  ischange: boolean;
  isWarning: string;
}
export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  state = {
    isChange: false,
    isWarning: "",
  };

  componentDidMount() {
    alert("Rendered!!!");
    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    alert("Changed!!!");
  }

  componentWillUnmount() {
    alert("Bye!!");
  }

  onClickCounter = () => {
    console.log(this.state.isChange);
    if (this.state.isChange === false) {
      this.setState((prev: IState) => ({
        isChange: true,
        isWarning: "변경되었습니다.",
      }));
    } else if (this.state.isChange === true) {
      this.setState((prev: IState) => ({
        isChange: false,
        isWarning: "변경되었습니다!!!",
      }));
    }
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.onClickCounter}>변경</button>
        <button onClick={this.onClickMove}>이동</button>
        <div>{this.state.isWarning}</div>
      </div>
    );
  }
}
