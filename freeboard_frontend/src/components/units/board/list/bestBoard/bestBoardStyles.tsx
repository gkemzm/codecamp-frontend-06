import styled from "@emotion/styled";

import { LikeOutlined } from "@ant-design/icons";
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
  word-break: break-all;
`;

export const BestBoardTable = styled.div`
  width: 250px;
  max-height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px skyblue;
  border: 1px solid skyblue;
  border-radius: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Writer = styled.div`
  font-size: 19px;
  font-weight: 900;
  padding-bottom: 5px;
  margin-top: 10px;
  color: skyblue;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 10px;
  padding-top: 10px;
  color: skyblue;
  margin: 0px 8px;
`;

export const BoardImg = styled.img`
  width: 250px;
  height: 100px;
  max-width: 250px;
  max-height: 100px;
  padding-bottom: 5px;
  object-fit: cover;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 15px;
  color: skyblue;
  padding-top: 12px;
`;
