import { useRouter } from 'next/router'
import { useQuery,gql } from '@apollo/client'
import styled from '@emotion/styled'
//게시글 상세
const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const MyRow = styled.div`
    display: flex;
    flex-direction: row;
`

const MyColumn = styled.div`
    width: 25%;
`

export default function StaticRoutedPage(){
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARDS)
    
    console.log(data)
    return(
        <div>
            {data?.fetchBoards.map((el, index)=>(
                <MyRow key={el.number}> 
                    <MyColumn><input type="checkbox"></input></MyColumn>
                    <MyColumn>{el.number}</MyColumn>
                    <MyColumn>{el.writer}</MyColumn>
                    <MyColumn>{el.title}</MyColumn>
                </MyRow>))
            }
        </div>
    )
    //고유한 값을가진 키가 필요하다.
}