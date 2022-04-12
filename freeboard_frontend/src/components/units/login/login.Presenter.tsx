import { ILoginEvent } from "./login.types";
import * as S from "./login.styles";
import { gEmailError, gPwError } from "../../commons/store/index";
import { useRecoilState } from "recoil";

export default function LoginPresenter(props: ILoginEvent) {
  const [emailError] = useRecoilState(gEmailError);
  const [pwError] = useRecoilState(gPwError);
  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.Title>LOG-IN</S.Title>
        <S.BasicRow>
          <S.SmallDiv>E-Mail :</S.SmallDiv>{" "}
          <S.LoginInput
            onChange={props.onChangeId}
            placeholder={" Insert Your E-MAIL "}
          ></S.LoginInput>
        </S.BasicRow>
        <S.Error>{emailError}</S.Error>
        <S.BasicRow>
          <S.SmallDiv>PW:</S.SmallDiv>{" "}
          <S.LoginInput
            onChange={props.onChangePw}
            placeholder={" Insert Your PW "}
          ></S.LoginInput>
        </S.BasicRow>
        <S.Error>{pwError}</S.Error>
        <S.LoginBtn onClick={props.onClickLogin}>LOGIN</S.LoginBtn>
      </S.LoginBox>
      <S.BottomWrapper>
        <S.NomalBtn>Find-Password</S.NomalBtn>
        <S.NomalBtn onClick={props.MoveSignUp}>Sign-Up</S.NomalBtn>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
