import { getDate } from "../../commons/date/utils";
import * as S from "./BoardList.styles";
import { BoardListUIProps } from "./BoardList.types";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";

export default function BoardListUI(props: BoardListUIProps) {
  const router = useRouter();
  const onLoadMore = () => {
    if (!props.data) return; // 데이터가 없으면 요청하지말하라

    props.fetchMore({
      variables: {
        // boaddId: props.data?.fetchBoard._id,
        page: Math.ceil(props.data?.fetchBoards.length / 10) + 1,
        // boadrId: props.dataComment._id,
        boardId: router.query.boardId,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.TableTop />
      <S.Row2>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row2>
      <div style={{ height: "730px", width: "1220px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          loader={<div className="loader" key={0}></div>}
          useWindow={false}
        >
          {props.data?.fetchBoards.map((el: any) => (
            <S.Row key={el._id} id={el._id}>
              <S.ColumnTitle
                onClick={props.onClickMoveToBoardDetail}
                id={el._id}
              >
                {el.title}
              </S.ColumnTitle>
              <S.ColumnBasic id={el._id}>{getDate(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          ))}
        </InfiniteScroll>
      </div>
      <S.TableBottom />
    </S.Wrapper>
  );
}
