// import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
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

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickEdit = (event) => {
    const aaa = myIndex;
    aaa[event.target.id] = true; // 일반적인 복사가 일어나 30행의 false가 true로 설정됨
    console.log(aaa);
    setMyIndex(aaa); // 기존상태
    setMyIndex([...aaa]); // 얕은복사를해준상태
    // setMyIndex(Number(event.target.id));
  };

  console.log(data);
  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {myIndex[index] === false && (
            <MyRow>
              <MyColumn>
                <input type="checkbox"></input>
              </MyColumn>
              <MyColumn>{el._id}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={index} onClick={onClickEdit}></button>
            </MyRow>
          )}
          {myIndex[index] === true && <div>수정하기 화면입니다.</div>}
        </div>
      ))}
    </div>
  );
  // 고유한 값을가진 키가 필요하다.
}
