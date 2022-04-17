import { ChangeEvent, MouseEvent } from "react";
import { number, string } from "yup";

export interface BoardSignFunctionProps {
  isEdit: boolean;
  data?: any;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IUpdateBoardInput {
  images: string[];
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface BoardSignHTMLProps {
  isEdit: boolean;
  isActive: boolean;
  isOpen: boolean;
  writerError: string;
  pwError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  updateBoard: () => void;
  onToggleModal: () => any;
  submit: (event: MouseEvent<HTMLButtonElement>) => void;
  MoveDetailPage: () => any;
  MoveMain: () => any;
  data?: any;
  fileUrls?: any;
  // setImageUrl: any;
  onChangeFileUrls: (fuleUrl: string, index: number) => void;
}
