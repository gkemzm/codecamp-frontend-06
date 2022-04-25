import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  // gql,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store/index";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { onError } from "@apollo/client/link/error";
// import { request, GraphQLClient } from "graphql-request";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

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
    //   예전꺼
    //   const AccessToken = localStorage.getItem("accessToken");
    //   const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    //   setAccessToken(AccessToken || "");
    //   setUserInfo(userInfo || "");
    //   accessToken 재발급받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // const RESTORE_ACCESS_TOKEN = gql`
  //   mutation restoreAccessToken {
  //     restoreAccessToken {
  //       accessToken
  //     }
  //   }
  // `;
  // graphQLErrors, operation, forward  = 에러/전에 실행한 api/재요청
  // errorLink는 client셋팅부분에 추가
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러(UNAUTHENTICATED)인지를 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // import한 함수로부터 return된값
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // getContext()시 해당 쿼리에서 작성되었던 요소들을 가져옴
            // setContext()는 조작이 가능
            operation.setContext({
              headers: {
                // 기존에 가지고 있던 headers을 받아와서
                ...operation.getContext().headers,
                // accessToken 부분만 바꿔치기
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
          // 해당 부분은 별로도 분리하여 저장,
          // refreshToken 요청을 위해선 http: 가아닌 secure 옵션이 붙은 https:로 바꿔줘야 한다.
          // const graphQLClient = new GraphQLClient(
          //   "https://backend06.codebootcamp.co.kr/graphql"
          // );
          // const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
          // const newAccessToken = result.restoreAccessToken.accessToken;
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // 중요정보 ex)cookie 를 저장하냐 안하냐
  });

  const client = new ApolloClient({
    // uri: "http://example.codebootcamp.co.kr/graphql",
    // uri: "http://backend06.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(), // 백엔드 컴퓨터 주소
  });
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
