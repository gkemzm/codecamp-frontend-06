import {MyTitle, MyEmail, Title} from '../../styles/emotion'


export default function AAAPage() {


  return (
    <Title>
      <MyTitle>
          <text>로그인</text> 
      </MyTitle>
      <text>아이디 입력</text>
      <MyEmail type="text"/>
      <text>비밀번호 입력</text>
      <MyEmail type="password"/>
    </Title>
  )
}
