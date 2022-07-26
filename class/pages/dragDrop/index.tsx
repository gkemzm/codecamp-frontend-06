import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import DropTable from "./dropTable";
// 게시글 상세
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
  padding: 10px 25px;
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 300px;
  border: 1px solid black;
  border-radius: 30px;
  /* border-bottom: 1px solid black; */
  padding: 10px 20px;
  margin: 10px 5px;
  :hover {
    background-color: gray;
  }
`;

const BasicRow = styled.div`
  display: flex;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [TotalDays, setTotalDays] = useState(5);
  const [DataArray, setDataArray] = useState([]);
  const [boardData, setBoardData] = useState([[]]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [TitleData, setTitleData] = useState({});
  useEffect(() => {
    setBoardData(data?.fetchBoards);
    setTitleData(data?.fetchBoards);
    // console.log(TitleData, "titleData");
  }, [data]);

  useEffect(() => {
    setTimeout(function () {
      setIsDataLoading((prev) => !prev);
    }, 300);
  }, []);

  useEffect(() => {
    getTripTitleData();
    // sortTripData();
  }, [isDataLoading]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const getTripTitleData = () => {
    const resultArr: any = [];
    if (TotalDays) {
      new Array(TotalDays).fill(0).forEach((_) => {
        resultArr.push(TitleData);
      });
    }
    setDataArray(resultArr);
  };
  console.log(DataArray, "배열");

  const handleDragEnd = async (result: any) => {
    console.log(result, "함수 초기 결과값");
    if (!result.destination) {
      return;
    }
    // const items = [...data?.fetchBoards];
    // console.log(items, "아이템")
    // const [reorderedItem] = items.splice(result?.source.index, 1);
    // items.splice(result?.destination.index, 0, reorderedItem);
    // setBoardData(items)
    // if(event.target.value)
    const items = [...boardData];
    console.log(items, "아이템리스트");
    const [reorderedItem] = items.splice(result?.source?.index, 1);
    console.log([reorderedItem], "재사용할 아이템");
    items.splice(Number(result?.destination?.droppableId), 0, reorderedItem);
    setBoardData(items);
    // boardData를 업데이트하는 api가 들어오면 된다.
  };

  return (
    <Wrapper>
      {isLoading && (
        <DragDropContext onDragEnd={handleDragEnd}>
          {boardData?.map((el: any, index: number) => (
            <Droppable key={el._id} droppableId={String(index)}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  // style={{backgroundColor: snapshot.isDraggingOver ? 'white' : 'grey'}}
                >
                  {/* <BasicRow>
                    <Draggable draggableId={el.writer} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <MyRow>
                            <MyColumn>{el.writer}</MyColumn>
                          </MyRow>
                        </div>
                      )}
                    </Draggable>
                  </BasicRow>
                  {provided.placeholder} */}
                  <DropTable el={el} index={index} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      )}
    </Wrapper>
  );
}
