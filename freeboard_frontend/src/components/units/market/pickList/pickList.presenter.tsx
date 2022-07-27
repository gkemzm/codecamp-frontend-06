import * as S from "./pickList.styles";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useState } from "react";
import SkyBlueButton from "../../../commons/buttons/skyBlueButton/index";
import { IUseditem } from "../../../../commons/types/generated/types";

interface IPickedListHTMLProps {
  data: { fetchUseditemsIPicked: Array<IUseditem> };
}
export default function PickedListHTML(props: IPickedListHTMLProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpen, setIsOpen] = useState(true);

  const OpenPickList = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <S.Wrapper>
      <div onClick={OpenPickList}>
        <SkyBlueButton isActive={false} title={"찜목록"} />
      </div>
      {isOpen ? (
        <></>
      ) : (
        <div>
          {props.data?.fetchUseditemsIPicked?.map((el: IUseditem) => (
            <S.BasicRow key={el._id}>
              <S.Bucket>
                <S.Img
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  onClick={onClickMoveToPage(`/market/${el._id}`)}
                ></S.Img>
                <S.BasicColumn>
                  <S.BasicRow2>
                    <S.Name>{el.name}</S.Name>
                    {/* <S.DelBtn>삭제하기</S.DelBtn> */}
                  </S.BasicRow2>
                  <S.Contents>{el.remarks}</S.Contents>
                  <S.Contents
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(`${el.contents}`),
                    }}
                  ></S.Contents>
                  <S.Tags>
                    {el.tags &&
                      el.tags.map((el: string) => (
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
