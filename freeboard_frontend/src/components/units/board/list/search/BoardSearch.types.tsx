import { ChangeEvent, MouseEvent } from "react";
// import { IQueryFetchBoardsArgs } from "../../../../../commons/types/generated/types";

export interface IProps {
  isMatched: boolean;
}

export interface ISearchBoardProps {
  keyword: String;
  data: any;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
}
