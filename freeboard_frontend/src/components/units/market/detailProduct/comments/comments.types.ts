import {
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormStateReturn,
} from "react-hook-form";
import { IUseditemQuestion } from "../../../../../commons/types/generated/types";
export interface ICommentHTMLProps {
  createUseditemComment: (data: IUseditemQuestion) => void;
  onChangeContents: (value: string) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: UseFormStateReturn<FieldValues>;
  data: { fetchUseditemQuestions: Array<IUseditemQuestion> };
  getValues: UseFormGetValues<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  reset: UseFormReset<FieldValues>;
}
