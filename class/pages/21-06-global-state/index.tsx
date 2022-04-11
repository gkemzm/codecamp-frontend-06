import GlobalStateContainer from "../../src/components/units/21-global-state/BoardWrite.container";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
export default function GlobalStatePage() {
  // 1. 기존에는 isEdit={props.isEdit} 방법으로 드릴링을 했다.
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);
  return (
    <>
      <GlobalStateContainer />
    </>
  );
}
