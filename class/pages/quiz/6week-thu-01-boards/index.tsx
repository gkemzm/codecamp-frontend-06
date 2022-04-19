import { useQuery, gql } from "@apollo/client";
import * as S from "./styles";
import { IBoard } from "../../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";
import { indexOf } from "lodash";
import { useRouter } from "next/router";
import { getDate } from "../../../src/commons/utils";
// 게시글 상세
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BasketPagePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  const [a, setA] = useState<string[]>([]);
  const onClickBasket =
    (aaa: IBoard) => (event: MouseEvent<HTMLButtonElement>) => {
      console.log(aaa);

      const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

      const temp = baskets.filter(
        (basketEl: IBoard) => basketEl._id === aaa._id
      );
      if (temp.length === 1) {
        alert("이미 담으신 물품입니다.");
        return 200;
      }
      const { __typename, ...newAAA } = aaa;
      baskets.push(newAAA);
      localStorage.setItem("baskets", JSON.stringify(baskets));
      setA([...a, (event.target as HTMLButtonElement).id]);
      console.log(a);
    };

  const onClickDeleteBasket = (bbb: IBoard) => () => {
    const deleteBaskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const deleteTemp = deleteBaskets.filter((el) => bbb._id !== el._id);

    console.log(deleteTemp);
    localStorage.setItem("baskets", JSON.stringify(deleteTemp));

    console.log(localStorage);
    console.log(a);
    for (let i = 0; i < a.length; i++) {
      if (a[i].includes(bbb._id)) {
        return a.splice(indexOf(Number(a[i])), 1);
      }
    }
    setA([...a]);
    // 죄송합니다. 컴포넌트 안나누고 이거로 하고싶었습니다.....
    // 취소를 두번 눌러야 합니다....
  };

  const moveToLogin = () => {
    router.push("/quiz/6week-thu-03-login");
  };

  return (
    <div>
      <button onClick={moveToLogin}>로그인으로 이동</button>
      {data?.fetchBoards.map((el: IBoard) => (
        <S.MapWrapper key={el._id}>
          <S.MyRow key={el._id}>
            <S.MyColumn>{el.writer}</S.MyColumn>
            <S.MyColumn>{el.title}</S.MyColumn>
            {a.includes(el._id) ? (
              <S.Btn1 id={el._id} onClick={onClickDeleteBasket(el)}>
                담기취소(더블클릭)
              </S.Btn1>
            ) : (
              <S.Btn1 id={el._id} onClick={onClickBasket(el)}>
                장바구니담기
              </S.Btn1>
            )}
            <S.MyColumn>{getDate(el.createdAt)}</S.MyColumn>
          </S.MyRow>
          {/* {getDate(el.createdAt).slice(7, 9) ? (
            <S.MyRow key={el._id}>
              <S.MyColumn>{el.writer}</S.MyColumn>
              <S.MyColumn>{el.title}</S.MyColumn>
              <S.MyColumn>{getDate(el.createdAt)}</S.MyColumn>
            </S.MyRow>
          ) : (
            <></>
          )} */}
        </S.MapWrapper>
      ))}
    </div>
  );
}
