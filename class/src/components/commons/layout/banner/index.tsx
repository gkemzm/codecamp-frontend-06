import styled from "@emotion/styled";
import Slider from "react-slick";

const Wrapper = styled.div`
  background-color: yellow;
  height: 400px;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function LayoutBanner() {
  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <div>
            {/* <img src="/aaa/example.jpg" height="300px" width="300px"></img> */}
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Wrapper>
    </>
  );
}
