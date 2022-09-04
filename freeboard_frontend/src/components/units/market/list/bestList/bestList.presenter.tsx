import { IBestProductProps } from "./bestList.types";
import * as S from "./bestList.styles";
import { IUseditem } from "../../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function BestProductHTML(props: IBestProductProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.Title>BEST ITEM</S.Title>
      <S.BasicRow>
        {props.data?.fetchUseditemsOfTheBest.map((el: IUseditem) => (
          <S.BestProductList key={el._id}>
            <S.TrueBasicRow>
              <S.Name onClick={onClickMoveToPage(`/market/${el._id}`)}>
                {el.name}
              </S.Name>
            </S.TrueBasicRow>
            <S.Contents>Pick: {el.pickedCount}</S.Contents>
            <S.Contents>{el.remarks}</S.Contents>
            <S.Contents>Price: {el.price}</S.Contents>
            {el.images?.[0] ? (
              <>
                <S.Img
                  src={`https://storage.googleapis.com/${el?.images?.[0]}`}
                ></S.Img>
              </>
            ) : (
              <S.Img src="/NoImage2.png"></S.Img>
            )}
          </S.BestProductList>
        ))}
      </S.BasicRow>
    </S.Wrapper>
  );
}
