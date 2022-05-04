import { gql, useQuery } from "@apollo/client";
import * as S from "./buyingList.styles";
const FETCH_POINT_TRANSACTIONS_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String) {
    fetchPointTransactionsOfBuying(search: $search) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      balance
    }
  }
`;

interface IBuyingListProps {
  isOpenBuy: boolean;
}
export default function BuyingList(props: IBuyingListProps) {
  const { data: buyData } = useQuery(FETCH_POINT_TRANSACTIONS_BUYING, {
    variables: {
      search: "",
    },
  });

  console.log(buyData);

  return (
    <>
      {props.isOpenBuy ? (
        <></>
      ) : (
        <S.Wrapper>
          <div>
            <S.TextDiv>구매목록</S.TextDiv>
            <S.TextDiv2>
              <S.Contents>구분</S.Contents>
              <S.Navbar>
                <S.Contents>Point</S.Contents>
                <S.Point>잔액</S.Point>
              </S.Navbar>
            </S.TextDiv2>
            {buyData?.fetchPointTransactionsOfBuying?.map((el: any) => (
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
            ))}
          </div>
          )
        </S.Wrapper>
      )}
    </>
  );
}
