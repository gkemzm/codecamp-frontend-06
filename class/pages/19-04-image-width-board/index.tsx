// import  axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState, useRef } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { checkFileValidation } from "../../src/commons/libraries/validation";

// 묶음으로 mymutation에서 한번 요청한 정보를 createProduct(), fetchBoards ... 여러군대에 나눠줄 수 있다.
const CREATE_BOARD = gql`
  mutation mymutation($createBoardInput: CreateBoardInput!) {
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

export default function GraphqlMutationPage() {
  const [mywriter, setMyWriter] = useState("");
  const [mytitle, setMyTitle] = useState("");
  const [mycontents, setMyContents] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>(""); // 타입이 둘중하나

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") //rest-api 방식
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: mywriter,
          title: mytitle,
          contents: mycontents,
          password: myPassword,
          images: [imageUrl],
        },
      }, // 위쪽createBoard에 전달해서 실행
    }); // graphql-api방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  const onChangeWriter = (event: any) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event: any) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: any) => {
    setMyContents(event.target.value);
  };

  const onChangePassword = (event: any) => {
    setMyPassword(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myfile = event.target.files?.[0]; // myfile => file
    console.log(myfile);

    const isValid = checkFileValidation(myfile);
    if (!isValid) return; // true면 아래 try실행

    try {
      const result = await uploadFile({
        // 백엔드 스토리지에 저장하고 다시 가져온다.
        variables: { file: myfile }, // { file: file } => { file }
      });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      // Modal.error({content: error.message});
      console.log("error");
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      {/* <div>{data}</div> */}
      작성자:
      <input type="text" onChange={onChangeWriter} />
      비밀번호:
      <input type="text" onChange={onChangePassword} />
      <br />
      제목:
      <input type="text" onChange={onChangeTitle} />
      <br />
      내용:
      <input type="text" onChange={onChangeContents} />
      <br />
      <div>
        <div>이미지 업로드 연습하기</div>
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
          onClick={onClickImage}
        >
          이미지 선택{" "}
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
        {/* <input type="file"  onChange={onChangeFile} multiple /> 여러개 선택시 / */}
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}
