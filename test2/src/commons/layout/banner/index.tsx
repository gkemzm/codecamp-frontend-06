import Slider from "react-slick";
import * as S from "./layoutStyle";
import { useRouter } from "next/router";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function LayoutBanner() {
  const router = useRouter();

  const moveMain = () => {
    router.push("/board");
  };
  return (
    <>
      <S.Wrapper>
        <Slider {...settings}>
          <S.Slick1 onClick={moveMain}>
            <S.SlickD>Carousel</S.SlickD>
            <S.SlickD2 src="/slack.png" alt="Carousel"></S.SlickD2>
            <S.SlickD3 src="/Untitled.png"></S.SlickD3>
          </S.Slick1>
          <S.Slick1 onClick={moveMain}>
            <S.SlickD>Carousel</S.SlickD>
            <S.SlickD2 src="/slack.png" alt="Carousel"></S.SlickD2>
            <S.SlickD3 src="/Untitled.png"></S.SlickD3>
          </S.Slick1>
          <S.Slick1 onClick={moveMain}>
            <S.SlickD>Carousel</S.SlickD>
            <S.SlickD2 src="/slack.png" alt="Carousel"></S.SlickD2>
            <S.SlickD3 src="/Untitled.png"></S.SlickD3>
          </S.Slick1>
        </Slider>
      </S.Wrapper>
    </>
  );
}
