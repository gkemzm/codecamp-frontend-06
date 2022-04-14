import { useState, ChangeEvent } from "react";
import { useMutation, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store/index";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

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
    // 2.유저정보 받아오기 axios 느낌
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);

    // 3.글로벌스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // 객체는 로컬/세션 스토리지에 못 들어간다.
    // 4.로그인 성공페이지로 이동하기

    alert("로그인에 성공하였습니다.");
    router.push("/24-02-login-use-apollo-client-success");
  };
  return (
    <div>
      이메일: <input onChange={onChangeEmail} type="text" />
      <br />
      비밀번호: <input onChange={onChangePassword} type="text" />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
    // <form onSubmit={}>
    //   이메일: <input onChange={onChangeEmail} type="text" />
    //   <br />
    //   비밀번호: <input onChange={onChangePassword} type="text" />
    //   <br />
    //   <button onClick={onClickLogin}>로그인하기</button>
    //   <button type="button" onClick={}>
    //     등록하기
    //   </button>
    //   <button type="reset">초기화하기</button>
    // </form>
  );
}
