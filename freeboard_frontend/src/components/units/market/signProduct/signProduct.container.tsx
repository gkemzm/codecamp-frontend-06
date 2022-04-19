import SignProductHTML from "./signProduct.presenter";
import { IBoardSignProps } from "./signProduct.types";
import { CREATE_USEDITEM } from "./signProduct.query";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Z0-9]/, "The name condition is incorrect.")
    .required("Name is required."),
  remarks: yup.string().required("remarks is required."),
  contents: yup.string().required("contents is required."),
});

export default function SignProductContainer(props: IBoardSignProps) {
  const [createItem] = useMutation(CREATE_USEDITEM);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const createUsedItem = async (data: any) => {
    try {
      const result = await createItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            // tags: data.tags,
            // images: data.images,
          },
        },
      });
      console.log(result);
    } catch {
      alert("Sign Failed");
    }
  };
  return (
    <SignProductHTML
      isEdit={props.isEdit}
      createUsedItem={createUsedItem}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
