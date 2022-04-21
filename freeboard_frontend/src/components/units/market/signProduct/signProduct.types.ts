import { FieldValues, UseFormRegister } from "react-hook-form";
export interface IBoardSignProps {
  isEdit: boolean;
}

export interface ISignProductBoardHtmlProps {
  isEdit: boolean;
  createUsedItem: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: any;
  onChangeProductImage: (fileUrl: string, index: number) => void;
  productImageUrls: any;
  onChangeContents: any;
}
