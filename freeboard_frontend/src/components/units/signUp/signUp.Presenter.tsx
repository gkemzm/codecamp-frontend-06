import * as S from "./signUp.styles";

export default function SignUpContainer() {
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
