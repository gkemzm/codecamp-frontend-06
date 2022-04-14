import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store/index";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";

interface IAppProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IAppProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // 1. 더 이상 지원되지 않음
  // if(process.browser){

  // }slse{

  // }
  // 2. 두번째 방법!!!
  if (typeof window !== "undefined") {
    console.log("여기는 브라우저다!!!");
  } else {
    console.log("여기는 프론트엔드 서버다!!! yarn dev다!!!");
  }

  // 프리랜더링시 문제되는 코드
  // const AccessToken = localStorage.getItem("accessitem");
  // setAccessToken(AccessToken || "");

  // 3번째 방법!!!
  useEffect(() => {
    const AccessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(AccessToken || "");
    setUserInfo(userInfo || "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    // uri: "http://example.codebootcamp.co.kr/graphql",
    // uri: "http://backend06.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // 백엔드 컴퓨터 주소
  });
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
