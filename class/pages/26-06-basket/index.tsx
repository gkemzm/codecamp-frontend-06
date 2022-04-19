import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../src/commons/types/generated/types";
// 게시글 상세
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPagePage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data);

  const onClickBasket = (aaa: IBoard) => () => {
    // aaa 는 매개변수라 바뀌어도 상관 없다.
    console.log(aaa);

    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]"); // 과거에 담았던 basket(장바구니) 값을 객체or배열로 만들어 가져온 것

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === aaa._id); // temp 는 임시데이터로 많이쓰임
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      return 200;
    }
    // delete aaa.__typename 은 원본이 삭제되므로 권장되지 않는다.

    // 3. 장바구니에 담기
    const { __typename, ...newAAA } = aaa; // restAPI를 통한 __typename 제외
    baskets.push(newAAA);
    // localStorage.setItem("basket", JSON.stringify(aaa));  // __typename을 제거하기전인 원본
    // localStorage.setItem("basket", JSON.stringify(newAAA)); // aaa는 객체로 받아오기 때문에 문자열로 바꿔줘야한다.
    localStorage.setItem("baskets", JSON.stringify(baskets)); // 기존 장바구니 basket + 새로운 물품 newAAA를 추가해서 로컬스토리지에 저장
  };
  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>
            <input type="checkbox"></input>
          </MyColumn>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </MyRow>
      ))}
    </div>
  );
  // 고유한 값을가진 키가 필요하다.
}
