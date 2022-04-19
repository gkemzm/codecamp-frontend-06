import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./validation";
import { IUploads01Props } from "./imageSign.types";
import ImageSignHTML from "./imageSign.presenter";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageSignPage(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeProductImage(result.data.uploadFile.url, props.index);
    } catch (error) {
      alert("error");
    }
  };

  return (
    <ImageSignHTML
      fileRef={fileRef}
      productImageUrl={props.productImageUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
