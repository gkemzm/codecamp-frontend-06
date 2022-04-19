// fetchUseditemsOfTheBest

import { gql } from "@apollo/client";

export const FETCH_USED_TIEM_OFTHEBEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
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
