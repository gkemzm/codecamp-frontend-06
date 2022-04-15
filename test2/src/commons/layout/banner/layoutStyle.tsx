import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  height: 380px;
  width: 1220px;
  margin-left: 30px;
  border-radius: 20px;
  cursor: pointer;
  /* .slick-prev:before {
    opacity: 1;
    color: black;
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  } */
  .slick-slide-img {
    object-fit: cover;
  }
`;

export const Slick1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 370px;
`;

export const SlickD = styled.div`
  display: flex;
  justify-content: center;
  font-size: 55px;
  font-weight: 700;
  position: relative;
  top: 170px;
  color: white;
`;
export const SlickD2 = styled.img``;

export const SlickD3 = styled.img`
  position: relative;
  bottom: 300px;
  left: 680px;
`;

export const SlickN = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;
