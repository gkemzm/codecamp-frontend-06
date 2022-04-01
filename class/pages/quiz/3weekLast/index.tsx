import InfiniteScroll from "react-infinite-scroller";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function ThreeWeekListQuiz() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  console.log(data);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <div style={{ height: "500px", width: "1000px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        // loader={
        //   <div className="loader" key={0}>
        //     Loading ...
        //   </div>
        // }
        useWindow={false}
      >
        {data?.fetchBoards.map((el: any, index: number) => (
          <MyRow key={el._id}>
            <MyColumn>{el._id.slice(0, 5)}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title.slice(0, 10)}</MyColumn>
          </MyRow>
        ))}
      </InfiniteScroll>
    </div>
  );
}
