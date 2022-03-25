//import  axios from 'axios'
import  {useState} from 'react'
import  {useMutation, gql} from '@apollo/client'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types';

// 묶음으로 mymutation에서 한번 요청한 정보를 createProduct(), fetchBoards ... 여러군대에 나눠줄 수 있다.
//TData
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
    let aaa: number = 3
    const [mywriter, setMyWriter] = useState<string>("")
    const [mytitle, setMyTitle] = useState("")
    const [mycontents, setMyContents] = useState("")

    const [data, setData] =useState("")
    const [callApi] =useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
// 하나만 골라올 때 <Pick<필요한 타입, '선택해서 가져올거'>, 변수>
// Pick은 유틸리티 타입
    const callGraphqlApi = async() => {
        //const result = await axios.get("https://koreanjson.com/posts/1") //rest-api 방식
        const result = await callApi({
            variables:{
                writer: mywriter, 
                title: mytitle, 
                contents: mycontents
            }// 위쪽createBoard에 전달해서 실행
        }) //graphql-api방식

        result.data?.createBoard?.message

        console.log(result)
        console.log(result.data?.createBoard?.message)
        if(result.data?.createBoard?.message){
            setData(result.data?.createBoard?.message)
        }
        // setData(result.data?.createBoard?.message || "") 이것도가능
        // if(result.data?.createBoard?.message) setData(result.data?.createBoard?.message)  //한줄시 {} 생략가능
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