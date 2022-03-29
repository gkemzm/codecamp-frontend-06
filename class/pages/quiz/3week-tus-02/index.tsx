import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalMapPag() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onToggleModal}>모달 열기!!</Button>
      {isOpen && (
        <Modal
          title="게시글등록"
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          게시글이 등록되었습니다.
        </Modal>
      )}
    </>
  );
}
