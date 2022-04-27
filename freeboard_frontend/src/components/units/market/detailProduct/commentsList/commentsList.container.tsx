// import { useForm } from "react-hook-form";
import CommentListHTML from "./commentsList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./commentsList.query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function CommentListContainer() {
  const router = useRouter();
  const { data: commentListData, fetchMore } = useQuery(
    FETCH_USED_ITEM_QUESTIONS,
    {
      variables: {
        useditemId: String(router.query.marketId),
      },
    }
  );
  console.log(commentListData);
  return (
    <CommentListHTML commentListData={commentListData} fetchMore={fetchMore} />
  );
}
