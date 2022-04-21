import { useRouter } from "next/router";
export default function QuizCompletePAge() {
  const router = useRouter();

  const MoveQuizLoading = () => {
    router.push("http://localhost:3000/quiz/6week-thu/login");
  };
  return (
    <>
      <div>축하합니다. 결제가 완료 됬습니다.!</div>
      <button onClick={MoveQuizLoading}>다른상품으로 이동</button>
    </>
  );
}
