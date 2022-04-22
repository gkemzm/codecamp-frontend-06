import CommentDetailHTML from "./commentsD.presenter";
import { ICommentDetailProps } from "./commentsD.types";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./commentsD.query";
import { useForm } from "react-hook-form";

export default function CommentDetailCotainer(props: ICommentDetailProps) {
  const [questionAnswer] = useMutation(CREATE_USEDITEM_QUESTION_ANSWER);
  const { data: QAData } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.data._id,
    },
  });

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

  const { handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  return (
    <CommentDetailHTML
      data={props.data}
      QAData={QAData}
      createUseditemCommentAnswer={createUseditemCommentAnswer}
      onChangeContents={onChangeContents}
      handleSubmit={handleSubmit}
    />
  );
}
