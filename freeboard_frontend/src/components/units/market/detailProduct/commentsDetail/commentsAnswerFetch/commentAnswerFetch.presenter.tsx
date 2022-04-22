import * as S from "./commentAnswerFetch.styles";
import DOMPurify from "dompurify";

interface ICommentAnswerHTMLProps {
  data: any;
}

export default function CommentAnswerListHTML(props: ICommentAnswerHTMLProps) {
  return (
    <S.Wrapper>
      <S.NameBox>
        <S.Name>{props.data.user.name}</S.Name>
        <S.Date>{props.data.createdAt.slice(0, 10)}</S.Date>
      </S.NameBox>
      <S.TextBox
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(`${props.data.contents}`),
        }}
      ></S.TextBox>
    </S.Wrapper>
  );
}
