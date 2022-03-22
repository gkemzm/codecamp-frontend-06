import { useRouter } from 'next/router'
import { useQuery,gql } from '@apollo/client'
//게시글 상세
const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number :$number){
            number
            writer
            title
            contents
        }
    }
`
export default function StaticRoutedPage(){
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables:{number: 83013}
    })

    const MoveMainpage = () => {
       router.push("/05-03-static-routing-board") //앞의 localhost:3000은 생략
    }
    
    console.log(data)
    return(
        <div>
            <div>{data?.fetchBoard.number}번 게시글에 오신것을 환영합니다.</div>
            <div>작성지: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}번 게시글에 오신 것을 활영합니다.</div>
            {<button onClick={MoveMainpage}>돌아가기</button>}
        </div>
    )
}