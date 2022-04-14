import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input02 from "../../../src/components/commons/inputs/02";
import Button02 from "../../../src/components/commons/buttons/02";

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const Error = styled.div`
  color: red;
  font-size: 13px;
`;

const schema = yup.object({
  title: yup
    .string()
    .max(100, "Title is under 100 words")
    .required("Title is required!"),

  writer: yup
    .string()
    .max(5, "Writer is under 5 words")
    .required("Writer is required!"),

  password: yup
    .string()
    .max(8, "Password is under 8 words")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{1,}$/,
      "The condition is incorrect."
    )
    .required("Password is required!"),

  contents: yup.string().max(1000, "Writer is under 5 words"),
});

export default function ReactHoockFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        제목: <Input02 type="text" register={register("title")} />
        <Error>{formState.errors.title?.message}</Error>
        작성자: <Input02 type="text" register={register("writer")} />
        <Error>{formState.errors.writer?.message}</Error>
        비밀번호: <Input02 type="text" register={register("password")} />
        <Error>{formState.errors.password?.message}</Error>
        내용: <Input02 type="text" register={register("contents")} />
        <Error>{formState.errors.contents?.message}</Error>
        <Button02 isActive={formState.isValid} title="등록하기" />
      </form>
    </>
  );
}
