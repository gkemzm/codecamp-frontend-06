export default function QuizHofPage() {
  const onClickButton = (el: any) => (event: any) => {
    console.log(123);
  };

  return (
    <div>
      <h1>123출력</h1>
      <button key={123} onClick={onClickButton(123)}>
        {123}
      </button>
    </div>
  );
}
