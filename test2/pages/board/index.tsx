import BoardList from "../../src/components/list/BoardList.container";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function BoardsPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const [keyword, setKeyword] = useState("");
  return (
    <MainPage>
      <BoardList
        data={data}
        keyword={keyword}
        setKeyword={setKeyword}
        fetchMore={fetchMore}
      />
    </MainPage>
  );
}
