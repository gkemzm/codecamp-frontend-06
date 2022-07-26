import * as S from "./signUp.styles";
import { IChangeSignUp } from "./signUp.types";
import SkyBlueButton from "../../commons/buttons/skyBlueButton/index";

export default function SignUpPresenter(props: IChangeSignUp) {
  return (
    <S.Wrapper>
      <form
        onSubmit={props.handleSubmit(
          props.onClickSignUp as unknown as () => void
        )}
      >
        <S.SignUpBox>
          <S.Title>SIGN-UP</S.Title>
          <S.BasicRow>
            <S.SmallDiv>E-MAIL</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("email")}
              // onChange={props.onChangeEmail}
              placeholder={" Includes( @ ) "}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.BasicRow>
            <S.SmallDiv>PW:</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("password")}
              // onChange={props.onChangePw}
              placeholder={" 8~20 Word (Only Word & Number)"}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <S.BasicRow>
            <S.SmallDiv>PW CHECK:</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("passwordCheck")}
              // onChange={props.onChangePwCheck}
              placeholder={" One more insert PW "}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
          <S.BasicRow>
            <S.SmallDiv>ID :</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("name")}
              // onChange={props.onChangeId}
              placeholder={" 6~15 Word (Only Word & Number)"}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.name?.message}</S.Error>
          <SkyBlueButton isActive={props.formState.isValid} title={"Sign-Up"} />
        </S.SignUpBox>
      </form>
    </S.Wrapper>
  );
}
