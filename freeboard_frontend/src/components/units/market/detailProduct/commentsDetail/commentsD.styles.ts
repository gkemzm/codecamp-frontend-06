import styled from "@emotion/styled";
import { IHoverAnswer } from "./commentsD.types";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 15px skyblue;
  border: none;
  border-radius: 20px;
  padding: 20px 0px;
  margin: 30px 0px;
`;
export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

export const TextArea = styled.div`
  width: 1000px;
  height: 250px;
  max-height: 400px;
  margin-left: 100px;
  margin-top: 10px;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  display: flex;
  font-size: 17px;
  font-weight: 700;
  box-shadow: 0px 3px 10px skyblue;
  border-radius: 20px;
  margin-bottom: 10px;
  color: skyblue;
  padding-left: 15px;
`;

export const AnswerBox = styled.div`
  width: 900px;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Name = styled.div`
  width: 80%;
  display: flex;
  font-size: 30px;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 10px;
  color: purple;
`;

export const Date = styled.div`
  display: flex;
  color: purple;
  font-size: 18px;
  font-weight: 700;
`;

export const BtnListRow = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

export const Area = styled.div``;

export const Btn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 70px;
`;

export const HiddenArea = styled.div`
  display: flex;
  flex-direction: column;
  display: ${(props: IHoverAnswer) => (props.isHover ? "flex" : "none")};
`;
