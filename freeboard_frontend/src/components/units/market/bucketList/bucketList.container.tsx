import { useEffect, useState } from "react";
import * as S from "./bucketList.styles";

import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import { useRecoilState } from "recoil";
import { TodayItemList } from "../../../commons/store/index";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
interface IPropsBucket {
  // isOpenBucket: boolean;
  isOpenBucket: boolean;
}
export default function BucketList(props: IPropsBucket) {
  const [bucketItem, setBucketItems] = useState([]);
  const [deleteList, setDeleteList] = useRecoilState(TodayItemList);
  const { onClickMoveToPage } = useMoveToPage();

  useEffect(() => {
    const bucket = JSON.parse(localStorage.getItem("bucket") || "[]");
    setBucketItems(bucket);
    console.log(bucketItem, "이거");
  }, []);

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
      {props.isOpenBucket ? (
        <></>
      ) : (
        <div>
          <S.TextDiv>장바구니</S.TextDiv>
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
