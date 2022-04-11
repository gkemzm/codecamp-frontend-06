import * as S from "./signUp.styles";
import { useRecoilState } from "recoil";
import {
  gIdError,
  gPwError,
  gPwCheckError,
  gEmailError,
} from "../../commons/store/index";
import { IChangeSignUp } from "./signUp.types";

export default function SignUpPresenter(props: IChangeSignUp) {
  const [idError] = useRecoilState(gIdError);
  const [pwError] = useRecoilState(gPwError);
  const [pwCheckError] = useRecoilState(gPwCheckError);
  const [emailError] = useRecoilState(gEmailError);
  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.Title>SIGN-UP</S.Title>
        <S.BasicRow>
          <S.SmallDiv>ID :</S.SmallDiv>{" "}
          <S.LoginInput onChange={props.onChangeId}></S.LoginInput>
        </S.BasicRow>
        <S.Error>{idError}</S.Error>
        <S.BasicRow>
          <S.SmallDiv>PW:</S.SmallDiv>{" "}
          <S.LoginInput onChange={props.onChangePw}></S.LoginInput>
        </S.BasicRow>
        <S.Error>{pwError}</S.Error>
        <S.BasicRow>
          <S.SmallDiv>PW CHECK:</S.SmallDiv>{" "}
          <S.LoginInput onChange={props.onChangePwCheck}></S.LoginInput>
        </S.BasicRow>
        <S.Error>{pwCheckError}</S.Error>
        <S.BasicRow>
          <S.SmallDiv>EMAIL</S.SmallDiv>{" "}
          <S.LoginInput onChange={props.onChangeEmail}></S.LoginInput>
        </S.BasicRow>
        <S.Error>{emailError}</S.Error>
        <S.LoginBtn onClick={props.onClickSignUp}>SIGN UP!</S.LoginBtn>
      </S.LoginBox>
    </S.Wrapper>
  );
}
