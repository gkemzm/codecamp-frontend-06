import * as S from "./bestBoardStyles";
import { FETCH_BOARDS_OF_THE_BEST } from "./bestBoard.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { MouseEvent } from "react";
import { IBoard } from "../../../../../../../class/src/commons/types/generated/types";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../../commons/types/generated/types";
interface BestPageProps {}

export default function BestPage(props: BestPageProps) {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS_OF_THE_BEST);
  const MoveBestPage = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/board/${(event?.target as HTMLDivElement).id}`);
    console.log(data);
  };

  return (
    <S.Wrapper>
      {data?.fetchBoardsOfTheBest.map((el: IBoard, index) => (
        <S.BestBoardTable key={el._id}>
          <S.Writer onClick={MoveBestPage} id={el._id}>
            {el.writer}
          </S.Writer>
          <S.BoardImg src={`https://storage.googleapis.com/${el.images}`} />
          <S.Info>{el.title}</S.Info>
          <S.BasicRow>
            <S.LikeIcon />
            <S.Info>{el.likeCount}</S.Info>
            <S.Info>{el.createdAt.slice(0, 10)}</S.Info>
          </S.BasicRow>
        </S.BestBoardTable>
      ))}
    </S.Wrapper>
  );
}
