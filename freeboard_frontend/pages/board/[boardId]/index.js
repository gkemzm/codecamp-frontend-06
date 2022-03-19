import {Wrapper, Title, Top, Text, TopArea, TopInput, MainTitle, 
    TitleInput, Middle, MiddleInput, PostNum, PostInput, PostBtn, Address,
    Bottom, YouTube, PostArea, ImgBtn, SelectInput, SelectArea, SelectText, 
    RegistBtn, Error} from '../../styles/emotion'
  import {useState} from 'react'
  import {useMutation, gql} from '@apollo/client'

  export default function BoardSignPage() {
  
    return (
      <Wrapper>
          <Title>
              게시물 등록
          </Title>
  
          <Top>
              <TopArea>
                  <Text>작성자</Text>
                  <TopInput  placeholder= '  이름을 적어주세요.' onChange={onChangeWriter}></TopInput>
                  <Error>{writerError}</Error>
              </TopArea>
              <TopArea>
                  <Text>비밀번호</Text> 
                  <TopInput  placeholder= '  비밀번호를 입력해 주세요.' type={"password"} onChange={onChangePw}></TopInput>
                  <Error>{pwError}</Error>
              </TopArea>
          </Top>
  
          <MainTitle>
              <Text>제목</Text>
              <TitleInput  placeholder= '  제목을 작성해주세요.' onChange={onChangeTitle}></TitleInput>
              <Error>{titleError}</Error>
          </MainTitle>
  
          <Middle>
              <Text>내용</Text>
              <MiddleInput   placeholder= '  내용을 작성해주세요.' onChange={onChangeContents}></MiddleInput>
              <Error>{contentsError}</Error>
          </Middle>
  
          <Middle>
              <Text>주소</Text>
              <PostNum>
                  <PostInput   placeholder= '         07250'></PostInput>
                  <PostBtn>우편번호 검색</PostBtn>
              </PostNum>
              <Address></Address>
              <Address></Address>
          </Middle>
  
          <Bottom>
              <Text>유튜브</Text>
              <YouTube  placeholder= '  링크를 복사해주세요.'></YouTube>
          </Bottom>
  
          <Bottom>
              <Text>사진첨부</Text>
              <PostArea>
                <ImgBtn>+<br></br>Upload</ImgBtn>
                <ImgBtn>+<br></br>Upload</ImgBtn>
                <ImgBtn>+<br></br>Upload</ImgBtn>
              </PostArea>
          </Bottom>
  
          <Bottom>
              <Text>메인설정</Text>
              <SelectArea>
                  <SelectInput type = "radio"></SelectInput><SelectText>유튜브</SelectText>
                  <SelectInput type = "radio"></SelectInput><SelectText>사진</SelectText>
              </SelectArea>
          </Bottom>
  
    
              <RegistBtn onClick={submit}>등록하기</RegistBtn>
  
      </Wrapper>
    )
  }
  