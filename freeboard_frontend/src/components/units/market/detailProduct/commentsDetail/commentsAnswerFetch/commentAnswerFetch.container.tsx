import CommentAnswerListHTML from "./commentAnswerFetch.presenter";
import { gql, useMutation } from "@apollo/client";

interface ICommentAnswerProps {
  data: any;
}

const DELETE_USEDITEM_QUESTION = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export default function CommentAnswerList(props: ICommentAnswerProps) {
  const [deleteUseditemQA] = useMutation(DELETE_USEDITEM_QUESTION);

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

  return (
    <CommentAnswerListHTML
      data={props.data}
      deleteUseditemOneQuestion={deleteUseditemOneQuestion}
    />
  );
}
