import {Wrapper, SearchArea, TitleArea, NavArea, MainArea, Footer, Main,
    Question, MainDetail, Nav, Title, Title2, Menu, MenuText} from '../../../styles/faq01css'
import Image from "next/Image"
import searchimg from "../../../public/my/ic-58-main-search-black.png"
import face from "../../../public/my/img-60-profile-image.png"
import arrow from "../../../public/my/ic-28-arrow.png"
import arrow2 from "../../../public/my/ic-70-arrow-right.png"
import home from "../../../public/my/ic-58-main-home-unselected.png"
import locations from "../../../public/my/ic-58-main-location-unselected.png"
import likes from "../../../public/my/ic-58-main-like-unselected.png"
import mymy from "../../../public/my/ic-58-main-my-selected.png"
  export default function AAAPage() {
  
  
    return (
        <Wrapper>
            <SearchArea>
              <Image src={searchimg} width="32px" height="32x"></Image>
            </SearchArea>

            <TitleArea>
                <Title>마이</Title>
                <Title2>    
                    <Image src={face} width="52px" height="52px"></Image>임정아
                    <Image src={arrow} width="40px" height="40px"></Image>
                </Title2>        
            </TitleArea>

            <NavArea>
                <Nav>공지사항</Nav>
                <Nav>이벤트</Nav>
                <Nav>FAQ</Nav>
                <Nav>Q&A</Nav>
            </NavArea>

            <MainArea>
                <Main>Q.01
                    <MainDetail>
                        <Question>리뷰 작성은 어떻게 하나요?</Question>
                        <Image src={arrow2} width="50px" height="50px"></Image>
                    </MainDetail>
                </Main>

                <Main>Q.02
                    <MainDetail>
                        <Question>리뷰 수정/삭제는 어떻게 하나요?</Question>
                        <Image src={arrow2} width="50px" height="50px"></Image>
                    </MainDetail>
                </Main>

                <Main>Q.03
                    <MainDetail>
                        <Question>아이디/비밀번호를 잊어버렸어요.</Question>
                        <Image src={arrow2} width="50px" height="50px"></Image>
                    </MainDetail>
                </Main>
                    
                <Main>Q.04
                    <MainDetail>
                        <Question>회원탈퇴를 하고싶어요.</Question>
                        <Image src={arrow2} width="50px" height="50px"></Image>
                    </MainDetail>
                </Main>

                <Main>Q.05
                    <MainDetail>
                        <Question>출발지 설정은 어떻게 하나요?</Question>
                        <Image src={arrow2} width="50px" height="50px"></Image>
                    </MainDetail>
                </Main>
                
                <Main>Q.06
                    <MainDetail>
                        <Question>비밀번호를 변경하고 싶어요.</Question>
                        <Image src={arrow2} width="50px" height="50px"></Image>
                    </MainDetail>
                </Main>
            </MainArea>

            <Footer>
                <Menu>
                    <Image src={home} width="30px" height="70px"></Image>
                    <MenuText>홈</MenuText>
                </Menu>

                <Menu>
                    <Image src={locations} width="30px" height="70px"></Image>
                    <MenuText>잇츠로드</MenuText>
                </Menu>

                <Menu>
                    <Image src={likes} width="30px" height="70px"></Image>
                    <MenuText>마이찜</MenuText>
                </Menu>

                <Menu>
                    <Image src={mymy} width="30px" height="80px"></Image>
                    <MenuText>마이</MenuText>
                </Menu>
            </Footer>
        </Wrapper>
    )
  }
  