import CommentDetailHTML from "./commentsD.presenter";
import { ICommentDetailProps } from "./commentsD.types";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  DELETE_USEDITEM_QUESTION,
} from "./commentsD.query";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";

export default function CommentDetailCotainer(props: ICommentDetailProps) {
  const [questionAnswer] = useMutation(CREATE_USEDITEM_QUESTION_ANSWER);
  const [deleteUseditemQ] = useMutation(DELETE_USEDITEM_QUESTION);

  const router = useRouter();
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

  const deleteUseditemOneQuestion = async () => {
    try {
      const result2 = await deleteUseditemQ({
        variables: {
          useditemQuestionId: props.data._id,
        },
      });
      console.log(result2);
      alert("삭제가 성공하였습니다.");
      router.push("/market");
    } catch (error) {
      alert("삭제에 실패했습니다.");
    }
  };

  // watch
  const { handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // const contents = watch().contents?.length // <==?

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  return (
    <CommentDetailHTML
      data={props.data}
      QAData={QAData}
      createUseditemCommentAnswer={createUseditemCommentAnswer}
      deleteUseditemOneQuestion={deleteUseditemOneQuestion}
      onChangeContents={onChangeContents}
      handleSubmit={handleSubmit}
    />
  );
}
