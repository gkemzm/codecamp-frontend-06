import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // const onClickSearch = () => {
  //   refetch({ search: search, page: 1 });
  // };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 200); // 200 = 0.2  0.2초간 아무런 작업이 없으면 함수 안쪽(리패치)이 실행됨

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // refetch({ search: event.target.value, page: 1 }); // 쉽지만 서버에 부하를 많이 줘서 좋은 방법은 아니다.
  };

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      검색어입력:
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <button key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
