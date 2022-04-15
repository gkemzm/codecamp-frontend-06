import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { gIsChanged } from "../../store";
import { UndoOutlined } from "@ant-design/icons";

interface ISideBarProps {
  isChanged: boolean;
  setIsChanged: any;
}
const Wrapper = styled.div`
  width: 250px;
  height: 1170px;
  margin: 70px 10px 10px 20px;
  background-color: white;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 2px 15px #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Talkr = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  padding-top: 5px;
  margin-top: 10px;
`;
const Img2 = styled.img`
  width: 30px;
  height: 32px;
  margin-right: 5px;
`;

const Div = styled.div`
  padding-top: 12px;
`;

const TextDiv = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 80px;
  margin-top: 30px;
  cursor: pointer;
`;

const RowBox2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 95px;
  margin-top: 30px;
  align-items: center;
  cursor: pointer;
`;

const BackIcon = styled(UndoOutlined)`
  font-size: 30px;
  margin-right: 10px;
  color: blue;
`;

export default function LayouySidebar(props: ISideBarProps) {
  const router = useRouter();

  // const [isChaged, setIsChanged] = useState(false);
  const [isChanged, setIsChanged] = useRecoilState(gIsChanged);
  function moveNew() {
    router.push("/board/new");
    setIsChanged(true);
  }

  function moveMain() {
    router.push("/board");
    setIsChanged(false);
  }

  function prevPage() {
    router.back();
  }
  return (
    <>
      <Wrapper>
        <Talkr>
          <Img src="/toker.PNG"></Img>
          <Div>TALKR</Div>
        </Talkr>
        {isChanged ? (
          <RowBox onClick={moveMain}>
            <Img2 src="/graylist.png" />
            <TextDiv>전체 글 보기</TextDiv>
          </RowBox>
        ) : (
          <RowBox onClick={moveMain}>
            <Img2 src="/bluelist.png" />
            <TextDiv>전체 글 보기</TextDiv>
          </RowBox>
        )}

        {isChanged ? (
          <RowBox2 onClick={moveNew}>
            <Img2 src="/blueplus.png"></Img2>
            <TextDiv>새 글 작성</TextDiv>
          </RowBox2>
        ) : (
          <RowBox2 onClick={moveNew}>
            <Img2 src="/grayplus.png"></Img2>
            <TextDiv>새 글 작성</TextDiv>
          </RowBox2>
        )}

        <RowBox2 onClick={prevPage}>
          <BackIcon />
          <TextDiv>뒤로가기</TextDiv>
        </RowBox2>
      </Wrapper>
    </>
  );
}
