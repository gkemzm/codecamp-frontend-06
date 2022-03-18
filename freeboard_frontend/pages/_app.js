import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient(
    {
        uri: "http://backend06.codebootcamp.co.kr/graphql",
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




