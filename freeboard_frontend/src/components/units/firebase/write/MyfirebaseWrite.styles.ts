import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 100px;
  height: 200px;
  width: 500px;
`;

export const Area = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: skyblue;
`;

export const Btn = styled.button`
  font-size: 18px;
  font-weight: 700;
  background-color: white;
  box-shadow: 0px 4px 10px skyblue;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;

  :hover {
    background-color: #85a5e9;
    border-color: #85a5e9;
    color: darkblue;
  }
`;

export const MyInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  box-shadow: 0px 4px 10px skyblue;
  border-radius: 20px;
`;
