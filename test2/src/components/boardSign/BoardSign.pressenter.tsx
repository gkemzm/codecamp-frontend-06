import * as S from "../boardSign/BoardSign.styles";
import { BoardSignHTMLProps } from "./BoardSing.types";
import ImageSignPage from "../images/imageSign";
import { useRouter } from "next/router";

export default function BoardSignHTML(props: BoardSignHTMLProps) {
  const router = useRouter();

  return (
    <S.AllWrapper>
      <S.Wrapper>
        <S.Title> {props.isEdit ? "수정하기" : "새 글 작성"}</S.Title>

        <S.MainTitle>
          <S.TextDiv>제목</S.TextDiv>
          <S.TitleInput
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          ></S.TitleInput>
          <S.Error>{props.titleError}</S.Error>
        </S.MainTitle>

        <S.Middle>
          <S.TextDiv>내용</S.TextDiv>
          <S.MiddleInput
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          ></S.MiddleInput>
          <S.Error>{props.contentsError}</S.Error>
        </S.Middle>

        <S.Bottom>
          {/* <S.TextDiv>사진첨부</S.TextDiv> */}
          <S.PostArea>
            <ImageSignPage
              imageUrl={props.imageUrl}
              setImageUrl={props.setImageUrl}
              data={props.data}
            />
          </S.PostArea>
        </S.Bottom>

        {props.isEdit ? (
          <S.Top>
            <S.TopArea>
              <S.TextDiv>작성자</S.TextDiv>
              <S.TopInput2
                placeholder="  이름을 적어주세요."
                onChange={props.onChangeWriter}
                defaultValue={props.data?.fetchBoard.writer}
                disabled
              ></S.TopInput2>
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
        ) : (
          <S.Top>
            <S.TopArea>
              <S.TextDiv2>작성자</S.TextDiv2>
              <S.TopInput
                onChange={props.onChangeWriter}
                defaultValue={props.data?.fetchBoard.writer}
              ></S.TopInput>
              <S.Error>{props.writerError}</S.Error>
            </S.TopArea>
            <S.TopArea>
              <S.TextDiv2>비밀번호</S.TextDiv2>
              <S.TopInput
                type={"password"}
                onChange={props.onChangePw}
              ></S.TopInput>
              <S.Error>{props.pwError}</S.Error>
            </S.TopArea>
          </S.Top>
        )}
      </S.Wrapper>
      <S.Wrapper2>
        <S.RegistBtn onClick={props.isEdit ? props.updateBoard : props.submit}>
          {props.isEdit ? "수정" : "등록"}
        </S.RegistBtn>
        <S.RegistBtn
          onClick={props.isEdit ? props.MoveDetailPage : props.MoveMain}
        >
          취소
        </S.RegistBtn>
      </S.Wrapper2>
    </S.AllWrapper>
  );
}
