import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { useRecoilState } from "recoil";

import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import {
  accessTokenState,
  userInfoState,
} from "../../components/commons/store/index";

interface IAppProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IAppProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    const mylocalstorageAccessToken = localStorage.getItem("accessitem");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(mylocalstorageAccessToken || "");
    setUserInfo(userInfo || "");
  }, []); 

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // 백엔드 컴퓨터 주소
  });
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
