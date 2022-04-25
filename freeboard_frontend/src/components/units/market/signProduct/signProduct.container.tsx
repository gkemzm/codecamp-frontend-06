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
import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/router";
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

const editSchema = yup.object({
  name: yup.string(),
  remarks: yup.string(),
  contents: yup.string(),
  price: yup.number(),
});

export default function SignProductContainer(props: IBoardSignProps) {
  const [createItem] = useMutation(CREATE_USEDITEM);
  const [updateItem] = useMutation(UPDATE_USEDITEM);
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
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
  const { data: itemData } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  const handleComplete = (mapData: any) => {
    setAddress(mapData.address);
    setZipcode(mapData.zonecode);
    console.log(mapData.addressDetail);
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

  const updateUsedItem = async (data: any) => {
    const currentFiles = JSON.stringify(productImageUrls);
    const defaultFiles = JSON.stringify(itemData?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateUseditemInput: any = {};
    if (data.name) updateUseditemInput.title = data.name;
    if (data.remark) updateUseditemInput.remark = data.remark;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = data.price;

    if (zipcode || address || addressDetail) {
      updateUseditemInput.useditemAddress = {};
      if (zipcode) updateUseditemInput.useditemAddress.zipcode = zipcode;
      if (address) {
        updateUseditemInput.useditemAddress.address = address;
      } else if (!address) {
        const addressValue = itemData?.fetchUseditem.useditemAddress?.address;
        console.log("이거봐");
        console.log(addressValue);
        setAddress(addressValue);
      }
      console.log(data);
      if (addressDetail)
        updateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }

    if (isChangedFiles) updateUseditemInput.images = productImageUrls;

    if (
      !data.name &&
      !data.remark &&
      !data.contents &&
      !data.price &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangedFiles
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    try {
      const updateResult = await updateItem({
        variables: {
          updateUseditemInput: {
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
      updateUsedItem={updateUsedItem}
      itemData={itemData}
      reset={reset}
      getValues={getValues}
    />
  );
}
