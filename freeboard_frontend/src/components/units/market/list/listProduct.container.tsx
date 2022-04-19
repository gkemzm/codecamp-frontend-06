import ListBoardHTML from "./listProduct.presenter";
import { FETCH_USED_ITEMS } from "./listProduct.query";
import { useQuery } from "@apollo/client";

export default function ListBoardContainer() {
  const { data } = useQuery(FETCH_USED_ITEMS);
  console.log(data);
  return (
    <>
      <ListBoardHTML data={data} />
    </>
  );
}
