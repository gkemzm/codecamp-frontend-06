import TodayItemsHTML from "./todayItem.presenter";
import { useState, useEffect } from "react";
export default function TodayItems() {
  const [todayWatchList, setTodayWatchList] = useState([]);

  useEffect(() => {
    const todayWatchList = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );
    setTodayWatchList(todayWatchList);
  }, [todayWatchList]);

  const onClickDeleteList = (bbb: any) => () => {
    const deleteBaskets = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );

    const deleteTemp = deleteBaskets.filter((el: any) => bbb._id !== el._id);

    console.log(deleteTemp);
    localStorage.setItem("todayWatchList", JSON.stringify(deleteTemp));
  };

  return (
    <TodayItemsHTML
      todayWatchList={todayWatchList}
      onClickDeleteList={onClickDeleteList}
    />
  );
}
