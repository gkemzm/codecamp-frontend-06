import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BestBoard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Area = styled.div``;
export const BestBoardList = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const ProductBox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  margin-top: 30px;
  justify-content: space-between;
`;

export const ImageBox = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const ProductDetail = styled.div`
  width: 660px;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: 700px;
  border: 1px solid blue;
`;

export const ProductRemarks = styled.div`
  font-size: 16px;
  font-weight: 700px;
  border: 1px solid blue;
`;

export const ProductTags = styled.div``;

export const Price = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  border: 3px solid black;
`;
