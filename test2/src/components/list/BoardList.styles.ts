import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1210px;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  width: 1160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 10px 15px #e5e5e5;
  margin-bottom: 30px;
  height: 52px;
  line-height: 52px;

  :hover {
    color: blue;
  }
`;

export const Row2 = styled.div`
  width: 1160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 10px 15px #e5e5e5;
  margin-bottom: 30px;
  height: 52px;
  line-height: 52px;
  margin-right: 50px;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  margin-right: 20px;
  color: gray;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 20%;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 500;
  color: gray;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 20%;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  box-shadow: 0px 4px 20px skyblue;
  border: 1px solid skyblue;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
