import * as S from "./header.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <S.Wrapper>
        <S.BasicRow>
          <S.HomeBtn onClick={onClickMoveToPage("/")}>Home</S.HomeBtn>
          <S.HomeBtn onClick={onClickMoveToPage("/board")}>FreeBoard</S.HomeBtn>
          <S.HomeBtn onClick={onClickMoveToPage("/market")}>Market</S.HomeBtn>
        </S.BasicRow>
        <S.BasicRow>
          <S.HomeBtn onClick={onClickMoveToPage("/myPage")}>MyPage</S.HomeBtn>
          <S.LoginBtn onClick={onClickMoveToPage("/Login")}>Login</S.LoginBtn>
          <S.SignBtn onClick={onClickMoveToPage("/signUp")}>Sign Up</S.SignBtn>
        </S.BasicRow>
      </S.Wrapper>
    </>
  );
}
