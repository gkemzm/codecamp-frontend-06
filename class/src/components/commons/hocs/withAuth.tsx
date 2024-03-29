import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  // 권한분기 로직 추가하기
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/24-01-login-use-apollo-client");
      alert("로그인 후 이용 가능합니다!!!");
    }
  }, []);

  return <Component {...props} />;
};
