import { useQuery, gql } from "@apollo/client";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import PickedList from "../../src/components/units/market/pickList/pickList.container";
import BucketList from "../../src/components/units/market/bucketList/bucketList.container";
import * as S from "./myPageStyles";
import PointList from "../../src/components/units/market/pointList/pointList.container";
import { useState } from "react";
import BuyingList from "../../src/components/units/market/buyingList/buyingList.container";
import SoldList from "../../src/components/units/market/soldList/soldList.container";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function MyPage() {
  useAuth();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const [isOpenSold, setIsOpenSold] = useState(false);
  const [isOpenPick, setIsOpenPick] = useState(false);
  const [isOpenBucket, setIsOpenBucket] = useState(false);

  const OpenPickInfo = () => {
    setIsOpenInfo(false);
    setIsOpenBuy(true);
    setIsOpenSold(true);
    setIsOpenPick(true);
    setIsOpenBucket(true);
  };

  const OpenBuy = () => {
    setIsOpenInfo(true);
    setIsOpenBuy(false);
    setIsOpenSold(true);
    setIsOpenPick(true);
    setIsOpenBucket(true);
  };

  const OpenSold = () => {
    setIsOpenInfo(true);
    setIsOpenBuy(true);
    setIsOpenSold(false);
    setIsOpenPick(true);
    setIsOpenBucket(true);
  };

  const OpenPick = () => {
    setIsOpenInfo(true);
    setIsOpenBuy(true);
    setIsOpenSold(true);
    setIsOpenPick(false);
    setIsOpenBucket(true);
  };

  const OpenBucket = () => {
    setIsOpenInfo(true);
    setIsOpenBuy(true);
    setIsOpenSold(true);
    setIsOpenPick(true);
    setIsOpenBucket(false);
  };

  return (
    <S.Wrapper>
      <S.BasicRow>
        <S.ButtonList>
          <S.Btn onClick={OpenPickInfo}>내정보</S.Btn>
          =============
          <S.Btn onClick={OpenSold}>판매내역</S.Btn>
          <S.Btn onClick={OpenBuy}>구매내역</S.Btn>
          =============
          <S.Btn onClick={OpenPick}>찜목록</S.Btn>
          <S.Btn onClick={OpenBucket}>장바구니</S.Btn>
        </S.ButtonList>
        <S.Area>
          <PickedList isOpenPick={isOpenPick} />
          <BucketList isOpenBucket={isOpenBucket} />
          <PointList isOpenInfo={isOpenInfo} />
          <BuyingList isOpenBuy={isOpenBuy} />
          <SoldList isOpenSold={isOpenSold} />
        </S.Area>
      </S.BasicRow>
    </S.Wrapper>
  );
}

export default MyPage;
