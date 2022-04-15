import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardSing.types";

export const Wrapper = styled.div`
  width: 1220px;
  box-shadow: 0px 4px 20px #e5e5e5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
`;

export const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper2 = styled.div`
  width: 1200px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
export const Title = styled.div`
  font-size: 27px;
  font-weight: 900;
  padding: 5px 20px;
  background-color: white;
  border-radius: 30px;
  margin: 50px 0px 20px 40px;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 11px;
  width: 500px;
  font-size: 15px;
  color: red;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.div`
  width: 1200px;
  //height: 90px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;
export const TopArea = styled.div`
  width: 485px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;
export const TextDiv = styled.div`
  width: 190px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 30px;

  margin: 10px 20px 10px 0px;
`;

export const TextDiv2 = styled.div`
  width: 270px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  border: none;

  margin: 10px 20px 10px 0px;
`;
export const TopInput = styled.input`
  width: 1000px;
  height: 50px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const TopInput2 = styled.input`
  width: 485px;
  height: 37px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  color: gray;
  ::placeholder {
    color: gray;
  }
`;
export const MainTitle = styled.div`
  width: 1140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 2px solid blue;
  margin-left: 40px;
`;

export const TitleInput = styled.input`
  width: 3000px;
  height: 37px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;
export const Middle = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  margin-left: 40px;
`;
export const MiddleInput = styled.textarea`
  width: 2500px;
  height: 300px;
  display: flex;
  text-align: left;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
`;
export const PostNum = styled.div`
  width: 250px;
  display: flex;
  padding-bottom: 40px;
  flex-direction: row;
`;

export const PostInput = styled.input`
  width: 110px;
  height: 55px;
  margin-right: 30px;
  border: none;
  box-shadow: 0px 4px 20px skyblue;
  border-radius: 15px;
`;
export const PostBtn = styled.button`
  width: 110px;
  height: 55px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
export const Address = styled.input`
  width: 1000px;
  height: 37px;
  margin-bottom: 25px;
  border: none;
  box-shadow: 0px 4px 20px skyblue;
  border-radius: 15px;
`;
export const Bottom = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const YouTube = styled.input`
  width: 1000px;
  height: 37px;
  border: none;
  box-shadow: 0px 4px 20px skyblue;
  border-radius: 15px;
`;
export const PostArea = styled.div`
  width: 1000px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
`;

export const ImgBtn = styled.button`
  width: 100px;
  height: 100px;
  margin-right: 30px;
  font-size: 20px;
  font-weight: 700;
  border: 1px solid white;
  cursor: pointer;
`;

export const SelectInput = styled.input`
  width: 25px;
  height: 25px;
  border: 1px solid #bdbdbd;
`;
export const SelectArea = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SelectText = styled.div`
  width: 60px;
  margin: 0px 6px;
  font-size: 18px;
  font-weight: 700;
  color: skyblue;
`;

export const RegistBtn = styled.button`
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 20px skyblue;
  margin: 50px 10px 70px 10px;
  background-color: gray;
  cursor: pointer;

  :hover {
    background-color: blue;
  }
`;
