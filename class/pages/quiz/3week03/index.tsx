import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import { useState, MouseEvent } from "react";

export default function LibraryYouTubePage() {
  const [youTube, setYouTube] = useState("");

  const onClickYouTube = (event: MouseEvent<HTMLInputElement>) => {
    setYouTube((event.target as any).value);
  };

  const URL = styled.input`
    width: 300px;
    height: 50px;
  `;

  return (
    <div>
      <URL onClick={onClickYouTube} placeholder="url을 넣고 input클릭"></URL>
      <ReactPlayer
        url={youTube}
        width="600px"
        height="600px"
        playing={true}
        muted={true}
      />
    </div>
  );
}
