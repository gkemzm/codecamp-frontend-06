// import Head from "next/head";
// import Script from "next/script";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // === <script></script>
    script.src =
      // ? 뒤에 key/value를 보내는 방법이 queryString이라고 한다.
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=733d0a29ec73b8803266c00fc97055a5&autoload=false";
    document.head.appendChild(script); // head에 script라는 자식을 추가해줘라.
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4859324, 126.8932857), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);
  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=733d0a29ec73b8803266c00fc97055a5"
        ></script>
      </Head> */}
      <div>
        <div id="map" style={{ width: "500px", height: "400px" }}></div>
      </div>
    </>
  );
}

// app.tsx에서 script를 받아와도 되지만 그렇게 되면 모든 페이지에서 map을 받기에 비효율적이다.
//
