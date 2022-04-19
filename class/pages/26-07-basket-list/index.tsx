import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPagePage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    // useEffect는 서버가 아닌 브라우저에서 실행 된다.
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  // 서버가 아닌 브라우저에서만 실행이라는 조건 위와 같이 동작하지만 랜더링이 많이 일어남
  // if(typeof window === "undefined"){
  //   const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
  //   setBasketItems(baskets);
  // }

  return (
    <div>
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
  // 고유한 값을가진 키가 필요하다.
}
