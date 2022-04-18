import {
  gql,
  Reference,
  StoreObject,
  useMutation,
  useQuery,
} from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // prev는 현재 fetchBoard의 상태
              const filteredPrev = prev.filter(
                (el: Reference | StoreObject | undefined) =>
                  readField("_id", el) !== deletedId
              );
              // 1. 삭제되고 남은 데이터들 9개 (deletedId 랑 일치 하지않는 el._id 9개) / 2. el._id가 안되므로, readField에서 꺼내오기
              return [...filteredPrev];
              // 무한스크롤 형태의 페이지에서 해당방법을 자주 사용한다.

              // 서비스가 클 경우 refetch는 쿼리를 한번더 요청하기 때문에 서버에 부하가 더 오게 된다.
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        // data.createBoard
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]; // 10개(기존), 1개(새로추가한)
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// 1. 구조분해 할당으로 함수 파라미터 받기
// function onClickAAA({ name, age, school }){
//   console.log(name)
// }

// const child = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// }
// onClickAAA(child)

//   const name = "철수"
//   const age = 13
//   const school = "다람쥐초등학교"
//   onClickAAA({
//       name: name ,
//       age: age,
//       school: school
//   })

// 2. 안좋은 옛날 방식
// function onClickAAA(name, age, school){
//   console.log(name)
// }

// const name: "철수"
// const age: 13
// const school: "다람쥐초등학교"
// onClickAAA(name, school)
