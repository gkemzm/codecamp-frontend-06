// import { useQuery, gql } from "@apollo/client";
import { ChangeEvent } from "react";
// import {
//   IQuery,
//   IQueryFetchBoardsArgs,
// } from "../../../../../commons/types/generated/types";
import _ from "lodash";
import SearchBoardHTML from "./BoardSearch.presenter";

// const FETCH_BOARDS = gql`
//   query fetchBoards($search: String, $page: Int) {
//     fetchBoards(search: $search, page: $page) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;

export default function BoardsSearchPage(props: any) {
  // const [keyword, setKeyword] = useState("");

  // const { data, refetch } = useQuery<
  //   Pick<IQuery, "fetchBoards">,
  //   IQueryFetchBoardsArgs
  // >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickPage = (event: any) => {
    props.refetch({ page: Number(event.target.id) });
  };

  return (
    <SearchBoardHTML
      keyword={props.keyword}
      data={props.data}
      onChangeSearch={onChangeSearch}
      onClickPage={onClickPage}
    />
  );
}
