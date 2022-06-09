import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

interface IdataProps {
  index: any;
  DataArray: any;
  Name: any;
  setPage: any;
}

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;
const Wrapper = styled.div`
  box-shadow: 0px 3px 15px black;
  margin: 10px 10px;
  padding: 10px 25px;
  border-radius: 20px;
  width: 30rem;
`;

// const MyRow = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const MyColumn = styled.div`
//   display: flex;
//   border: 1px solid black;
//   border-radius: 30px;
//   /* border-bottom: 1px solid black; */
//   padding: 10px 20px;
//   margin: 10px 0px;
//   :hover {
//     background-color: gray;
//   }
// `;
// const BasicRow = styled.div`
//   display: flex;
// `;

export default function DropTable(props: IdataProps) {
  const { data } = useQuery(FETCH_BOARDS, {
    variables: {
      search: ".",
      page: props.Name,
    },
  });
  // useEffect(() => {
  //   props.setPage(props.Name);
  // }, [props.DataArray]);

  // console.log(props.DataArray, "ㅇㅇㅇㅇdㅇㅇㅇㅇㅇㅇㅇㅇㅇ");

  const [dataArray, setDataArray] = useState(data?.fetchBoards);
  // console.log(props.DataArray, `이거만사용${props.Name}`);
  return (
    <div>
      <h1>{props.Name}일차</h1>
      {data?.fetchBoards.map((el: any, index: any) => (
        <Draggable
          key={String(el._id)}
          draggableId={String(el._id)}
          index={index}
        >
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
            >
              <Wrapper>{el.writer}</Wrapper>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}
