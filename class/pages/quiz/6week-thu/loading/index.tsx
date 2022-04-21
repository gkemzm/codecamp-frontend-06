import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function QuizPaymentPage() {
  const [amount, setAmount] = useState(100);
  const router = useRouter();

  const Pay500 = () => {
    setAmount(500);
  };
  const Pay1000 = () => {
    setAmount(1000);
  };
  const Pay2000 = () => {
    setAmount(2000);
  };
  const Pay5000 = () => {
    setAmount(5000);
  };
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp58560960"); // 예: imp00000000

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/quiz/6week-thu/complete",
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          router.push("/http://localhost:3000/quiz/6week-thu/complete");
        } else {
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
          location.reload();
        }
      }
    );
  };
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
      <input
        type="radio"
        style={{ width: "20px", height: "20px" }}
        onClick={Pay500}
      ></input>
      500원
      <br />
      <input
        type="radio"
        style={{ width: "20px", height: "20px" }}
        onClick={Pay1000}
      ></input>
      1000원
      <br />
      <input
        type="radio"
        style={{ width: "20px", height: "20px" }}
        onClick={Pay2000}
      ></input>
      2000원
      <br />
      <input
        type="radio"
        style={{ width: "20px", height: "20px" }}
        onClick={Pay5000}
      ></input>
      50000원
      <br />
      <div>선택된 가격은 {amount}원 입니다.</div>
      <button onClick={requestPay}>결제하기</button>
    </>
  );
}
