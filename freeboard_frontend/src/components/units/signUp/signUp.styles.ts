import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
`;

export const SmallDiv = styled.div`
  width: 100px;
  display: flex;
  justify-content: end;
`;
export const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: skyblue;
  margin-bottom: 40px;
`;
export const Error = styled.div`
  height: 20px;
  display: flex;
  color: red;
  margin-bottom: 10px;
`;
export const SignUpBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 4px 18px skyblue;
  border-radius: 20px;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
  color: skyblue;
  font-size: 17px;
  font-weight: 700;
  margin-right: 70px;
`;

export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginInput = styled.input`
  width: 300px;
  height: 40px;
  margin-left: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 2px 10px skyblue;

  ::placeholder {
    color: skyblue;
    font-weight: 700;
  }
`;

export const LoginBtn = styled.button`
  width: 150px;
  height: 35px;
  margin-top: 30px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 2px 10px skyblue;
  background-color: white;
  color: skyblue;
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    background-color: #afc0e4;
    border-color: #afc0e4;
    color: black;
  }
`;
