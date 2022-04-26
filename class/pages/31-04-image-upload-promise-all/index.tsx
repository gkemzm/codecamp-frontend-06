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
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  // <File 또는 undefined가 들어있는 배열> 을 의미
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile =
    (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
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
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result;
          setImageUrls(tempUrls);

          // console.log(data.target?.result);
          // setImgUrl(data.target?.result);
          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onclickSubmit = async () => {
    // 먼저 이미지를 업로드 해주고
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resultUrls = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ""
    );

    // Promise.all(
    //   files.map((el)=>{
    //     return el && uploadFile({
    //       variables: { file: el },
    //     }
    // )

    // 3가지 방법
    // files.map((el)=>{
    //   return el && uploadFile({
    //     variables: { file: el },
    //   })

    // return el ? uploadFile({
    //       variables: { file: el },
    //     }) : undefined

    // if(el){
    //   return uploadFile({
    //     variables: { file: el },
    //   });
    // } else{
    //   return undefined
    // }
    // })

    // 이후 게시글을 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요~",
          contents: "이미지 업로드 입니다!!!",
          images: [resultUrls],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onclickSubmit}>게시글 등록하기</button>
    </>
  );
}
