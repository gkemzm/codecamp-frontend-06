import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store/index";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginSuccessQuizPage() {
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  //   console.log(data);
  console.log(accessToken);

  useEffect(() => {
    if (accessToken === "") {
      router.push("5week-thu-01");
      alert("로그인을 먼저 해주세요");
    }
  }, [accessToken]);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}
