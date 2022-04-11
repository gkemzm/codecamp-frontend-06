import { useRecoilState } from "recoil";
import SignUpPresenter from "./signUp.Presenter";
import {
  gIdError,
  gPwError,
  gPwCheckError,
  gEmailError,
} from "../../commons/store/index";
import { useState, useEffect } from "react";

export default function SignUpContainer() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [email, setEmail] = useState("");

  const [, setIdError] = useRecoilState(gIdError);
  const [, setPwError] = useRecoilState(gPwError);
  const [, setPwCheckError] = useRecoilState(gPwCheckError);
  const [, setEmailError] = useRecoilState(gEmailError);

  const onClickSignUp = () => {
    if (/^\w{6,15}$/.test(id) ? id : setIdError("Check Your ID")) {
      console.log(id);
    }
    if (/^\w[a-zA-Z0-9]{6,18}$/.test(pw) ? pw : setPwError("Check Your PW")) {
      console.log(pw);
    }
    if (pwCheck !== pw || pwCheck === "") {
      setPwCheckError("Check Your PwCheck");
    }

    if (
      /^\w+@\w+\.\w+$/.test(email) ? email : setEmailError("Check Your Email")
    ) {
      console.log(email);
    }
    if (
      /^\w{6,15}$/.test(id) &&
      /^\w[a-zA-Z0-9]{6,15}$/.test(pw) &&
      /^\w+@\w+\.\w+$/.test(email) &&
      pwCheck === pw
    ) {
      alert("Ok");
    } else {
      alert("Sign Up Fail");
    }
  };

  const onChangeId = (event: any) => {
    setId(event?.target.value);
    if (event.target.value !== "") {
      setIdError("");
    }
  };

  const onChangePw = (event: any) => {
    setPw(event?.target.value);
    if (event.target.value !== "") {
      setPwError("");
    }
  };

  const onChangePwCheck = (event: any) => {
    setPwCheck(event?.target.value);
    if (event.target.value !== "") {
      setPwCheckError("");
    }
  };

  const onChangeEmail = (event: any) => {
    setEmail(event?.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  useEffect(() => {
    return () => {
      setIdError("");
      setPwError("");
      setPwCheckError("");
      setEmailError("");
    };
  }, []);

  return (
    <>
      <SignUpPresenter
        onClickSignUp={onClickSignUp}
        onChangeId={onChangeId}
        onChangePw={onChangePw}
        onChangePwCheck={onChangePwCheck}
        onChangeEmail={onChangeEmail}
      />
    </>
  );
}
