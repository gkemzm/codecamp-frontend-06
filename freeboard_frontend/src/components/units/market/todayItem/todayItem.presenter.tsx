import * as S from "./todayItem.styles";
import { getDate } from "../../../../commons/utils";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { IUseditem } from "../../../../commons/types/generated/types";

interface IrecentlyWatchProps {
  todayWatchList: Array<IUseditem>;
  onClickDeleteList: (delList: IUseditem) => () => void;
}
export default function TodayItemsHTML(props: IrecentlyWatchProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      {props.todayWatchList?.map((el: IUseditem) => (
        <S.MyRow key={el._id}>
          <S.MyColumn>
            <S.ListBox>
              <S.DeleteBtn onClick={props.onClickDeleteList(el)}>
                ❌
              </S.DeleteBtn>
              <S.Title>{el.name}</S.Title>
              {el.images?.[0] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  onClick={onClickMoveToPage(`/market/${el._id}`)}
                ></S.Img>
              ) : (
                <S.Img src="/NoImage2.png"></S.Img>
              )}

              <S.MyColumn>{el.remarks}</S.MyColumn>
              <S.MyColumn>{el.price}</S.MyColumn>
              <S.MyColumn>{getDate(el.createdAt)}</S.MyColumn>
            </S.ListBox>
          </S.MyColumn>

          {/* <S.MyColumn> {getDate(el.createdAt).slice(7, 9)}</S.MyColumn> */}
        </S.MyRow>
      ))}
    </S.Wrapper>
  );
}
