import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./imageSign.styles";
import { IUploads01UIProps } from "./imageSign.types";

export default function ImageSignHTML(props: IUploads01UIProps) {
  return (
    <>
      {props.productImageUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.productImageUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload} type="button">
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
