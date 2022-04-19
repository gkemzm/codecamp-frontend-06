import SkyBlueButton from "../../../commons/buttons/skyBlueButton";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./listProduct.styels";
import { IListProps } from "./listProduct.type";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import BestProductContainer from "./bestList/bestList.container";

export default function ListBoardHTML(props: IListProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const onLoadMore = () => {
    if (!props.data) return; // 데이터가 없으면 요청하지말하라

    props.fetchMore({
      variables: {
        // boaddId: props.data?.fetchBoard._id,
        page: Math.ceil(props.data?.fetchUseditems.length / 10) + 1,
        // boadrId: props.dataComment._id,
        boardId: router.query.boardId,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <>
      <S.Wrapper>
        <BestProductContainer />
        <S.BestBoard></S.BestBoard>
        <S.Area onClick={onClickMoveToPage("/market/new")}>
          <SkyBlueButton isActive={false} title={"Product Sign"} />
        </S.Area>

        <div style={{ height: "730px", width: "1220px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            loader={<div className="loader" key={0}></div>}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any) => (
              <S.ProductBox key={el._id}>
                <S.ImageBox
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                ></S.ImageBox>
                <S.ProductDetail>
                  <S.ProductName>{el.name}</S.ProductName>
                  <S.ProductRemarks>{el.remarks}</S.ProductRemarks>
                  <S.ProductTags>{el.tags}</S.ProductTags>
                </S.ProductDetail>
                <S.Price>Price: {el.price}</S.Price>
              </S.ProductBox>
            ))}
          </InfiniteScroll>
        </div>
      </S.Wrapper>
    </>
  );
}
