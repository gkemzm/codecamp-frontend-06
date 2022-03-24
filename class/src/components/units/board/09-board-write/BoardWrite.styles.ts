import styled from '@emotion/styled'
import { ISubmitButtonProps } from "./BoardWrite.types"
// export const SubmitButton = styled.button`
//     background-color: skyblue;
// `

export const SubmitButton =  styled.button`
    background-color: ${(props: ISubmitButtonProps)=> props.isActive ? "yellow" : "none"};
` 
//default는 {} 안에 안넣는다.
export const WriterInput = styled.input`
    border-color: green;
`
