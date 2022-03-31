// import { useState } from "react";
export default function Child1(props: any) {
  // 아래것들을 자식 2에서도 쓰고싶을 때 부모로 넘겨준다.
  //   const [count, setCount] = useState(0);

  //   const onClickCountUp = () => {
  //     setCount((prev) => prev + 1);
  //   };
  // -----------------------------------별개---------------------------------------
  // 방법2
  const aaa = () => {
    props.setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>자식1의 카운트: {props.count}</div>
      <button onClick={aaa}>카운트 올리기!!!</button>
    </div>
  );
}
