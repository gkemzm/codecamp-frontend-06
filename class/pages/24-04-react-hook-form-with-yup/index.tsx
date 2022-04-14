import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

interface IFormValues {
  email?: string;
  password?: string;
}

interface Iprops {
  isActive: boolean;
}

const Button = styled.button`
  background-color: ${(props: Iprops) => (props.isActive ? "yellow" : "")};
`;

const Error = styled.div`
  color: red;
  font-size: 13px;
`;

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호는 필수 입력 사항입니다."), // password >= 4 && password <= 15
});

export default function ReactHoockFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // formState.isValid;

  const onClickSubmit = (data: IFormValues) => {
    // handleSubmit 사용사  우리가 14 16 18번줄에 선언한 ...register("~~~")내용을 onClickSubmit 안에 넣어준다.
    console.log(data);
  };

  console.log("리렌더링 체크!!"); // 리렌더가 발생하지않음 결과적으로 입력되는 속도가 빠르다.

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        이메일:
        <input type="text" {...register("email")} />
        <Error style={{ color: "red" }}>
          {formState.errors.email?.message}
        </Error>
        비밀번호:
        <input type="text" {...register("password")} />
        <Error style={{ color: "red" }}>
          {formState.errors.password?.message}
        </Error>
        <Button isActive={formState.isValid}>로그인하기</Button>
      </form>
    </>
  );
}
