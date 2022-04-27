import LoginPresenter from "./login.Presenter";
import { useRouter } from "next/router";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./login.query";
import { accessTokenState, userInfoState } from "../../commons/store/index";
import { useRecoilState } from "recoil";
import { useApolloClient, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("Email format is incorrect.")
    .required("Email is required."),
  password: yup
    .string()
    .matches(
      /^[A-Za-z\d$@$!%*#?&]{8,20}$/,
      "The password condition is incorrect."
    )
    // (?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])
    .required("Password is required."),
});
interface ILogin {
  email?: string;
  password?: string;
}

export default function LoginContainer() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: ILogin) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data.loginUser.accessToken;

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      setAccessToken(accessToken);
      setUserInfo(userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      // localStorage.setItem("accessToken", accessToken); // 임시저장
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
