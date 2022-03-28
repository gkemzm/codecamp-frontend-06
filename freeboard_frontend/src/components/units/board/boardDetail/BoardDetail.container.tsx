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
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardDetail.query";
import BoardDetailHTML from "./BoardDetail.pressenter";

export default function BoardDetailFunction() {
  const router = useRouter();

  const [callLikeApi] = useMutation(UP_LIKE);
  const [callDisLikeApi] = useMutation(UP_DISLIKE);
  const [callDeleteBoard] = useMutation(DELETE_BOARD);
  const [createComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [rating, setRating] = useState("");
  const [contents, setContents] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

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

  const DisplayOnOff = (event: MouseEvent<HTMLButtonElement>) => {
    if (isActive === false) {
      setIsActive(true);
    }

    if (isActive === true) {
      setIsActive(false);
    }
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
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      // setLikeCountup(resultLike.data.callLikeApi)
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
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const CreateCommentBoard = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await createComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: pw,
            contents: String(contents),
            rating: Number(rating),
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      console.log(dataComment);
      setWriter("");
      setPw("");
      setContents("");
      // eslint-disable-next-line no-unused-expressions
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const UpdateCommentBoard = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await updateComment({
        variables: {
          updateBoardCommentInput: {
            contents: contents,
            rating: Number(rating),
          },
          password: pw,
          boardCommentId: String((event.target as HTMLButtonElement).id),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      console.log(dataComment);
      // eslint-disable-next-line no-unused-expressions
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const deleteOneComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteComment({
        variables: {
          password: pw,
          boardCommentId: String((event.target as HTMLButtonElement).id),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
      });
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

  const onChangeCommentRating = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };
  const handleChange = (value: any) => {
    setRating(value);
  };
  return (
    <BoardDetailHTML
      data={data}
      dataComment={dataComment}
      isActive={isActive}
      isHover={isHover}
      upLike={upLike}
      upDisLike={upDisLike}
      MoveMainpage={MoveMainpage}
      deleteOneBoard={deleteOneBoard}
      CreateCommentBoard={CreateCommentBoard}
      updateBoard={updateBoard}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPw={onChangeCommentPw}
      onChangeCommentContents={onChangeCommentContents}
      deleteOneComment={deleteOneComment}
      UpdateCommentBoard={UpdateCommentBoard}
      onChangeCommentRating={onChangeCommentRating}
      DisplayOnOff={DisplayOnOff}
      PositionHover={PositionHover}
      handleChange={handleChange}
      writer={writer}
      pw={pw}
      rating={rating}
      contents={contents}
    />
  );
}
