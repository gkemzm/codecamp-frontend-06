import { useState } from "react";

// export default function StatePrevPage() {
//   const [count, setCount] = useState(0);

//   const onClickCount = () => {
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <>
//       <div>현재카운트: {count}</div>
//       <button onClick={onClickCount}>카운트 올리기!!!</button>
//     </>
//   );
// }

export default function PrevstatePage() {
  const [state, setState] = useState(0);

  function sumAll() {
    setState((prev) => prev + 1);
    setState((prev) => prev + 2);
    setState((prev) => prev + 3);
    setState((prev) => prev + 4);
  }

  return (
    <>
      <div>결과는: {state}</div>
      <button onClick={sumAll}>실행!</button>
    </>
  );
}
