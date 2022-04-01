import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
  width: 1000px;
  margin: auto;
  border: 1px dotted black;
  padding-left: 80px;
  justify-content: space-between;
`;

const MyColumn = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export default function List1(props: any) {
  return (
    <div>
      {props.data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
