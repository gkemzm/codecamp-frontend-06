import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 3px 15px skyblue;
  padding: 10px 100px 50px 100px;
`;

export const BasicRow = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0px 15px 0px;
`;

export const TrueBasicRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BestProductList = styled.div`
  width: 220px;
  height: 240px;
  border: none;
  box-shadow: 0px 4px 15px skyblue;
  border-radius: 20px;
`;

export const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
`;

export const Name = styled.div`
  margin: 6px 0px 0px 20px;
  font-size: 25px;
  font-weight: 700;
  color: purple;
`;

export const Contents = styled.div`
  margin-top: 6px;
  padding: 0px 10px;
  font-size: 15px;
  font-weight: 700;
  color: skyblue;
  border-radius: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Img = styled.img`
  width: 200px;
  height: 120px;
  margin-left: 10px;
  object-fit: cover;
`;
