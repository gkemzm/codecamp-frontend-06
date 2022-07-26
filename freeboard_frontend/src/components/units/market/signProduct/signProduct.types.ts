import {
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormStateReturn,
} from "react-hook-form";
import { KeyboardEvent, MouseEvent } from "react";
import { IUseditem } from "../../../../commons/types/generated/types";
export interface IBoardSignProps {
  isEdit: boolean;
}

export interface ISignProductBoardHtmlProps {
  isEdit: boolean;
  isOpen: boolean;
  address: string;
  zipcode: string;
  itemData: any;
  createUsedItem: (data: IUseditem) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: UseFormStateReturn<FieldValues>;
  onChangeProductImage: (fileUrl: string, index: number) => void;
  productImageUrls: Array<string>;
  onChangeContents: (value: string) => void;
  onToggleModal: () => void;
  handleComplete: (data: { address: string; zonecode: string }) => void;
  updateUsedItem: (event: MouseEvent<HTMLDivElement>) => void;
  onKeyUphash: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClikDeleteTags: (event: MouseEvent<HTMLDivElement>) => void;
  reset: UseFormReset<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  hashArr: Array<string>;
}
