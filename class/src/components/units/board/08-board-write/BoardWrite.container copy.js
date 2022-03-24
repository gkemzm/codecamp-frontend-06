// 여기는 컨테이너 컴포넌트
import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from "next/router"


export default function BoardWrite(props){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    const [mywriter, setMyWriter] = useState("")
    const [mytitle, setMyTitle] = useState("")
    const [mycontents, setMyContents] = useState("")

    const [data, setData] =useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickUpdate = async() =>{
       const result = await updateBoard({
            variables:{ number: Number(router.query.mynumber),
                writer: mywriter, 
                title: mytitle, 
                contents: mycontents }
       })
       router.push(`/08-05-boards/${router.query.mynumber}`)
        alert("게시글 수정에 성공하였습니다.!!!")
    }

    const callGraphqlApi = async() => {
        //const result = await axios.get("https://koreanjson.com/posts/1") //rest-api 방식
        const result = await callApi({
            variables:{
                writer: mywriter, 
                title: mytitle, 
                contents: mycontents
            }// 위쪽createBoard에 전달해서 실행
        }) //graphql-api방식
        // console.log(result)
        // console.log(result.data.createBoard.message)
        // setData(result.data.createBoard.message)
        router.push(`/08-05-boards/${result.data.createBoard.number}`)
        alert("게시글 등록에 성공하였습니다.!!!")
    }

    const onChangeWriter = (event) =>{
        setMyWriter(event.target.value)

        if(event.target.value !== "" && mytitle !== "" && mycontents !== ""){
            setIsActive(true)
        } else(
            setIsActive(false)
        )
    }

    const onChangeTitle = (event) =>{
        setMyTitle(event.target.value)

        if(mywriter !== "" && event.target.value !== "" && mycontents !== ""){
            setIsActive(true)
        } else(
            setIsActive(false)
        )
    }

    const onChangeContents = (event) =>{
        setMyContents(event.target.value)

        if(mywriter !== "" && mytitle !== "" && event.target.value !== ""){
            setIsActive(true)
        } else(
            setIsActive(false)
        )
    }
    
    return(
        <BoardWriteUI 
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle} 
        onChangeContents={onChangeContents} 
        callGraphqlApi={callGraphqlApi}
        isActive={isActive}
        isEdit={props.isEdit}
        onClickUpdate={onClickUpdate}>
        </BoardWriteUI> //props(속성)들 aaa가 키 ={}가 value
    )
}



