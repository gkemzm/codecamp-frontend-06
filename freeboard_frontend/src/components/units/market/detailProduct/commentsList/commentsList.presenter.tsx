import { ICommentListHTMLProps } from "./commentsList.types";
import * as S from "./commentsList.styles";
import "react-quill/dist/quill.snow.css";
import CommentDetailCotainer from "../commentsDetail/commentsD.container";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

export default function CommentListHTML(props: ICommentListHTMLProps) {
  const router = useRouter();
  const onLoadMore = () => {
    if (!props.commentListData) return; // 데이터가 없으면 요청하지말하라
    props.fetchMore({
      variables: {
        // boaddId: props.data?.fetchBoard._id,
        page:
          Math.ceil(props.commentListData?.fetchUseditemQuestions.length / 10) +
          1,
        // boadrId: props.dataComment._id,
        useditemId: router.query.marketId,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };
  return (
    <S.Wrapper>
      {/* <div style={{ height: "730px", width: "1220px", overflow: "auto" }}> */}
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        loader={<div className="loader" key={uuidv4()}></div>}
        useWindow={false}
      >
        {props.commentListData?.fetchUseditemQuestions.map((el: any) => (
          <div key={uuidv4()}>
            <CommentDetailCotainer data={el} />
          </div>
        )) || <div></div>}
      </InfiniteScroll>
      {/* </div> */}
    </S.Wrapper>
  );
}
