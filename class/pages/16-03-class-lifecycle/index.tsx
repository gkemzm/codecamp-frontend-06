import { Component, createRef } from "react"; // Component 사용시 컴포넌트 기능을 가진 클래스
import Router from "next/router";

interface IState {
  count: number;
}
export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  // state,setState는 객체에 속한다.
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨!!!");
    // 포커스 깜빡깜빡
    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    console.log("수정되고 다시그려짐!!!");
  }

  componentWillUnmount() {
    console.log("컴포넌트 사라짐!!!");
    // 채팅방 나가기
    // api 요청!!!
  }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({ count: this.state.count + 1 }));
  };
  // Component 기능의 내장함수 render()

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      // div의 범위가 현재 컴포넌트
      <div>
        {/* 객체 안의 정보를 가져오기에 {} 를 한다. */}
        <input type="text" ref={this.inputRef} />
        <div>현재카운트{this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        <button onClick={this.onClickMove}>나가기!!!</button>
      </div>
    );
  }
}
