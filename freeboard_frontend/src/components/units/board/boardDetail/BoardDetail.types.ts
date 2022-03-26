import { ChangeEvent, MouseEvent } from "react";

export interface BoardDetailHTMLProps {
  data?: any;
  dataComment?: any;
  upLike: () => void;
  upDisLike: () => void;
  MoveMainpage: (event: MouseEvent<HTMLButtonElement>) => void;
  deleteOneBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  updateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  CreateCommentBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
