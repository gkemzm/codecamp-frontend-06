import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

const Input = styled.input``;
export default function Input01(props: IInputProps) {
  return (
    <>
      <Input type={props.type} {...props.register} />
    </>
  );
}
