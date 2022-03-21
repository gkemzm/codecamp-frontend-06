import { useRouter } from 'next/router'
import { useState } from 'react'
import LisgWriteUI from './BoardList.pressenter'

export default function ListWrite(){
    const router = useRouter()

    const [isHover, setIsHover] = useState(false)

    const onClickMove1 = () => {
        router.push("/05-06-dynamic-routed-board/83011") //앞의 localhost:3000은 생략
    }
    const onClickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/83012")
    }
    const onClickMove3 = () => {
        router.push("/05-06-static-routed-board/83013") 
    }
    const onMouse1 = () =>{
        setIsHover(true) 
    }

    return(
        <LisgWriteUI 
        onClickMove1={onClickMove1}
        onClickMove2={onClickMove2}
        onClickMove3={onClickMove3}
        onMouse1={onMouse1}
        isHover={isHover}></LisgWriteUI>
    )
}   
