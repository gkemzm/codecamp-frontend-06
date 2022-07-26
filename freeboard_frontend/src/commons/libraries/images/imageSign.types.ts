import { ChangeEvent, MouseEvent, RefObject } from "react";

export interface ImageSignProps {
  fileRef: RefObject<HTMLInputElement>;
  imageUrl?: String;
  isActive: boolean;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickImage: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IImageBoard {
  isActive: boolean;
}
