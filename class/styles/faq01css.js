import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 640px;
    height: 1100px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`
export const SearchArea = styled.div`
    width: 580px;
    height: 32px;
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: end;
`

export const TitleArea = styled.div`
    width: 580px;
    height: 43px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Title = styled.text`
    font-size: 35px;
    font-weight: 700;
`
export const Title2 = styled.text`
    font-size: 25px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavArea = styled.div`
    width: 580px;
    height: 43px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
`

export const Nav = styled.button`
    width: 130px;
    font-size: 25px;
    font-weight: 700;
    margin-right: 10px;
    background-color: white;
    border: none;
`


export const MainArea = styled.div`
    border: 1px solid black;
    width: 580px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-top : 1px solid black;
    border-bottom: 1px solid gray;
    border-left: none;
    border-right: none;
    padding-top: 20px;

`
export const Main = styled.div`
    
    width: 580px;
    height: 70px;
    margin-top: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    color: gray;
`

export const MainDetail = styled.div`
    width: 580px;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Question = styled.text`
    font-size: 15px;
    font-weight: 700;
    font-size: 23px;
    color: black;
    margin-top: 15px;
`
export const Footer = styled.div`
    width: 580px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
`

export const Menu = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto;
`

export const MenuText = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    color: gray;
`