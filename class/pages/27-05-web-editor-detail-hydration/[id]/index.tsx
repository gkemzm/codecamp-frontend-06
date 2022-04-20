import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const FETCH_BOARDS = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { boardId: router.query.id },
  });
  return (
    <>
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        <div style={{ color: "blue" }}></div>
      )}

      <div style={{ color: "brown" }}>상품가격: </div>
    </>
  );
}

// typeof window 로 서버를 거치지 않고 브라우저에 바로 랜더를 했기에
// 서버에서 읽는 div갯수와 브라우저에서 읽는 div 갯수가 달라서
// hydration 이슈가 발생하여 blue가 brown으로 적용됐다.

// 따라서 갯수를 맞춰주기 위해 삼항연산자를 사용해
// 서버에서 사용 될 <div style={{ color: "blue" }}></div>를 주었다.
