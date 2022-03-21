
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import { useState } from 'react'
import { UP_DISLIKE, FETCH_BOARD, UP_LIKE } from './BoardDetail.query'
import BoardDetailHTML from './BoardDetail.pressenter'



export default function BoardDetailFunction(){
   const router = useRouter()

   const [callLikeApi] = useMutation(UP_LIKE)
   const [callDisLikeApi] = useMutation(UP_DISLIKE)

   const [likeCountup, setLikeCountup] = useState("");
   const [dislikeCountup, setDisLikeCountup] = useState("");

   const { data } = useQuery(FETCH_BOARD, {
       variables:{boardId: router.query.boardId}
   })

   const MoveMainpage = () => {
      router.push("/board") 
   }
   
   const upLike = async(event) =>{
       try{
           const resultLike = await callLikeApi({
               variables: {
                   boardId: router.query.boardId
               }
           })
           // setLikeCountup(resultLike.data.callLikeApi)
           location.reload();
       }catch(error){
           alert(error.message)
       }
   }

   const upDisLike = async(event) =>{
       try{
           const resultDisLike = await callDisLikeApi({
               variables: {
                   boardId: router.query.boardId
               }
           })
           location.reload();
       }catch(error){
           alert(error.message)
       }
   }


   return(
       <BoardDetailHTML
       data = {data}
       upLike = {upLike}
       upDisLike = {upDisLike}
       MoveMainpage = {MoveMainpage}
       ></BoardDetailHTML>
   )
}