import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchboard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "626752ffa8255b002988ca3f" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickIptimisticUI = () => {
    likeBoard({
      variables: { boardId: "626752ffa8255b002988ca3f" },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "626752ffa8255b002988ca3f" },
          data: {
            fetchBoard: {
              _id: "626752ffa8255b002988ca3f",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>
        <div>현재카운트(좋아요):{data?.fetchBoard.likeCount} </div>
        <button onClick={onClickIptimisticUI}>좋아요 올리기!!</button>
      </div>
    </>
  );
}
