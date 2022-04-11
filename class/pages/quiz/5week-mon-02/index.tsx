import { useRouter } from "next/router";
export default function QuizMainPage() {
  const router = useRouter();

  const New = () => {
    router.push("/quiz/5week-mon-02/new");
  };
  const Edit = () => {
    router.push("/quiz/5week-mon-02/edit");
  };

  return (
    <>
      <button onClick={New}>new페이지</button>
      <button onClick={Edit}>edit페이지</button>
    </>
  );
}
