import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { useState, MouseEvent, ChangeEvent } from "react";
import {
  UP_DISLIKE,
  FETCH_BOARD,
  UP_LIKE,
  DELETE_BOARD,
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
} from "./BoardDetail.query";
import BoardDetailHTML from "./BoardDetail.pressenter";

export default function BoardDetailFunction() {
  const router = useRouter();

  const [callLikeApi] = useMutation(UP_LIKE);
  const [callDisLikeApi] = useMutation(UP_DISLIKE);
  const [callDeleteBoard] = useMutation(DELETE_BOARD);
  const [createComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  // const [rating, setRating] = useState();
  const [contents, setContents] = useState("");

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const { data: dataComment } = useQuery(FETCH_BOARD_COMMENT, {
    variables: {
      // page: Number(router.query.page),
      boardId: router.query.boardId,
    },
  });

  // Number(router.query.page)
  const MoveMainpage = () => {
    router.push("/board");
  };

  const CreateCommentBoard = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await createComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: pw,
            contents: String(contents),
            rating: 5,
          },
          boardId: router.query.boardId,
        },
      });
      console.log(data);
      console.log(dataComment);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
      if (error instanceof Error) alert(error.message);
    }
  };

  const updateBoard = async () => {
    try {
      router.push(`/board/${router.query.boardId}/edit`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const upLike = async () => {
    try {
      await callLikeApi({
        variables: {
          boardId: router.query.boardId,
        },
      });
      // setLikeCountup(resultLike.data.callLikeApi)
      location.reload();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const upDisLike = async () => {
    try {
      await callDisLikeApi({
        variables: {
          boardId: router.query.boardId,
        },
      });
      location.reload();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeCommentWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeCommentPw = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };
  const onChangeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  return (
    <BoardDetailHTML
      data={data}
      dataComment={dataComment}
      upLike={upLike}
      upDisLike={upDisLike}
      MoveMainpage={MoveMainpage}
      deleteOneBoard={deleteOneBoard}
      CreateCommentBoard={CreateCommentBoard}
      updateBoard={updateBoard}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPw={onChangeCommentPw}
      onChangeCommentContents={onChangeCommentContents}
    />
  );
}
