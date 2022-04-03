import { useState, MouseEvent } from "react";
import * as S from "./numbarStyles";
import { PageListProps } from "./numbar.types";

export default function PageList(props: PageListProps) {
  const [startPage, setStartPage] = useState(1);
  // const [btnColor, setBtnColor] = useState("");

  //   const onClickPage = (event: any) => {
  //     props.refetch({ page: Number(event.target.id) });
  //     event.target.style.color = "red";
  //   };
  const onClickPage = async (event: MouseEvent<HTMLButtonElement>) => {
    props?.refetch({ page: Number((event.target as HTMLButtonElement).id) });
    props?.setBtnColor((event.target as HTMLButtonElement).id);
  };

  const onClickPrevPage = () => {
    props.setIsActive2(true);
    if (startPage < 10) {
      props.setIsActive(false);
      return;
    }
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  // const onClickPrevTenPage = () => {
  //   props.setIsActive2(true);
  //   if (startPage < 10) {
  //     props.setIsActive(false);
  //     return;
  //   }
  //   setStartPage((prev) => prev - 10);
  //   props.refetch({ page: startPage - 10 });
  // };

  const onClickNextPage = () => {
    props.setIsActive(true);
    if (startPage + 10 > props.lastPage) {
      props.setIsActive2(false);
      return;
    }
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  // const onClickNextTenPage = () => {
  //   props.setIsActive(true);
  //   if (startPage + 10 > props.lastPage) {
  //     props.setIsActive2(false);
  //     return;
  //   }
  //   setStartPage((prev) => prev + 10);
  //   props.refetch({ page: startPage + 10 });
  // };

  return (
    <S.Wrapper>
      {/* <S.PrevPageBtn onClick={onClickPrevTenPage} isActive={props.isActive}>
        ◀◀
      </S.PrevPageBtn> */}
      <S.PrevPageBtn onClick={onClickPrevPage} isActive={props.isActive}>
        ◀
      </S.PrevPageBtn>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <S.ListButton
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
            btnColor={props.btnColor}
          >
            {``}
            {index + startPage}
          </S.ListButton>
        ) : (
          <span key={index + startPage}></span>
        )
      )}
      <S.NextPageBtn onClick={onClickNextPage} isActive2={props.isActive2}>
        ▶
      </S.NextPageBtn>
      {/* <S.NextPageBtn onClick={onClickNextTenPage} isActive2={props.isActive2}>
        ▶▶
      </S.NextPageBtn> */}
    </S.Wrapper>
  );
}
