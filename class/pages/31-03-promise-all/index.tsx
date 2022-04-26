import LazyLoad from 'react-lazy-load';
export default function PromiseAllPage() {
  // 시간이 오래걸리는 작업 && 스택이아닌 큐로 진행
  // await 는 promise를 기다린다.
  // 6초걸림
  const onClickPromise = async () => {
    const result1 = await new Promise((resolve, reject) => {
      performance.now(); // 시간확인
      console.time("Promise 시작"); // 시간확인
      // resolve 가 실행이 되면 함수가 끝난다.
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      // resolve 가 실행이 되면 함수가 끝난다.
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      // resolve 가 실행이 되면 함수가 끝난다.
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("Promise 시작"); //  "Promise 시작"을 기준으로 time-timeEnd 사이의 시간을 재준다.
  };

  // 3초걸림
  const onClickPromiseAll = async () => {
    // // Promise들의 배열이 들어가게된다.
    // // result 에는 Promise들의 배열이 들어가게된다. result = ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"]
    // 하나하나씩 확인하는 방법
    // console.time("Promise.all 시작"); // 시간확인
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 1000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 2000);
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("Promise.all 시작");

    // 한번에 확인하는 방법
    console.time("Promise.all 시작"); // 시간확인
    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
      // 위처럼 {}와 return 이 생략가능
      // ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map((el) => {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve(el);
      //     }, 3000);
      //   });
      // })
    );
    console.log(result);
    console.timeEnd("Promise.all 시작");
  };

  return (
    <>
      <button onClick={onClickPromise}>Promise 연습하기</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기</button>
    </>
  );
}
