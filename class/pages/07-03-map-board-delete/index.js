import { useRouter } from 'next/router'
import { useQuery,gql, useMutation } from '@apollo/client'
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
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    width: 20%;
`

export default function StaticRoutedPage(){
    const router = useRouter()
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARDS)

    const onClickDelete = (event) =>{
        deleteBoard({
            variables: {number: Number(event.target.id)},
            refetchQueries: [{query: FETCH_BOARDS}]
        })
    }
    
    console.log(data)

    
    return(
        <div>
            {data?.fetchBoards.map((el, index)=>(
                <Row key={el.number}> 
                    <Column><input type="checkbox"></input></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>))
            }
        </div>
    )
    //고유한 값을가진 키가 필요하다.
}