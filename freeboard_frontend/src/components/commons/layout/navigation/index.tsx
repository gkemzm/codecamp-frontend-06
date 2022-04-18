import { useRouter } from "next/router";
import * as S from "./navigation.styles";

export default function LayoutNavigation() {
  const router = useRouter();

  const MoveMainPage = () => {
    router.push("/");
  };
  const MoveFreeBoard = () => {
    router.push("/board");
  };
  const Dogs = () => {
    router.push("/dogs");
  };

  const Firebase = () => {
    router.push("/firebase");
  };

  const MoveFreeMarket = () => {
    router.push("/market");
  };
  return (
    <>
      <S.Wrapper>
        <S.HomeBtn onClick={MoveMainPage}>Home</S.HomeBtn>
        <S.HomeBtn onClick={MoveFreeBoard}>FreeBoard</S.HomeBtn>
        <S.HomeBtn onClick={Dogs}>Dogs</S.HomeBtn>
        <S.HomeBtn onClick={Firebase}>Firebase</S.HomeBtn>
        <S.HomeBtn onClick={MoveFreeMarket}>FreeMarket</S.HomeBtn>
      </S.Wrapper>
    </>
  );
}
