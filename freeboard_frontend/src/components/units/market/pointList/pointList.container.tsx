import PointListHTML from "./pointList.presenter";
import { useQuery } from "@apollo/client";

import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_USER_LOGGED_IN,
} from "./pointList.query";

export default function PointList(props: any) {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: {
      search: "",
    },
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  return (
    <PointListHTML
      data={data}
      userData={userData}
      isOpenInfo={props.isOpenInfo}
    />
  );
}
