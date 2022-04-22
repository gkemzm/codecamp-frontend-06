import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/Login");
      alert("로그인 후 이용 가능합니다!!!");
    }
  }, []);
}