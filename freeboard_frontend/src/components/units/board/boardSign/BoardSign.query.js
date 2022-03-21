import { gql } from '@apollo/client'
export const SIGN_BOARD = gql`
    mutation signBoard($createBoardInput: CreateBoardInput!){
            createBoard(createBoardInput: $createBoardInput){       
                _id
            }
        }
`