import * as S from "./imageSign.styles";
import { ImageSignProps } from "./imageSign.types";

export default function ImageSignHTML(props: ImageSignProps) {
  return (
    <S.AreaColum>
      <S.Btn onClick={props.onClickImage}>이미지 선택 </S.Btn>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
        multiple
      />
      {/* <input type="file"  onChange={onChangeFile} multiple /> 여러개 선택시 / */}
      <S.ImageBoard isActive={props.isActive}>
        {/* //조금이따 타입만들기 */}
        <img
          src={`https://storage.googleapis.com/${props.imageUrl}`}
          style={{
            height: "230px",
            width: "230px",
            objectFit: "cover",
          }}
        />
      </S.ImageBoard>
    </S.AreaColum>
  );
}
