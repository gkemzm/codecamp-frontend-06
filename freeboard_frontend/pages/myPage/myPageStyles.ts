import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: auto;
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 70px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 15px 0px;
  box-shadow: 0px 3px 15px skyblue;
  border: 1px solid skyblue;
  margin-bottom: 10px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: skyblue;
    color: white;
  }
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Area = styled.div``;
