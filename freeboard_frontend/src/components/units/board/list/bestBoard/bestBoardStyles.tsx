import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 1200px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  padding-top: 30px;
  margin-bottom: 50px;
`;

export const BestBoardTable = styled.div`
  width: 250px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid yellow;
`;

export const Writer = styled.div`
  font-size: 19px;
  font-weight: 900;
  padding-bottom: 5px;
`;

export const Info = styled.div`
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 10px;
`;
