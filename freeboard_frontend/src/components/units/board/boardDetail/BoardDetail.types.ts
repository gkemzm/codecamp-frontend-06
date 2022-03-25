import { MouseEvent } from "react";

export interface BoardDetailHTMLProps {
  data?: any;
  upLike: () => void;
  upDisLike: () => void;
  MoveMainpage: (event: MouseEvent<HTMLButtonElement>) => void;
  deleteOneBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  updateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
}
