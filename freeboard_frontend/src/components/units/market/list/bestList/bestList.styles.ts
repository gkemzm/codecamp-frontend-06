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

export const BestProductList = styled.div`
  width: 220px;
  height: 220px;
  border: none;
  box-shadow: 0px 4px 15px skyblue;
  border-radius: 20px;
`;

export const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
`;
