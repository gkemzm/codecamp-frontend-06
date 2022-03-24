import { gql } from '@apollo/client'
export const SIGN_BOARD = gql`
    mutation signBoard($createBoardInput: CreateBoardInput!){
            createBoard(createBoardInput: $createBoardInput){       
                _id
            }
        }
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!,){
        updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId){
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
`