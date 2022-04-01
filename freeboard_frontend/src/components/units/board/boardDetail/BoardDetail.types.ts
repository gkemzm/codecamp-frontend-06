import { ChangeEvent, MouseEvent } from "react";
export interface IdisplayOnOff {
  isActive: boolean;
}

export interface IHoverPosition {
  isHover: boolean;
}

export interface Idisplay {
  display: string;
  isActive: boolean;
  id: string;
}

export interface BoardDetailHTMLProps {
  data?: any;
  dataComment?: any;
  isActive: boolean;
  isHover: boolean;
  writer: any;
  pw: any;
  contents: any;
  rating: any;
  handleChange: any;
  isOpen: any;
  display: any;
  showModal: () => any;
  handleOk: () => any;
  handleCancel: () => any;
  upLike: () => void;
  upDisLike: () => void;
  MoveMainpage: (event: MouseEvent<HTMLButtonElement>) => void;
  deleteOneBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  updateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  CreateCommentBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  deleteOneComment: (id: any) => void;
  UpdateCommentBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  DisplayOnOff: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentRating: (event: ChangeEvent<HTMLInputElement>) => void;
  PositionHover: (event: MouseEvent<HTMLDivElement>) => void;
}
