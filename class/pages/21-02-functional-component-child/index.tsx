export default function FunctionalComponentChildPage(aaa) {
  return (
    // aaa(props)는 함수의 매개변수 부분이였다.
    <>
      <div>나의 카운트는: {aaa.count}</div>
    </>
  );
}
