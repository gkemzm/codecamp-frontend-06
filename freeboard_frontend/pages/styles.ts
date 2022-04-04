import styled from "@emotion/styled";
import { ProfileOutlined, ShopOutlined } from "@ant-design/icons";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 900;
  margin: 0px 60px;
`;
export const ShadowBox = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding-right: 300px;
  margin-bottom: 80px;
  background-color: beige;
  cursor: pointer;
`;

export const ShadowBox2 = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding-left: 300px;
  margin-bottom: 80px;
  background-color: beige;
  cursor: pointer;
`;

export const ProfileOutLine = styled(ProfileOutlined)`
  font-size: 270px;
`;

export const MarketIcon = styled(ShopOutlined)`
  font-size: 270px;
`;
