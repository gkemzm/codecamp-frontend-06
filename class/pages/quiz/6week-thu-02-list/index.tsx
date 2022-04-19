import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { getDate } from "../../../src/commons/utils";

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPagePage() {
  const [basketItems, setBasketItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  const moveToboards = () => {
    router.push("/quiz/6week-thu-01-boards");
  };
  return (
    <div>
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{getDate(el.createdAt)}</MyColumn>
          <MyColumn>
            {" "}
            {getDate(el.createdAt).slice(7, 9)}일에 장바구니에 등록되었습니다.
          </MyColumn>
        </MyRow>
      ))}
      <button onClick={moveToboards}>리스트로이동</button>
    </div>
  );
}
