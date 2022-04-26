import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      buyer {
        _id
        email
        name
        createdAt
        updatedAt
      }
      seller {
        _id
        email
        name
        createdAt
        updatedAt
      }
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;
export const DELETE_USEDITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
export const CREATE_POINT_BUYING_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

export const TOGGLE_USEDITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
