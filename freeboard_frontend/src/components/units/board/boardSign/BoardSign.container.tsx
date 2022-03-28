import { useState, ChangeEvent, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardSignHTML from "./BoardSign.pressenter";
import { SIGN_BOARD, UPDATE_BOARD } from "./BoardSign.query";
import { BoardSignFunctionProps, IUpdateBoardInput } from "./BoardSing.types";

export default function BoardSignFunction(props: BoardSignFunctionProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youTube, setYouTube] = useState("");
  // const [address, setAddress] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");

  const [writerError, setWriterError] = useState("");
  const [pwError, setPwError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [callApi] = useMutation(SIGN_BOARD);
  const [callUpdateBoard] = useMutation(UPDATE_BOARD);

  const submit = async (event: MouseEvent<HTMLButtonElement>) => {
    if (writer === "") {
      setWriterError("작성자를 입력하세요");
    }
    if (pw === "") {
      setPwError("비밀번호를 입력하세요");
    }
    if (title === "") {
      setTitleError("제목을 입력하세요");
    }
    if (contents === "") {
      setContentsError("내용을 입력하세요");
    }
    try {
      const result = await callApi({
        variables: {
          createBoardInput: {
            writer: writer,
            password: pw,
            title: title,
            contents: contents,
            youtubeUrl: youTube,
            // BoardAddress: {
            //   address: address,
            //   addressDetail: addressDetail,
            // },
          },
        },
      });
      console.log(result);
      if (writer !== "" && pw !== "" && title !== "" && contents !== "") {
        alert("게시물 등록이 성공했습니다.");
      }
      router.push(`/board/${result.data.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const updateBoard = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!pw) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      await callUpdateBoard({
        variables: {
          updateBoardInput: {
            title: title,
            contents: contents,
          },
          password: pw,
          boardId: router.query.boardId,
        },
      });
      alert("게시물 수정에 성공하였습니다!");
      router.push(`/board/${router.query.boardId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    // if (event.target.value !== "" && pw !== "" && title !== "" && contents !== "")
    if (event.target.value && pw && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
    if (event.target.value !== "") {
      setPwError("");
    }

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (writer && pw && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (writer && pw && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYouTube = (event: ChangeEvent<HTMLInputElement>) => {
    setYouTube(event.target.value);
  };

  // const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAddress(event.target.value);
  // };

  // const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAddressDetail(event.target.value);
  // };

  return (
    <BoardSignHTML
      isActive={isActive}
      isEdit={props.isEdit}
      writerError={writerError}
      pwError={pwError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePw={onChangePw}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYouTube={onChangeYouTube}
      // onChangeAddress={onChangeAddress}
      // onChangeAddressDetail={onChangeAddressDetail}
      updateBoard={updateBoard}
      submit={submit}
      data={props.data}
    ></BoardSignHTML>
  );
}
