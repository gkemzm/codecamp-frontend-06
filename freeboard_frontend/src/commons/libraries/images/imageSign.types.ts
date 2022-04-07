import { ChangeEvent, MouseEvent } from "react";

export interface ImageSignProps {
  fileRef: any;
  imageUrl?: String;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickImage: (event: MouseEvent<HTMLDivElement>) => void;
}
