/* eslint-disable array-callback-return */
export default function MapElPage() {
  // 1번 기본방법

  ["철수", "영희", "훈이"].map((el, index) => {
    console.log("el", el);
    console.log("index", index);
  });

  // 2번 매개변수 변경한 방법

  ["철수", "영희", "훈이"].map((asdf, qwer) => {
    console.log("el", asdf);
    console.log("index", qwer);
  });

  // 3번 함수 선언식
  ["철수", "영희", "훈이"].map(function (el, index) {
    console.log("el", el);
    console.log("index", index);
  });

  // 4번 el과 index 바꾸기 // index, el은 매개변수 이기떄문에 단순 변수의 이름이다.
  ["철수", "영희", "훈이"].map((index, el) => {
    console.log("el", el);
    console.log("index", index);
  });
  return <div>el 알아보기!!</div>;
}
