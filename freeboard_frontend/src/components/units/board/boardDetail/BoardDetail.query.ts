import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchboard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      contents
      title
      likeCount
      dislikeCount
      youtubeUrl
      createdAt
      images
      boardAddress {
        address
        addressDetail
        zipcode
      }
    }
  }
`;
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoard($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
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
      rating
    }
  }
`;
export const FETCH_BOARD_COMMENT = gql`
  query fetchBoardcomments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
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

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
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
