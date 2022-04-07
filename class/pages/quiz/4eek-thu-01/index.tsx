import { useState, useRef, ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";
import { checkFileValidation } from "../../../src/commons/libraries/validation";
import styled from "@emotion/styled";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation creatBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: skyblue;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 20px skyblue;
  margin: 10px 0px;
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: skyblue;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 20px skyblue;
  margin: 10px 0px;
`;

const AreaRow = styled.div`
  display: flex;
  flex-direction: Row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: skyblue;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 20px skyblue;
  margin: 10px 0px;
`;

export default function FourWeekThuQuiz01() {
  const [createBOARD] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState<string | undefined>("");

  const fileRef = useRef<HTMLInputElement>(null);

  const submitBoard = async () => {
    const result = await createBOARD({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [images],
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event: any) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const images = event.target.files?.[0];
    console.log(images);

    const isValid = checkFileValidation(images);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: { file: images },
      });
      console.log(result.data?.uploadFile.url);

      setImages(result.data?.uploadFile.url);
    } catch (error) {
      // Modal.error({content: error.message});
      console.log("error");
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <Area>
      <AreaRow>
        <Btn onClick={submitBoard}>작성하기</Btn>
      </AreaRow>
      <AreaRow>
        작성자
        <input type="text" onChange={onChangeWriter} />
        비밀번호
        <input type="text" onChange={onChangePassword} />
        제목
        <input type="text" onChange={onChangeTitle} />
        내용
        <input type="text" onChange={onChangeContents} />
      </AreaRow>
      <div>
        <Btn onClick={onClickImage}>이미지 선택 </Btn>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
        {/* <input type="file"  onChange={onChangeFile} multiple /> 여러개 선택시 / */}
        <img src={`https://storage.googleapis.com/${images}`} />
      </div>
    </Area>
  );
}
