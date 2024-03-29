import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
  };

  return (
    <>
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기</button> */}
      {/* Link 사용시 a tag 로 위장 */}
      <Link href="/29-03-kakao-map-routed">
        <a>Map으로 이동하기!!</a>
      </Link>
      {/* <a href="/29-03-kakao-map-routed"></a> */}
    </>
  );
}
