// import {Wrapper, Top_Wrapper, ProfileImage, Profile, Clip,
//     Position, Top_Wrapper_Inner, Name, Date, Pdetail, 
//    Middle_Wrapper, Middle_Wrapper_top, Title, Contents, ImageBox,
//    Vidio, Like_disLike, Like_disLike_btn, Like_disLikes,
//    Wrapper2, Btns, Btn_Contents, Wrapper_Waiting, Middle_Wrapper_bottom, ProfileHover} from '../../../styles/DetailPage'
import * as S from '../boardDetail/BoardDetail.styles'


export default function BoardDetailHTML(props){
   return(
       <>
       {props.data ? <>
           <S.Wrapper>
               <S.Pdetail>
                   <img src='/fetchBoard/positiondetail.PNG' width="260px" height="50px"></img>
               </S.Pdetail>

               <S.Top_Wrapper>
                   <S.Top_Wrapper_Inner>
                       <S.ProfileImage>
                           <img src='/fetchBoard/icon1.PNG' width="40px" height="40px"></img>
                       </S.ProfileImage>
                       <S.ProfileHover>
                           <S.Name>{props.data?.fetchBoard.writer}</S.Name>
                           <S.Date>{props.data?.fetchBoard.createdAt.slice(0,10)}</S.Date>
                       </S.ProfileHover>
                   </S.Top_Wrapper_Inner>
                   <S.Top_Wrapper_Inner>
                       <>
                           <S.Clip>
                               <img src='/fetchBoard/cripboard.PNG' width="30px" height="30px"></img>
                           </S.Clip>
                           <S.Position>
                               <img src='/fetchBoard/position.PNG' width="30px" height="30px"></img>
                           </S.Position>
                       </>
                   </S.Top_Wrapper_Inner>
               </S.Top_Wrapper>
               <S.Middle_Wrapper>
                   <S.Middle_Wrapper_top>
                       <S.Title>
                           <div>{props.data?.fetchBoard.title}</div>
                       </S.Title>

                       <S.ImageBox>
                           이미지가 들어갈 구간
                       </S.ImageBox>

                       <S.Contents>
                           <div>{props.data?.fetchBoard.contents}</div>
                       </S.Contents>
                   </S.Middle_Wrapper_top>
                   <S.Middle_Wrapper_bottom>
                       <S.Vidio>
                       {props.data?.fetchBoard.youtubeUrl}
                       <iframe width="560" height="315" src={props.data?.fetchBoard?.youtubeUrl} title="YouTube video player" 
                       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       </S.Vidio>
                       <S.Like_disLikes>
                           <S.Like_disLike_btn>
                                   <img src='/fetchBoard/like.PNG' onClick={props.upLike} width="35px" height="30px"></img>
                           </S.Like_disLike_btn>
                           
                           <S.Like_disLike_btn>
                                   <img src='/fetchBoard/dislike.PNG' onClick={props.upDisLike}  width="35px" height="30px"></img>
                           </S.Like_disLike_btn>
                       </S.Like_disLikes>

                       <S.Like_disLikes>
                           <S.Like_disLike>
                               <div>{props.data?.fetchBoard.likeCount}</div>
                           </S.Like_disLike>
                           <S.Like_disLike>
                               <div>{props.data?.fetchBoard.dislikeCount}</div>
                           </S.Like_disLike>
                       </S.Like_disLikes>
                   </S.Middle_Wrapper_bottom>
               </S.Middle_Wrapper>
           </S.Wrapper>

           <S.Wrapper2>
               <S.Btns>
                   <S.Btn_Contents onClick={props.MoveMainpage}>돌아가기</S.Btn_Contents>
                   <S.Btn_Contents onClick={props.updateBoard}>수정하기</S.Btn_Contents>
                   <S.Btn_Contents onClick={props.deleteOneBoard}>삭제하기</S.Btn_Contents>
               </S.Btns>
           </S.Wrapper2>
           
       </> : <S.Wrapper_Waiting>잠시만 기다려 주세요</S.Wrapper_Waiting>}
       </>
   )
}