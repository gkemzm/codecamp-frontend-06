import SignProductHTML from "./signProduct.presenter";
import { IBoardSignProps } from "./signProduct.types";
import { CREATE_USEDITEM, FETCH_USED_ITEM } from "./signProduct.query";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

const schema = yup.object({
  name: yup.string().required("Name is required."),
  remarks: yup.string().required("Remarks is required."),
  contents: yup.string().required("Contents is required."),
  price: yup.number().required("Price is required"),
});

export default function SignProductContainer(props: IBoardSignProps) {
  const [createItem] = useMutation(CREATE_USEDITEM);

  const router = useRouter();

  const [productImageUrls, setProductImageUrls] = useState(["", ""]);

  const onChangeProductImage = (fileUrl: string, index: number) => {
    const newproductImageUrls = [...productImageUrls];
    newproductImageUrls[index] = fileUrl;
    setProductImageUrls(newproductImageUrls);
  };
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM);

  useEffect(() => {
    if (data?.fetchUseditem.images?.length) {
      setProductImageUrls([...data?.fetchUseditem.images]);
    }
  }, [data]);

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
            tags: data.tags,
            images: productImageUrls,
          },
        },
      });
      console.log(result);
      alert("Sign Success");
      router.push("/market");
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
      onChangeProductImage={onChangeProductImage}
      productImageUrls={productImageUrls}
    />
  );
}
