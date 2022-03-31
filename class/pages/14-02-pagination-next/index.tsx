import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;

const MyColumn = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage > 10) {
      setStartPage((prev) => prev - 10);
    }
  };

  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          {/* <MyColumn>{el._id}</MyColumn> */}
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {/* 사용하지 않는 요소는 _, 처리해준다. */}
      {new Array(10).fill(1).map((_, index) => (
        <button
          key={index + startPage}
          onClick={onClickPage}
          id={String(index + startPage)}
        >
          {index + startPage}
        </button>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <button key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </button>
      ))} */}
      {/* <span onClick={onClickPage} id="1">
        1
      </span>
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span> */}
    </div>
  );
}
