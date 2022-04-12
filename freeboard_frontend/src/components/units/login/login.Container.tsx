import { useState, useEffect } from "react";
import LoginPresenter from "./login.Presenter";
import { useRouter } from "next/router";
import { LOGIN_USER } from "./login.query";
import {
  gEmailError,
  gPwError,
  accessTokenState,
} from "../../commons/store/index";
import { useRecoilState } from "recoil";
import { useMutation } from "@apollo/client";

export default function LoginContainer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  // const [idError, setIdError] = useState("");
  // const [pwError, setPwError] = useState("");
  const [, setEmailError] = useRecoilState(gEmailError);
  const [, setPwError] = useRecoilState(gPwError);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeId = (event: any) => {
    setEmail(event?.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  const onChangePw = (event: any) => {
    setPw(event?.target.value);
    if (event.target.value !== "") {
      setPwError("");
    }
  };

  const onClickLogin = async () => {
    if (
      /^\w+@\w+\.\w+$/.test(email) ? email : setEmailError("Check Your E-mail")
    ) {
      console.log(email);
    }
    if (/^\w[a-zA-Z0-9]{6,18}$/.test(pw) ? pw : setPwError("Check Your PW")) {
      console.log(pw);
    }
    if (/^\w+@\w+\.\w+$/.test(email) && /^\w[a-zA-Z0-9]{6,15}$/.test(pw)) {
      console.log("SUCCESS");
    }
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: pw,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      console.log(accessToken);
      alert("Login Success");
      router.push("/");
    } catch {
      alert("Login Failed");
      setEmailError("Check Your E-mail");
      setPwError("Check Your PW");
    }
  };
  const MoveSignUp = () => {
    router.push("/signUp");
  };

  useEffect(() => {
    return () => {
      setEmailError("");
      setPwError("");
    };
  }, []);

  return (
    <LoginPresenter
      // idError={idError}
      // pwError={pwError}
      onChangeId={onChangeId}
      onChangePw={onChangePw}
      onClickLogin={onClickLogin}
      MoveSignUp={MoveSignUp}
    />
  );
}
