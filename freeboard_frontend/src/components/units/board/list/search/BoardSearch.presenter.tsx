// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import * as S from "./BoardSearch.styles";
import { ISearchBoardProps } from "./BoardSearch.types";

export default function SearchBoardHTML(props: ISearchBoardProps) {
  return (
    <S.Wrapper>
      검색어입력:
      <S.SearchInput type="text" onChange={props.onChangeSearch} />
      {/* {props.data?.fetchBoards.map((el: any, index: any) => (
        <S.MyRow key={el._id}>
          <S.MyColumn>
            <input type="checkbox" />
          </S.MyColumn>
          <S.MyColumn>{el._id}</S.MyColumn>
          <S.MyColumn>{el.writer}</S.MyColumn>
          <S.MyColumn>
            {el.title
              .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              .split("#$%")
              .map((el: any) => (
                <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.Word>
              ))}
          </S.MyColumn>
        </S.MyRow>
      ))} */}
      {/* {new Array(10).fill(1).map((_, index) => (
        <button
          key={index + 1}
          onClick={props.onClickPage}
          id={String(index + 1)}
        >
          {index + 1}
        </button>
      ))} */}
    </S.Wrapper>
  );
}

// 1.키워드스테이트 만들기 2. 복붙하기
