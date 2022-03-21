import styled from '@emotion/styled'

export const RedButton = styled.button`
    background-color: ${(props)=> (props.isHover ? "red" : "none")};
`

export const YelloButton = styled.button`
    background-color: yellow;
`

export const BlueButton = styled.button`
    background-color: blue;
`