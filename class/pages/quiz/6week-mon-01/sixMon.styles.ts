import styled from "@emotion/styled";

export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  color: skyblue;
  font-size: 17px;
  font-weight: 700;
  box-shadow: 0px 2px 10px skyblue;
  padding: 30px;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BasicInput = styled.input`
  box-shadow: 0px 4px 10px skyblue;
  border: none;
  border-radius: 20px;
  margin: 0px 0px 20px 0px;
`;

export const BasicButton = styled.button`
  box-shadow: 0px 4px 10px skyblue;
  border: none;
  border-radius: 20px;
  margin: 0px 0px 10px 0px;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: skyblue;
    color: white;
  }
`;

export const BoardTable = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
`;

export const BoardTableElement = styled.div``;
