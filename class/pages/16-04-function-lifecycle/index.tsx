import { useRef, useState, useEffect } from "react"; // Component 사용시 컴포넌트 기능을 가진 클래스
// import Router from "next/router";
import { useRouter } from "next/router";

// interface IState {
//   count: number;
// }
export default function CounterPage() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  // inputRef = createRef<HTMLInputElement>();
  // state,setState는 객체에 속한다.
  const [count, setCount] = useState(99);

  // componentDidMount() {
  //   console.log("마운트됨!!!");
  //   // 포커스 깜빡깜빡
  //   inputRef.current?.focus();
  // }

  // componentDidMount()와같은 역활

  // 1번 DidMount
  // useEffect(() => {
  //   console.log("마운트됨");
  //   inputRef.current?.focus();
  // }, []);

  // componentDidUpdate() {
  //   console.log("수정되고 다시그려짐!!!");
  // }
  // 위의 useEffect와 대괄호 차이

  // 2번 DidUpdate
  useEffect(() => {
    console.log("수정되고 다시그려짐!!!");
  }, [count]); // count 변경시 실행을 의미
  // [count, writer, title]); 이 될경우 셋중 하나만 바뀌어도 실행이됨

  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!");
  //   // 채팅방 나가기
  //   // api 요청!!!
  // }

  // 3번 Willunmount
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!!!");
  //   };
  // }, []);

  // 4번 DidMount와 willUnmount를 합치기!!
  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!!!");
    };
  }, []);
  // [] 는 의존성 배열(Dependency Array)라 하며 함수 실행여부를 의존한다. 비었을 경우 한번 실행한 후 끝

  // 5번 useEffect의 잘못된 사용 예시() 1.추가 랜더링, 2.무한루프
  // useEffect안에서 setState를 사용시 재 랜더링이 발생한다.
  // 어쩔수 없을 경우가 아니라면 가능하면 빼주는게 좋다.

  // 1. 추가랜더링
  // useEffect(() => {
  //   setCount(10);
  // }, []);

  // 2. 무한루프
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };
  // Component 기능의 내장함수 render()

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게???");
  return (
    // div의 범위가 현재 컴포넌트
    <div>
      {/* 객체 안의 정보를 가져오기에 {} 를 한다. */}
      <input type="text" ref={inputRef} />
      <div>현재카운트{count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
