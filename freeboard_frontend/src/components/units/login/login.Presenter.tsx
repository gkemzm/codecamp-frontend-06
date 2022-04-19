import { ILoginEvent } from "./login.types";
import * as S from "./login.styles";
import SkyBlueButton from "../../commons/buttons/skyBlueButton/index";

export default function LoginPresenter(props: ILoginEvent) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.LoginBox>
          <S.Title>LOG-IN</S.Title>
          <S.BasicRow>
            <S.SmallDiv>E-Mail :</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("email")}
              // onChange={props.onChangeId}
              placeholder={" Enter Your E-MAIL "}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.BasicRow>
            <S.SmallDiv>PW:</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("password")}
              // onChange={props.onChangePw}
              placeholder={" Enter Your PW "}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          {/* <S.LoginBtn isActive={props.formState.isValid}>LOGIN</S.LoginBtn> */}
          <SkyBlueButton isActive={props.formState.isValid} title={"LOGIN"} />
        </S.LoginBox>
      </form>
      <S.BottomWrapper>
        <S.NomalBtn>Find-Password</S.NomalBtn>
        <S.NomalBtn onClick={props.MoveSignUp}>Sign-Up</S.NomalBtn>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
