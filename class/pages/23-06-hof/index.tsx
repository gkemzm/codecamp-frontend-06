export default function HofPage() {
  // 기존의 방식
  // const onClickChild = (event: any) => {
  //     event.target.id
  //   };

  const onClickChild = (el: any) => (event: any) => {
    console.log(el);
  };

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {["철수", "영희", "훈이"].map((el) => (
        <div key={el} onClick={onClickChild(el)}>
          {el}
        </div>
      ))}
    </div>
  );
}
