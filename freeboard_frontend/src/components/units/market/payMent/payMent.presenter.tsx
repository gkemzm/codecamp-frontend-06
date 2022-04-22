import * as S from "./payMent.styles";
import { useState } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentHTML() {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button onClick={requestPay}>결제하기</button>
    </>
  );
}
