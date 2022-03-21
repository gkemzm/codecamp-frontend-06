import { Area, BackButton, MiniWrapper } from "./ListNum.styles"

export default function ListNumUI(props){
    
    return(
        <MiniWrapper>
            <Area>{props.data?.fetchBoard.number}번 게시글</Area>
            <Area>작성지: {props.data?.fetchBoard.writer}</Area>
            <Area>제목: {props.data?.fetchBoard.title}</Area>
            <Area>내용: {props.data?.fetchBoard.contents}</Area>
            <BackButton onClick={props.MoveMainpage}>돌아가기</BackButton>
        </MiniWrapper>
    )
}