import SignProductHTML from "./signProduct.presenter";
import { IBoardSignProps } from "./signProduct.types";
import { CREATE_USEDITEM, FETCH_USED_ITEM } from "./signProduct.query";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Address } from "../../../commons/store/index";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

const schema = yup.object({
  name: yup
    .string()
    .max(12, "최대 12글자 입니다.")
    .min(1, "1~12글자 사이로 작성해주세요.")
    .required("Name is required."),
  remarks: yup
    .string()
    .max(100, "최대 100글자 입니다.")
    .min(1, "1~100글자 사이로 작성해주세요")
    .required("Remarks is required."),
  contents: yup
    .string()
    .max(300, "최대 300글자 입니다.")
    .min(1, "1~300글자 사이로 작성해주세요")
    .required("Contents is required."),
  price: yup
    .number()
    .min(1, "가격을 입력해주세요")
    .required("Price is required"),
});

export default function SignProductContainer(props: IBoardSignProps) {
  const [createItem] = useMutation(CREATE_USEDITEM);
  const [isOpen, setIsOpen] = useState(false);
  // const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [zipcode, setZonecode] = useState("");
  const router = useRouter();
  const [address, setAddress] = useRecoilState(Address);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const [productImageUrls, setProductImageUrls] = useState(["", ""]);

  const onChangeProductImage = (fileUrl: string, index: number) => {
    const newproductImageUrls = [...productImageUrls];
    newproductImageUrls[index] = fileUrl;
    setProductImageUrls(newproductImageUrls);
  };
  const { data: itemData } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM);

  const handleComplete = (mapData: any) => {
    setAddress(mapData.address);
    setZonecode(mapData.zonecode);
    console.log(mapData.addressDetail);
  };

  useEffect(() => {
    if (itemData?.fetchUseditem.images?.length) {
      setProductImageUrls([...itemData?.fetchUseditem.images]);
    }
  }, [itemData]);

  const { register, handleSubmit, setValue, trigger, formState } = useForm({
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
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
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

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };
  return (
    <SignProductHTML
      isEdit={props.isEdit}
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      createUsedItem={createUsedItem}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeProductImage={onChangeProductImage}
      productImageUrls={productImageUrls}
      onChangeContents={onChangeContents}
      handleComplete={handleComplete}
      address={address}
      addressDetail={addressDetail}
      zipcode={zipcode}
      onChangeAddressDetail={onChangeAddressDetail}
    />
  );
}
