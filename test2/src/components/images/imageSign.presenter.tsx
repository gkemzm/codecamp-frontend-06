import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./imageSign.styles";
import { IUploads01UIProps } from "./imageSign.types";

export default function ImageSignHTML(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
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
