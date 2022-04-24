import { MouseEvent } from "react";
export interface ICommentDetailProps {
  data: any;
}

export interface ICommentDetailHTMLProps {
  data: any;
  isHover2: boolean;
  createUseditemCommentAnswer: (event: MouseEvent<HTMLDivElement>) => void;
  deleteUseditemOneQuestion: (event: MouseEvent<HTMLDivElement>) => void;
  updateUsedItemQuestion: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBtnUpdateDisplay: (event: MouseEvent<HTMLDivElement>) => void;
  handleSubmit: any;
  onChangeContents: any;
  QAData: any;
}

export interface IHoverAnswer {
  isHover: boolean;
}
