/* eslint-disable react/react-in-jsx-scope */
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import * as S from "./styles";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const MoveFreeBoard = () => {
    router.push("/board");
  };
  return (
    <S.Wrapper>
      <S.ShadowBox onClick={MoveFreeBoard}>
        <S.ProfileOutLine />
        <S.BasicBox>Free Board</S.BasicBox>
      </S.ShadowBox>

      <S.ShadowBox2>
        <S.BasicBox>Free Market</S.BasicBox>
        <S.MarketIcon />
      </S.ShadowBox2>
    </S.Wrapper>
  );
}
