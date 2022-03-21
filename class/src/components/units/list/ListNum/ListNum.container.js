import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import ListNumUI from './ListNum.pressenter'
import { FETCH_BOARD } from './ListNum.query'

export default function ListNum(){
    const router = useRouter()
    Number(router.query.number)  // 83011
    const { data } = useQuery(FETCH_BOARD, {
        variables:{number: Number(router.query.number)}
    })

    const MoveMainpage = () => {
       router.push("/05-05-dynamic-routing-board")
    }
    
    console.log(data)
    return(
        <ListNumUI
        MoveMainpage={MoveMainpage}
        data={data}
        ></ListNumUI>
    )
}