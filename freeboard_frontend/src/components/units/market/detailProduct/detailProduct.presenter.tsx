import * as S from "./detailProduct.styles";
import { IProductDetailHTMLProps } from "./detailProduct.types";
import SkyBlueButton from "../../../commons/buttons/skyBlueButton/index";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import DOMPurify from "dompurify";
import CommentSignContainer from "./comments/comments.container";
import CommentListContainer from "./commentsList/commentsList.container";
import { useRouter } from "next/router";
import KakaoMapPage from "../map/index";

export default function DetailProductHTML(props: IProductDetailHTMLProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  console.log(props.data, "데이터");
  return (
    <S.BasicColumn>
      <S.BasicColumn>
        <S.Wrapper>
          <S.BasicRow>
            <S.Seller>Seller: {props.data?.fetchUseditem.seller.name}</S.Seller>
            <S.Seller>
              {" "}
              Picked: {props.data?.fetchUseditem.pickedCount}
            </S.Seller>
          </S.BasicRow>
          <S.TextBox>ProductName</S.TextBox>
          <S.Title>{props.data?.fetchUseditem.name}</S.Title>
          <S.TextBox>Remarks</S.TextBox>
          <S.SubTitle>{props.data?.fetchUseditem.remarks}</S.SubTitle>
          <S.TextBox>Contentst</S.TextBox>
          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  `${props.data?.fetchUseditem.contents}`
                ),
              }}
            ></S.Contents>
          ) : (
            <S.Contents></S.Contents>
          )}
          <S.TextBox>Price</S.TextBox>
          <S.Price>{props.data?.fetchUseditem.price}</S.Price>
          <S.TextBox>Trade Location</S.TextBox>
          <S.PostNum>
            {props.data?.fetchUseditem?.useditemAddress?.zipcode}
          </S.PostNum>
          <S.SubTitle>
            {props.data?.fetchUseditem?.useditemAddress?.address}
          </S.SubTitle>
          {props.data?.fetchUseditem?.useditemAddress?.addressDetail ? (
            <S.SubTitle>
              {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
            </S.SubTitle>
          ) : (
            <S.SubTitle>
              {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
            </S.SubTitle>
          )}
          {props.data?.fetchUseditem?.useditemAddress?.address ? (
            <KakaoMapPage
              address={props.data?.fetchUseditem?.useditemAddress?.address}
            />
          ) : (
            <></>
          )}

          <S.TextBox>Tags</S.TextBox>
          <S.Tags>{props.data?.fetchUseditem.tags}</S.Tags>
          <S.BasicRow>
            {props.data?.fetchUseditem.images[0] ? (
              <S.BasicRow>
                <S.Imgs
                  src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
                />
                {props.data?.fetchUseditem.images[1] ? (
                  <S.Imgs
                    src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[1]}`}
                  />
                ) : (
                  <></>
                )}
              </S.BasicRow>
            ) : (
              <></>
            )}
          </S.BasicRow>
          {props.data?.fetchUseditem?.seller?._id !==
          props.userData?.fetchUserLoggedIn._id ? (
            <S.BtnListRow2>
              <S.Area onClick={props.buyingProductOnPoint}>
                <SkyBlueButton isActive={false} title={"Now Buy"} />
              </S.Area>
              <S.Area onClick={props.onClickBasket(props.data)}>
                {/* <S.Area onClick={props.onClickBasket}> */}
                <SkyBlueButton isActive={false} title={"Go Basket"} />
              </S.Area>
              <S.Area onClick={props.pickedUseditem}>
                <SkyBlueButton isActive={false} title={"Pick!"} />
              </S.Area>
            </S.BtnListRow2>
          ) : (
            <></>
          )}
        </S.Wrapper>
        <S.BottonWrapper>
          <S.BtnListRow>
            <S.Area onClick={onClickMoveToPage("/market")}>
              <SkyBlueButton isActive={false} title={"메인으로"} />
            </S.Area>
            {props.data?.fetchUseditem?.seller?._id ===
            props.userData?.fetchUserLoggedIn._id ? (
              <>
                <S.Area
                  onClick={onClickMoveToPage(
                    `/market/${router.query.marketId}/edit`
                  )}
                >
                  <SkyBlueButton isActive={false} title={"수정하기"} />
                </S.Area>
                <S.Area onClick={props.deleteUseditemDetailBoard}>
                  <SkyBlueButton isActive={false} title={"삭제하기"} />
                </S.Area>
              </>
            ) : (
              <></>
            )}
          </S.BtnListRow>
        </S.BottonWrapper>
      </S.BasicColumn>
      <CommentSignContainer />
      <CommentListContainer />
    </S.BasicColumn>
  );
}
