// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
// 모든페이지에 대한 셋팅

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0JjwkRndh9Roo2FzXJqOdV7FuGLzj7dY",
  authDomain: "pbs1014-b8f59.firebaseapp.com",
  projectId: "pbs1014-b8f59",
  storageBucket: "pbs1014-b8f59.appspot.com",
  messagingSenderId: "312157583451",
  appId: "1:312157583451:web:0ade8b5ec34527dabc277e",
  measurementId: "G-YZPJS5K0CX",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    // uri: "http://example.codebootcamp.co.kr/graphql",
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 백엔드 컴퓨터 주소
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;

//  export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// } 위와 같은것
