import { useState } from "react";

// const FETCH_BOARDS_COUNT = gql`
//   query fetchBoardsCount {
//     fetchBoardsCount
//   }
// `;
export default function Pagination(props: any) {
  const [startPage, setStartPage] = useState(1);

  //   const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  //   const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: any) => {
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = (event: any) => {
    // if (startPage > 10) {props.
    //   setStartPage((prev) => prev - 10);
    // }
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 1 });
  };

  const onClickNextPage = (event: any) => {
    if (startPage + 10 > props.lastPage) return;
    // if(!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <button
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {``}
            {index + startPage}
          </button>
        ) : (
          <span></span>
        )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
