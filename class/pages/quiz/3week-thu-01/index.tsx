import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
// import List1 from "../../../src/components/units/board/14-quiz/list1";
import List2 from "../../../src/components/units/board/14-quiz/list2";

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

export default function QuizMain() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(true);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  return (
    <div>
      {/* <List1 data={data} /> */}
      <List2
        refetch={refetch}
        lastPage={lastPage}
        isActive={isActive}
        setIsActive={setIsActive}
        isActive2={isActive2}
        setIsActive2={setIsActive2}
      />
    </div>
  );
}
