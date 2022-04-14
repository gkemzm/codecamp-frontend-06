import styled from "@emotion/styled";

interface Iprops {
  isActive: boolean;
}
interface IButtonProps {
  isActive: boolean;
  title: string;
}
const Button = styled.button`
  background-color: ${(props: Iprops) => (props.isActive ? "skyblue" : "")};
  border: ${(props: Iprops) => (props.isActive ? "none" : "")};
  box-shadow: ${(props: Iprops) =>
    props.isActive ? "0px 4px 15px skyblue" : ""};
  color: ${(props: Iprops) => (props.isActive ? "white" : "")};
  border-radius: 20px;
  padding: 10px;
`;

export default function Button02(props: IButtonProps) {
  return (
    <>
      <Button isActive={props.isActive}>{props.title}</Button>
    </>
  );
}
