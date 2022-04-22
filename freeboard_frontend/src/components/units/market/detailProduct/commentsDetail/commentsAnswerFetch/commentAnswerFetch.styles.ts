import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  border-radius: 20px;
  padding: 5px 0px;
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
  width: 80%;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0px 3px 10px skyblue;
  border-radius: 20px;
  color: skyblue;
  padding: 0px 0px 0px 10px;
`;

export const Name = styled.div`
  width: 80%;
  display: flex;
  font-size: 17px;
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
