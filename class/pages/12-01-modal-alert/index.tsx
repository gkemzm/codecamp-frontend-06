import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({ content: "게시물 등록에 성공했습니다!!" });
  };

  const onClickFailButton = () => {
    Modal.error({ content: "비밀번호가 틀렸습니다!!" });
  };

  return (
    <>
      <button onClick={onClickSuccessButton}>성공했을때!!</button>
      <button onClick={onClickFailButton}>실패했을때!!</button>
    </>
  );
}
