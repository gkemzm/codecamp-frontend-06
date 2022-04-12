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
      <S.SignUpBox>
        <S.Title>SIGN-UP</S.Title>
        <S.BasicRow>
          <S.SmallDiv>E-MAIL</S.SmallDiv>{" "}
          <S.LoginInput
            onChange={props.onChangeEmail}
            placeholder={" Includes( @ ) "}
          ></S.LoginInput>
        </S.BasicRow>
        <S.Error>{emailError}</S.Error>
        <S.BasicRow>
          <S.SmallDiv>PW:</S.SmallDiv>{" "}
          <S.LoginInput
            onChange={props.onChangePw}
            placeholder={" 6~18 Word (Only Word & Number)"}
          ></S.LoginInput>
        </S.BasicRow>
        <S.Error>{pwError}</S.Error>
        <S.BasicRow>
          <S.SmallDiv>PW CHECK:</S.SmallDiv>{" "}
          <S.LoginInput
            onChange={props.onChangePwCheck}
            placeholder={" One more insert PW "}
          ></S.LoginInput>
        </S.BasicRow>
        <S.Error>{pwCheckError}</S.Error>
        <S.BasicRow>
          <S.SmallDiv>ID :</S.SmallDiv>{" "}
          <S.LoginInput
            onChange={props.onChangeId}
            placeholder={" 6~15 Word (Only Word & Number)"}
          ></S.LoginInput>
        </S.BasicRow>
        <S.Error>{idError}</S.Error>
        <S.LoginBtn onClick={props.onClickSignUp}>SIGN UP!</S.LoginBtn>
      </S.SignUpBox>
    </S.Wrapper>
  );
}
