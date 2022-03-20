import {Wrapper, Top_Wrapper, ProfileImage, Profile, Clip,
     Position, Top_Wrapper_Inner, Name, Date, Pdetail, 
    Middle_Wrapper, Middle_Wrapper_top, Title, Contents, ImageBox,
    Vidio, Like_disLike, Like_disLike_btn, Like_disLikes,
    Wrapper2, Btns, Btn_Contents, Wrapper_Waiting, Middle_Wrapper_bottom, ProfileHover} from '../../../styles/DetailPage'
import { useRouter } from 'next/router'
import { useQuery,gql, useMutation } from '@apollo/client'
import Image from "next/Image"
import icon from "../../../public/fetchBoard/icon1.PNG"
import position from "../../../public/fetchBoard/position.PNG"
import cripboard from "../../../public/fetchBoard/cripboard.PNG"
import positionDetail from "../../../public/fetchBoard/positiondetail.PNG"
import like from "../../../public/fetchBoard/like.PNG"
import dislike from "../../../public/fetchBoard/dislike.PNG"
// import { YouTube } from '../../../styles/emotion'

const FETCH_BOARD = gql`
    query fetchboard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
            likeCount
            dislikeCount
            youtubeUrl
        }
    }
`

const UP_LIKE = gql`
    mutation likeBoard($boardId: ID!){
        likeBoard(boardId: $boardId)
    }
`
const UP_DISLIKE = gql`
    mutation dislikeBoard($boardId: ID!){
        dislikeBoard(boardId: $boardId)
    }
`


export default function FetchBoardPage(){
    const router = useRouter()

    const [callLikeApi] = useMutation(UP_LIKE)
    const [callDisLikeApi] = useMutation(UP_DISLIKE)

    const { data } = useQuery(FETCH_BOARD, {
        variables:{boardId: router.query.boardId}
    })

    // const now = new Date();

    const MoveMainpage = () => {
       router.push("/board") 
    }
    
    const upLike = async(event) =>{
        try{
            const resultLike = await callLikeApi({
                variables: {
                    boardId: router.query.boardId
                }
            })
            location.reload();
        }catch(error){
            alert(error.message)
        }
    }

    const upDisLike = async(event) =>{
        try{
            const resultDisLike = await callDisLikeApi({
                variables: {
                    boardId: router.query.boardId
                }
            })
            location.reload();
        }catch(error){
            alert(error.message)
        }
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
                        <ProfileHover>
                            <Name>{data?.fetchBoard.writer}</Name>
                            <Date>Today :</Date>
                        </ProfileHover>
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
                    <Middle_Wrapper_bottom>
                        <Vidio>
                            <iframe width="460" height="275" src={data?.fetchBoard.youtubeUrl} frameBorder="0" allow='accelerometer'></iframe>
                        </Vidio>
                        <Like_disLikes>
                            <Like_disLike_btn>
                                    <Image onClick={upLike} src={like} width="35px" height="30px"></Image>
                            </Like_disLike_btn>
                            
                            <Like_disLike_btn>
                                    <Image onClick={upDisLike} src={dislike} width="35px" height="30px"></Image>
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
                    </Middle_Wrapper_bottom>
                </Middle_Wrapper>
            </Wrapper>

            <Wrapper2>
                <Btns>
                    <Btn_Contents onClick={MoveMainpage}>돌아가기</Btn_Contents>
                    <Btn_Contents onClick={MoveMainpage}>수정하기</Btn_Contents>
                    <Btn_Contents onClick={MoveMainpage}>삭제하기</Btn_Contents>
                </Btns>
            </Wrapper2>
            
        </> : <Wrapper_Waiting>잠시만 기다려 주세요</Wrapper_Waiting>}
        </>
    )
}