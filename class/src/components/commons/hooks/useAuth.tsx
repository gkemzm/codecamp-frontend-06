import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/24-01-login-use-apollo-client");
      alert("로그인 후 이용 가능합니다!!!");
    }
  }, []);

  // return {
  //     isLoading: isLoading,

  // }
}
