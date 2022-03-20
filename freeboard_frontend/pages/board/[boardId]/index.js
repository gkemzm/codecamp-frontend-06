import {Wrapper, Top_Wrapper, ProfileImage, Profile, Clip,
     Position, Top_Wrapper_Inner, Name, Date, Pdetail, 
    Middle_Wrapper, Middle_Wrapper_top, Title, Contents, ImageBox,
    Vidio, Like_disLike, Like_disLike_btn, Like_disLikes,
    Wrapper2, Btns} from '../../../styles/DetailPage'
import { useRouter } from 'next/router'
import { useQuery,gql } from '@apollo/client'
import Image from "next/Image"
import icon from "../../../public/fetchBoard/icon1.PNG"
import position from "../../../public/fetchBoard/position.PNG"
import cripboard from "../../../public/fetchBoard/cripboard.PNG"
import positionDetail from "../../../public/fetchBoard/positiondetail.PNG"
import like from "../../../public/fetchBoard/like.PNG"
import dislike from "../../../public/fetchBoard/dislike.PNG"

const FETCH_BOARD = gql`
    query fetchboard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
            likeCount
            dislikeCount
        }
    }
`
export default function FetchBoardPage(){
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables:{boardId: router.query.boardId}
    })
    
    const MoveMainpage = () => {
       router.push("/board") 
    }
    
    const Today = () =>{
        let now = new Date();
    }
    return(
        <>
        {data ? <>
            <Wrapper>
                <Pdetail>
                    <Image src={positionDetail} width="260px" height="50px"></Image>
                </Pdetail>

                <Top_Wrapper>
                    <Top_Wrapper_Inner>
                        <ProfileImage>
                            <Image src={icon} width="38px" height="38px"></Image>
                        </ProfileImage>
                        <Profile>
                            <Name>{data?.fetchBoard.writer}</Name>
                            <Date onLoad={Today}>Today : </Date>
                        </Profile>
                    </Top_Wrapper_Inner>
                    <Top_Wrapper_Inner>
                        <>
                            <Clip>
                                <Image src={cripboard} width="30px" height="30px"></Image>
                            </Clip>
                            <Position>
                                <Image src={position} width="30px" height="30px"></Image>
                            </Position>
                        </>
                    </Top_Wrapper_Inner>
                </Top_Wrapper>
                <Middle_Wrapper>
                    <Middle_Wrapper_top>
                        <Title>
                            <div>{data?.fetchBoard.title}</div>
                        </Title>

                        <ImageBox>
                            이미지가 들어갈 구간
                        </ImageBox>

                        <Contents>
                        <div>{data?.fetchBoard.contents}</div>
                        </Contents>
                    </Middle_Wrapper_top>

                    <Vidio>
                        비디오가 들어갈 구간
                    </Vidio>

                    <Like_disLikes>
                        <Like_disLike_btn>
                                <Image src={like} width="35px" height="30px"></Image>
                        </Like_disLike_btn>
                        
                        <Like_disLike_btn>
                                <Image src={dislike} width="35px" height="30px"></Image>
                        </Like_disLike_btn>
                    </Like_disLikes>

                    <Like_disLikes>
                        <Like_disLike>
                            <div>{data?.fetchBoard.likeCount}</div>
                        </Like_disLike>
                        <Like_disLike>
                            <div>{data?.fetchBoard.dislikeCount}</div>
                        </Like_disLike>
                    </Like_disLikes>
                </Middle_Wrapper>
            </Wrapper>

            <Wrapper2>
                <Btns>
                    <button onClick={MoveMainpage}>돌아가기</button>
                    <button onClick={MoveMainpage}>수정하기</button>
                    <button onClick={MoveMainpage}>삭제하기</button>
                </Btns>
            </Wrapper2>
            
        </> : <div>Loading</div>}
        </>
    )
}