import { useState, ChangeEvent } from "react";
export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("");

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }

    const fileReader = new FileReader();
    // file의 임시 url작성
    fileReader.readAsDataURL(file);
    // 변환시킨 이미지를 불러오기
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
      }
    };
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
    </>
  );
}
