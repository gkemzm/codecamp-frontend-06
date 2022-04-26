import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../store/index";

export function useAuth() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      router.push("/Login");
      alert("로그인 후 이용 가능합니다!!!");
    }
  }, []);
}
