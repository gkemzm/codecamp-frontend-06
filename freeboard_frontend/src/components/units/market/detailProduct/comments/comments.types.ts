import { FieldValues, UseFormRegister } from "react-hook-form";
export interface ICommentHTMLProps {
  createUseditemComment: (data: any) => void;
  onChangeContents: any;
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: any;
}
