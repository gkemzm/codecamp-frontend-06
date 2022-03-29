import { useState, ChangeEvent } from "react";
import { Modal, Button } from "antd";

export default function ModalCustomPag() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
    console.log(password);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호입력: <input type={"password"} onChange={onChangePassword} />
      </Modal>
    </>
  );
}

// export default App;
