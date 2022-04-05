import axios from "axios";
import { useState, useEffect } from "react";
export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, []); // rest-API 방식

  return (
    <>
      <div>오픈API 연습!!!</div>;
      <img src={dogUrl} />
    </>
  );
}
