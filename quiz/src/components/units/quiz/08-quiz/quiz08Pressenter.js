//프리젠터

import SubmitButton, {WriterInput} from './quiz08Styles'

export default function Quiz08UI(props){
    
    return(
        <>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            판매자:<WriterInput type="text" onChange={props.onChangeSeller}/><br />
            물품명:<input type="text" onChange={props.onChangeName}/><br />
            설명:<input type="text" onChange={props.onChangeDetail}/><br />
            가격:<input type="text" onChange={props.onChangePrice}/><br />
            <SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>
                {props.isEdit ? "수정" : "등록"}하기</SubmitButton>
        </>
    )
}



