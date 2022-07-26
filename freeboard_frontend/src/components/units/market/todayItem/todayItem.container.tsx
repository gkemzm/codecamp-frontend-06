import TodayItemsHTML from "./todayItem.presenter";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { TodayItemList } from "../../../commons/store";
import { IUseditem } from "../../../../commons/types/generated/types";
// import { TodayItemList } from '../../../commons/store/index';

export default function TodayItems() {
  const [todayWatchList, setTodayWatchList] = useState<Array<IUseditem>>([]);
  const [deleteList, setDeleteList] = useRecoilState(TodayItemList);
  // const [todayItemList, setTodayItemList] =useRecoilState(TodayItemList)

  useEffect(() => {
    const todayWatchList = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );
    setTodayWatchList(todayWatchList);
  }, [deleteList]);

  const onClickDeleteList = (delList: IUseditem) => () => {
    const deleteBaskets = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );

    const deleteTemp = deleteBaskets.filter(
      (el: IUseditem) => delList._id !== el._id
    );

    console.log(deleteTemp);
    localStorage.setItem("todayWatchList", JSON.stringify(deleteTemp));
    setDeleteList((prev) => !prev);
  };

  return (
    <TodayItemsHTML
      todayWatchList={todayWatchList}
      onClickDeleteList={onClickDeleteList}
    />
  );
}
