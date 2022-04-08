import { IMyfirebaseWriteUIProps } from "./MyfirebaseWrite.types";
import * as S from "./MyfirebaseWrite.styles";

export default function MyfirebaseWriteUI(props: IMyfirebaseWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Area>
        작성자: <S.MyInput type="text" onChange={props.onChangeWriter} />
      </S.Area>
      <S.Area>
        제 목: <S.MyInput type="text" onChange={props.onChangeTitle} />
      </S.Area>
      <S.Area>
        내 용: <S.MyInput type="text" onChange={props.onChangeContents} />
      </S.Area>
      <S.Area>
        <S.Btn onClick={props.onClickSubmit}>등록하기</S.Btn>
      </S.Area>
    </S.Wrapper>
  );
}
