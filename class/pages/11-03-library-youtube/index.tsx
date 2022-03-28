import ReactPlayer from "react-player";

export default function LibraryYouTubePage() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="300px"
        height="300px"
      />
    </div>
  );
}

// width,height는 태그 내부에ㅌ서
// 나머지 속성은 11-01처럼 사용한다.
