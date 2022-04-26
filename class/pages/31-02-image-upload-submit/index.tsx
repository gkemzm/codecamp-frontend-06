import { useState, ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("");
  const [file1, setFile1] = useState<File>();
  const [file2, setFile2] = useState<File>();
  const [file3, setFile3] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

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
        setFile1(file);
      }
    };
  };

  const onclickSubmit = async () => {
    // 먼저 이미지를 업로드 해주고
    const result1 = await uploadFile({
      variables: { file: file1 },
    });
    const imageUrl = result1.data?.uploadFile.url;
    // 이후 게시글을 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요~",
          contents: "이미지 업로드 입니다!!!",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
      <button onClick={onclickSubmit}>게시글 등록하기</button>
    </>
  );
}
