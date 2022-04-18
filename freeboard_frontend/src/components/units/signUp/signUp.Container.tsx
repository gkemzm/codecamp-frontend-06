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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일의 형식이 올바르지 않습니다.")
    .required("이메일은 필수 입력사항 입니다."),
  name: yup.string().required("이름은 필수 입력사항입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8글자 이상입니다.")
    .max(16, "비밀번호는 16글자 이하입니다."),
  checkPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "패스워드와 일치하지 않습니다."),
});

interface IFormValues {
  email: string;
  name: string;
  password: string;
  checkPassword: string;
}

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

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickSignUp = async (data: IFormValues) => {
    // if (/^\w{6,15}$/.test(id) ? id : setIdError("Check Your ID")) {
    //   // id 검증
    // }
    // if (/^\w[a-zA-Z0-9]{6,18}$/.test(pw) ? pw : setPwError("Check Your PW")) {
    //   // pw 검증
    // }
    // if (pwCheck !== pw || pwCheck === "") {
    //   setPwCheckError("Check Your PwCheck");
    // }

    // if (
    //   /^\w+@\w+\.\w+$/.test(email) ? email : setEmailError("Check Your Email")
    // ) {
    //   // e-mail 검증 아래 부터는 전체검증
    // }
    // if (
    //   /^\w{6,15}$/.test(id) &&
    //   /^\w[a-zA-Z0-9]{6,15}$/.test(pw) &&
    //   /^\w+@\w+\.\w+$/.test(email) &&
    //   pwCheck === pw
    // ) {
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
    // }
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
