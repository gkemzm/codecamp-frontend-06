import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { useState, MouseEvent } from "react";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_BOARD_COMMENT,
} from "./BoardDetail.query";
import BoardDetailHTML from "./BoardDetail.pressenter";
import {
  IQueryFetchBoardArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../commons/types/generated/types";

export default function BoardDetailFunction() {
  const router = useRouter();

  const [callDeleteBoard] = useMutation(DELETE_BOARD);

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [contents, setContents] = useState("");
  const [display, setDisplay] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  const { data: dataComment, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const DisplayOnOff = (event: MouseEvent<HTMLButtonElement>) => {
    setDisplay((event.target as Element).id);

    if (isActive === false) {
      setIsActive(true);
    }

    if (isActive === true) {
      setIsActive(false);
    }
  };

  const MoveMainpage = () => {
    router.push("/board");
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const PositionHover = () => {
    if (isHover === false) {
      setIsHover(true);
    }

    if (isHover === true) {
      setIsHover(false);
    }
  };

  const deleteOneBoard = async () => {
    try {
      await callDeleteBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
      });
      router.push("/board");
    } catch (error) {
      if (error instanceof Error) {
        alert("error");
      }
    }
  };

  const updateBoard = async () => {
    try {
      router.push(`/board/${router.query.boardId}/edit`);
    } catch (error) {
      if (error instanceof Error) {
        alert("error");
      }
    }
  };

  return (
    <BoardDetailHTML
      data={data}
      dataComment={dataComment}
      isActive={isActive}
      isHover={isHover}
      isOpen={isOpen}
      display={display}
      fetchMore={fetchMore}
      MoveMainpage={MoveMainpage}
      deleteOneBoard={deleteOneBoard}
      updateBoard={updateBoard}
      DisplayOnOff={DisplayOnOff}
      PositionHover={PositionHover}
      handleCancel={handleCancel}
      showModal={showModal}
      writer={writer}
      pw={pw}
      contents={contents}
    />
  );
}
