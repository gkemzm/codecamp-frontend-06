import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

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
  region: string;
  zonecode: string;
  writerError: string;
  pwError: string;
  titleError: string;
  contentsError: string;
  address: string;
  handleComplete: (data: { address: string; zonecode: string }) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYouTube: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  updateBoard: () => void;
  onToggleModal: () => void;
  submit: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: any;
  imageUrl?: object;
  setImageUrl: Dispatch<SetStateAction<string[]>>;
}
