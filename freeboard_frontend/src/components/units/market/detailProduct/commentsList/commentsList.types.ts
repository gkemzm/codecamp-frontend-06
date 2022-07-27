import { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface ICommentListHTMLProps {
  commentListData: { fetchUseditemQuestions: Array<IUseditemQuestion> };
  fetchMore: any;
}
