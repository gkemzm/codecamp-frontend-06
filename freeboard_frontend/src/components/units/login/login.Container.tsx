import * as S from "./login.styles";
import { useState, useEffect } from "react";

export default function LoginContainer() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");

  const onChangeId = (event: any) => {
    setId(event?.target.value);
    if (event.target.value !== "") {
      setIdError("");
    }
  };

  const onChangePw = (event: any) => {
    setPw(event?.target.value);
    if (event.target.value !== "") {
      setPwError("");
    }
  };

  const onClickLogin = () => {
    if (/^\w{6,15}$/.test(id) ? id : setIdError("Check Your ID")) {
      console.log(id);
    }
    if (/^\w[a-zA-Z0-9]{6,18}$/.test(pw) ? pw : setPwError("Check Your PW")) {
      console.log(pw);
    }

    if (/^\w{6,15}$/.test(id) && /^\w[a-zA-Z0-9]{6,15}$/.test(pw)) {
      alert("Hello");
    } else {
      alert("Check Your Id or PassWord");
    }
  };

  useEffect(() => {
    return () => {
      setIdError("");
      setPwError("");
    };
  }, []);

  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.Title>LOG-IN</S.Title>
        <S.BasicRow>
          <S.SmallDiv>ID :</S.SmallDiv>{" "}
          <S.LoginInput onChange={onChangeId}></S.LoginInput>
        </S.BasicRow>
        <S.Error>{idError}</S.Error>
        <S.BasicRow>
          <S.SmallDiv>PW:</S.SmallDiv>{" "}
          <S.LoginInput onChange={onChangePw}></S.LoginInput>
        </S.BasicRow>
        <S.Error>{pwError}</S.Error>
        <S.LoginBtn onClick={onClickLogin}>LOGIN</S.LoginBtn>
      </S.LoginBox>
    </S.Wrapper>
  );
}
