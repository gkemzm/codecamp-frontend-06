import styled from "@emotion/styled";

interface IProps {
  isMatched: boolean;
}

export const MyRow = styled.div`
  display: flex;
`;

export const MyColumn = styled.div`
  width: 25%;
`;

export const Wrapper = styled.div`
  color: skyblue;
  font-size: 17px;
  font-weight: 700;
  padding: 10px 0px 20px 0px;
`;
export const SearchInput = styled.input`
  background-color: white;
  border: none;
  box-shadow: 0px 4px 15px skyblue;
  border-radius: 10px;
  margin-left: 10px;
  color: black;
`;

export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
