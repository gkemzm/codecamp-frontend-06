import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Idisplay, IHoverPosition } from "./BoardDetail.types";

const hover = css`
  &:hover {
  }
`;
export const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Wrapper = styled.div`
  width: 1200px;
  box-shadow: 0px 4px 20px #e5e5e5;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  word-break: break-all;
`;
export const Pdetail = styled.div`
  width: 970px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding-top: 15px;
`;

export const PositionDetail = styled.div`
  width: 270px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  background-color: skyblue;
  border: none;
  box-shadow: 0px 4px 20px skyblue;
  color: black;
  display: ${(props: IHoverPosition) => (props.isHover ? "flex" : "none")};
`;

export const AddressD = styled.div`
  width: 260px;
  height: 50px;
  display: flex;
  border: none;
  color: black;
  font-size: 13px;
  font-weight: 700;
`;

export const TopWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;
export const TopWrapperInner = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Date = styled.div`
  display: flex;
  padding-top: 3px;
  font-size: 13px;
  color: #bdbdbd;
`;
export const Name = styled.div`
  display: flex;
  font-size: 17px;
  font-weight: 700;
`;
export const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 7px;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProfileHover = styled(Profile)`
  margin-top: 50px;
  &:hover {
    background-color: #bdbdbd;
  }
`;

export const Clip = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const Position = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const MiddleWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 15px;
  align-items: center;
`;
export const MiddleWrappertop = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-bottom: 15px;
  align-items: center;
`;
export const MiddleWrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;
export const Title = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
  font-size: 18px;
  font-weight: 700;
  margin-right: 30px;
`;
export const ImageBox = styled.div`
  display: flex;
  width: 500ox;
  flex-direction: column;
  padding-bottom: 50px;
`;

export const BoardImg = styled.img`
  max-width: 700px;
  max-height: 400px;
`;
export const Contents = styled.div`
  width: 2000px;
  font-size: 17px;
  font-weight: 700;
`;
export const Vidio = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding-bottom: 40px;
  padding-top: 50px;
`;
export const YouTube = styled.video`
  display: flex;
`;
export const Like_disLike = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  font-weight: 700;
  padding: 0px 12px;
`;
export const Like_disLike_btn = styled.div`
  display: flex;
  cursor: pointer;
`;
export const Img2 = styled.img`
  margin-right: 10px;
`;
export const BlueButton = styled(Like_disLike_btn)`
  background-color: black;
  ${hover}
`;

export const LikeDislikes = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Wrapper2 = styled.div`
  width: 1200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
export const Btns = styled.div`
  width: 330px;
  padding: 70px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  margin: auto;
`;
export const BtnContents = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 4px 20px skyblue;
  background-color: gray;
  font-weight: 700;
  color: white;
  cursor: pointer;

  :hover {
    background-color: blue;
  }
`;
export const WrapperWaiting = styled.div`
  width: 300px;
  height: 100px;
  box-shadow: 0px 4px 20px skyblue;
  border-radius: 10px;
  border: 2px solid skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 100px;
`;
export const CommentWrapper = styled.div`
  width: 1200px;
  box-shadow: 0px 4px 20px skyblue;
  border-radius: 10px;
  border-top: 1px solid skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 80px;
  padding: 50px 0px;
`;

export const CommentWrite = styled.div`
  width: 1030px;
  box-shadow: 0px 4px 10px skyblue;
  border-radius: 10px;
  border-top: 5px solid skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 80px;
  padding: 50px 0px;
`;

export const CommentInfo = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  border-top: 5px solid skyblue;
  box-shadow: 0px 4px 10px skyblue;
  padding: 20px 0px;
  align-items: center;
`;

export const CommentEditInfo = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;

export const CommentInputId = styled.input`
  width: 170px;
  height: 25px;
  margin-right: 30px;
  border-top: 5px solid skyblue;
  box-shadow: 0px 4px 10px skyblue;
  border-bottom: none;
  border-left: none;
  border-right: none;
`;

export const CommentInputPw = styled.input`
  width: 170px;
  height: 25px;
  border-top: 5px solid skyblue;
  box-shadow: 0px 4px 10px skyblue;
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin-right: 30px;
`;

export const StarPoint = styled.input`
  width: 100px;
  height: 25px;
  display: flex;
  margin-left: 5px;
  border-top: 5px solid greenyellow;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin-right: 10px;
`;

export const StarNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  font-size: 18px;
  font-weight: 700;
  padding-top: 3px;
`;

export const CommentInput = styled.textarea`
  width: 800px;
  height: 90px;
  margin-right: 20px;
  border-top: 5px solid skyblue;
  box-shadow: 0px 4px 10px skyblue;
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin-left: 30px;
  margin-right: 30px;
`;

export const CommentSubmitBtn = styled.button`
  width: 90px;
  height: 90px;
  border-top: 5px solid skyblue;
  box-shadow: 3px 10px 20px skyblue;
  background-color: white;
  border-radius: 10px;
  border-bottom: none;
  border-left: none;
  border-right: none;
  font-size: 15px;
  font-weight: 700;
  display: Fixed;
  cursor: pointer;

  :hover {
    background-color: #85a5e9;
    border-color: #85a5e9;
  }
`;

export const CommentSubmit = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
`;

export const Info = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CommentList = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommentDetailBox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  border-top: 2px solid skyblue;
  box-shadow: 3px 10px 20px skyblue;
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin-bottom: 15px;
  padding: 20px 0px;
`;
export const CommentDetailPicture = styled.div`
  width: 50px;
  border-bottom: none;
  border-left: none;
  border-right: none;
`;
export const CommentDetailInfo = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  border-top: 5px solid skyblue;
  box-shadow: 0px 1px 10px skyblue;
  border-bottom: none;
  border-left: none;
  border-right: none;
  padding: 20px 10px;
`;
export const CommentWriter = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  height: 30px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CWriter = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-right: 20px;
  padding: 0px 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const CStar = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 30px;
  padding: 0px 10px;
  font-size: 12px;
  font-weight: 700;
  margin-right: 10px;
`;

export const CommentContents = styled.div`
  width: 800px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 10px;
  font-weight: 700;
  padding: 5px 5px;
`;
export const CommentTime = styled.div`
  width: 130px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 5px;
  margin-top: 10px;
`;
export const CommentDetailEdit = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const CDelete = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  box-shadow: 0px 1px 10px skyblue;
  background-color: white;
  border-radius: 10px;
  border: none;
  padding: 0px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: #85a5e9;
    border-color: #85a5e9;
  }
`;

export const CEdit = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  box-shadow: 0px 1px 10px skyblue;
  background-color: white;
  border-radius: 10px;
  border: none;
  padding: 0px 10px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: #85a5e9;
    border-color: #85a5e9;
  }
`;

export const CPw = styled.input`
  width: 90px;
  height: 30px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  border: none;
`;

export const Img = styled.img`
  max-width: 1000px;
  max-height: 700px;
`;
export const CommentEditWrite = styled.div`
  width: 1000px;
  box-shadow: 0px 4px 10px skyblue;
  border-radius: 10px;
  border-top: 5px solid skyblue;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 80px;
  padding: 10px 0px;
  display: ${(props: Idisplay) =>
    props.display === props.id ? (props.isActive ? "flex" : "none") : "none"};
`;
