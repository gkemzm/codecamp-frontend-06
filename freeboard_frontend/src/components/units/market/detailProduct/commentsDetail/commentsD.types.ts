import { MouseEvent } from "react";
export interface ICommentDetailProps {
  data: any;
}

export interface ICommentDetailHTMLProps {
  data: any;
  createUseditemCommentAnswer: (event: MouseEvent<HTMLDivElement>) => void;
  deleteUseditemOneQuestion: (event: MouseEvent<HTMLDivElement>) => void;
  handleSubmit: any;
  onChangeContents: any;
  QAData: any;
}

export interface IHoverAnswer {
  isHover: boolean;
}
