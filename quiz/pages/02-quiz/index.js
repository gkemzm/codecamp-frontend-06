import {Wrapper, Title, Email, Emailerror, Name, Nameerror, Pw, Pwerror, Pwcheck, PhoneWrapper,
PhoneInput,TokenWrapper, Token, TokenBtn, LocationWrapper, Location, Option, Locationerror,
GenderWrapper, Gender, GenderRadio, Gendererror, Footer, SignBtn} from '../../styles/02quiz'
import { useState } from 'react'

export default function FinalPage(){

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [pw, setPw] = useState("")
    const [pwcheck, setPwcheck] = useState("")
    const [pwError, setPwerror] = useState("")

    function signup(){
        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
        } 
        
        if(pw !== pwcheck){
            setPwerror("비밀번호가 다릅니다.")
        }
        
        if(pw === ""){
            setPwerror("비밀번호를 입력하세요")
        }
         if(email.includes("@") && pw === pwcheck && pw !== ""){
            alert("회원가입을 축하합니다!!!")
            setEmailError("")
            setPwerror("")
            setEmail("")
            setPw("")
            setPwcheck("")
        }
    
    }

    function ChangeEmail(event){
        setEmail(event.target.value)

        // if(event.target.value ==! ""){
        //     setEmailError("")
        // }
    }

    function ChangePw(event){
        setPw(event.target.value)
    }

    function ChangePwcheck(event){
        setPwcheck(event.target.value)
    }

    return(
        <Wrapper>
            <Title>코드캠프 회원가입</Title>

            <Email type={"text"} placeholder="이메일을 입력해 주세요." onChange={ChangeEmail}></Email>
            <Emailerror>{emailError}</Emailerror>

            <Name type={"text"} placeholder="이름을 입력해 주세요."></Name>
            <Nameerror></Nameerror>

            <Pw type={"password"} placeholder="비밀번호를 입력해 주세요." onChange={ChangePw}></Pw>
            <Pwerror>{pwError}</Pwerror>

            <Pwcheck type={"password"} placeholder="비밀번호를 다시 입력해 주세요." onChange={ChangePwcheck}></Pwcheck>
            <Pwerror>{pwError}</Pwerror>

            <PhoneWrapper>
                <PhoneInput></PhoneInput>-
                <PhoneInput></PhoneInput>-
                <PhoneInput></PhoneInput>
            </PhoneWrapper>
            
            <TokenWrapper>
                <Token>000000</Token>
                <TokenBtn>인증번호 전송</TokenBtn>
            </TokenWrapper>

            <TokenWrapper>
                <Token>3:00</Token>
                <TokenBtn>인증 완료</TokenBtn>
            </TokenWrapper>

            <LocationWrapper>
                <Location>
                    <Option disabled selected>지역을 선택하세요.</Option>
                    <Option>서울</Option>
                    <Option>경기</Option>
                    <Option>인천</Option>
                </Location>
            </LocationWrapper>

            <Locationerror></Locationerror>

            <GenderWrapper>
                <Gender>
                    <GenderRadio type={"radio"}></GenderRadio>여성
                </Gender>
                <Gender>
                    <GenderRadio type={"radio"}></GenderRadio>남성
                </Gender>
            </GenderWrapper>

            <Gendererror></Gendererror>

            <Footer>
                <SignBtn onClick={signup}>가입하기</SignBtn>
            </Footer>
        </Wrapper>
    )

}