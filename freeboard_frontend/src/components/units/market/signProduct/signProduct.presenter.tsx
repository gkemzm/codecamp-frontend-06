import * as S from "./signProduct.styles";
import SkyBlueButton from "../../../commons/buttons/skyBlueButton/index";
import { ISignProductBoardHtmlProps } from "./signProduct.types";
export default function SignProductHTML(props: ISignProductBoardHtmlProps) {
  return (
    <>
      <S.Wrapper>
        <form onSubmit={props.handleSubmit(props.createUsedItem)}>
          <S.Title>상품 등록하기</S.Title>
          <S.SubTitle>상품명</S.SubTitle>
          <S.SubTitleInput
            {...props.register("name")}
            placeholder="상품명을 작성해주세요"
          />
          <S.SubTitle>한줄 요약</S.SubTitle>
          <S.SubTitleInput
            {...props.register("remarks")}
            placeholder="설명을 입력하세요"
          />
          <S.SubTitle>상품 설명</S.SubTitle>
          <S.TextArea {...props.register("contents")}></S.TextArea>
          <S.SubTitle>판매 가격</S.SubTitle>
          <S.SubTitleInput
            {...props.register("price")}
            placeholder="판매 가격을 입력하세요"
          />
          <S.SubTitle>태그 입력</S.SubTitle>
          <S.SubTitleInput {...props.register("tags")} placeholder="#태그" />
          <S.SubTitle>거래 위치</S.SubTitle>
          <S.BasicRow>
            <S.TradeGpsBox></S.TradeGpsBox>
            <S.TradeGpsBox>
              <S.SubTitle>GPS</S.SubTitle>
              <S.MapButton>위도(LAT)</S.MapButton>
              <S.MapButton>경도(LNG)</S.MapButton>
              <S.SubTitle>주소</S.SubTitle>
              <S.AddressInput />
              <S.AddressInput />
            </S.TradeGpsBox>
          </S.BasicRow>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.ProductImg></S.ProductImg>
          <S.SubTitle>메인 사진 설정</S.SubTitle>
          <S.BasicRow>
            <S.Radio type="radio"></S.Radio>
            1번
            <S.Radio type="radio"></S.Radio>
            2번
          </S.BasicRow>
          <S.Area>
            <SkyBlueButton
              isActive={props.formState.isValid}
              title={"등록하기"}
            />
          </S.Area>
        </form>
      </S.Wrapper>
    </>
  );
}
