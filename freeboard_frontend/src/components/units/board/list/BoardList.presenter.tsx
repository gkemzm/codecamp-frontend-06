import { getDate } from "../../../../commons/utils";
import * as S from "./BoardList.styles";
import { BoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../../commons/types/generated/types";

export default function BoardListUI(props: BoardListUIProps) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el: IBoard) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              .split("#$%")
              .map((el: string) => (
                <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.Word>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          {/* <S.ColumnBasic>Number({el.createdAt})</S.ColumnBasic> */}
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          {/* <S.PencilIcon src="/images/board/list/write.png" /> */}
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
