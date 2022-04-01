// import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import BoardCommentItem from "../../src/components/units/board/15-board-comment/15-board-comment";

// 게시글 상세
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  // const [myIndex, setMyIndex] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // const onClickEdit = (event) => {
  //   const aaa = myIndex;
  //   aaa[event.target.id] = true; // 일반적인 복사가 일어나 30행의 false가 true로 설정됨
  //   console.log(aaa);
  //   setMyIndex(aaa); // 기존상태
  //   setMyIndex([...aaa]); // 얕은복사를해준상태
  //   // setMyIndex(Number(event.target.id));
  // };

  // console.log(data);
  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </div>
  );
  // 고유한 값을가진 키가 필요하다.
}
