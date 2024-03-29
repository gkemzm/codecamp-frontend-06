import { useState, MouseEvent } from "react";
import * as S from "./list2style";

export interface List222 {
  isActive: boolean;
  isActive2: boolean;
  refetch: any;
  lastPage: any;
  setIsActive: any;
  setIsActive2: any;
  btnColor: any;
}

export default function List2(props: List222) {
  const [startPage, setStartPage] = useState(1);
  const [btnColor, setBtnColor] = useState("");

  //   const onClickPage = (event: any) => {
  //     props.refetch({ page: Number(event.target.id) });
  //     event.target.style.color = "red";
  //   };
  const onClickPage = async (event: MouseEvent<HTMLButtonElement>) => {
    props?.refetch({ page: Number((event.target as HTMLButtonElement).id) });
    setBtnColor((event.target as HTMLButtonElement).id);
  };

  const onClickPrevPage = (event: MouseEvent<HTMLDivElement>) => {
    props.setIsActive2(true);
    if (startPage <= 10) {
      props.setIsActive(false);
      return;
    }
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 1 });
  };

  const onClickNextPage = (event: MouseEvent<HTMLDivElement>) => {
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
