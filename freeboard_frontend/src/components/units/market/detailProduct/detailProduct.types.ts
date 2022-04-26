import { MouseEvent } from "react";
export interface IProductDetailHTMLProps {
  data: any;
  userData: any;
  deleteUseditemDetailBoard: (event: MouseEvent<HTMLDivElement>) => void;
  buyingProductOnPoint: (event: MouseEvent<HTMLDivElement>) => void;
  pickedUseditem: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBasket: any;
}
