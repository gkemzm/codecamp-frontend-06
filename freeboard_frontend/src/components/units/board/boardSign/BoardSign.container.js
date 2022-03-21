import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import {useRouter} from 'next/router'
import BoardSignHTML from './BoardSign.pressenter';
import { SIGN_BOARD } from './BoardSign.query';


export default function BoardSignFunction() {
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

    const [callApi] =useMutation(SIGN_BOARD)
    
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

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        if(event.target.value !== ""){
            setWriterError("");
        }
    }

    const onChangePw = (event) => {
        setPw(event.target.value);
        if(event.target.value !== ""){
            setPwError("");
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if(event.target.value !== ""){
            setTitleError("");
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
        if(event.target.value !== ""){
            setContentsError("");
        }
    }

    const onChangeYouTube = (event) => {
        setYouTube(event.target.value);
    }

  return (
    <BoardSignHTML
    writerError = {writerError}
    pwError = {pwError}
    titleError = {titleError}
    contentsError = {contentsError}
    onChangeWriter = {onChangeWriter}
    onChangePw = {onChangePw}
    onChangeTitle = {onChangeTitle}
    onChangeContents = {onChangeContents}
    onChangeYouTube = {onChangeYouTube}
    submit = {submit}
    ></BoardSignHTML>
  )
}
