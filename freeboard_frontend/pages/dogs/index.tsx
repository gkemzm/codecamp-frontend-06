import axios from "axios";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ImageSignPage from "../../src/commons/libraries/images/imageSign";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button``;

export default function DogsPage() {
  const [dogUrl, setDogUrl] = useState("");
  const [another, setAnother] = useState(false);

  const AnotherImg = () => {
    if (another === false) {
      setAnother(true);
    } else if (another === true) {
      setAnother(false);
    }
  };

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, [another]);

  return (
    <Wrapper>
      <ImageSignPage />
      <Btn onClick={AnotherImg}>다른사진</Btn>
      <img src={dogUrl} />
    </Wrapper>
  );
}
