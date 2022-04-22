import DetailProductHTML from "./detailProduct.presenter";

// import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_USED_ITEM } from "./detailProduct.query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useAuth } from "../../../commons/hooks/useAuth";

export default function DetailProductContainer() {
  const router = useRouter();
  useAuth();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  console.log(data);
  return <DetailProductHTML data={data} />;
}