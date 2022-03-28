import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(PlayCircleOutlined)`
  font-size: 500px;
  color: red;
`;
export default function LibraryIconPage() {
  return (
    <div>
      {/* <PlayCircleOutlined /> */}
      <MyIcon />
    </div>
  );
}

// 아이콘에 id 사용은 못한다라 생각한다.
// 나중에 배운다.
// ant design에서 계속 새로운 태그를만들기에 충돌이 난다.
// 변형해서 사용시 MyIcon처럼 사용
