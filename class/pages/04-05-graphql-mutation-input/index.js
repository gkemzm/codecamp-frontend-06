//import  axios from 'axios'
import  {useState} from 'react'
import  {useMutation, gql} from '@apollo/client'

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
    const [mywriter, setMyWriter] = useState("")
    const [mytitle, setMyTitle] = useState("")
    const [mycontents, setMyContents] = useState("")

    const [data, setData] =useState("")
    const [callApi] =useMutation(CREATE_BOARD)

    const callGraphqlApi = async() => {
        //const result = await axios.get("https://koreanjson.com/posts/1") //rest-api 방식
        const result = await callApi({
            variables:{
                writer: mywriter, 
                title: mytitle, 
                contents: mycontents
            }// 위쪽createBoard에 전달해서 실행
        }) //graphql-api방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
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
            {/* <div>{data}</div> */}
            작성자:<input type="text" onChange={onChangeWriter}/><br />
            제목:<input type="text" onChange={onChangeTitle}/><br />
            내용:<input type="text" onChange={onChangeContents}/><br />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </>
    )
}