import DetailProductHTML from "./detailProduct.presenter";
// import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import {
  FETCH_USED_ITEM,
  DELETE_USEDITEM,
  CREATE_POINT_BUYING_SELLING,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from "./detailProduct.query";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useAuth } from "../../../commons/hooks/useAuth";
import { MouseEvent, useState } from "react";
import { TodayItemList } from "../../../commons/store/index";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function DetailProductContainer() {
  useAuth();
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [buyingProduct] = useMutation(CREATE_POINT_BUYING_SELLING);
  const [pickedItem] = useMutation(TOGGLE_USEDITEM_PICK);
  const [, setDeleteList] = useRecoilState(TodayItemList);
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const deleteUseditemDetailBoard = async () => {
    try {
      const result = await deleteUseditem({
        variables: {
          useditemId: String(router.query.marketId),
        },
      });
      console.log("여기가 2");
      console.log(result);
      alert("삭제가 성공하였습니다.");
      router.push("/market");
    } catch (error) {
      alert("삭제에 실패했습니다.");
    }
  };

  const buyingProductOnPoint = async () => {
    try {
      const buyResult = await buyingProduct({
        variables: {
          useritemId: String(router.query.marketId),
        },
      });
      console.log(buyResult);
      refetch();
      alert("Purchase Success");
      router.push("/market");
    } catch (error) {
      alert("Purchase Failed...");
    }
  };

  const pickedUseditem = async () => {
    try {
      const pickResult = await pickedItem({
        variables: {
          useditemId: String(router.query.marketId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.marketId,
            },
          },
        ],
      });
      console.log(pickResult);
    } catch (error) {
      alert("pick failed");
    }
  };

  const [a, setA] = useState<string[]>([]);
  const onClickBasket = (data: any) => (event: MouseEvent<HTMLDivElement>) => {
    const bucket = JSON.parse(localStorage.getItem("bucket") || "[]");
    const temp = bucket.filter(
      (el: any) => el.fetchUseditem?._id === data.fetchUseditem?._id
    );
    if (temp.length === 1) {
      alert("이미담은 상품입니다.");
      return 200;
    }
    const { __typename, ...newAAA } = data;
    bucket.push(newAAA);
    localStorage.setItem("bucket", JSON.stringify(bucket));
    setA([...a, (event.target as HTMLButtonElement).id]);
    setDeleteList((prev) => !prev);
    alert("장바구니에 담았습니다!");
    console.log(data);
  };

  console.log(data);
  return (
    <DetailProductHTML
      data={data}
      userData={userData}
      pickedUseditem={pickedUseditem}
      deleteUseditemDetailBoard={deleteUseditemDetailBoard}
      buyingProductOnPoint={buyingProductOnPoint}
      onClickBasket={onClickBasket}
    />
  );
}

// export default withAuth(DetailProductContainer);
