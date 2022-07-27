import {
  IPointTransaction,
  IUser,
} from "../../../../commons/types/generated/types";
import * as S from "./pointList.styles";

interface IPointListHTML {
  data: { fetchPointTransactionsOfLoading: Array<IPointTransaction> };
  userData: { fetchUserLoggedIn: IUser };
  isOpenInfo: boolean;
}
export default function PointListHTML(props: IPointListHTML) {
  return (
    <>
      {props.isOpenInfo ? (
        <></>
      ) : (
        <S.Wrapper>
          <div>
            <S.TextDiv>내정보</S.TextDiv>
            <S.Profile>
              <S.ProfileContents>
                UserName : {props.userData?.fetchUserLoggedIn?.name}
              </S.ProfileContents>
              <S.ProfileContents>
                E-mail : {props.userData?.fetchUserLoggedIn?.email}
              </S.ProfileContents>
              <S.ProfileContents>
                Sign-Date :{" "}
                {props.userData?.fetchUserLoggedIn?.createdAt.slice(0, 10)}
              </S.ProfileContents>
            </S.Profile>
            <S.TextDiv2>
              <S.Contents>구분</S.Contents>
              <S.Navbar>
                <S.Contents>Point</S.Contents>
                <S.Point>잔액</S.Point>
              </S.Navbar>
            </S.TextDiv2>
            {props.data?.fetchPointTransactionsOfLoading?.map(
              (el: IPointTransaction) => (
                <S.BasicRow key={el._id}>
                  <S.Bucket>
                    <S.BasicRow2>
                      <S.Contents>{el.status}</S.Contents>
                      <S.Navbar>
                        <S.Amount>{el.amount}</S.Amount>
                        <S.Contents>{el.balance}</S.Contents>
                      </S.Navbar>
                    </S.BasicRow2>
                  </S.Bucket>
                </S.BasicRow>
              )
            )}
          </div>
          )
        </S.Wrapper>
      )}
    </>
  );
}
