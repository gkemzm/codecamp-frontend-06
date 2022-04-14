import styled from "@emotion/styled";

interface Iprops {
  isActive: boolean;
}
interface IButtonProps {
  isActive: boolean;
  title: string;
}
const Button = styled.button`
  background-color: ${(props: Iprops) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props: IButtonProps) {
  return (
    <>
      <Button isActive={props.isActive}>{props.title}</Button>
    </>
  );
}
