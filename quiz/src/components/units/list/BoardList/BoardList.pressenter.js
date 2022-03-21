import { RedButton, YelloButton, BlueButton} from "./BoardList.styles";


export default function LisgWriteUI(props){
    
    return(
        <>
            <RedButton onClick={props.onClickMove1} onMousemove={props.onMouse} isHover={props.isHover}>83011번 게시글로 이동하기!!!</RedButton>
            <YelloButton onClick={props.onClickMove2}>83012번 게시글로 이동하기!!!</YelloButton>
            <BlueButton onClick={props.onClickMove3}>83013번 게시글로 이동하기!!!</BlueButton>
        </>
    )
}