import { MouseEvent } from "react";

export interface BoardListUIProps {
  data?: any;
  keyword: string;
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
