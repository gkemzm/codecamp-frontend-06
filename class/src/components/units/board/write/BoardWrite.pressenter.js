import SubmitButton, {WriterInput} from './BoardWrite.styles'

export default function BoardWriteUI(props){
    
    return(
        <>
            {/* <div>{data}</div> */}
            작성자:<WriterInput type="text" onChange={props.onChangeWriter}/><br />
            제목:<input type="text" onChange={props.onChangeTitle}/><br />
            내용:<input type="text" onChange={props.onChangeContents}/><br />
            <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청하기!!!</SubmitButton>
        </>
    )
}


//export default는 페이지당 하나
//default로 임폴트 한경우 이름설정이 자유로움
//그냥export만 임폴트 한 경우엔 선택해야한다.


