// import { useQuery, gql } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { userInfoState } from "../../src/commons/store/index";
import { useRecoilState } from "recoil";

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;
function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log(data);
  // const router = useRouter();
  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     router.push("/23-04-login-check");
  //     alert("로그인 후 이용 가능합니다!!!");
  //   }
  // }, []);

  return <div>{userInfo.name}님 환영합니다!!!</div>;
}

export default withAuth(LoginSuccessPage);
