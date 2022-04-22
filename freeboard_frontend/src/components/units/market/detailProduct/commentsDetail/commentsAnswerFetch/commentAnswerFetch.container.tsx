import CommentAnswerListHTML from "./commentAnswerFetch.presenter";

interface ICommentAnswerProps {
  data: any;
}
export default function CommentAnswerList(props: ICommentAnswerProps) {
  return <CommentAnswerListHTML data={props.data} />;
}
