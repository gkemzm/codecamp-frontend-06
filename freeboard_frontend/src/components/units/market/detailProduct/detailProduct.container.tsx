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
// import { useAuth } from "../../../commons/hooks/useAuth";
import { MouseEvent, useState } from "react";

export default function DetailProductContainer() {
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [buyingProduct] = useMutation(CREATE_POINT_BUYING_SELLING);
  const [pickedItem] = useMutation(TOGGLE_USEDITEM_PICK);
  const router = useRouter();
  // useAuth();
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
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
      });
      console.log(pickResult);
    } catch (error) {
      alert("pick failed");
    }
  };

  const [a, setA] = useState<string[]>([]);
  const onClickBasket = (aaa: any) => (event: MouseEvent<HTMLDivElement>) => {
    console.log(aaa);

    const bucket = JSON.parse(localStorage.getItem("bucket") || "[]");

    const temp = bucket.filter((basketEl: any) => basketEl._id === aaa._id);
    if (temp.length === 1) {
      return 200;
    }
    const { __typename, ...newAAA } = aaa;
    bucket.push(newAAA);
    localStorage.setItem("bucket", JSON.stringify(bucket));
    setA([...a, (event.target as HTMLButtonElement).id]);
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
