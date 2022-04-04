import BoardSignFunction from "../../../../src/components/units/board/boardSign/BoardSign.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchboard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      likeCount
      dislikeCount
      youtubeUrl
      createdAt
    }
  }
`;
export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  return <BoardSignFunction isEdit={true} data={data} />;
}
