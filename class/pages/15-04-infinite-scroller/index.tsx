import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
// 게시글 상세
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

export default function StaticRoutedPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  console.log(data);

  const onLoadMore = () => {
    if (!data) return; // 데이터가 없으면 요청하지말하라

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
    <div style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        //   loadMore={loadFunc}  //추가로 패치할것
        hasMore={true}
        //   hasMore={true || false}
        //   loader={
        //     <div className="loader" key={0}>
        //       Loading ...
        //     </div>
        //   }
        useWindow={false}
      >
        {data?.fetchBoards.map((el, index) => (
          <MyRow key={el._id}>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </InfiniteScroll>
    </div>
  );
  // 고유한 값을가진 키가 필요하다.
}
