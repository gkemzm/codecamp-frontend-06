import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactionsOfLoading($search: String) {
    fetchPointTransactionsOfLoading(search: $search) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      balance
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      createdAt
    }
  }
`;
