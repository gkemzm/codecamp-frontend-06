import SkyBlueButton from "../../../commons/buttons/skyBlueButton";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./listProduct.styels";
import { IListProps } from "./listProduct.type";

export default function ListBoardHTML(props: IListProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <S.Wrapper>
        <S.BestBoard>
          <S.BestBoardList></S.BestBoardList>
        </S.BestBoard>
        <S.Area onClick={onClickMoveToPage("/market/new")}>
          <SkyBlueButton isActive={false} title={"Product Sign"} />
        </S.Area>
        {props.data?.fetchUseditems.map((el: any) => (
          <S.ProductBox key={el._id}>
            <S.ImageBox
              src={`https://storage.googleapis.com/${el.images}`}
            ></S.ImageBox>
            <S.ProductDetail>
              <S.ProductName>{el.name}</S.ProductName>
              <S.ProductRemarks>{el.remarks}</S.ProductRemarks>
              <S.ProductTags>{el.tags}</S.ProductTags>
            </S.ProductDetail>
            <S.Price>Price: {el.price}</S.Price>
          </S.ProductBox>
        ))}
      </S.Wrapper>
    </>
  );
}
