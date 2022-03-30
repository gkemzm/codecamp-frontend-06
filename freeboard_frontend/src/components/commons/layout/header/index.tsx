import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;
const LoginBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-right: 30px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #bdbdbd;
    border-color: #bdbdbd;
  }
`;

const SignBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-right: 30px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #bdbdbd;
    border-color: #bdbdbd;
  }
`;

export default function LayoutHeader() {
  return (
    <>
      <Wrapper>
        <LoginBtn>Login</LoginBtn>
        <SignBtn>Sign Up</SignBtn>
      </Wrapper>
    </>
  );
}
