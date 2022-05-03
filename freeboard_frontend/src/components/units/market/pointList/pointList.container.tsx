import PointListHTML from "./pointList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_BUYING,
  FETCH_POINT_TRANSACTIONS_SELLING,
} from "./pointList.query";

export default function PointList() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: {
      search: "",
    },
  });

  const { data: buyData } = useQuery(FETCH_POINT_TRANSACTIONS_BUYING, {
    variables: {
      search: "",
    },
  });

  const { data: sellData } = useQuery(FETCH_POINT_TRANSACTIONS_SELLING, {
    variables: {
      search: "",
    },
  });

  console.log(data, "충전");
  console.log(buyData, "구매");
  console.log(sellData, "판매");
  return <PointListHTML />;
}
