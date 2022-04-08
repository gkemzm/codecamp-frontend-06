import styled from "@emotion/styled";
export const MyRow = styled.div`
  display: flex;
`;

export const MyColumn = styled.div`
  width: 25%;
`;

interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
