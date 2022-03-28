import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
// 모든페이지에 대한 셋팅

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 백엔드 컴퓨터 주소
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

//  export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// } 위와 같은것
