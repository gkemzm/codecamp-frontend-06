// fetchUseditemsOfTheBest

import { gql } from "@apollo/client";

export const FETCH_USED_TIEM_OFTHEBEST = gql`
  query fetchUseditemsOfTheBest(
    $isSoldout: Boolean
    $search: String
    $page: Int
  ) {
    fetchUseditemsOfTheBest(
      isSoldout: $isSoldout
      search: $search
      page: $page
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;
