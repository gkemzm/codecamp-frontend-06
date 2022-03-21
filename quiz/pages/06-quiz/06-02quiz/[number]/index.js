import { useRouter } from 'next/router'
import { useQuery,gql } from '@apollo/client'
import ListNum from '../../../../src/components/units/list/listNum/ListNum.container'
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
    
    return <ListNum></ListNum>
}