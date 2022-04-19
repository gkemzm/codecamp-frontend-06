import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  productImageUrl: string;
  index: number;
  defaultFileUrl?: string;
  onChangeProductImage: (fileUrl: string, index: number) => void;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  productImageUrl: string;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
