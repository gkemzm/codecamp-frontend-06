import * as S from "./commentAnswerFetch.styles";
import DOMPurify from "dompurify";
import { MouseEvent } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import SkyBlueButton from "../../../../../commons/buttons/skyBlueButton/index";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface ICommentAnswerHTMLProps {
  data: any;
  deleteUseditemOneQuestion: (event: MouseEvent<HTMLDivElement>) => void;
  updateUsedItemQuestionAnswer: (
    event: MouseEvent<HTMLFormElement> | undefined
  ) => void;
  onChangeContents: (event: any) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  displayOnoff: (event: MouseEvent<HTMLDivElement>) => void;
  isOpen: boolean;
}

export default function CommentAnswerListHTML(props: ICommentAnswerHTMLProps) {
  return (
    <S.Wrapper>
      <S.NameBox>
        <S.Name>{props.data.user.name}</S.Name>
        <S.Date>{props.data.createdAt.slice(0, 10)}</S.Date>
        <S.CustomDiv onClick={props.displayOnoff}>💬</S.CustomDiv>
        <S.CustomDiv onClick={props.deleteUseditemOneQuestion}>❌</S.CustomDiv>
      </S.NameBox>
      {props.isOpen ? (
        <form
          onSubmit={props.handleSubmit(
            props.updateUsedItemQuestionAnswer as unknown as () => void
          )}
        >
          <S.AnswerBox>
            <ReactQuill
              onChange={props.onChangeContents}
              style={{ height: "100px", width: "900px" }}
              theme="snow"
              defaultValue={props.data.contents}
            />
            <S.Btn>
              <SkyBlueButton isActive={false} title={"답글수정"} />
            </S.Btn>
          </S.AnswerBox>
        </form>
      ) : (
        <S.TextBox
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(`${props.data.contents}`),
          }}
        ></S.TextBox>
      )}
    </S.Wrapper>
  );
}
