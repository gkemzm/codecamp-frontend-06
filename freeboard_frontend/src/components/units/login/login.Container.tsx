import LoginPresenter from "./login.Presenter";
import { useRouter } from "next/router";
import { LOGIN_USER } from "./login.query";
import { accessTokenState } from "../../commons/store/index";
import { useRecoilState } from "recoil";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일은 필수입력입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8글자 이상입니다.")
    .max(16, "비밀번호는 16글자 이하입니다.")
    .required("비밀번호는 필수입력입니다."),
});
interface ILogin {
  email?: string;
  password?: string;
}

export default function LoginContainer() {
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: ILogin) => {
    // if (
    //   /^\w+@\w+\.\w+$/.test(email) ? email : setEmailError("Check Your E-mail")
    // ) {
    //   console.log(email);
    // }
    // if (
    //   /^\w(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,18}$/.test(
    //     pw
    //   )
    //     ? pw
    //     : setPwError("Check Your PW")
    // ) {
    //   console.log(pw);
    // }
    // if (
    //   /^\w+@\w+\.\w+$/.test(email) &&
    //   /^\w(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,15}$/.test(
    //     pw
    //   )
    // ) {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken); // 임시저장
      console.log(accessToken);
      alert("Login Success");
      router.push("/");
    } catch (error) {
      alert(error instanceof Error);
    }
  };
  const MoveSignUp = () => {
    router.push("/signUp");
  };

  return (
    <LoginPresenter
      onClickLogin={onClickLogin}
      MoveSignUp={MoveSignUp}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
