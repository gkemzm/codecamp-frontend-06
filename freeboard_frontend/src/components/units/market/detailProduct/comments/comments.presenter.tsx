import { ICommentHTMLProps } from "./comments.types";
import * as S from "./comments.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import SkyBlueButton from "../../../../commons/buttons/skyBlueButton/index";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CommentSignHTML(props: ICommentHTMLProps) {
  return (
    <S.Wrapper>
      <S.TextBox>댓글 작성</S.TextBox>
      <form onSubmit={props.handleSubmit(props.createUseditemComment)}>
        <S.TextArea>
          <ReactQuill
            onChange={props.onChangeContents}
            style={{ height: "150px" }}
          />
        </S.TextArea>
        <S.SubmitBtn>
          <SkyBlueButton isActive={false} title={"댓글 등록"} />
        </S.SubmitBtn>
      </form>
    </S.Wrapper>
  );
}
