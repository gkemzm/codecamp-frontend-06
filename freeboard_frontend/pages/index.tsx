import * as S from "./styles";
import { useMoveToPage } from "../src/components/commons/hooks/useMoveToPage";

export default function Home() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.ShadowBox onClick={onClickMoveToPage("/board")}>
        <S.ProfileOutLine />
        <S.BasicBox>Free Board</S.BasicBox>
      </S.ShadowBox>

      <S.ShadowBox2>
        <S.BasicBox onClick={onClickMoveToPage("/market")}>
          Free Market
        </S.BasicBox>
        <S.MarketIcon />
      </S.ShadowBox2>

      <S.ShadowBox onClick={onClickMoveToPage("/dogs")}>
        <S.ImgIcon />
        <S.BasicBox>Dogs</S.BasicBox>
      </S.ShadowBox>

      <S.ShadowBox2 onClick={onClickMoveToPage("/firebase")}>
        <S.BasicBox>Firebase</S.BasicBox>
        <S.FireIcon />
      </S.ShadowBox2>
    </S.Wrapper>
  );
}
