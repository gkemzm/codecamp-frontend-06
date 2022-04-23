import { ICommentDetailHTMLProps } from "./commentsD.types";
import * as S from "./commentsD.styles";
import { getDate } from "../../../../../commons/utils";
import DOMPurify from "dompurify";
import SkyBlueButton from "../../../../commons/buttons/skyBlueButton/index";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import CommentAnswerList from "./commentsAnswerFetch/commentAnswerFetch.container";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CommentDetailHTML(props: ICommentDetailHTMLProps) {
  const [isHover, setIsHover] = useState(false);
  const onClickBtnDisplay = () => {
    if (isHover === false) {
      setIsHover(true);
    } else if (isHover === true) {
      setIsHover(false);
    }
  };

  return (
    <S.Wrapper>
      <S.NameBox>
        <S.Name>{props.data.user.name}</S.Name>
        <S.Date>{getDate(props.data.createdAt)}</S.Date>
      </S.NameBox>
      <S.TextBox
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(`${props.data.contents}`),
        }}
      ></S.TextBox>
      <S.BtnListRow>
        <S.Area onClick={onClickBtnDisplay}>
          <SkyBlueButton isActive={false} title={"답글달기"} />
        </S.Area>
        <S.Area>
          <SkyBlueButton isActive={false} title={"수정하기"} />
        </S.Area>
        <S.Area onClick={props.deleteUseditemOneQuestion}>
          <SkyBlueButton isActive={false} title={"삭제하기"} />
        </S.Area>
      </S.BtnListRow>
      <S.HiddenArea isHover={isHover}>
        <form onSubmit={props.handleSubmit(props.createUseditemCommentAnswer)}>
          <S.AnswerBox>
            <ReactQuill
              onChange={props.onChangeContents}
              style={{ height: "100px", width: "900px" }}
              theme="snow"
            />
            <S.Btn>
              <SkyBlueButton isActive={false} title={"답글달기"} />
            </S.Btn>
          </S.AnswerBox>
        </form>
        <S.BasicColumn>
          {props.QAData?.fetchUseditemQuestionAnswers.map((el: any) => (
            <>
              <CommentAnswerList data={el} />
            </>
          ))}
        </S.BasicColumn>
      </S.HiddenArea>
    </S.Wrapper>
  );
}
