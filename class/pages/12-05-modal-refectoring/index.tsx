import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalCustomPag() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <Button onClick={onToggleModal}>Open Modal</Button>

      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

// ================리펙토링 전 코드=================
// import DaumPostcode from "react-daum-postcode";
// import { useState } from "react";
// import { Modal, Button } from "antd";

// export default function ModalCustomPag() {
//   const [isOpen, setIsOpen] = useState(false);

//   const showModal = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleOk = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleCancel = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleComplete = (data) => {
//     console.log(data);
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <Button onClick={showModal}>Open Modal</Button>

//       {isOpen && (
//         <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
//           <DaumPostcode onComplete={handleComplete} />
//         </Modal>
//       )}
//     </>
//   );
// }
