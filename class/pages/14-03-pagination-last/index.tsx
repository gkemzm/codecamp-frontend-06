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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
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

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = (event: any) => {
    // if (startPage > 10) {
    //   setStartPage((prev) => prev - 10);
    // }
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 1 });
  };

  const onClickNextPage = (event: any) => {
    if (startPage + 10 > lastPage) return;
    // if(!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
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
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <button
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {``}
            {index + startPage}
          </button>
        ) : (
          <span></span>
        )
      )}
      {/* {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <button
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {``}
              {index + startPage}
            </button>
          )
      )} */}
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
