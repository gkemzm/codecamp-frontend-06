import BoardList from "../../src/components/units/board/list/BoardList.container";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import PageList from "../../src/components/units/board/list/numbar/numbar";
import styled from "@emotion/styled";
import BestPage from "../../src/components/units/board/list/bestBoard/bestBoard";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function BoardsPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(true);
  const [btnColor, setBtnColor] = useState("");

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <MainPage>
      <BestPage />
      <BoardList data={data} />
      <PageList
        refetch={refetch}
        lastPage={lastPage}
        isActive={isActive}
        setIsActive={setIsActive}
        isActive2={isActive2}
        setIsActive2={setIsActive2}
        btnColor={btnColor}
        setBtnColor={setBtnColor}
      />
    </MainPage>
  );
}
