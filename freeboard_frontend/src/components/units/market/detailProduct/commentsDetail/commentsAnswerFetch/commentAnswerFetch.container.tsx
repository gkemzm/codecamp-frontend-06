import CommentAnswerListHTML from "./commentAnswerFetch.presenter";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  DELETE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./commentAnswerFetch.querys";

interface ICommentAnswerProps {
  data: any;
  data2: any;
}

export default function CommentAnswerList(props: ICommentAnswerProps) {
  const [deleteUseditemQA] = useMutation(DELETE_USEDITEM_QUESTION);
  const [updateUseditemQA] = useMutation(UPDATE_USEDITEM_QUESTION_ANSWER);

  const deleteUseditemOneQuestion = async () => {
    try {
      const result2 = await deleteUseditemQA({
        variables: {
          useditemQuestionAnswerId: props.data._id,
        },
      });
      console.log(result2);
      // alert("삭제가 성공하였습니다.");
    } catch (error) {
      alert("삭제에 실패했습니다.");
    }
  };

  const updateUsedItemQuestionAnswer = async (data: any) => {
    try {
      const updateResult = await updateUseditemQA({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionAnswerId: String(props.data._id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.data2._id },
          },
        ],
      });
      setIsOpen(false);
      console.log(updateResult);
      alert("Update Success");
    } catch {
      alert("Update Failed");
    }
  };

  const { handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const [isOpen, setIsOpen] = useState(false);

  const displayOnoff = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else if (isOpen === true) {
      setIsOpen(false);
    }
  };

  return (
    <CommentAnswerListHTML
      data={props.data}
      deleteUseditemOneQuestion={deleteUseditemOneQuestion}
      updateUsedItemQuestionAnswer={updateUsedItemQuestionAnswer}
      handleSubmit={handleSubmit}
      onChangeContents={onChangeContents}
      displayOnoff={displayOnoff}
      isOpen={isOpen}
    />
  );
}
