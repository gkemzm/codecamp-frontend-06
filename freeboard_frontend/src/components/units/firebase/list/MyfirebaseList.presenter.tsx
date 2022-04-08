import * as S from "./MyfirebaseList.styles";
import { IMyfirebaseListUIProps } from "./MyfirebaseList.types";
// import { v4 as uuidv4 } from "uuid";

export default function FirebaseListUI(props: IMyfirebaseListUIProps) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.Column>번호</S.Column>
        <S.Column>제목</S.Column>
        <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
        <S.Column>작성자</S.Column>
      </S.Row>
      {props.dataBoards?.map((el: any, index: number) => (
        <S.Row key={index}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnBasic>{el.title}</S.ColumnBasic>
          <S.ColumnTitle>{el.contents}</S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.Area>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          게시물 등록하기
        </S.Button>
      </S.Area>
    </S.Wrapper>
  );
}
