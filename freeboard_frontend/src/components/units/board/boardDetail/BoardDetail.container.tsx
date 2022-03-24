
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import { useState } from 'react'
import { UP_DISLIKE, FETCH_BOARD, UP_LIKE, DELETE_BOARD} from './BoardDetail.query'
import BoardDetailHTML from './BoardDetail.pressenter'



export default function BoardDetailFunction(){
    
      
   const router = useRouter()

   const [callLikeApi] = useMutation(UP_LIKE)
   const [callDisLikeApi] = useMutation(UP_DISLIKE)
   const [callDeleteBoard] = useMutation(DELETE_BOARD)

   const { data } = useQuery(FETCH_BOARD, {
       variables:{
           boardId: router.query.boardId
        }
   })

   const MoveMainpage = () => {
      router.push("/board") 
   }

   const deleteOneBoard = async() => {
    
       try{
           const resultOneDelete = await callDeleteBoard({
               variables: {
                   boardId: String(router.query.boardId)
               }
           })
           router.push("/board") 
       }catch(error){
        if(error instanceof Error)alert(error.message)
       }
   }
   const updateBoard = async() => {
    try{
        router.push(`/board/${router.query.boardId}/edit`)
    }catch(error){
        if(error instanceof Error)alert(error.message)
    }
}
   const upLike = async() =>{
       try{
           const resultLike = await callLikeApi({
               variables: {
                   boardId: router.query.boardId
               }
           })
           // setLikeCountup(resultLike.data.callLikeApi)
           location.reload();
       }catch(error){
        if(error instanceof Error)alert(error.message)
       }
   }

   const upDisLike = async() =>{
       try{
           const resultDisLike = await callDisLikeApi({
               variables: {
                   boardId: router.query.boardId
               }
           })
           location.reload();
       }catch(error){
        if(error instanceof Error)alert(error.message)
       }
   }


   return(
       <BoardDetailHTML
       data = {data}
       upLike = {upLike}
       upDisLike = {upDisLike}
       MoveMainpage = {MoveMainpage}
       deleteOneBoard= {deleteOneBoard}
       updateBoard= {updateBoard}
       ></BoardDetailHTML>
   )
}