import { useRouter } from 'next/router'
import { useState } from 'react'
import LisgWriteUI from './BoardList.pressenter'

export default function ListWrite(){
    const router = useRouter()

    const [isHover, setIsHover] = useState(false)

    const onClickMove1 = () => {
        router.push("/06-quiz/06-01quiz/") //앞의 localhost:3000은 생략
    }
    const onClickMove2 = () => {
        router.push("/06-quiz/06-01quiz/83012")
    }
    const onClickMove3 = () => {
        router.push("/06-quiz/06-01quiz/83013") 
    }
    const onMouse = () =>{
        setIsHover(true)
    }
    
    return(
        <LisgWriteUI 
        onClickMove1={onClickMove1}
        onClickMove2={onClickMove2}
        onClickMove3={onClickMove3}
        onMouse={onMouse}
        isHover={isHover}></LisgWriteUI>
    )
}   
