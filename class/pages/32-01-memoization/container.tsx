import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";
export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다!!!");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => {
    return Math.random();
  }, []);
  console.log(aaa);

  //   useCallback(() => {}, []);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet = countLet + 1;
  }, []);

  const onClickCountState = useCallback(() => {
    console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // useMemo로 useCallback 만들어보기!!!

  // 이 친구도 값이 증가하지 않음
  //   const onClickCountState = useMemo(() => {
  //     return () => {
  //       setCountState(countState + 1);
  //     };
  //   }, []);
  return (
    <div>
      <div>=====================================</div>
      <h1>이것은 컨테이너 입니다!!!</h1>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기!!!</button>
      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기!!!</button>
      <div>=====================================</div>
      <MemoizationPresenterPage />
    </div>
  );
}

// countState가 같이 기억이되어 state가 저장이 되지 않는다.
// useCallback 사용시 state를 사용하면 안된다.
//
// const onClickCountState = useCallback(() => {
//     console.log(countState + 1);
//     setCountState(countState + 1);
//   }, []);
// 아래처럼
// const onClickCountState = useCallback(() => {
//     console.log(countState + 1);
//     setCountState((prev) => prev + 1);
//   }, []);
