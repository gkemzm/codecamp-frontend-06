import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  function onClickMoveToBoardNew() {
    router.push("/board/new");
  }

  function onClickMoveToBoardDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/board/${(event.target as HTMLButtonElement).id}`);
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
// as HTMLButtonElement
// instanceof Element
