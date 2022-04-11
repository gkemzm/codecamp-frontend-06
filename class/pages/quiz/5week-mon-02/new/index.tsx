import QuizContainer from "../quiz02container";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { myIsEdit } from "../../../../src/commons/store";

export default function QuizNewPage() {
  const [, setIsEdit] = useRecoilState(myIsEdit);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return (
    <>
      <QuizContainer />
    </>
  );
}
