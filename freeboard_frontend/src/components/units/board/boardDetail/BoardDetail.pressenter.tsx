// import {Wrapper, Top_Wrapper, ProfileImage, Profile, Clip,
//     Position, TopWrapperInner, Name, Date, Pdetail,
//    Middle_Wrapper, Middle_Wrapper_top, Title, Contents, ImageBox,
//    Vidio, Like_disLike, Like_disLike_btn, Like_disLikes,
//    Wrapper2, Btns, Btn_Contents, Wrapper_Waiting, MiddleWrapperbottom, ProfileHover} from '../../../styles/DetailPage'
import * as S from "../boardDetail/BoardDetail.styles";
import { BoardDetailHTMLProps } from "./BoardDetail.types";

export default function BoardDetailHTML(props: BoardDetailHTMLProps) {
  return (
    <>
      {props.data ? (
        <>
          <S.Wrapper>
            <S.Pdetail>
              <img
                src="/fetchBoard/positiondetail.PNG"
                width="260px"
                height="50px"
              ></img>
            </S.Pdetail>

            <S.TopWrapper>
              <S.TopWrapperInner>
                <S.ProfileImage>
                  <img
                    src="/fetchBoard/icon1.PNG"
                    width="40px"
                    height="40px"
                  ></img>
                </S.ProfileImage>
                <S.ProfileHover>
                  <S.Name>{props.data?.fetchBoard.writer}</S.Name>
                  <S.Date>
                    {props.data?.fetchBoard.createdAt.slice(0, 10)}
                  </S.Date>
                </S.ProfileHover>
              </S.TopWrapperInner>
              <S.TopWrapperInner>
                <>
                  <S.Clip>
                    <img
                      src="/fetchBoard/cripboard.PNG"
                      width="30px"
                      height="30px"
                    ></img>
                  </S.Clip>
                  <S.Position>
                    <img
                      src="/fetchBoard/position.PNG"
                      width="30px"
                      height="30px"
                    ></img>
                  </S.Position>
                </>
              </S.TopWrapperInner>
            </S.TopWrapper>
            <S.MiddleWrapper>
              <S.MiddleWrappertop>
                <S.Title>
                  <div>{props.data?.fetchBoard.title}</div>
                </S.Title>

                <S.ImageBox>이미지가 들어갈 구간</S.ImageBox>

                <S.Contents>
                  <div>{props.data?.fetchBoard.contents}</div>
                </S.Contents>
              </S.MiddleWrappertop>
              <S.MiddleWrapperBottom>
                <S.Vidio>
                  {props.data?.fetchBoard.youtubeUrl}
                  <iframe
                    width="560"
                    height="315"
                    src={props.data?.fetchBoard?.youtubeUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </S.Vidio>
                <S.LikeDislikes>
                  <S.Like_disLike_btn>
                    <img
                      src="/fetchBoard/like.PNG"
                      onClick={props.upLike}
                      width="35px"
                      height="30px"
                    ></img>
                  </S.Like_disLike_btn>

                  <S.Like_disLike_btn>
                    <img
                      src="/fetchBoard/dislike.PNG"
                      onClick={props.upDisLike}
                      width="35px"
                      height="30px"
                    ></img>
                  </S.Like_disLike_btn>
                </S.LikeDislikes>

                <S.LikeDislikes>
                  <S.Like_disLike>
                    <div>{props.data?.fetchBoard.likeCount}</div>
                  </S.Like_disLike>
                  <S.Like_disLike>
                    <div>{props.data?.fetchBoard.dislikeCount}</div>
                  </S.Like_disLike>
                </S.LikeDislikes>
              </S.MiddleWrapperBottom>
            </S.MiddleWrapper>
          </S.Wrapper>

          <S.Wrapper2>
            <S.Btns>
              <S.BtnContents onClick={props.MoveMainpage}>
                돌아가기
              </S.BtnContents>
              <S.BtnContents onClick={props.updateBoard}>
                수정하기
              </S.BtnContents>
              <S.BtnContents onClick={props.deleteOneBoard}>
                삭제하기
              </S.BtnContents>
            </S.Btns>
          </S.Wrapper2>

          <S.CommentWrapper>
            <S.CommentWrite>
              <S.CommentInfo>
                <S.Info>ID</S.Info>
                <S.CommentInputId
                  placeholder=" ID"
                  onChange={props.onChangeCommentWriter}
                ></S.CommentInputId>
                <S.Info>PW</S.Info>
                <S.CommentInputPw
                  placeholder=" PW"
                  onChange={props.onChangeCommentPw}
                ></S.CommentInputPw>
                <S.StarPoint></S.StarPoint>
              </S.CommentInfo>
              <S.CommentSubmit>
                <S.CommentInput
                  placeholder=" 내용을 입력하세요"
                  onChange={props.onChangeCommentContents}
                ></S.CommentInput>
                <S.CommentSubmitBtn onClick={props.CreateCommentBoard}>
                  댓글 등록하기
                </S.CommentSubmitBtn>
              </S.CommentSubmit>
            </S.CommentWrite>
            <S.CommentList>
              {props.dataComment?.fetchBoardComments.map((el: any) => (
                <S.CommentDetailBox key={el._id}>
                  <S.CommentDetailPicture></S.CommentDetailPicture>
                  <S.CommentDetailInfo>
                    <S.CommentWriter>
                      <S.CWriter>작성자 : {el.writer}</S.CWriter>
                      <S.CStar>평점: {el.rating}</S.CStar>
                      <S.CEdit>수정하기</S.CEdit>
                      <S.CDelete>삭제</S.CDelete>
                    </S.CommentWriter>
                    <S.CommentContents>{el.contents}</S.CommentContents>
                    <S.CommentTime>
                      {String(el.createdAt).slice(0, 10)}
                    </S.CommentTime>
                  </S.CommentDetailInfo>
                  <S.CommentDetailEdit></S.CommentDetailEdit>
                </S.CommentDetailBox>
              ))}
            </S.CommentList>
          </S.CommentWrapper>
        </>
      ) : (
        <S.WrapperWaiting>로딩중입니다.</S.WrapperWaiting>
      )}
    </>
  );
}
