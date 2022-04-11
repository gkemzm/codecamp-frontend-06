import QuizContainer from "../quiz02container";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { myIsEdit } from "../../../../src/commons/store";
export default function QuizEditPage() {
  const [, setIsEdit] = useRecoilState(myIsEdit);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <QuizContainer />;
}
