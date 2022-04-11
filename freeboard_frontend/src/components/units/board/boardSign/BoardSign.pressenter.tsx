import * as S from "../boardSign/BoardSign.styles";
import { BoardSignHTMLProps } from "./BoardSing.types";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import ImageSignPage from "../../../../commons/libraries/images/imageSign";

export default function BoardSignHTML(props: BoardSignHTMLProps) {
  return (
    <S.Wrapper>
      <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
      {props.isEdit ? (
        <S.Top>
          <S.TopArea>
            <S.TextDiv>비밀번호</S.TextDiv>
            <S.TopInput
              placeholder="  비밀번호를 입력해 주세요."
              type={"password"}
              onChange={props.onChangePw}
            ></S.TopInput>
            <S.Error>{props.pwError}</S.Error>
          </S.TopArea>
        </S.Top>
      ) : (
        <S.Top>
          <S.TopArea>
            <S.TextDiv>작성자</S.TextDiv>
            <S.TopInput
              placeholder="  이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
            ></S.TopInput>
            <S.Error>{props.writerError}</S.Error>
          </S.TopArea>
          <S.TopArea>
            <S.TextDiv>비밀번호</S.TextDiv>
            <S.TopInput
              placeholder="  비밀번호를 입력해 주세요."
              type={"password"}
              onChange={props.onChangePw}
            ></S.TopInput>
            <S.Error>{props.pwError}</S.Error>
          </S.TopArea>
        </S.Top>
      )}

      <S.MainTitle>
        <S.TextDiv>제목</S.TextDiv>
        <S.TitleInput
          placeholder="  제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        ></S.TitleInput>
        <S.Error>{props.titleError}</S.Error>
      </S.MainTitle>

      <S.Middle>
        <S.TextDiv>내용</S.TextDiv>
        <S.MiddleInput
          placeholder="  내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        ></S.MiddleInput>
        <S.Error>{props.contentsError}</S.Error>
      </S.Middle>

      <S.Middle>
        <S.TextDiv>주소</S.TextDiv>
        <S.PostNum>
          <S.PostInput
            readOnly
            placeholder="         07250"
            // value={props.zonecode} 우편번호
            value={props.zonecode}
          ></S.PostInput>
          <S.PostBtn onClick={props.onToggleModal}>우편번호 검색</S.PostBtn>
          {props.isOpen && (
            <Modal
              title="우편번호검색"
              visible={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
            >
              <DaumPostcode onComplete={props.handleComplete} autoClose />
            </Modal>
          )}
        </S.PostNum>
        <S.Address
          readOnly
          // onChange={props.onChangeAddress}
          // value={props.region}
          value={props.region}
          placeholder="  주소를입력해주세요"
          // defaultValue={props.data?.fetchBoard.Address}
          // value와 defaultValue가 있다면 value가 우선시 되기에
          // defaultValue가 vlue에 덮여씌워져 작동이 된다.
          // 그러므로 value를 설정해준다면 defaultValue를
          // value의 조건으로 제시해준다.
        ></S.Address>
        <S.Address
          onChange={props.onChangeAddressDetail}
          placeholder="  상세주소를입력해주세요"
          // defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail || ""
          }
        ></S.Address>
      </S.Middle>

      <S.Bottom>
        <S.TextDiv>유튜브</S.TextDiv>
        <S.YouTube
          onChange={props.onChangeYouTube}
          placeholder="  링크를 입력해주세요"
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        ></S.YouTube>
      </S.Bottom>

      <S.Bottom>
        {/* <S.TextDiv>사진첨부</S.TextDiv> */}
        <S.PostArea>
          {/* <S.ImgBtn>
            +<br></br>Upload
          </S.ImgBtn>
          <S.ImgBtn>
            +<br></br>Upload
          </S.ImgBtn>
          <S.ImgBtn>
            +<br></br>Upload
          </S.ImgBtn> */}
          <ImageSignPage
            imageUrl={props.imageUrl}
            setImageUrl={props.setImageUrl}
            data={props.data}
          />
        </S.PostArea>
      </S.Bottom>

      <S.Bottom>
        <S.TextDiv>메인설정</S.TextDiv>
        <S.SelectArea>
          <S.SelectInput type="radio"></S.SelectInput>
          <S.SelectText>유튜브</S.SelectText>
          <S.SelectInput type="radio"></S.SelectInput>
          <S.SelectText>사진</S.SelectText>
        </S.SelectArea>
      </S.Bottom>

      <S.RegistBtn
        onClick={props.isEdit ? props.updateBoard : props.submit}
        isActive={props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.RegistBtn>
    </S.Wrapper>
  );
}
