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
    const [data, setData] =useState("")
    const [callApi] =useMutation(CREATE_BOARD)

    const callGraphqlApi = async() => {
        //const result = await axios.get("https://koreanjson.com/posts/1") //rest-api 방식
        const result = await callApi({
            variables:{writer:"박범수", title:"제목", contents:"123"}// 위쪽createBoard에 전달해서 실행
        }) //graphql-api방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    }

    return(
        <>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </>
    )
}