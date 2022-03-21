import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
    query fetchboard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
            likeCount
            dislikeCount
            youtubeUrl
            createdAt
        }
    }
`

export const UP_LIKE = gql`
    mutation likeBoard($boardId: ID!){
        likeBoard(boardId: $boardId)
    }
`

export const UP_DISLIKE = gql`
    mutation dislikeBoard($boardId: ID!){
        dislikeBoard(boardId: $boardId)
    }
`