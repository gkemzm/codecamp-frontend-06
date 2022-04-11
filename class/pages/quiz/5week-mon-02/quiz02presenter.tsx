import { useRecoilState } from "recoil";
import { myIsEdit } from "../../../src/commons/store";
export default function QuizPresenter(props: any) {
  const [isEdit] = useRecoilState(myIsEdit);
  return (
    <>
      <div>{isEdit ? "수정하기" : "등록하기"}</div>
    </>
  );
}
