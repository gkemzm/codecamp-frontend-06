import * as S from "./login.styles";
export default function LoginContainer() {
  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.Title>LOG-IN</S.Title>
        <S.BasicRow>
          <S.SmallDiv>ID :</S.SmallDiv> <S.LoginInput></S.LoginInput>
        </S.BasicRow>
        <S.BasicRow>
          <S.SmallDiv>PW:</S.SmallDiv> <S.LoginInput></S.LoginInput>
        </S.BasicRow>
        <S.LoginBtn>LOGIN</S.LoginBtn>
      </S.LoginBox>
    </S.Wrapper>
  );
}
