import { IBestProductProps } from "./bestList.types";
import * as S from "./bestList.styles";
import { IUseditem } from "../../../../../commons/types/generated/types";

export default function BestProductHTML(props: IBestProductProps) {
  return (
    <S.Wrapper>
      {props.data?.fetchUseditemsOfTheBest.map((el: IUseditem) => (
        <>
          <div key={el._id}></div>
          <div>{el.name}</div>
          <div>{el.remarks}</div>
          <div>{el.price}</div>
        </>
      ))}
    </S.Wrapper>
  );
}
