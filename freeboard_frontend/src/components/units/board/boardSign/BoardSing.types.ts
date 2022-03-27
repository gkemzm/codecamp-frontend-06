import { ChangeEvent, MouseEvent } from "react";

export interface BoardSignFunctionProps {
  isEdit: boolean;
  data?: any;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}

export interface BoardSignHTMLProps {
  isEdit: boolean;
  isActive: boolean;
  writerError: string;
  pwError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYouTube: (event: ChangeEvent<HTMLInputElement>) => void;
  updateBoard: () => void;
  submit: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: any;
}
