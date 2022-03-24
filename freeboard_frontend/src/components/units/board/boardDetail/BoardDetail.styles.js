import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'

const hover = css`
    &:hover {}
`

export const Wrapper = styled.div`
    width: 1200px;
    border: 1px solid yellow;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`
export const Pdetail = styled.div`
    width: 970px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    padding-top: 15px;
`

export const Top_Wrapper = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: row;
    padding-bottom: 15px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #BDBDBD;
`
export const Top_Wrapper_Inner = styled.div`
    display: flex;
    flex-direction: row;
`
export const Date = styled.div`
    display: flex;
    padding-top: 3px;
    font-size: 13px;
    color: #BDBDBD;
`
export const Name = styled.div`
    display: flex;
    font-size: 17px;
    font-weight: 700;
`
export const ProfileImage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 7px;

`
export const Profile = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProfileHover = styled(Profile)`
    &:hover {background-color: #BDBDBD;}
`

export const Clip = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`

export const Position = styled.div`
    display: flex;
    flex-direction: column;
`
export const Middle_Wrapper = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 15px;
    align-items: center
`
export const Middle_Wrapper_top = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 15px;
    align-items: flex-start;
`
export const Middle_Wrapper_bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 28px;
    font-weight: 700;
    padding-bottom: 40px;
`
export const ImageBox = styled.div`
    display: flex;
    width: 500ox;
    flex-direction: column;
    padding-bottom: 50px;
`
export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
`
export const Vidio = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    padding-bottom: 40px;
    padding-top: 50px;
`
export const YouTube = styled.video`
    display: flex;
    
`
export const Like_disLike = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 13px;
    font-weight: 700;
    padding: 0px 12px;
`
export const Like_disLike_btn = styled.div`
    display: flex;
    cursor: pointer;
  
`

export const BlueButton = styled(Like_disLike_btn)`
    background-color: black;
    ${hover}
`;

export const Like_disLikes = styled.div`
    display: flex;
    flex-direction: row;
`
export const Wrapper2 = styled.div`
    width: 1200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`
export const Btns = styled.div`
    width: 330px;
    padding: 70px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: none;
    margin: auto;
`
export const Btn_Contents = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`
export const Wrapper_Waiting = styled.div`
    width: 300px;
    height: 100px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    border: 2px solid yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 100px;
`