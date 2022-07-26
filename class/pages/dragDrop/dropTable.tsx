import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";

interface data {
  el: any;
  index: any;
}
const Wrapper = styled.div`
  box-shadow: 0px 3px 15px black;
  margin: 10px 0px;
  padding: 10px 25px;
  border-radius: 20px;
  width: 50rem;
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 30px;
  /* border-bottom: 1px solid black; */
  padding: 10px 20px;
  margin: 10px 0px;
  :hover {
    background-color: gray;
  }
`;

const BasicRow = styled.div`
  display: flex;
`;
export default function DropTable(props: data) {
  console.log(props.el);
  return (
    <>
      <Draggable draggableId={props.el._id} index={props.index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <Wrapper>{props.el.writer}</Wrapper>
          </div>
        )}
      </Draggable>
    </>
  );
}
