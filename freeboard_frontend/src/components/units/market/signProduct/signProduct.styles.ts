import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: felx;
  flex-direction: column;
  width: 1200px;
  border: none;
  box-shadow: 0px 4px 15px skyblue;
`;

export const Title = styled.div`
  width: 1200px;
  font-size: 30px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  padding: 40px 0px;
  color: skyblue;
`;

export const SubTitle = styled.div`
  width: 1000px;
  font-size: 18px;
  font-weight: 700;
  margin: 30px auto 0px auto;
  color: skyblue;
`;

export const SubTitleInput = styled.input`
  width: 1000px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0px 3px 15px skyblue;
  border: none;
  border-radius: 20px;
  margin: 10px 00px 0px 95px;

  ::placeholder {
    padding-left: 10px;
    color: skyblue;
  }
`;

export const TextArea = styled.textarea`
  width: 1000px;
  height: 300px;
  margin-left: 100px;
  margin-top: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 15px skyblue;
`;

export const TradeGpsBox = styled.div`
  width: 490px;
  border: 1px solid black;
  margin: 10px auto 50px auto;
`;

export const BasicRow = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;
  color: skyblue;
`;

export const AddressInput = styled.input`
  width: 450px;
  height: 35px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 2px 15px skyblue;
  margin: 10px 0px;
  ::placeholder {
    color: skyblue;
    padding-left: 10px;
  }
`;

export const MapButton = styled.button`
  width: 130px;
  height: 35px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 3px 15px skyblue;
  background-color: white;
  color: skyblue;
  font-size: 16px;
  font-weight: 700;
  margin: 10px 10px 0px 0px;
`;

export const Radio = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px 10px;
`;

export const Area = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  padding: 30px 0px 50px 0px;
`;

export const ProductImg = styled.img``;
