/* eslint-disable array-callback-return */
import Container from "./quiz01container";
import { useState } from "react";

export default function QuizPage() {
  ["철수", "영희", "훈이", "맹구"].map((index, i) => {
    console.log(`${index}는 ${i}번째 칸에 들어있습니다.`);
  });

  const [state, setState] = useState(0);

  const onClickBtn = () => {
    setState((qwer) => qwer + 1);
  };
  const a = /^\d{3}-\d{3,4}-\d{4}$/.test("010-1234-5678");
  const b = /^\w+@\w+\.\w+$/.test("asdfasdf@a.com");
  const c = /^\d{4}.\d{2}.\d{2}$/.test("2018.01.01");
  console.log(a);
  console.log(b);
  console.log(c);

  return (
    <>
      <Container />
      <button onClick={onClickBtn}>카운트</button>
      <div>{state}</div>
    </>
  );
}
