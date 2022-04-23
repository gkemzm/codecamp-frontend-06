import { MouseEvent } from "react";
export interface IProductDetailHTMLProps {
  data: any;
  deleteUseditemDetailBoard: (event: MouseEvent<HTMLDivElement>) => void;
}
