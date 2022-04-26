import ListBoardHTML from "./listProduct.presenter";
import { FETCH_USED_ITEMS } from "./listProduct.query";
import { useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { TodayItemList } from "../../../commons/store/index";

export default function ListBoardContainer() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const [deleteList, setDeleteList] = useRecoilState(TodayItemList);
  const [a, setA] = useState<string[]>([]);

  const onClickBasket = (aaa: any) => (event: MouseEvent<HTMLDivElement>) => {
    console.log(aaa);

    const todayWatchList = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );

    const temp = todayWatchList.filter(
      (basketEl: any) => basketEl._id === aaa._id
    );
    if (temp.length === 1) {
      return 200;
    }
    const { __typename, ...newAAA } = aaa;
    todayWatchList.push(newAAA);
    localStorage.setItem("todayWatchList", JSON.stringify(todayWatchList));
    setA([...a, (event.target as HTMLButtonElement).id]);
    console.log(a);
    setDeleteList((prev) => !prev);
  };

  return (
    <>
      <ListBoardHTML
        data={data}
        fetchMore={fetchMore}
        onClickBasket={onClickBasket}
      />
    </>
  );
}
