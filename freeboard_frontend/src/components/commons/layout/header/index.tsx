import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  background-color: white;
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

const HomeBtn = styled.button`
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

const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  background-color: white;
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
  return (
    <>
      <Wrapper>
        <BasicRow>
          <HomeBtn onClick={MoveMainPage}>Home</HomeBtn>
          <HomeBtn onClick={MoveFreeBoard}>FreeBoard</HomeBtn>
          <HomeBtn onClick={Dogs}>Dogs</HomeBtn>
        </BasicRow>
        <BasicRow>
          <LoginBtn>Login</LoginBtn>
          <SignBtn>Sign Up</SignBtn>
        </BasicRow>
      </Wrapper>
    </>
  );
}
