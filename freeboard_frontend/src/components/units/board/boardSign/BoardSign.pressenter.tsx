import * as S from "../boardSign/BoardSign.styles";
import { BoardSignHTMLProps } from "./BoardSing.types";
import { YouTube } from "../boardDetail/BoardDetail.styles";
import { Address } from "./BoardSign.styles";

export default function BoardSignHTML(props: BoardSignHTMLProps) {
  return (
    <S.Wrapper>
      <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
      {props.isEdit ? (
        <S.Top>
          <S.TopArea>
            <S.Text>비밀번호</S.Text>
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
            <S.Text>작성자</S.Text>
            <S.TopInput
              placeholder="  이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
            ></S.TopInput>
            <S.Error>{props.writerError}</S.Error>
          </S.TopArea>
          <S.TopArea>
            <S.Text>비밀번호</S.Text>
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
        <S.Text>제목</S.Text>
        <S.TitleInput
          placeholder="  제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        ></S.TitleInput>
        <S.Error>{props.titleError}</S.Error>
      </S.MainTitle>

      <S.Middle>
        <S.Text>내용</S.Text>
        <S.MiddleInput
          placeholder="  내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        ></S.MiddleInput>
        <S.Error>{props.contentsError}</S.Error>
      </S.Middle>

      <S.Middle>
        <S.Text>주소</S.Text>
        <S.PostNum>
          <S.PostInput placeholder="         07250"></S.PostInput>
          <S.PostBtn>우편번호 검색</S.PostBtn>
        </S.PostNum>
        <S.Address
          onChange={props.onChangeAddress}
          placeholder="  주소를입력해주세요"
          defaultValue={props.data?.fetchBoard.Address}
        ></S.Address>
        <S.Address
          onChange={props.onChangeAddressDetail}
          placeholder="  상세주소를입력해주세요"
          defaultValue={props.data?.fetchBoard.Address}
        ></S.Address>
      </S.Middle>

      <S.Bottom>
        <S.Text>유튜브</S.Text>
        <S.YouTube
          onChange={props.onChangeYouTube}
          placeholder="  링크를 입력해주세요"
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        ></S.YouTube>
      </S.Bottom>

      <S.Bottom>
        <S.Text>사진첨부</S.Text>
        <S.PostArea>
          <S.ImgBtn>
            +<br></br>Upload
          </S.ImgBtn>
          <S.ImgBtn>
            +<br></br>Upload
          </S.ImgBtn>
          <S.ImgBtn>
            +<br></br>Upload
          </S.ImgBtn>
        </S.PostArea>
      </S.Bottom>

      <S.Bottom>
        <S.Text>메인설정</S.Text>
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
