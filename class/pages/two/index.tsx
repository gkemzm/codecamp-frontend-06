import styled from "@emotion/styled";

export default function LayoutFooter() {
  const Wrapper = styled.div`
    background-color: gray;
    height: 50px;
    display: flex;
  `;

  return (
    <>
      <Wrapper>three 영역입니다.</Wrapper>
    </>
  );
}
