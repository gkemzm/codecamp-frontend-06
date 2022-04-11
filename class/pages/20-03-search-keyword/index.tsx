import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

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

interface IProps {
  isMatched: boolean;
}
const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function MapBoardPage() {
  // const [search, setSearch] = useState("");

  const [keyword, setKeyword] = useState("");

  // const { data, refetch } = useQuery<
  //   Pick<IQuery, "fetchBoards">,
  //   IQueryFetchBoardsArgs
  // >(FETCH_BOARDS, {
  //   variables,fetchPolicy:"cache-first"// 기본(default)이 퍼스트 cash-only는 캐시에서만 꺼내오기 network-only는 백엔드에서만 꺼내오기
  // });
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  // const onClickSearch = () => {
  //   refetch({ search: search, page: 1 });
  // };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
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
          <MyColumn>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyword === el}>
                  {el}
                </Word>
                // <Word key={uuidv4()} isMatched={keyword === el ? true : false}>{el}</Word>
              ))}
          </MyColumn>
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

// 1.키워드스테이트 만들기 2. 복붙하기
