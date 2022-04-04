import { Component } from "react"; // Component 사용시 컴포넌트 기능을 가진 클래스

interface IState {
  count: number;
}
export default class CounterPage extends Component {
  // state,setState는 객체에 속한다.
  state = {
    count: 0,
  };

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({ count: this.state.count + 1 }));
  };
  // Component 기능의 내장함수 render()

  render() {
    return (
      <div>
        {/* 객체 안의 정보를 가져오기에 {} 를 한다. */}
        <div>현재카운트{this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
      </div>
    );
  }
}
