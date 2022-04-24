import * as S from "./signProduct.styles";
import SkyBlueButton from "../../../commons/buttons/skyBlueButton/index";
import { ISignProductBoardHtmlProps } from "./signProduct.types";
import { v4 as uuidv4 } from "uuid";
import ProductImageSignPage from "../images/imageSign";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import KakaoMapPage from "../map/index";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function SignProductHTML(props: ISignProductBoardHtmlProps) {
  // const [gpsLatLng] = useRecoilState(gpsInfo);

  return (
    <>
      <S.Wrapper>
        <form
          onSubmit={props.handleSubmit(
            props.isEdit ? props.updateUsedItem : props.createUsedItem
          )}
        >
          {props.isEdit ? (
            <S.Title>상품 수정하기</S.Title>
          ) : (
            <S.Title>상품 등록하기</S.Title>
          )}
          <S.SubTitle>상품명</S.SubTitle>
          <S.SubTitleInput
            {...props.register("name")}
            placeholder="상품명을 작성해주세요"
          />
          <S.Error>{props.formState.errors.name?.message}</S.Error>
          <S.SubTitle>한줄 요약</S.SubTitle>
          <S.SubTitleInput
            {...props.register("remarks")}
            placeholder="설명을 요약해 입력하세요"
          />
          <S.Error>{props.formState.errors.remarks?.message}</S.Error>
          <S.SubTitle>상품 설명</S.SubTitle>
          {/* <S.TextArea {...props.register("contents")}></S.TextArea> */}
          <S.TextArea>
            <ReactQuill
              onChange={props.onChangeContents}
              style={{ height: "350px" }}
              theme="snow"
              // modules={{ toolbar: "#toolbar" }}
            />
          </S.TextArea>
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
          <S.SubTitle>판매 가격</S.SubTitle>
          <S.SubTitleInput
            {...props.register("price")}
            placeholder="판매 가격을 입력하세요"
          />
          <S.Error>{props.formState.errors.price?.message}</S.Error>
          <S.SubTitle>태그 입력</S.SubTitle>
          <S.SubTitleInput {...props.register("tags")} placeholder="#태그" />
          <S.SubTitle>거래 위치</S.SubTitle>
          <S.BasicRow>
            <S.TradeGpsBox>
              <KakaoMapPage address={props.address} />
            </S.TradeGpsBox>
            <S.TradeGpsBox>
              <S.SubTitle>GPS</S.SubTitle>
              {/* <S.MapInput placeholder="위도(LAT)">{gpsLatLng.Ma}</S.MapInput>
              <S.MapInput placeholder="위도(LAT)">{gpsLatLng.La}</S.MapInput> */}
              <S.SubTitle>주소</S.SubTitle>
              <S.PostBtn type="button" onClick={props.onToggleModal}>
                Address Search
              </S.PostBtn>
              {props.isOpen && (
                <Modal
                  title="우편번호검색"
                  visible={true}
                  onOk={props.onToggleModal}
                  onCancel={props.onToggleModal}
                >
                  <DaumPostcode onComplete={props.handleComplete} autoClose />
                </Modal>
              )}
              <S.ZoneCode
                readOnly
                value={props.zipcode}
                placeholder="Post Num"
              />
              <S.AddressInput
                readOnly
                value={props.address}
                placeholder="address"
              />
              <S.AddressInput
                value={props.addressDetail}
                placeholder="addressDetail"
                onChange={props.onChangeAddressDetail}
              />
            </S.TradeGpsBox>
          </S.BasicRow>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.ProductImg></S.ProductImg>

          <S.BasicRow>
            {props.productImageUrls.map((el: string, index: number) => (
              <ProductImageSignPage
                key={uuidv4()}
                index={index}
                productImageUrl={el}
                onChangeProductImage={props.onChangeProductImage}
              />
            ))}
          </S.BasicRow>
          <S.SubTitle>메인 사진 설정</S.SubTitle>
          <S.BasicRow>
            <S.Radio type="radio"></S.Radio>
            1번
            <S.Radio type="radio"></S.Radio>
            2번
          </S.BasicRow>
          {props.isEdit ? (
            <S.Area>
              <SkyBlueButton
                isActive={props.formState.isValid}
                title={"수정하기"}
              />
            </S.Area>
          ) : (
            <S.Area>
              <SkyBlueButton
                isActive={props.formState.isValid}
                title={"등록하기"}
              />
            </S.Area>
          )}
        </form>
      </S.Wrapper>
    </>
  );
}
