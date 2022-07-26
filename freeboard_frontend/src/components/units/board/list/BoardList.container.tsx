import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

interface IBoardListProps {
  keyword: string;
  data: any;
}

export default function BoardList(props: IBoardListProps) {
  const router = useRouter();

  function onClickMoveToBoardNew() {
    router.push("/board/new");
  }

  function onClickMoveToBoardDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/board/${(event.target as HTMLButtonElement).id}`);
  }

  return (
    <BoardListUI
      keyword={props.keyword}
      data={props.data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
// as HTMLButtonElement
// instanceof Element
