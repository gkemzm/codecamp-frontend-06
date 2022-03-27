import { ChangeEvent, MouseEvent } from "react";
export interface IdisplayOnOff {
  isActive: boolean;
}

export interface BoardDetailHTMLProps {
  data?: any;
  dataComment?: any;
  isActive: boolean;
  upLike: () => void;
  upDisLike: () => void;
  MoveMainpage: (event: MouseEvent<HTMLButtonElement>) => void;
  deleteOneBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  updateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  CreateCommentBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  deleteOneComment: (event: MouseEvent<HTMLButtonElement>) => void;
  UpdateCommentBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  DisplayOnOff: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentRating: (event: ChangeEvent<HTMLInputElement>) => void;
}
