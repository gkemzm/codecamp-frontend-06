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
  region: any;
  zonecode: any;
  writerError: string;
  pwError: string;
  titleError: string;
  contentsError: string;
  address: any;
  handleComplete: (data: any) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYouTube: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  updateBoard: () => void;
  onToggleModal: () => any;
  submit: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: any;
  imageUrl?: string;
  setImageUrl: any;
}
