import { useRouter } from 'next/router'
//게시글 목록
export default function StaticRoutingPage(){
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/05-04-static-routed-board/83011") //앞의 localhost:3000은 생략
    }
    const onClickMove2 = () => {
        router.push("/05-04-static-routed-board/83012")
    }
    const onClickMove3 = () => {
        router.push("/05-04-static-routed-board/83013") 
    }
    
    return(
        <div>
            <button onClick={onClickMove1}>83011번 게시글로 이동하기!!!</button>
            <button onClick={onClickMove2}>83012번 게시글로 이동하기!!!</button>
            <button onClick={onClickMove3}>83013번 게시글로 이동하기!!!</button>
        </div>
    )
}