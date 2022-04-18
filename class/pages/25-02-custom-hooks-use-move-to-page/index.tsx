// import { useRouter } from 'next/router';
// import { useRecoilState } from 'recoil';
// import { visitedPageState } from '../../src/commons/store';
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";
export default function CustomHooksUseMoveToPage() {
  // const router = useRouter()

  // const [, setVisitedPage] = useRecoilState(visitedPageState)

  // const onClickMoveToPage = (path:string) => () => {
  //   setVisitedPage(path); // 이동하기전 현재 페이지의 패스(경로) 지정
  //   router.push(path)
  // }

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <button onClick={onClickMoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </>
  );
}
