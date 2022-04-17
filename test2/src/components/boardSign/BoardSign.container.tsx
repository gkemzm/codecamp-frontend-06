import { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardSignHTML from "./BoardSign.pressenter";
import { SIGN_BOARD, UPDATE_BOARD } from "./BoardSign.query";
import { BoardSignFunctionProps, IUpdateBoardInput } from "./BoardSing.types";
import { Modal } from "antd";
import { gIsChanged } from "../../commons/store/index";
import { useRecoilState } from "recoil";

export default function BoardSignFunction(props: BoardSignFunctionProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writerError, setWriterError] = useState("");
  const [pwError, setPwError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [isChanged, setIsChanged] = useRecoilState(gIsChanged);

  // const [imageUrl, setImageUrl] = useState(["", "", ""]);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // const [isOpen, setIsOpen] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [callApi] = useMutation(SIGN_BOARD);
  const [callUpdateBoard] = useMutation(UPDATE_BOARD);

  // const onToggleModal = () => {
  //   setIsOpen((prev) => !prev);
  // };
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

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

    if (!title || !contents) {
      alert("error");
      return;
    }

    try {
      const result = await callApi({
        variables: {
          createBoardInput: {
            writer: writer,
            password: pw,
            title: title,
            contents: contents,
            images: fileUrls,
          },
        },
      });
      if (writer !== "" && pw !== "" && title !== "" && contents !== "") {
        // setIsOpen((prev) => !prev);
        alert("게시물 등록이 성공했습니다.");
      }
      console.log(result);
      router.push(`/board/${result.data.createBoard._id}`);
      setIsChanged(false);
    } catch (error) {
      if (error instanceof Error) {
        // {alert(error.message)};
        alert(error.message);
      }
    }
  };
  const updateBoard = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (!title && !contents && !isChangedFiles) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!pw) {
      // alert("비밀번호를 입력해주세요.");
      alert("error");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {
      images: [],
    };
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      await callUpdateBoard({
        variables: {
          updateBoardInput: {
            title: title,
            contents: contents,
            images: fileUrls,
          },
          password: pw,
          boardId: router.query.boardId,
        },
      });
      // alert("게시물 수정에 성공하였습니다!");
      alert("success");
      router.push(`/board/${router.query.boardId}`);
      // console.log(callUpdateBoard);
    } catch (error) {
      if (error instanceof Error) {
        alert("수정 사항이 없습니다.");
      }
    }
  };
  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
    if (event.target.value !== "") {
      setPwError("");
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const MoveMain = () => {
    router.push(`/board`);
    setIsChanged(false);
  };

  const MoveDetailPage = () => {
    router.push(`/board/${router.query.boardId}`);
    setIsChanged(true);
  };

  return (
    <BoardSignHTML
      isActive={isActive}
      isEdit={props.isEdit}
      isOpen={isOpen}
      writerError={writerError}
      pwError={pwError}
      fileUrls={fileUrls}
      titleError={titleError}
      contentsError={contentsError}
      MoveMain={MoveMain}
      MoveDetailPage={MoveDetailPage}
      onChangeWriter={onChangeWriter}
      onChangePw={onChangePw}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      updateBoard={updateBoard}
      onToggleModal={onToggleModal}
      submit={submit}
      data={props.data}
      onChangeFileUrls={onChangeFileUrls}
    ></BoardSignHTML>
  );
}
