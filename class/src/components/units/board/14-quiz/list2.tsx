import { useState } from "react";
import * as S from "./list2style";

export interface List222 {
  isActive: boolean;
  isActive2: boolean;
  //   isActive3: boolean;
  refetch: any;
  lastPage: any;
  setIsActive: any;
  setIsActive2: any;
  btnColor: any;
  //   setIsActive3: any;
}

export default function List2(props: List222) {
  const [startPage, setStartPage] = useState(1);
  const [btnColor, setBtnColor] = useState("");

  //   const onClickPage = (event: any) => {
  //     props.refetch({ page: Number(event.target.id) });
  //     event.target.style.color = "red";
  //   };
  const onClickPage = async (event: any) => {
    props?.refetch({ page: Number(event.target.id) });
    setBtnColor(event.target.id);
  };

  const onClickPrevPage = (event: any) => {
    props.setIsActive2(true);
    if (startPage <= 10) {
      props.setIsActive(false);
      return;
    }
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 1 });
  };

  const onClickNextPage = (event: any) => {
    props.setIsActive(true);
    if (startPage + 10 > props.lastPage) {
      props.setIsActive2(false);
      return;
    }
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <S.Wrapper>
      <S.Btn onClick={onClickPrevPage} isActive={props.isActive}>
        ◀
      </S.Btn>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <S.ListButton
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
            btnColor={btnColor}
          >
            {``}
            {index + startPage}
          </S.ListButton>
        ) : (
          <span></span>
        )
      )}
      <S.Btn2 onClick={onClickNextPage} isActive2={props.isActive2}>
        ▶
      </S.Btn2>
    </S.Wrapper>
  );
}
