import { FieldValues, UseFormRegister } from "react-hook-form";
import { KeyboardEvent, MouseEvent } from "react";
export interface IBoardSignProps {
  isEdit: boolean;
}

export interface ISignProductBoardHtmlProps {
  isEdit: boolean;
  isOpen: boolean;
  // addressDetail: string;
  address: string;
  zipcode: any;
  itemData: any;
  createUsedItem: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: any;
  onChangeProductImage: (fileUrl: string, index: number) => void;
  productImageUrls: any;
  onChangeContents: any;
  onToggleModal: () => any;
  handleComplete: (data: any) => void;
  // onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  updateUsedItem: (event: MouseEvent<HTMLDivElement>) => void;
  onKeyUphash: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClikDeleteTags: (event: MouseEvent<HTMLDivElement>) => void;
  reset: any;
  getValues: any;
  hashArr: any;
}
