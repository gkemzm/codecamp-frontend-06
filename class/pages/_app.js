import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
// 모든페이지에 대한 셋팅

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient(
    {
        uri: "http://example.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache() //백엔드 컴퓨터 주소
    }
  )

  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp






//  export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// } 위와 같은것
