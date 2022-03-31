import styled from "@emotion/styled";

export interface IdisplayOnOff {
  isActive: boolean;
}

export interface IdisplayOnOff2 {
  isActive2: boolean;
}

export interface BtnColor {
  btnColor: String;
  id: String;
}

export const ListButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  /* background-color: #ede4e4; */
  background-color: ${(props: BtnColor) =>
    props.btnColor === props.id ? "#BDBDBD" : "#ede4e4"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    background-color: #bdbdbd;
    border-color: #bdbdbd;
  }
`;

export const Wrapper = styled.div`
  width: 1000px;
  height: 50px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 1px dotted black;
`;

export const Btn = styled.div`
  display: ${(props: IdisplayOnOff) => (props.isActive ? "flex" : "none")};
`;

export const Btn2 = styled.div`
  display: ${(props: IdisplayOnOff2) => (props.isActive2 ? "flex" : "none")};
`;
