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

export const FETCH_POINT_TRANSACTIONS_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String) {
    fetchPointTransactionsOfBuying(search: $search) {
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

export const FETCH_POINT_TRANSACTIONS_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String) {
    fetchPointTransactionsOfSelling(search: $search) {
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
