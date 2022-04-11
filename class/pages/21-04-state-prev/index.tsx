import { useState } from "react";
export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  const onClickCounter = () => {
    // 1.화살표함수
    setCount((prev) => prev + 1);

    // 2.함수선언식
    setCount(function (prev) {
      // 로직 추가 가능
      // if(), for(), ......

      // prev 또한 함수의 매개변수로 사용할 수 있다.
      return prev + 1;
    });

    // 3. 매개변수 바꿔보기
    setCount((asdfasdf) => asdfasdf + 1);
  };
  return (
    <>
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCounter}>카운트 증가!!!</button>
    </>
  );
}
