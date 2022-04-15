import * as S from "./imageSign.styles";
import { ImageSignProps } from "./imageSign.types";

export default function ImageSignHTML(props: ImageSignProps) {
  return (
    <S.AreaColum>
      <S.Btn>이미지 </S.Btn>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
      <S.AreaRow>
        <S.ImgBtn onClick={props.onClickImage} isActive={props.isActive}>
          +<br></br>
        </S.ImgBtn>
      </S.AreaRow>
      <S.ImageBoard isActive={props.isActive}>
        <S.Img src={`https://storage.googleapis.com/${props.imageUrl}`} />
      </S.ImageBoard>
    </S.AreaColum>
  );
}
