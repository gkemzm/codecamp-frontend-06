import SignProductHTML from "./signProduct.presenter";
import { IBoardSignProps } from "./signProduct.types";
import {
  CREATE_USEDITEM,
  FETCH_USED_ITEM,
  UPDATE_USEDITEM,
} from "./signProduct.query";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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

const editSchema = yup.object({
  name: yup.string(),
  remarks: yup.string(),
  contents: yup.string(),
  price: yup.number(),
  addressDetail: yup.string(),
});

export default function SignProductContainer(props: IBoardSignProps) {
  const [createItem] = useMutation(CREATE_USEDITEM);
  const [updateItem] = useMutation(UPDATE_USEDITEM);
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const router = useRouter();

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const [productImageUrls, setProductImageUrls] = useState(["", ""]);

  const onChangeProductImage = (fileUrl: string, index: number) => {
    const newproductImageUrls = [...productImageUrls];
    newproductImageUrls[index] = fileUrl;
    setProductImageUrls(newproductImageUrls);
  };
  const { data: itemData } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });
  console.log(itemData);

  const handleComplete = (data: any) => {
    setAddress(data.address);
    setValue("useditemAddress.address", data.address);
    setZipcode(data.zonecode);
    setValue("useditemAddress.zipcode", data.zonecode);
    console.log(data);
  };

  useEffect(() => {
    if (itemData?.fetchUseditem.images?.length) {
      setProductImageUrls([...itemData?.fetchUseditem.images]);
    }
  }, [itemData]);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState,
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(props.isEdit ? editSchema : schema),
    mode: "onChange",
  });
  const createUsedItem = async (data: any) => {
    try {
      const result = await createItem({
        variables: {
          createUseditemInput: {
            ...data,
            price: Number(data.price),
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

  const updateUsedItem = async (data: any) => {
    const currentFiles = JSON.stringify(productImageUrls);
    const defaultFiles = JSON.stringify(itemData?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateUseditemInput: any = {};
    if (data.name) updateUseditemInput.title = data.name;
    if (data.remark) updateUseditemInput.remark = data.remark;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = data.price;

    if (data.zipcode || data.address || data.addressDetail) {
      updateUseditemInput.useditemAddress = {};
      if (data.zipcode)
        updateUseditemInput.useditemAddress.zipcode = data.zipcode;
      if (data.address)
        updateUseditemInput.useditemAddress.address = data.address;
      console.log(data);
      if (data.addressDetail)
        updateUseditemInput.useditemAddress.addressDetail = data.addressDetail;
    }

    if (isChangedFiles) updateUseditemInput.images = productImageUrls;

    if (
      !data.name &&
      !data.remark &&
      !data.contents &&
      !data.price &&
      !data.address &&
      !data.addressDetail &&
      !data.zipcode &&
      !isChangedFiles
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    try {
      const updateResult = await updateItem({
        variables: {
          updateUseditemInput: {
            ...data,
            price: Number(data.price),
            images: productImageUrls,
          },
          useditemId: String(router.query.marketId),
        },
      });
      console.log(updateResult);
      alert("Update Success");
      router.push(`/market/${router.query.marketId}`);
    } catch {
      alert("Update Failed");
    }
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  useEffect(() => {
    console.log(itemData);
    setValue("name", itemData?.fetchUseditem?.name);
    setValue("remarks", itemData?.fetchUseditem?.remarks);
    setValue("contents", itemData?.fetchUseditem?.contents);
    setValue("price", itemData?.fetchUseditem?.price);
    setValue("tags", itemData?.fetchUseditem?.tags);
    setValue(
      "useditemAddress.addressDetail",
      itemData?.fetchUseditem?.useditemAddress?.addressDetail
    );
    setAddress(itemData?.fetchUseditem?.useditemAddress?.address);
    setZipcode(itemData?.fetchUseditem?.useditemAddress?.zipcode);
  }, [itemData]);

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
      zipcode={zipcode}
      updateUsedItem={updateUsedItem}
      itemData={itemData}
      reset={reset}
      getValues={getValues}
    />
  );
}
