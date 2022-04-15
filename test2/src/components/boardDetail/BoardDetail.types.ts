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

  isOpen: any;
  display: any;
  fetchMore: any;
  showModal: () => any;
  handleCancel: () => any;
  MoveMainpage: (event: MouseEvent<HTMLButtonElement>) => void;
  deleteOneBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  updateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  DisplayOnOff: (event: MouseEvent<HTMLButtonElement>) => void;
  PositionHover: (event: MouseEvent<HTMLDivElement>) => void;
}
