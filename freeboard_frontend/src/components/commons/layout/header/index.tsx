import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  background-color: skyblue;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
`;
const LoginBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: skyblue;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-right: 30px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #85a5e9;
    border-color: #85a5e9;
  }
`;

const SignBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: skyblue;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-right: 30px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #85a5e9;
    border-color: #85a5e9;
  }
`;

const HomeBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: skyblue;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-right: 30px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #85a5e9;
    border-color: #85a5e9;
  }
`;

const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  background-color: skyblue;
`;

export default function LayoutHeader() {
  const router = useRouter();

  const MoveMainPage = () => {
    router.push("/");
  };
  const MoveFreeBoard = () => {
    router.push("/board");
  };
  const Dogs = () => {
    router.push("/dogs");
  };

  const Firebase = () => {
    router.push("/firebase");
  };

  const MoveLogin = () => {
    router.push("/Login");
  };

  const MoveSignUp = () => {
    router.push("/signUp");
  };

  const MoveMy = () => {
    router.push("/myPage");
  };
  return (
    <>
      <Wrapper>
        <BasicRow>
          <HomeBtn onClick={MoveMainPage}>Home</HomeBtn>
          <HomeBtn onClick={MoveFreeBoard}>FreeBoard</HomeBtn>
          <HomeBtn onClick={Dogs}>Dogs</HomeBtn>
          <HomeBtn onClick={Firebase}>Firebase</HomeBtn>
        </BasicRow>
        <BasicRow>
          <HomeBtn onClick={MoveMy}>MyPage</HomeBtn>
          <LoginBtn onClick={MoveLogin}>Login</LoginBtn>
          <SignBtn onClick={MoveSignUp}>Sign Up</SignBtn>
        </BasicRow>
      </Wrapper>
    </>
  );
}
