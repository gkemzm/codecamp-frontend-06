import { IBestProductProps } from "./bestList.types";
import * as S from "./bestList.styles";
import { IUseditem } from "../../../../../commons/types/generated/types";

export default function BestProductHTML(props: IBestProductProps) {
  return (
    <S.Wrapper>
      <S.Title>BEST ITEM</S.Title>
      <S.BasicRow>
        {props.data?.fetchUseditemsOfTheBest.map((el: IUseditem) => (
          <S.BestProductList key={el._id}>
            <div>{el.name}</div>
            <div>{el.remarks}</div>
            <div>{el.price}</div>
          </S.BestProductList>
        ))}
      </S.BasicRow>
    </S.Wrapper>
  );
}
