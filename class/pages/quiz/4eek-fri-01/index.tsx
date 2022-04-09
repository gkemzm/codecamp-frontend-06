import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
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

const Wrapper = styled.div`
  width: 800px;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 120px;
`;
const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

const Btn = styled.button`
  margin-left: 10px;
  width: 30px;
  background-color: white;
  border: none;
  box-shadow: 0px 4px 15px skyblue;
  border-radius: 10px;
`;

interface IProps {
  isMatched: boolean;
}
const Word = styled.span`
  font-size: ${(props: IProps) => (props.isMatched ? "18px" : "15px")};
  font-weight: ${(props: IProps) => (props.isMatched ? "900" : "100")};
`;

export default function MapBoardPage() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <Wrapper>
      검색어입력:
      <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el._id.slice(0, 5)}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyword === el}>
                  {el}
                </Word>
              ))}
          </MyColumn>
        </MyRow>
      ))}
      <Wrapper2>
        {new Array(10).fill(1).map((_, index) => (
          <Btn key={index + 1} onClick={onClickPage} id={String(index + 1)}>
            {index + 1}
          </Btn>
        ))}
      </Wrapper2>
    </Wrapper>
  );
}

// 1.키워드스테이트 만들기 2. 복붙하기
