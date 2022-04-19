// import { ChangeEvent, MouseEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IChangeSignUp {
  // onChangeId: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePwCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: any;
}
