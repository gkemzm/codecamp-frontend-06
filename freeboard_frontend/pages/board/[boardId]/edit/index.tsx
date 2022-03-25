import BoardSignFunction from "../../../../src/components/units/board/boardSign/BoardSign.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardSignFunction isEdit={true} data={data} />;
}
