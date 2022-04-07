import styled from "@emotion/styled";
import { BtnColor, IdisplayOnOff, IdisplayOnOff2 } from "./numbar.types";

export const ListButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  background-color: ${(props: BtnColor) =>
    props.btnColor === props.id ? "#BDBDBD" : "#ede4e4"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  box-shadow: 0px 4px 20px skyblue;
  border: 1px solid skyblue;
  border-radius: 30px;
  background-color: white;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
    border-color: #f5f2fc;
  }
`;

export const Wrapper = styled.div`
  /* width: 1000px; */
  height: 50px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin: auto; */
  padding-top: 30px;
`;

export const PrevPageBtn = styled.div`
  display: ${(props: IdisplayOnOff) => (props.isActive ? "flex" : "none")};
  padding: 0px 10px;
  cursor: pointer;
`;

export const NextPageBtn = styled.div`
  display: ${(props: IdisplayOnOff2) => (props.isActive2 ? "flex" : "none")};
  padding: 0px 10px;
  cursor: pointer;
`;
