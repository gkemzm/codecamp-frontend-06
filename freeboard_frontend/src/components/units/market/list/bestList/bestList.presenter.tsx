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
            <S.Name onClick={onClickMoveToPage(`/market/${el._id}`)}>
              {el.name}
            </S.Name>
            <S.Contents>{el.remarks}</S.Contents>
            <S.Contents>Price: {el.price}</S.Contents>
            {el.images?.length === 0 ? (
              <>
                <S.Img src="/NoImage.png"></S.Img>
              </>
            ) : (
              <S.Img
                src={`https://storage.googleapis.com/${el.images}`}
              ></S.Img>
            )}
          </S.BestProductList>
        ))}
      </S.BasicRow>
    </S.Wrapper>
  );
}
