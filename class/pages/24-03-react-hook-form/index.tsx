import { useForm } from "react-hook-form";

interface IFormValues {
  Writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHoockFormPage() {
  const { register, handleSubmit, formState } = useForm();

  const onClickSubmit = (data: IFormValues) => {
    // handleSubmit 사용사  우리가 14 16 18번줄에 선언한 ...register("~~~")내용을 onClickSubmit 안에 넣어준다.
    console.log(data);
  };

  console.log("리렌더링 체크!!"); // 리렌더가 발생하지않음 결과적으로 입력되는 속독가 빠르다.

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자:
        <input type="text" {...register("myWriter")} />
        제목:
        <input type="text" {...register("myTitle")} />
        내용:
        <input type="text" {...register("myContents")} />
        내용:
        {/* <input type="text" {...register("boardAddress.addressDetail")} />  */}
        <button disabled={formState.isSubmitting}>등록하기</button>
      </form>
    </>
  );
}
