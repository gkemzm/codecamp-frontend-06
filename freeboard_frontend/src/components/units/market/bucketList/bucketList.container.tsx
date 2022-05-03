import { useEffect, useState } from "react";
import * as S from "./bucketList.styles";

import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import { useRecoilState } from "recoil";
import { TodayItemList } from "../../../commons/store/index";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import SkyBlueButton from "../../../commons/buttons/skyBlueButton/index";

export default function BucketList() {
  const [bucketItem, setBucketItems] = useState([]);
  const [deleteList, setDeleteList] = useRecoilState(TodayItemList);
  const [isOpen, setIsOpen] = useState(true);
  // const [iPicked, setIPicked] = useState([]);
  const { onClickMoveToPage } = useMoveToPage();

  useEffect(() => {
    const bucket = JSON.parse(localStorage.getItem("bucket") || "[]");
    setBucketItems(bucket);
    console.log(bucketItem, "이거");
  }, []);

  const OpenBucket = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    console.log(isOpen);
    console.log(bucketItem);
  };

  useEffect(() => {
    const bucket = JSON.parse(localStorage.getItem("bucket") || "[]");
    setBucketItems(bucket);
  }, [deleteList]);

  const onClickDeleteList = (bbb: any) => () => {
    const bucket = JSON.parse(localStorage.getItem("bucket") || "[]");
    const deleteTemp = bucket.filter(
      (el: any) => bbb.fetchUseditem?._id !== el.fetchUseditem?._id
    );
    console.log(deleteTemp);
    localStorage.setItem("bucket", JSON.stringify(deleteTemp));
    setDeleteList((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <div onClick={OpenBucket}>
        <SkyBlueButton isActive={false} title={"장바구니"} />
      </div>
      {isOpen ? (
        <></>
      ) : (
        <div>
          {bucketItem.map((el: any) => (
            <S.BasicRow key={el.fetchUseditem?._id}>
              <S.Bucket>
                {el.fetchUseditem?.images[0] ? (
                  <S.Img
                    src={`https://storage.googleapis.com/${el.fetchUseditem?.images[0]}`}
                    onClick={onClickMoveToPage(`/market/${el._id}`)}
                  ></S.Img>
                ) : (
                  <S.Img
                    src="/NoImage2.PNG"
                    onClick={onClickMoveToPage(`/market/${el._id}`)}
                  ></S.Img>
                )}

                <S.BasicColumn>
                  <S.BasicRow2>
                    <S.Name>{el.fetchUseditem?.name}</S.Name>
                    <S.DelBtn onClick={onClickDeleteList(el)}>
                      삭제하기
                    </S.DelBtn>
                  </S.BasicRow2>
                  <S.Contents>{el.fetchUseditem?.remarks}</S.Contents>
                  <S.Contents
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        `${el.fetchUseditem?.contents}`
                      ),
                    }}
                  ></S.Contents>
                  <S.Tags>
                    {el.fetchUseditem?.tags.map((el: any) => (
                      <S.BasicRow key={uuidv4()}>
                        <S.Tag>{el}</S.Tag>
                      </S.BasicRow>
                    ))}
                  </S.Tags>
                </S.BasicColumn>
              </S.Bucket>
            </S.BasicRow>
          ))}
        </div>
      )}
    </S.Wrapper>
  );
}
