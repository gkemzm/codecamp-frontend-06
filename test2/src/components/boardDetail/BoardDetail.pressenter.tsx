/* eslint-disable jsx-a11y/alt-text */
import * as S from "../boardDetail/BoardDetail.styles";
import { BoardDetailHTMLProps } from "./BoardDetail.types";
import { useRouter } from "next/router";

export default function BoardDetailHTML(props: BoardDetailHTMLProps) {
  const router = useRouter();
  return (
    <>
      {props.data ? (
        <S.AllWrapper>
          <S.Wrapper>
            <S.TopWrapper>
              <S.TopWrapperInner>
                <S.ProfileHover>
                  <S.Name>{props.data?.fetchBoard.title}</S.Name>
                </S.ProfileHover>
              </S.TopWrapperInner>
            </S.TopWrapper>
            <S.MiddleWrapper>
              {props.data.fetchBoard.images?.[0] ? (
                <S.ImageWrapper>
                  {props.data?.fetchBoard.images
                    ?.filter((el: string) => el)
                    .map((el: string) => (
                      <S.Image
                        key={el}
                        src={`https://storage.googleapis.com/${el}`}
                      />
                    ))}
                </S.ImageWrapper>
              ) : (
                <></>
              )}
              <S.MiddleWrappertop>
                <S.Title>
                  <S.Img2 src="/profile.png"></S.Img2>
                  <div>{props.data?.fetchBoard.writer}</div>
                </S.Title>
                <S.Contents>
                  <div>{props.data?.fetchBoard.contents}</div>
                </S.Contents>
              </S.MiddleWrappertop>
            </S.MiddleWrapper>
          </S.Wrapper>

          <S.Wrapper2>
            <S.Btns>
              <S.BtnContents onClick={props.MoveMainpage}>글목록</S.BtnContents>
              <S.BtnContents onClick={props.updateBoard}>수정</S.BtnContents>
              <S.BtnContents onClick={props.deleteOneBoard}>삭제</S.BtnContents>
            </S.Btns>
          </S.Wrapper2>
        </S.AllWrapper>
      ) : (
        <S.WrapperWaiting>로딩중입니다.</S.WrapperWaiting>
      )}
    </>
  );
}
