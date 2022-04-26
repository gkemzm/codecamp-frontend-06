import { KeyboardEvent, useState } from "react";

const HashTagPage = () => {
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState<string[]>([]);

  const onKeyUphash = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      event.keyCode === 32 &&
      (event.target as HTMLInputElement).value !== " "
    ) {
      setHashArr([...hashArr, "#" + (event.target as HTMLInputElement).value]);
      (event.target as HTMLInputElement).value = "";
    }
  };
  return (
    <>
      <div>
        <span>
          {hashArr.map((el: any, idx: any) => (
            <span key={idx}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUphash} />
      </div>
    </>
  );
};
export default HashTagPage;
