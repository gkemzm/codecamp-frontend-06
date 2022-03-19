//import  axios from 'axios'
import  { useState } from 'react'
import  { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

// 묶음으로 mymutation에서 한번 요청한 정보를 createProduct(), fetchBoards ... 여러군대에 나눠줄 수 있다.
const CREATE_BOARD = gql`
    mutation mymutation($writer: String, $title: String, $contents: String) {
        createBoard(writer:$writer, title:$title, contents:$contents){
            _id
            number
            message
        }
    }
` 

export default function GraphqlMutationPage(){
    const router = useRouter()

    const [mywriter, setMyWriter] = useState("")
    const [mytitle, setMyTitle] = useState("")
    const [mycontents, setMyContents] = useState("")

    const [callApi] =useMutation(CREATE_BOARD)

    const callGraphqlApi = async() => {
        
        try{ 
            const result = await callApi({
                variables:{
                    writer: mywriter, 
                    title: mytitle, 
                    contents: mycontents
                }// 위쪽createBoard에 전달해서 실행
            }) //graphql-api방식
            console.log(result)
            console.log(result.data.createBoard.message)
            alert("게시글 등록에 성공했어요!")
            alert("상세 페이지로 이동해 볼까요?!")
            router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)
            //문자열 + 이동할 게시글 번호

        } catch(error){
            alert(error.message)
        }
        //finally {

        // }
        //finally 는 성공 실패여부(try/error)에 상관없이 무조건 실행됨
        
    }

    const onChangeWriter = (event) =>{
        setMyWriter(event.target.value)
    }

    const onChangeTitle = (event) =>{
        setMyTitle(event.target.value)
    }

    const onChangeContents = (event) =>{
        setMyContents(event.target.value)
    }

    return(
        <>
            작성자:<input type="text" onChange={onChangeWriter}/><br />
            제목:<input type="text" onChange={onChangeTitle}/><br />
            내용:<input type="text" onChange={onChangeContents}/><br />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </>
    )
}