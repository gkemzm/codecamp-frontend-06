import { gql, useQuery } from "@apollo/client";
import * as S from "./soldList.stylels";

const FETCH_USEDITEM_ISOLD = gql`
  query fetchUseditemsISold($search: String) {
    fetchUseditemsISold(search: $search) {
      _id
      name
      remarks
      contents
      price
      tags
    }
  }
`;
interface ISoldListProps {
  isOpenSold: boolean;
}

export default function SoldList(props: ISoldListProps) {
  const { data: sellData } = useQuery(FETCH_USEDITEM_ISOLD, {
    variables: {
      search: "",
    },
  });

  console.log(sellData);

  return (
    <>
      {props.isOpenSold ? (
        <></>
      ) : (
        <S.Wrapper>
          <div>
            <S.TextDiv>판매목록</S.TextDiv>
            <S.TextDiv2>
              <S.Contents>물품명</S.Contents>
              <S.Navbar>
                <S.Contents>요약</S.Contents>
                <S.Point>가격</S.Point>
              </S.Navbar>
            </S.TextDiv2>
            {sellData?.fetchUseditemsISold?.map((el: any) => (
              <S.BasicRow key={el._id}>
                <S.Bucket>
                  <S.BasicRow2>
                    <S.Contents>{el.name}</S.Contents>
                    <S.Navbar>
                      <S.Amount>{el.remarks}</S.Amount>
                      <S.Contents>{el.price}</S.Contents>
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
