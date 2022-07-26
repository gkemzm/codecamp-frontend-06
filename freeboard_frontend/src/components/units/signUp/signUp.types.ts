// import { ChangeEvent, MouseEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormValues {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
}

export interface IChangeSignUp {
  onClickSignUp: (data: IFormValues) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
}
