import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  margin-left: 50px;
  width: 1000px;
  margin-right: 330px;
  position: relative;
  bottom: 30px;
`;
export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BasicRow2 = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  background-color: black;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`;
export const TextDiv = styled.div`
  width: 750px;
  display: flex;
  justify-content: center;
  font-size: 25px;
  align-items: center;
  font-weight: 700px;
  margin-bottom: 10px;
  color: black;
  background-color: white;
  border: 2px solid skyblue;
  border-radius: 20px;
`;
export const Img = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 20px;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const Bucket = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 3px 15px skyblue;
  width: 750px;
  margin-bottom: 30px;
`;

export const Name = styled.div`
  font-size: 25px;
  font-weight: 700;
`;
export const Contents = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const Tags = styled.div`
  font-size: 15px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
`;

export const Tag = styled.div`
  font-size: 15px;
  font-weight: 700;
  background-color: black;
  color: white;
  margin-right: 10px;
  border-radius: 20px;
  padding: 0px 20px;
`;
