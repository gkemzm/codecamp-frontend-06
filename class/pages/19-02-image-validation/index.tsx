import { ChangeEvent, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { checkFileValidation } from "../../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>(""); // 타입이 둘중하나

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

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

  return (
    <>
      <div>이미지 업로드 연습하기</div>
      <input type="file" onChange={onChangeFile} />
      {/* <input type="file"  onChange={onChangeFile} multiple /> 여러개 선택시 / */}
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
