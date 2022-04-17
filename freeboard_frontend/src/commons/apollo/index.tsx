import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { useRecoilState } from "recoil";

import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { accessTokenState } from "../../components/commons/store/index";

interface IAppProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IAppProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const mylocalstorageAccessToken = localStorage.getItem("accessitem");
    setAccessToken(mylocalstorageAccessToken || "");
  }, []); // 로컬에 토큰저장

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