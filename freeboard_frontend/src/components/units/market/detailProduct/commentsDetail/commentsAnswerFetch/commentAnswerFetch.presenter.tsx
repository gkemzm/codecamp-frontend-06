import * as S from "./commentAnswerFetch.styles";
import DOMPurify from "dompurify";
import { MouseEvent } from "react";

interface ICommentAnswerHTMLProps {
  data: any;
  deleteUseditemOneQuestion: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function CommentAnswerListHTML(props: ICommentAnswerHTMLProps) {
  return (
    <S.Wrapper>
      <S.NameBox>
        <S.Name>{props.data.user.name}</S.Name>
        <S.Date>{props.data.createdAt.slice(0, 10)}</S.Date>
        <S.CustomDiv>💬</S.CustomDiv>
        <S.CustomDiv onClick={props.deleteUseditemOneQuestion}>❌</S.CustomDiv>
      </S.NameBox>
      <S.TextBox
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(`${props.data.contents}`),
        }}
      ></S.TextBox>
    </S.Wrapper>
  );
}
