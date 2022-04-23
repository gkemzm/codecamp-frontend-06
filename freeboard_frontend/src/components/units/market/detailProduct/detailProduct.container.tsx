import DetailProductHTML from "./detailProduct.presenter";

// import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_USED_ITEM, DELETE_USEDITEM } from "./detailProduct.query";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useAuth } from "../../../commons/hooks/useAuth";

export default function DetailProductContainer() {
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const router = useRouter();
  useAuth();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  const deleteUseditemDetailBoard = async () => {
    try {
      const result2 = await deleteUseditem({
        variables: {
          useditemId: String(router.query.marketId),
        },
      });
      console.log("여기가 2");
      console.log(result2);
      alert("삭제가 성공하였습니다.");
      router.push("/market");
    } catch (error) {
      alert("삭제에 실패했습니다.");
    }
  };

  console.log(data);
  return (
    <DetailProductHTML
      data={data}
      deleteUseditemDetailBoard={deleteUseditemDetailBoard}
    />
  );
}
