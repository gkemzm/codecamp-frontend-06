import DetailProductHTML from "./detailProduct.presenter";

// import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_USED_ITEM } from "./detailProduct.query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function DetailProductContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  return <DetailProductHTML data={data} />;
}
