import { MouseEvent } from "react";

export interface BoardListUIProps {
  data?: any;
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
