import { useState } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const [amount, setAmount] = useState(100);

  const requestPay = () => {
    // IMP.request_pay(param, callback) 결제창 호출
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp58560960"); // 예: imp00000000
    // imp49910675

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // 결제 후 이동할 주소
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // 결제 성공 시 로직,
          // 백엔드에 결제관련 데이터 넘겨주기 (=> 즉, 뮤테이션 실행하기)
          // ex, createPointTransactionOfLoading (포인트 충전 mutation)
          // ex, createPointTransactionOfBuyingAndSelling (결제 mutation)
          // 모바일로 결제시 url이 바뀌며 문제가 생긴다.
          // 1. 어디로 돌아갈것인가?
          // 2. mutation은 어떻게 날릴 것인가?
          // 아임포트에서 집적 날리는 백엔드로 요청을 날리는 웹훅노티피케이션
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
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
      <button onClick={requestPay}>결제하기</button>
    </>
  );
}
