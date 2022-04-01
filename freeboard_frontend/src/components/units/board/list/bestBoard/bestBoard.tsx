import * as S from "./bestBoardStyles";
import { FETCH_BOARDS_OF_THE_BEST } from "./bestBoard.queries";
import { useQuery } from "@apollo/client";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
interface BestPageProps {}

export default function BestPage(props: BestPageProps) {
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  return (
    <S.Wrapper>
      {data?.fetchBoardsOfTheBest.map((el: any) => (
        <S.BestBoardTable key={el._id}>
          <S.Writer>{el.writer}</S.Writer>
          <S.Info>{el.title}</S.Info>
          <S.Info>{el.likeCount}</S.Info>
          <S.Info>{el.createdAt.slice(0, 10)}</S.Info>
        </S.BestBoardTable>
      ))}
    </S.Wrapper>
  );
}
