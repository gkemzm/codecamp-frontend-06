// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic"; // 서버가아닌 브라우저에서 import 하기 위함

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    console.log(value);
  };
  return (
    <>
      작성자:
      <input type="text" />
      <br />
      비밀번호:
      <input type="text" />
      <br />
      제목:
      <input type="text" />
      <br />
      내용:
      <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </>
  );
}
