// 여기는 컨테이너 컴포넌트
import BoardWriteUI from "./BoardWrite.presenter"
import { useState, ChangeEvent } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from "next/router"
import { IBoardWriteProps, IMyVariables} from './BoardWrite.types';


export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    const [mywriter, setMyWriter] = useState("")
    const [mytitle, setMyTitle] = useState("")
    const [mycontents, setMyContents] = useState("")

    const [data, setData] =useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickUpdate = async() =>{

        const myVariables: IMyVariables = {number: Number(router.query.mynumber)}

        if(mywriter !== "") myVariables.writer = mywriter //if문 한줄일경우 중괄호 생략가능
        if(mytitle !== "") myVariables.title = mytitle
        if(mycontents !== "") myVariables.contents = mycontents
        
       await updateBoard({
            variables : myVariables
       })
       router.push(`/09-01-boards/${router.query.mynumber}`)
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
        router.push(`/09-01-boards/${result.data.createBoard.number}`)
        alert("게시글 등록에 성공하였습니다.!!!")
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) =>{
        setMyWriter(event.target.value)

        if(event.target.value !== "" && mytitle !== "" && mycontents !== ""){
            setIsActive(true)
        } else(
            setIsActive(false)
        )
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>{
        setMyTitle(event.target.value)

        if(mywriter !== "" && event.target.value !== "" && mycontents !== ""){
            setIsActive(true)
        } else(
            setIsActive(false)
        )
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) =>{
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
        data={props.data}
        onClickUpdate={onClickUpdate}/>
         //props(속성)들 aaa가 키 ={}가 value
    )
}



