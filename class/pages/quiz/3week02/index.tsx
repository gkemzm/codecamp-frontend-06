import { DatePicker, Space } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";

export default function CalenderPage() {
  const [dateString, setDateString] = useState("");

  const onChange = (date: any, dateString: any) => {
    setDateString(dateString);
    console.log(dateString);
  };

  return (
    <div>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
      <div>{dateString}</div>
      <div>{dateString.slice(5, 7)}</div>
    </div>
  );
}
