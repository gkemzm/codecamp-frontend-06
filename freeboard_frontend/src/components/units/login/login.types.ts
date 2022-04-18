import { MouseEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface ILoginEvent {
  // idError: string;
  // pwError: string;
  // onChangeId: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: (data: any) => void;
  MoveSignUp: (event: MouseEvent<HTMLButtonElement>) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: any;
}
