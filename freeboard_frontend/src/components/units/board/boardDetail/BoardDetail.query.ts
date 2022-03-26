import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchboard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
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
// export const FETCH_BOARD_COMMENT = gql`
//   query fetchBoardComment($page: Int, $boardId: ID!) {
//     fetchBoard(page: $page, boardId: $boardId) {
//       _id
//       writer
//       contents
//       rating
//       createdAt
//       updatedAt
//     }
//   }
// `;
export const FETCH_BOARD_COMMENT = gql`
  query fetchBoardcomments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      createdAt
      updatedAt
      rating
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const UP_LIKE = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const UP_DISLIKE = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
    }
  }
`;