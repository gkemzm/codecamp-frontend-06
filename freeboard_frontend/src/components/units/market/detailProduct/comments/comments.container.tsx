import CommentSignHTML from "./comments.presenter";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./comments.query";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export default function CommentSignContainer() {
  const [createProductComment] = useMutation(CREATE_USEDITEM_QUESTION);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  const createUseditemComment = async (data: IUseditemQuestion) => {
    try {
      const result = await createProductComment({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: router.query.marketId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
      console.log(result);
      alert("댓글등록에 성공했습니다.");
    } catch (error) {
      alert("댓글등록에 실패했습니다.");
    }
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  return (
    <CommentSignHTML
      createUseditemComment={createUseditemComment}
      onChangeContents={onChangeContents}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      data={data}
      getValues={getValues}
      setValue={setValue}
      reset={reset}
    />
  );
}
