import { Rate } from "antd";
import { useState } from "react";
import styled from "@emotion/styled";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: any) => {
    setValue(value);
    alert(`${value}점`);
  };

  const Area = styled.div`
    font-size: 18px;
    font-weight: 700;
  `;
  return (
    <div>
      <div>
        <Rate onChange={handleChange} value={value} />
      </div>
      <Area>{value}</Area>
    </div>
  );
}
