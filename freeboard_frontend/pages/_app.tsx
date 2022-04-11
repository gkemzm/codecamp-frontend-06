import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Layout from "../src/components/commons/layout/index";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
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
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // 백엔드 컴퓨터 주소
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
