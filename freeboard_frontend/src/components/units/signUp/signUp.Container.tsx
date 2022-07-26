import SignUpPresenter from "./signUp.Presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signUp.query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormValues } from "./signUp.types";

const schema = yup.object({
  email: yup
    .string()
    .email("Email format is incorrect.")
    .required("Email is required."),
  name: yup
    .string()
    .matches(/^[a-zA-Z0-9]/, "The name condition is incorrect.")
    .required("Name is required."),
  password: yup
    .string()
    .matches(
      /^[A-Za-z\d$@$!%*#?&]{8,20}$/,
      "The password condition is incorrect."
    )
    .required("Password is required."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match. or Empty")
    .required("PW Check is required."),
});

export default function SignUpContainer() {
  const router = useRouter();

  const [signUpUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: IFormValues) => {
    try {
      await signUpUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      alert("Congratulation! Sign-Up Success!");
      router.push("/Login");
    } catch (error) {
      alert("Faild Sign Up");
    }
    // }
  };
  return (
    <>
      <SignUpPresenter
        onClickSignUp={onClickSignUp}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      />
    </>
  );
}
