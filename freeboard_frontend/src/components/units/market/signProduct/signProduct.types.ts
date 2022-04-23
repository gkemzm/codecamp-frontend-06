import { FieldValues, UseFormRegister } from "react-hook-form";
import { ChangeEvent } from "react";
export interface IBoardSignProps {
  isEdit: boolean;
}

export interface ISignProductBoardHtmlProps {
  isEdit: boolean;
  isOpen: boolean;
  addressDetail: string;
  address: string;
  zipcode: any;
  createUsedItem: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: any;
  onChangeProductImage: (fileUrl: string, index: number) => void;
  productImageUrls: any;
  onChangeContents: any;
  onToggleModal: () => any;
  handleComplete: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
}
