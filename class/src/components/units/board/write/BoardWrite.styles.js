import styled from '@emotion/styled'

// export const SubmitButton = styled.button`
//     background-color: skyblue;
// `
export default styled.button`
    background-color: ${(props)=> props.isActive ? "yellow" : "none"};
` 
//default는 {} 안에 안넣는다.
export const WriterInput = styled.input`
    border-color: green;
`
