import styled from "@emotion/styled";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;
export default function BoardCommentItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <div key={props.el._id}>
      {isEdit === false && (
        <MyRow>
          <MyColumn>
            <input type="checkbox"></input>
          </MyColumn>
          <MyColumn>{props.el._id}</MyColumn>
          <MyColumn>{props.el.writer}</MyColumn>
          <MyColumn>{props.el.title}</MyColumn>
          <button onClick={onClickEdit}></button>
        </MyRow>
      )}
      {isEdit === true && <div>수정하기 화면입니다.</div>}
      {/* 인덱스의 개념이 필요 없어짐 */}
    </div>
  );
}
