import styled from "@emotion/styled";

interface Iprops {
  isActive: boolean;
}
interface IButtonProps {
  isActive: boolean;
  title: string;
}
const Button = styled.button`
  width: 150px;
  background-color: ${(props: Iprops) =>
    props.isActive ? "white" : "skyblue"};
  border: none;
  box-shadow: 0px 4px 10px skyblue;
  color: ${(props: Iprops) => (props.isActive ? "skyblue" : "white")};
  border-radius: 20px;
  padding: 10px;

  cursor: pointer;
  :hover {
    background-color: white;
    color: skyblue;
  }
`;

export default function SkyBlueButton(props: IButtonProps) {
  return (
    <>
      <Button isActive={props.isActive}>{props.title}</Button>
    </>
  );
}
