import {Wrapper, Title, Email, Area, Pw, 
    Pwcheck, Sign, Label, Emailerror, Pwerror} from '../../styles/emotion'
import {useState} from "react"
  
  
  export default function SignPage() {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] =useState("")
    
    function signin(){
        
    }

    return (
      <Wrapper>

        <Title>회원가입</Title>

        <Area>
            <Label>Email</Label>
            <Email type={"text"}></Email>
            <Emailerror></Emailerror>
        </Area>

        <Area>
            <Label>Password</Label>
            <Pw type={"password"}></Pw>
            <Pwerror></Pwerror>
        </Area>

        <Area>
            <Label>Password Check</Label>
            <Pwcheck type={"password"}></Pwcheck>
            <Pwerror></Pwerror>
        </Area>
        
        <Sign onClick={signin}>가입하기</Sign>

      </Wrapper>
    )
  }
  