import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import ListNumUI from './ListNum.pressenter'

export default function ListNum(){
    const router = useRouter()
    Number(router.query.number)  // 83011
    const { data } = useQuery(FETCH_BOARD, {
        variables:{number: Number(router.query.number)}
    })

    const MoveMainpage = () => {
       router.push("/06-quiz/06-01quiz") //앞의 localhost:3000은 생략
    }
    
    console.log(data)
    return(
        <ListNumUI
        MoveMainpage={MoveMainpage}></ListNumUI>
    )
}