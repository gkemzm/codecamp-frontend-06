import CommentDetailHTML from "./commentsD.presenter";
import { ICommentDetailProps } from "./commentsD.types";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from "./commentsD.query";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CommentDetailCotainer(props: ICommentDetailProps) {
  const [questionAnswer] = useMutation(CREATE_USEDITEM_QUESTION_ANSWER);
  const [deleteUseditemQ] = useMutation(DELETE_USEDITEM_QUESTION);
  const [updateQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const [isHover2, setIsHover2] = useState(false);

  const router = useRouter();
  const { data: QAData } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.data._id,
    },
  });

  // watch
  const { handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // const contents = watch().contents?.length // <==?

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const createUseditemCommentAnswer = async (data: any) => {
    try {
      const result = await questionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.data._id },
          },
        ],
      });
      console.log(result);
    } catch {}
  };

  const updateUsedItemQuestion = async (data: any) => {
    try {
      const updateResult = await updateQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: String(props.data._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
      setIsHover2(false);
      console.log(updateResult);
      alert("Update Success");
    } catch {
      alert("Update Failed");
    }
  };

  const deleteUseditemOneQuestion = async () => {
    try {
      const result2 = await deleteUseditemQ({
        variables: {
          useditemQuestionId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
      console.log(result2);
      alert("댓글을 삭제했습니다.");
    } catch (error) {
      alert("삭제에 실패했습니다.");
    }
  };
  const onClickBtnUpdateDisplay = () => {
    if (isHover2 === false) {
      setIsHover2(true);
    } else if (isHover2 === true) {
      setIsHover2(false);
    }
  };

  return (
    <CommentDetailHTML
      data={props.data}
      QAData={QAData}
      isHover2={isHover2}
      createUseditemCommentAnswer={createUseditemCommentAnswer}
      deleteUseditemOneQuestion={deleteUseditemOneQuestion}
      onChangeContents={onChangeContents}
      handleSubmit={handleSubmit}
      updateUsedItemQuestion={updateUsedItemQuestion}
      onClickBtnUpdateDisplay={onClickBtnUpdateDisplay}
    />
  );
}
