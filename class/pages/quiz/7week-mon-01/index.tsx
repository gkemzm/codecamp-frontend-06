import axios from "axios";
import { useState } from "react";

export default function CallbackPromiseAsyncawaitPage() {
  const [state, setState] = useState([]);
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    // 1~200중 랜덤호스트 뽑기
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      console.log(res);
      const num = res.target?.response.split(" ")[0]; // 랜덤숫자
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;
        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res);
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log(res);
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res);
      });
  };

  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const UserId = res2.data.UserId;

    const res3 = await axios.get(
      `http://koreanjson.com/posts?userId=${UserId}`
    );
    setState(res3.data);
  };

  return (
    <div>
      <button onClick={onClickCallback}>callback 요청하기!!</button>
      <button onClick={onClickPromise}>promise 요청하기!!</button>
      <button onClick={onClickAsyncAwait}> Asyncawait 요청하기!!</button>
      <div>
        {state?.map((el: any) => (
          <>
            <div key={el._id}></div>
            <div>{el.title}</div>
          </>
        ))}
      </div>
    </div>
  );
}
