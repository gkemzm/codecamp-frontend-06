import ListBoardHTML from "./listProduct.presenter";
import { FETCH_USED_ITEMS } from "./listProduct.query";
import { useQuery } from "@apollo/client";

export default function ListBoardContainer() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  console.log(data);

  // const MoveToProductDetail = (event: MouseEvent<HTMLDivElement>) => {
  //   router.push(`/market/${(event.target as HTMLDivElement).id}`);
  // };
  return (
    <>
      <ListBoardHTML data={data} fetchMore={fetchMore} />
    </>
  );
}
