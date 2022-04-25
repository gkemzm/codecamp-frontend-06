import * as S from "./header.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useQuery } from "@apollo/client";
import { userInfoState } from "../../store/index";
import { useRecoilState } from "recoil";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <>
      <S.Wrapper>
        <S.BasicRow>
          <S.HomeBtn onClick={onClickMoveToPage("/")}>Home</S.HomeBtn>
          <S.HomeBtn onClick={onClickMoveToPage("/board")}>FreeBoard</S.HomeBtn>
          <S.HomeBtn onClick={onClickMoveToPage("/market")}>Market</S.HomeBtn>
        </S.BasicRow>
        <S.BasicRow>
          {!userInfo?.name ? (
            <>
              <S.LoginBtn onClick={onClickMoveToPage("/Login")}>
                Login
              </S.LoginBtn>
              <S.SignBtn onClick={onClickMoveToPage("/signUp")}>
                Sign Up
              </S.SignBtn>
            </>
          ) : (
            <>
              <S.ProfileArea>
                UserName : {data?.fetchUserLoggedIn.name} /
              </S.ProfileArea>
              <S.ProfileArea>
                Point: {data?.fetchUserLoggedIn.userPoint.amount}
              </S.ProfileArea>
              <S.HomeBtn onClick={onClickMoveToPage("/myPage")}>
                MyPage
              </S.HomeBtn>
              <S.HomeBtn onClick={onClickMoveToPage("/payment")}>
                Payment
              </S.HomeBtn>
            </>
          )}
        </S.BasicRow>
      </S.Wrapper>
    </>
  );
}
