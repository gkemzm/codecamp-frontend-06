import { useRecoilState } from "recoil";
import SignUpPresenter from "./signUp.Presenter";
import {
  gIdError,
  gPwError,
  gPwCheckError,
  gEmailError,
} from "../../commons/store/index";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signUp.query";

export default function SignUpContainer() {
  const router = useRouter();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [email, setEmail] = useState("");

  const [, setIdError] = useRecoilState(gIdError);
  const [, setPwError] = useRecoilState(gPwError);
  const [, setPwCheckError] = useRecoilState(gPwCheckError);
  const [, setEmailError] = useRecoilState(gEmailError);

  const [signUpUser] = useMutation(CREATE_USER);

  const onClickSignUp = async () => {
    if (/^\w{6,15}$/.test(id) ? id : setIdError("Check Your ID")) {
      // id 검증
    }
    if (/^\w[a-zA-Z0-9]{6,18}$/.test(pw) ? pw : setPwError("Check Your PW")) {
      // pw 검증
    }
    if (pwCheck !== pw || pwCheck === "") {
      setPwCheckError("Check Your PwCheck");
    }

    if (
      /^\w+@\w+\.\w+$/.test(email) ? email : setEmailError("Check Your Email")
    ) {
      // e-mail 검증 아래 부터는 전체검증
    }
    if (
      /^\w{6,15}$/.test(id) &&
      /^\w[a-zA-Z0-9]{6,15}$/.test(pw) &&
      /^\w+@\w+\.\w+$/.test(email) &&
      pwCheck === pw
    ) {
      try {
        const result = await signUpUser({
          variables: {
            createUserInput: {
              email: email,
              password: pw,
              name: id,
            },
          },
        });
        console.log(result);
        console.log(result?.data.createUser.name);
        alert("Congratulation! Sign-Up Success!");
        router.push("/Login");
      } catch {
        console.log("Faild Sign Up");
      }
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
