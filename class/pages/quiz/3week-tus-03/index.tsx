import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalMapPag() {
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState("");

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setRegion(data.address);
  };

  return (
    <>
      <Button onClick={onToggleModal}>모달 열기!!</Button>
      <div>{region}</div>
      {isOpen && (
        <Modal
          title="게시글등록"
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={handleComplete} autoClose />
          게시글이 등록되었습니다.
        </Modal>
      )}
    </>
  );
}
