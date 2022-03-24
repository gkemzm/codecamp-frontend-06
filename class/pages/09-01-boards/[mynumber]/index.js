// 여기는 상세보기 페이지
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
        variables:{number: Number(router.query.mynumber)}
    })


    const onClickMove = () =>{
        router.push(`/09-01-boards/${router.query.mynumber}/edit`)

    }
    
    console.log(data)
    return(
        <div>
            <div>{data?.fetchBoard.number}번 게시글에 오신것을 환영합니다.</div>
            <div>작성지: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}번 게시글에 오신 것을 활영합니다.</div>
            <button onClick= {onClickMove}>수정하러 이동하기.</button>
        </div>
    )
}