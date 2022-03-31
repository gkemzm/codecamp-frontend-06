// import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

// const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int) {
//     fetchBoards(page: $page) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;
const MyRow = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;

const MyColumn = styled.div`
  display: flex;
  flex-direction: row;
`;
export default function Board(props: any) {
  //   const { data, refetch } = useQuery(FETCH_BOARDS);
  return (
    <div>
      {props.data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          {/* <MyColumn>{el._id}</MyColumn> */}
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
