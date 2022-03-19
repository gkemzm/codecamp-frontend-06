import {Wrapper, Title, Top, Text, TopArea, TopInput, MainTitle, 
  TitleInput, Middle, MiddleInput, PostNum, PostInput, PostBtn, Address,
  Bottom, YouTube, PostArea, ImgBtn, SelectInput, SelectArea, SelectText, 
  RegistBtn, Error} from '../../styles/emotion'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const SIGN_BOARD = gql`
    mutation signBoard($createBoardInput: CreateBoardInput!){
            createBoard(createBoardInput: $createBoardInput){       
                _id
                writer
                title
                contents
                youtubeUrl
                likeCount
                dislikeCount
                images
                boardAddress{
                _id
                zipcode
                address
                addressDetail
                createdAt
                updatedAt
                deletedAt
                }
                user{
                _id
                email
                name
                picture
                userPoint{
                    _id
                    amount
                    createdAt
                    updatedAt
                    deletedAt
                }
                createdAt
                updatedAt
                deletedAt
                }
                createdAt
                updatedAt
                deletedAt
            }
        }
`
export default function BoardSignPage() {
    const [writer, setWriter] = useState("");
    const [pw, setPw] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

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

        // if (writer !== "" && pw !== "" && title !== "" && contents !== ""){
        //     alert("게시물 등록이 성공했습니다.")
        // }
        try{
            const result = await callApi({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: pw,
                        title: title,
                        contents: contents
                    }
                }
            })
            console.log(result)
            if (writer !== "" && pw !== "" && title !== "" && contents !== ""){
                alert("게시물 등록이 성공했습니다.")
            }
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

  return (
    <Wrapper>
        <Title>
            게시물 등록
        </Title>

        <Top>
            <TopArea>
                <Text>작성자</Text>
                <TopInput  placeholder= '  이름을 적어주세요.' onChange={onChangeWriter}></TopInput>
                <Error>{writerError}</Error>
            </TopArea>
            <TopArea>
                <Text>비밀번호</Text> 
                <TopInput  placeholder= '  비밀번호를 입력해 주세요.' type={"password"} onChange={onChangePw}></TopInput>
                <Error>{pwError}</Error>
            </TopArea>
        </Top>

        <MainTitle>
            <Text>제목</Text>
            <TitleInput  placeholder= '  제목을 작성해주세요.' onChange={onChangeTitle}></TitleInput>
            <Error>{titleError}</Error>
        </MainTitle>

        <Middle>
            <Text>내용</Text>
            <MiddleInput   placeholder= '  내용을 작성해주세요.' onChange={onChangeContents}></MiddleInput>
            <Error>{contentsError}</Error>
        </Middle>

        <Middle>
            <Text>주소</Text>
            <PostNum>
                <PostInput   placeholder= '         07250'></PostInput>
                <PostBtn>우편번호 검색</PostBtn>
            </PostNum>
            <Address></Address>
            <Address></Address>
        </Middle>

        <Bottom>
            <Text>유튜브</Text>
            <YouTube  placeholder= '  링크를 복사해주세요.'></YouTube>
        </Bottom>

        <Bottom>
            <Text>사진첨부</Text>
            <PostArea>
              <ImgBtn>+<br></br>Upload</ImgBtn>
              <ImgBtn>+<br></br>Upload</ImgBtn>
              <ImgBtn>+<br></br>Upload</ImgBtn>
            </PostArea>
        </Bottom>

        <Bottom>
            <Text>메인설정</Text>
            <SelectArea>
                <SelectInput type = "radio"></SelectInput><SelectText>유튜브</SelectText>
                <SelectInput type = "radio"></SelectInput><SelectText>사진</SelectText>
            </SelectArea>
        </Bottom>

  
            <RegistBtn onClick={submit}>등록하기</RegistBtn>

    </Wrapper>
  )
}
