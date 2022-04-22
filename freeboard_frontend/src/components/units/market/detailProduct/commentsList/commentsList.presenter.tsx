import { ICommentListHTMLProps } from "./commentsList.types";
import * as S from "./commentsList.styles";
import "react-quill/dist/quill.snow.css";
import CommentDetailCotainer from "../commentsDetail/commentsD.container";
// import InfiniteScroll from "react-infinite-scroller";
// import { useRouter } from 'next/router';

export default function CommentListHTML(props: ICommentListHTMLProps) {
  // const onLoadMore = () => {
  //   if (!props.commentListData) return; // 데이터가 없으면 요청하지말하라
  //   const router = useRouter()
  //   props.fetchMore({
  //     variables: {
  //       // boaddId: props.data?.fetchBoard._id,
  //       page: Math.ceil(props.commentListData?.fetchUseditems.length / 10) + 1,
  //       // boadrId: props.dataComment._id,
  //       useditemId: router.query.boardId,
  //     },
  //     updateQuery: (prev: any, { fetchMoreResult }: any) => {
  //       if (!fetchMoreResult.fetchUseditems)
  //         return { fetchUseditems: [...prev.fetchUseditems] };
  //       return {
  //         fetchUseditems: [
  //           ...prev.fetchUseditems,
  //           ...fetchMoreResult.fetchUseditems,
  //         ],
  //       };
  //     },
  //   });
  // };
  return (
    <S.Wrapper>
      {/* <div style={{ height: "730px", width: "1220px", overflow: "auto" }}>
      <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          loader={<div className="loader" key={0}></div>}
          useWindow={false}
        > */}
      {props.commentListData?.fetchUseditemQuestions.map((el: any) => (
        <>
          <CommentDetailCotainer data={el} />
        </>
      ))}
      {/* </InfiniteScroll>
      </div> */}
    </S.Wrapper>
  );
}
