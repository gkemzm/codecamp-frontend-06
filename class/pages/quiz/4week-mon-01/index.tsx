import { useRef, useState, useEffect } from "react"; // Component 사용시 컴포넌트 기능을 가진 클래스
import { useRouter } from "next/router";

export default function CounterPage() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const [isChange, setIsChange] = useState(false);
  const [isWarning, setIsWarning] = useState("");

  useEffect(() => {
    alert("Rendered!");
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    return () => {
      if (isChange === true) {
        setIsWarning("Changed!!");
      } else {
        setIsWarning("Changed!!!!!!!!!!!");
      }
    };
  }, [isChange]);

  useEffect(() => {
    return () => {
      alert("Bye!!!");
    };
  }, []);

  const onClickChange = () => {
    if (isChange === false) {
      setIsChange(true);
    } else if (isChange === true) {
      setIsChange(false);
    }
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <div>{isWarning}</div>
    </div>
  );
}
