import { MouseEvent } from "react";
export interface IProductDetailHTMLProps {
  data: any;
  deleteUseditemDetailBoard: (event: MouseEvent<HTMLDivElement>) => void;
  buyingProductOnPoint: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBasket: any;
}
