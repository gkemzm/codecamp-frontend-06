import { useRecoilState } from "recoil";
import * as S from "./signUp.styles";
import { gId, gPw, gPwCheck, gEmail } from "../../commons/store/index";
import { useState } from "react";
// import { useEffect, useState } from 'react';

export default function SignUpContainer() {
  const [id, setId] = useRecoilState(gId);
  const [pw, setPw] = useRecoilState(gPw);
  const [pwCheck, setPwCheck] = useRecoilState(gPwCheck);
  const [email, setEmail] = useRecoilState(gEmail);

  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwCheckError, setPwCheckError] = useState("");
  const [emailError, setEmailError] = useState("");

  // useEffect(() => {
  //   setId("");
  //   setPw("");
  //   setPwCheck("");
  // }, []);

  const onClickSignUp = () => {
    if (/^\w{6,15}$/.test(id) ? id : setIdError("id를 확인하세요")) {
      console.log(id);
    }
    if (/^\w[a-zA-Z0-9]{6,18}$/.test(pw) ? pw : setPwError("pw를 확인하세요")) {
      console.log(pw);
    }
    if (pwCheck !== pw || pwCheck === "") {
      setPwCheckError("pwCheck를 확인하세요");
    }

    if (
      /^\w+@\w+\.\w+$/.test(email)
        ? email
        : setEmailError("이메일을 확인하세요")
    ) {
      console.log(email);
    }
    if (
      /^\w{6,15}$/.test(id) &&
      /^\w[a-zA-Z0-9]{6,15}$/.test(pw) &&
      /^\w+@\w+\.\w+$/.test(email) &&
      pwCheck === pw
    ) {
      alert("Ok");
    } else {
      alert("Sign Up Fail");
    }
  };

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

  const onChangePwCheck = (event: any) => {
    setPwCheck(event?.target.value);
    if (event.target.value !== "") {
      setPwCheckError("");
    }
  };

  const onChangeEmail = (event: any) => {
    setEmail(event?.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.Title>SIGN-UP</S.Title>
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
        <S.BasicRow>
          <S.SmallDiv>PW CHECK:</S.SmallDiv>{" "}
          <S.LoginInput onChange={onChangePwCheck}></S.LoginInput>
        </S.BasicRow>
        <S.Error>{pwCheckError}</S.Error>
        <S.BasicRow>
          <S.SmallDiv>EMAIL</S.SmallDiv>{" "}
          <S.LoginInput onChange={onChangeEmail}></S.LoginInput>
        </S.BasicRow>
        <S.Error>{emailError}</S.Error>
        <S.LoginBtn onClick={onClickSignUp}>SIGN UP!</S.LoginBtn>
      </S.LoginBox>
    </S.Wrapper>
  );
}
