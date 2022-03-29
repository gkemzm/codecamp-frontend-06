import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

export default function ModalCustomPag() {
  const [region, setRegion] = useState("");

  const handleComplete = (data: any) => {
    console.log(data);
    setRegion(data.address);
  };

  return (
    <>
      <>
        <DaumPostcode onComplete={handleComplete} autoClose />
        <div>{region}</div>
      </>
    </>
  );
}
