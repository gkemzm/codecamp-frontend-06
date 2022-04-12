import { ChangeEvent, MouseEvent } from "react";
export interface ILoginEvent {
  // idError: string;
  // pwError: string;
  onChangeId: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: (event: MouseEvent<HTMLButtonElement>) => void;
  MoveSignUp: (event: MouseEvent<HTMLButtonElement>) => void;
}
