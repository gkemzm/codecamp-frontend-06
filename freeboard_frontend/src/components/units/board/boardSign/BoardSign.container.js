import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import {useRouter} from 'next/router'
import BoardSignHTML from './BoardSign.pressenter';
import { SIGN_BOARD, UPDATE_BOARD } from './BoardSign.query';


export default function BoardSignFunction(props) {
    const router = useRouter()

    const [writer, setWriter] = useState("");
    const [pw, setPw] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [youTube, setYouTube] = useState("");

    const [writerError, setWriterError] = useState("")
    const [pwError, setPwError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentsError, setContentsError] = useState("")

    const [isActive, setIsActive] = useState(false);
    const [callApi] =useMutation(SIGN_BOARD)
    const [callUpdateBoard] =useMutation(UPDATE_BOARD)
    
    const submit = async(event) => {
        if (writer === ""){
            setWriterError("작성자를 입력하세요")
        }
        if (pw === ""){
            setPwError("비밀번호를 입력하세요")
        }
        if (title === ""){
            setTitleError("제목을 입력하세요")
        }
        if (contents === ""){
            setContentsError("내용을 입력하세요")
        }
        try{
            const result = await callApi({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: pw,
                        title: title,
                        contents: contents,
                        youtubeUrl: youTube
                    }
                }
            })
            console.log(result)
            if (writer !== "" && pw !== "" && title !== "" && contents !== ""){
                alert("게시물 등록이 성공했습니다.")
            }
            router.push(`/board/${result.data.createBoard._id}`)
        }catch(error){
            alert(error.message)
        }
    }
    const updateBoard = async() => {
        try{
            const resultUpdate = await callUpdateBoard({
                variables: {
                    updateBoardInput: {
                        title : title,
                        contents : contents
                    }, password : pw,
                    boardId: router.query.boardId
                }
            })
            alert("게시물 수정에 성공하였습니다!");
            router.push(`/board/${router.query.boardId}`)
        }catch(error){
            alert(error.message)
        }
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        if(event.target.value !== ""){
            setWriterError("");
        }
        // if (event.target.value !== "" && pw !== "" && title !== "" && contents !== "")    
        if (event.target.value  && pw && title && contents) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
    }

    const onChangePw = (event) => {
        setPw(event.target.value);
        if(event.target.value !== ""){
            setPwError("");
        }

        if (writer && event.target.value && title && contents) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if(event.target.value !== ""){
            setTitleError("");
        }

        if (writer && pw && event.target.value && contents) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
        if(event.target.value !== ""){
            setContentsError("");
        }

        if (writer && pw && title && event.target.value) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
    }

    const onChangeYouTube = (event) => {
        setYouTube(event.target.value);
    }

  return (
    <BoardSignHTML
    isActive={isActive}
    isEdit={props.isEdit}
    writerError = {writerError}
    pwError = {pwError}
    titleError = {titleError}
    contentsError = {contentsError}
    onChangeWriter = {onChangeWriter}
    onChangePw = {onChangePw}
    onChangeTitle = {onChangeTitle}
    onChangeContents = {onChangeContents}
    onChangeYouTube = {onChangeYouTube}
    updateBoard={updateBoard}
    submit = {submit}
    ></BoardSignHTML>
  )
}
