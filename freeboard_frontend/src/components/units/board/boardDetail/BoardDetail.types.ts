import { ChangeEvent, MouseEvent } from "react";
import {
  IBoard,
  IBoardComment,
} from "../../../../commons/types/generated/types";
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
  data?: { fetchBoard: IBoard };
  dataComment?: { fetchBoardComments: Array<IBoardComment> };
  isActive: boolean;
  isHover: boolean;
  writer: string;
  pw: string;
  contents: string;
  rating: number;
  handleChange: (value: number) => void;
  isOpen: boolean;
  display: string;
  fetchMore: any;
  showModal: () => void;
  handleCancel: () => void;
  upLike: () => void;
  upDisLike: () => void;
  MoveMainpage: (event: MouseEvent<HTMLButtonElement>) => void;
  deleteOneBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  updateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  CreateCommentBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  deleteOneComment: (id: string) => void;
  UpdateCommentBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  DisplayOnOff: (event: MouseEvent<HTMLButtonElement>) => void;
  // onChangeCommentRating: (event: ChangeEvent<HTMLInputElement>) => void;
  PositionHover: (event: MouseEvent<HTMLDivElement>) => void;
}
