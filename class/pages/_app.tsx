// // import "../styles/globals.css";
// import {
//   ApolloClient,
//   ApolloProvider,
//   InMemoryCache,
//   ApolloLink,
// } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
// import { createUploadLink } from "apollo-upload-client";

// 모든페이지에 대한 셋팅

import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";

import ApolloSetting from "../src/components/commons/apollo";

const firebaseConfig = {
  apiKey: "AIzaSyA0JjwkRndh9Roo2FzXJqOdV7FuGLzj7dY",
  authDomain: "pbs1014-b8f59.firebaseapp.com",
  projectId: "pbs1014-b8f59",
  storageBucket: "pbs1014-b8f59.appspot.com",
  messagingSenderId: "312157583451",
  appId: "1:312157583451:web:0ade8b5ec34527dabc277e",
  measurementId: "G-YZPJS5K0CX",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
