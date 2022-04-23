import SkyBlueButton from "../../../commons/buttons/skyBlueButton";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./listProduct.styels";
import { IListProps } from "./listProduct.type";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import BestProductContainer from "./bestList/bestList.container";
import { useState } from "react";
import DOMPurify from "dompurify";
import { getDate } from "../../../../commons/utils";

export default function ListBoardHTML(props: IListProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const [isHover, setIsHover] = useState(false);
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

  const onClickBtnDisplay = () => {
    if (isHover === false) {
      setIsHover(true);
    } else if (isHover === true) {
      setIsHover(false);
    }
  };
  return (
    <>
      <S.Wrapper>
        <S.BestBoard>
          <S.Area onClick={onClickMoveToPage("/market/new")}>
            <SkyBlueButton isActive={false} title={"Product Sign"} />
          </S.Area>
          <S.Area onClick={onClickBtnDisplay}>
            <SkyBlueButton isActive={false} title={"BEST"} />
          </S.Area>
        </S.BestBoard>
        <S.Area2 isHover={isHover}>
          <BestProductContainer />
        </S.Area2>
        <div style={{ height: "730px", width: "1220px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            loader={<div className="loader" key={0}></div>}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any) => (
              <S.ProductBox
                key={el._id}
                onClick={onClickMoveToPage(`/market/${el._id}`)}
              >
                {el.images[0] ? (
                  <S.ImageBox
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  ></S.ImageBox>
                ) : (
                  <S.ImageBox src="/NoImage2.png"></S.ImageBox>
                )}

                <S.ProductDetail>
                  <div>
                    <S.ProductName>{el.name}</S.ProductName>
                    <S.ProductRemarks>요약: {el.remarks}</S.ProductRemarks>
                    {typeof window !== "undefined" ? (
                      <S.ProductRemarks
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(`설명 : ${el.contents}`),
                        }}
                      ></S.ProductRemarks>
                    ) : (
                      <S.ProductRemarks></S.ProductRemarks>
                    )}
                  </div>
                  <S.ProductTags>Tags: {el.tags}</S.ProductTags>
                </S.ProductDetail>
                <S.BasicColumn>
                  <S.Price>Seller: {el.seller.name}</S.Price>
                  <S.Price>Price: {el.price}</S.Price>
                  <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                </S.BasicColumn>
              </S.ProductBox>
            ))}
          </InfiniteScroll>
        </div>
      </S.Wrapper>
    </>
  );
}
