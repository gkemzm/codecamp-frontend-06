import { useState, ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store/index";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    // 1.로그인하기
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);
    // 2.유저정보 받아오기

    // 3.글로벌스테이트에 저장하기
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    // 4.로그인 성공페이지로 이동하기

    alert("로그인에 성공하였습니다.");
    router.push("/23-02-login-localstorage-success");
  };
  return (
    <div>
      이메일: <input onChange={onChangeEmail} type="text" />
      <br />
      비밀번호: <input onChange={onChangePassword} type="text" />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
