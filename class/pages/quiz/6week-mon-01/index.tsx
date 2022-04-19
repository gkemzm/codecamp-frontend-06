import { useMutation, useQuery } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { DELETE_BOARD, FETCH_BOARDS, CREATE_BOARD } from "./sixMon.query";
import * as S from "./sixMon.styles";

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }, refetch) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev, refetch];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
      update(cache, { data }, refetch) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev, refetch];
            },
          },
        });
      },
    });
  };
  const onChangeWriter = (event: ChangeEvent<HTMLDivElement>) => {
    setWriter((event.target as any).value);
  };
  const onChangePassWord = (event: ChangeEvent<HTMLDivElement>) => {
    setPassword((event.target as any).value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLDivElement>) => {
    setTitle((event.target as any).value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLDivElement>) => {
    setContents((event.target as any).value);
  };
  return (
    <S.BasicRow>
      <S.BasicColumn>
        <>게시글 작성</>
        <br />
        <br />
        작성자
        <S.BasicInput type="text" onChange={onChangeWriter} />
        비밀번호
        <S.BasicInput type="text" onChange={onChangePassWord} />
        제목
        <S.BasicInput type="text" onChange={onChangeTitle} />
        내용
        <S.BasicInput type="text" onChange={onChangeContents} />
        <S.BasicButton onClick={onClickSubmit}>등록하기</S.BasicButton>
      </S.BasicColumn>
      <S.BasicColumn>
        <>게시글 목록</>
        {data?.fetchBoards.map((el: any) => (
          <S.BoardTable key={el._id}>
            <S.BoardTableElement>{el.writer}</S.BoardTableElement>
            <S.BoardTableElement>{el.title}</S.BoardTableElement>
            <S.BoardTableElement>{el.contents}</S.BoardTableElement>
            <S.BasicButton onClick={onClickDelete(el._id)}>
              삭제하기
            </S.BasicButton>
          </S.BoardTable>
        ))}
      </S.BasicColumn>
    </S.BasicRow>
  );
}
