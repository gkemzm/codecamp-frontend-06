import { IUseditem } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IListProps {
  data: { fetchUseditems: Array<IUseditem> };
  fetchMore: any;
  onClickBasket: (aaa: Object) => (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IHoverPosition {
  isHover: boolean;
}
