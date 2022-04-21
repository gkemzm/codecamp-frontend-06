import * as S from "./detailProduct.styles";
import { IProductDetailHTMLProps } from "./detailProduct.types";
import SkyBlueButton from "../../../commons/buttons/skyBlueButton/index";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import DOMPurify from "dompurify";

export default function DetailProductHTML(props: IProductDetailHTMLProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.BasicColumn>
      <S.Wrapper>
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
      </S.Wrapper>
      <S.BottonWrapper>
        <S.BtnListRow>
          <S.Area onClick={onClickMoveToPage("/market")}>
            <SkyBlueButton isActive={false} title={"메인으로"} />
          </S.Area>
          <S.Area>
            <SkyBlueButton isActive={false} title={"수정하기"} />
          </S.Area>
          <S.Area>
            <SkyBlueButton isActive={false} title={"삭제하기"} />
          </S.Area>
        </S.BtnListRow>
      </S.BottonWrapper>
    </S.BasicColumn>
  );
}
