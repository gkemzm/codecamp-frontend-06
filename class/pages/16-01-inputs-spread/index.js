import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

// 묶음으로 mymutation에서 한번 요청한 정보를 createProduct(), fetchBoards ... 여러군대에 나눠줄 수 있다.
const CREATE_BOARD = gql`
  mutation mymutation($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      writer
      title
      contents
    }
  }
`;
// 예전에 썻던 query와 다르기 때문에 오류가 나므로 나중에 gql 꼭 수정해주자
export default function GraphqlMutationPage() {
  // const [mywriter, setMyWriter] = useState("")
  // const [mytitle, setMyTitle] = useState("")
  // const [mycontents, setMyContents] = useState("")

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { ...inputs }, // spread연산자 사용해서 정보가져오기
    }); // graphql-api방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  //   const onChangeWriter = (event) => {
  //     setInputs({
  //         writer: inputs.writer,
  //         title: inputs.title,
  //         contents: inputs.contents,
  //         writer: event.target.value
  //     })
  //   };
  // 이렇게 해도 아래쪽에 있는 writer로 덮어쓰여 상관은 없다.
  // 그런고로 저 내용은 spread연산자를 통해 아래처럼 해줄 수 있다.

  //   const onChangeWriter = (event) => {
  //     setInputs({
  //       ...inputs,
  //       writer: event.target.value,
  //       [event.target.id]: event.target.value
  //     });
  //   };

  //   const onChangeTitle = (event) => {
  //     setInputs({
  //       ...inputs,
  //       [event.target.id]: event.target.value
  //     });
  //   };

  //   const onChangeContents = (event) => {
  //     setInputs({
  //       ...inputs,
  //       [event.target.id]: event.target.value
  //     });
  //   };
  // 위 함수 3개가 아래로 바뀜

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      {/* <div>{data}</div> */}
      작성자:
      <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목:
      <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용:
      <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}
