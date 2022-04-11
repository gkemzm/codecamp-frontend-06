export default function Presenter(Info: any) {
  return (
    <>
      <div>이름 : {Info.child}</div>
      <div>나이 : {Info.age}</div>
    </>
  );
}
