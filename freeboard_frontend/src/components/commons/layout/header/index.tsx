import * as S from "./header.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <>
      <S.Wrapper>
        <S.BasicRow>
          <S.HomeBtn onClick={onClickMoveToPage("/")}>Home</S.HomeBtn>
          <S.HomeBtn onClick={onClickMoveToPage("/board")}>FreeBoard</S.HomeBtn>
          <S.HomeBtn onClick={onClickMoveToPage("/market")}>Market</S.HomeBtn>
        </S.BasicRow>
        <S.BasicRow>
          {!data?.fetchUserLoggedIn ? (
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
              <S.Area>{data?.fetchUserLoggedIn.name}님 환영합니다.</S.Area>
              <S.HomeBtn onClick={onClickMoveToPage("/myPage")}>
                MyPage
              </S.HomeBtn>
            </>
          )}
        </S.BasicRow>
      </S.Wrapper>
    </>
  );
}
