import { gql } from "@apollo/client";

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      images
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
      createdAt
      updatedAt
    }
  }
`;
