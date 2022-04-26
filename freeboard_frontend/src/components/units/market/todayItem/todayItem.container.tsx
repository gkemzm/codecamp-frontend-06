import TodayItemsHTML from "./todayItem.presenter";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { TodayItemList } from "../../../commons/store";
// import { TodayItemList } from '../../../commons/store/index';

export default function TodayItems() {
  const [todayWatchList, setTodayWatchList] = useState([]);
  const [deleteList, setDeleteList] = useRecoilState(TodayItemList);
  // const [todayItemList, setTodayItemList] =useRecoilState(TodayItemList)

  useEffect(() => {
    const todayWatchList = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );
    setTodayWatchList(todayWatchList);
  }, [deleteList]);

  const onClickDeleteList = (bbb: any) => () => {
    const deleteBaskets = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );

    const deleteTemp = deleteBaskets.filter((el: any) => bbb._id !== el._id);
    // setTodayWatchList(deleteBaskets.filter((el: any) => bbb._id !== el._id))

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
