import * as S from "../boardDetail/BoardDetail.styles";
import { BoardDetailHTMLProps } from "./BoardDetail.types";
import ReactPlayer from "react-player";
import { Rate, Modal } from "antd";
import { MouseEvent, useState } from "react";
import { StarNumber } from "./BoardDetail.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import { IBoardComment } from "../../../../commons/types/generated/types";

export default function BoardDetailHTML(props: BoardDetailHTMLProps) {
  const router = useRouter();
  const [starValue, setStarValue] = useState(3);
  const handleChange = () => {
    setStarValue(starValue);
  };

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(`${event.currentTarget.id}님이 작성한 댓글입니다.`);
  };

  const onLoadMore = () => {
    if (!props.dataComment) return;

    props.fetchMore({
      variables: {
        page: Math.ceil(props.dataComment?.fetchBoardComments.length / 10) + 1,
        boardId: router.query.boardId,
      },
      updateQuery: (
        prev: { fetchBoardComments: Array<IBoardComment> },
        { fetchMoreResult }: any
      ) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <>
      {props.data ? (
        <S.AllWrapper>
          <S.Wrapper>
            <S.Pdetail>
              <S.PositionDetail isHover={props.isHover}>
                <S.AddressD>
                  {props.data?.fetchBoard?.boardAddress?.address}
                </S.AddressD>
                <S.AddressD>
                  {props.data?.fetchBoard?.boardAddress?.addressDetail}(
                  {props.data?.fetchBoard?.boardAddress?.zipcode})
                </S.AddressD>
              </S.PositionDetail>
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
                  <S.Position onClick={props.PositionHover}>
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
                {props.data?.fetchBoard?.images?.[0] && (
                  <S.ImageBox>
                    <S.BoardImg
                      src={`https://storage.googleapis.com/${props.data?.fetchBoard?.images[0]}`}
                    />
                  </S.ImageBox>
                )}
                <S.Contents>
                  <div>{props.data?.fetchBoard.contents}</div>
                </S.Contents>
              </S.MiddleWrappertop>
              <S.MiddleWrapperBottom>
                <S.Vidio>
                  <ReactPlayer
                    url={props.data?.fetchBoard?.youtubeUrl?.[0]}
                    width="560px"
                    height="315px"
                    controls={true}
                  />
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
                  value={props.writer} // 제어컴포넌트
                ></S.CommentInputId>
                <S.Info>PW</S.Info>
                <S.CommentInputPw
                  placeholder=" PW"
                  onChange={props.onChangeCommentPw}
                  type={"password"}
                  value={props.pw}
                ></S.CommentInputPw>
                <S.Info> 평점</S.Info>
                <Rate onChange={props.handleChange} value={props.rating} />
                <StarNumber>{props.rating}</StarNumber>
              </S.CommentInfo>
              <S.CommentSubmit>
                <S.CommentInput
                  placeholder=" 내용을 입력하세요"
                  onChange={props.onChangeCommentContents}
                  value={props.contents}
                ></S.CommentInput>
                <S.CommentSubmitBtn onClick={props.CreateCommentBoard}>
                  댓글 등록하기
                </S.CommentSubmitBtn>
              </S.CommentSubmit>
            </S.CommentWrite>
            <S.CommentList>
              <div
                style={{ height: "700px", width: "1050px", overflow: "auto" }}
              >
                <InfiniteScroll
                  pageStart={0}
                  loadMore={onLoadMore}
                  hasMore={true}
                  loader={<div className="loader" key={0}></div>}
                  useWindow={false}
                >
                  {props.dataComment?.fetchBoardComments.map((el: any) => (
                    <>
                      <S.CommentDetailBox key={el._id}>
                        <S.CommentDetailPicture></S.CommentDetailPicture>
                        <S.CommentDetailInfo
                          id={el.writer}
                          onClick={onClickAlert}
                        >
                          <S.CommentWriter>
                            <S.CWriter>작성자 : {el.writer}</S.CWriter>
                            <S.CStar>평점: {el.rating}</S.CStar>
                            <Rate
                              onChange={handleChange}
                              value={el.rating}
                              disabled={true}
                            />
                          </S.CommentWriter>
                          <S.CommentContents>{el.contents}</S.CommentContents>
                          <S.CommentTime>
                            {String(el.createdAt).slice(0, 10)}
                          </S.CommentTime>
                        </S.CommentDetailInfo>
                        <S.CommentDetailEdit>
                          <S.CEdit id={el._id} onClick={props.DisplayOnOff}>
                            수정하기
                          </S.CEdit>
                          <S.CDelete onClick={props.showModal}>
                            삭제하기
                          </S.CDelete>
                          {/* <S.CPw
                        placeholder="    비밀번호"
                        type={"password"}
                        onChange={props.onChangeCommentPw}
                      ></S.CPw> */}
                          <Modal
                            title="비밀번호 입력창"
                            visible={props.isOpen}
                            onOk={() => props.deleteOneComment(el._id)}
                            onCancel={props.handleCancel}
                            // afterClose={props.deleteOneComment}
                          >
                            비밀번호입력:{" "}
                            <input
                              type={"password"}
                              onChange={props.onChangeCommentPw}
                              id={el._id}
                            />
                          </Modal>
                        </S.CommentDetailEdit>
                      </S.CommentDetailBox>

                      <S.CommentEditWrite
                        isActive={props.isActive}
                        id={el._id}
                        display={props.display}
                      >
                        <S.CommentEditInfo>
                          <S.Info></S.Info>
                          <S.CommentInputPw
                            placeholder=" PW"
                            onChange={props.onChangeCommentPw}
                            type={"password"}
                          ></S.CommentInputPw>
                          {/* 여기 인풋을 별로 */}
                          {/* <S.StarPoint
                            placeholder="평점(숫자만!)"
                            onChange={props.onChangeCommentRating}
                          ></S.StarPoint> */}
                          <Rate onChange={props.handleChange} />
                        </S.CommentEditInfo>
                        <S.CommentSubmit>
                          <S.CommentInput
                            placeholder=" 내용을 입력하세요"
                            maxLength={50}
                            onChange={props.onChangeCommentContents}
                            id={el._id}
                          ></S.CommentInput>
                          <S.CommentSubmitBtn
                            onClick={props.UpdateCommentBoard}
                            id={el._id}
                          >
                            댓글 수정하기
                          </S.CommentSubmitBtn>
                        </S.CommentSubmit>
                      </S.CommentEditWrite>
                    </>
                  ))}
                </InfiniteScroll>
              </div>
            </S.CommentList>
          </S.CommentWrapper>
        </S.AllWrapper>
      ) : (
        <S.WrapperWaiting>로딩중입니다.</S.WrapperWaiting>
      )}
    </>
  );
}
