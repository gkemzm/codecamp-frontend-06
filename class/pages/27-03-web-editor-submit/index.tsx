// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic"; // 서버가아닌 브라우저에서 import 하기 위함
import { useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: any) => {
    console.log(value);

    // register로 등록되지 않고, 강제로 값을 넣어주는 기능!!
    // <p><br></p>는 ReactQuill에서의 빈값을 나타냄 따라서 빈값이면 ""를 호출 아니면 value를 호출
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // (방아쇠)onChange 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    if (!data.writer && data.password && data.contents) {
      alert("모두 입력해 주세요!");
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      console.log(result);
      router.push(`27-04-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: (error as any).message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      <br />
      비밀번호:
      <input type="text" {...register("password")} />
      <br />
      제목:
      <input type="text" {...register("title")} />
      <br />
      내용:
      <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
