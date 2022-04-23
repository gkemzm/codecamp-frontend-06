import DetailProductHTML from "./detailProduct.presenter";

// import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import {
  FETCH_USED_ITEM,
  DELETE_USEDITEM,
  CREATE_POINT_BUYING_SELLING,
} from "./detailProduct.query";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useAuth } from "../../../commons/hooks/useAuth";

export default function DetailProductContainer() {
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [buyingProduct] = useMutation(CREATE_POINT_BUYING_SELLING);
  const router = useRouter();
  useAuth();
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

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

  console.log(data);
  return (
    <DetailProductHTML
      data={data}
      deleteUseditemDetailBoard={deleteUseditemDetailBoard}
      buyingProductOnPoint={buyingProductOnPoint}
    />
  );
}
