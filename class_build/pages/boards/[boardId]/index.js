import { useRouter } from "next/router";
import { Head } from "next/head";
import { gql, request } from "graphql-request";
export default function BoardsDetailPage(props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta property="og:title" content={props.myboardData?.title}></meta>
        <meta
          property="og:description"
          content={props.myboardData?.contents}
        ></meta>
        <meta property="og:image" content={props.myboardData?.images[0]}></meta>
      </Head>
      <div>
        안녕하세요! 게시글 상세페이지 입니다!!!, 게시글 ID는{" "}
        {router.query.boardId} 입니다!!!
      </div>
    </>
  );
}

// 이 페이지는 서버사이드 렌더링 할래!!
// 페이지에서만 사용이 가능하다.
// 컴포넌트는 불가능 하다.

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;
export const getServerSideProps = async (context) => {
  // 데이터를 요청할 것!!!
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    {
      boardId: context?.query.boardId,
    }
  );
  //   const { data } = useQuery(FETCH_BOARD); // 서버에서는 useQuery 사용불가

  return {
    props: {
      myboardData: {
        title: result?.fetchBoard.title,
        contents: result?.fetchBoard.contents,
        images: result?.fetchBoard.images,
      },
    },
  };
};
