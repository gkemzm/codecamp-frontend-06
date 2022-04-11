import { ChangeEvent, MouseEvent } from "react";

export interface IChangeSignUp {
  onChangeId: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePwCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: (event: MouseEvent<HTMLButtonElement>) => void;
}
